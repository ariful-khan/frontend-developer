import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GitRepoService {
  private _getUserReposEndPoint = 'https://api.github.com/users/neconest/repos';
  constructor(private _http: Http) { }

  getRepos() {
      return this._http.get(this._getUserReposEndPoint)
          .map(res => res.json());
  }
}
