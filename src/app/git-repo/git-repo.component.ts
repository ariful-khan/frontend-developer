import { Component, OnInit } from '@angular/core';
import { GitRepoService } from './git-repo.service';

@Component({
  selector: 'app-git-repo',
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.css']
})

export class GitRepoComponent implements OnInit {
  repos: Array<Object> = [];

  constructor(private _gitRepoService: GitRepoService) { }
  ngOnInit() {
    this._gitRepoService.getRepos()
        .subscribe(repo => this.repos.push(repo));
  }
}
