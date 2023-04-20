import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Repo } from "../pages/user-search/models/repo";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepos(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}
