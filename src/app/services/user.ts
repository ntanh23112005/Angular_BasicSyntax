import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userService {
  private API_URL = 'https://api.example.com/users';

  constructor(private http: HttpClient) {}

  //  GET
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL).pipe(
      retry({ count: 3, delay: 1000 }) // thử lại 3 lần, mỗi lần cách nhau 1 giây
    );
  }

  // POST
  addNewUser(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL, user);
  }

  // PUT
  updateUser(user: User): Observable<User> {
    const API_URL_UPDATE = `${this.API_URL}/${user.id}`;
    return this.http.put<User>(API_URL_UPDATE, user);
  }

  // DELETE
  deleteUser(id: number): Observable<void> {
    const API_URL_DELETE = `${this.API_URL}/${id}`;
    return this.http.delete<void>(API_URL_DELETE);
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
}
