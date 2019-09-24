import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
   }

   public findAll(): Observable<User[]> {
     return this.http.get<User[]>(this.usersUrl);
   }

   public findUser(id: number): Observable<User> {
     return this.http.get<User>(this.usersUrl + '/' + id);
   }

   public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public deleteUser(id: number){
    return this.http.delete(this.usersUrl + '/' + id);
  }

  public updateUser(user: User){
    return this.http.put<User>(this.usersUrl, user);
  }
}
