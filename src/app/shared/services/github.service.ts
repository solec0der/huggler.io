import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../model/repository';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly baseUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {}

  public getRepositoriesByUsername(username: string): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(
      this.baseUrl + '/users/' + username + '/repos'
    );
  }
}
