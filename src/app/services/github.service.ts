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

  /* 	searchData(username: string): Observable<any> {
		return this.http.get(`https://api.github.com/users/${username}/repos`)
		.pipe(
			map(results => {
				console.log('RAW: ', results);
				return results['Search'];
			})
		);
	} */
  getRepos(username: string): Observable<any> {
		const returns = this.http.get(`https://api.github.com/users/${username}/repos`);
		console.log(returns.subscribe((x) => console.log(x)));
		console.log('returns type', typeof(returns));
		return returns;
  }
}
