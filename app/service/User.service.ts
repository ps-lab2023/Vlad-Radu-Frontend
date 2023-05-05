import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { User } from "../model/User";

@Injectable({
  providedIn: "root"
})

export class UserService {

  baseUrl: string = "http://localhost:8081/user";

  constructor(private httpClient: HttpClient) {
  }

  addUser(user: User) {
    return this.httpClient.post(this.baseUrl + "/addUser", user);
  }

  addUsers(users: User[]) {
    return this.httpClient.post(this.baseUrl + "/addUsers", users);
  }

  getAllUsers() {
    return this.httpClient.get<User[]>(this.baseUrl + "/allUsers");
  }

  getUserById(id: number) {
    return this.httpClient.get<User>(this.baseUrl + "/byId/" + id);
  }

  updateUser(user: User) {
    return this.httpClient.put(this.baseUrl + "/updateUser", user);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(this.baseUrl + "/deleteUser/" + id);
  }

  addMovieToFavoriteList(userId: number, movieId: number) {
    return this.httpClient.post(this.baseUrl + "/addMovieToFavoriteList/" + userId + "/" + movieId, null);
  }

  removeMovieFromFavoriteList(userId: number, movieId: number) {
    return this.httpClient.delete(this.baseUrl + "/removeMovieFromFavoriteList/" + userId + "/" + movieId);
  }

  addMoiveToWatchList(userId: number, movieId: number) {
    return this.httpClient.post(this.baseUrl + "/addMovieToWatchList/" + userId + "/" + movieId, null);
  }

  removeMovieFromWatchList(userId: number, movieId: number) {
    return this.httpClient.delete(this.baseUrl + "/removeMovieFromWatchList/" + userId + "/" + movieId);
  }
}
