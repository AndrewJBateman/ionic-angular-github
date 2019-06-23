import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class GithubService {

	constructor(private http: HttpClient ) { }

/* 	searchData(username: string): Observable<any> {
		return this.http.get(`https://api.github.com/users/${username}/repos`)
		.pipe(
			map(results => {
				console.log('RAW: ', results);
				return results['Search'];
			})
		);
	} */
	getRepos(username) {
		const repos = this.http.get(`https://api.github.com/users/${username}/repos`);
		return repos;
	}
}
