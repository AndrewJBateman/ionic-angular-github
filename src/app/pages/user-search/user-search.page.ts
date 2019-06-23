import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-user-search',
	templateUrl: './user-search.page.html',
	styleUrls: ['./user-search.page.scss'],
	providers: [GithubService]
})
export class UserSearchPage implements OnInit {

	results: Observable<any>;
	public repoList;
	public username;

	constructor(private githubService: GithubService) { }

	ngOnInit() {
	}

	getRepos() {
		this.githubService.getRepos(this.username).subscribe(
			data => {
				this.repoList = data;
			},
			err => console.log(err),
			() => console.log('list of repos is returned')
		);
	}

}
