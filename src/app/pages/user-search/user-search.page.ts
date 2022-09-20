import { GithubService } from "./../../services/github.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Repo } from "./models/repo";

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.page.html",
  styleUrls: ["./user-search.page.scss"],
  providers: [GithubService],
})
export class UserSearchPage implements OnInit {
  results: Observable<any>;
  public repos$: Observable<Repo[]>;
  public username: string;

  constructor(private githubService: GithubService) {}

  ngOnInit() {}

  getRepos(): void {
    this.repos$ = this.githubService.getRepos(this.username);
    console.log(this.repos$.subscribe((x) => console.log(x)));
  }
}
