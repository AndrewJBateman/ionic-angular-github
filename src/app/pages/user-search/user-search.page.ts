import { GithubService } from "./../../services/github.service";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Repo } from "./models/repo";

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.page.html",
  styleUrls: ["./user-search.page.scss"],
  providers: [GithubService],
})
export class UserSearchPage {
  results: Observable<any>;
  public repos$: Observable<Repo[]>;
  public username: string;

  constructor(private githubService: GithubService) {}

  // Input username to search for Github repos
  handleInput(event: CustomEvent): void {
    this.username = event.detail.value.toLowerCase();
    this.repos$ = this.githubService.getRepos(this.username);
  }
}
