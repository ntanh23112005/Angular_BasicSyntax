import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';

// Query lấy danh sách bài viết
const GET_POSTS = gql`
  query {
    posts(options: { paginate: { page: 1, limit: 5 } }) {
      data {
        id
        title
        body
      }
    }
  }
`;

// Mutation thêm bài viết
const CREATE_POST = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

// Mutation cập nhật bài viết
const UPDATE_POST = gql`
  mutation ($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

// Mutation xóa bài viết
const DELETE_POST = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;

@Component({
  selector: 'app-post',
  imports: [CommonModule, FormsModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit {
  posts: any[] = [];
  newPost = { title: '', body: '' };
  editingPost: any = null;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.apollo
      .watchQuery<any>({
        query: GET_POSTS,
        fetchPolicy: 'network-only', // Không sử dụng cache
      })
      .valueChanges.subscribe(({ data }) => {
        this.posts = data.posts.data;
      });
  }

  addPost() {
    if (!this.newPost.title || !this.newPost.body) return;

    this.apollo
      .mutate({
        mutation: CREATE_POST,
        variables: {
          input: {
            title: this.newPost.title,
            body: this.newPost.body,
          },
        },
      })
      .subscribe({
        next: () => {
          this.newPost = { title: '', body: '' };
          this.loadPosts();
        },
        error: (err) => console.error('Lỗi khi thêm bài viết', err),
      });
  }

  startEdit(post: any) {
    this.editingPost = { ...post };
  }

  updatePost() {
    if (!this.editingPost) return;

    this.apollo
      .mutate({
        mutation: UPDATE_POST,
        variables: {
          id: this.editingPost.id,
          input: {
            title: this.editingPost.title,
            body: this.editingPost.body,
          },
        },
      })
      .subscribe({
        next: () => {
          this.editingPost = null;
          this.loadPosts();
        },
        error: (err) => console.error('Lỗi khi cập nhật bài viết', err),
      });
  }

  deletePost(id: string) {
    if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
      this.apollo
        .mutate({
          mutation: DELETE_POST,
          variables: { id },
        })
        .subscribe({
          next: () => this.loadPosts(),
          error: (err) => console.error('Lỗi khi xóa bài viết', err),
        });
    }
  }

  cancelEdit() {
    this.editingPost = null;
  }
}
