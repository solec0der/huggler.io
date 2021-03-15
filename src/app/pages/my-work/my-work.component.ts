import { Component, OnInit } from '@angular/core';
import { Repository } from '../../shared/model/repository';
import { GithubService } from '../../shared/services/github.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
  public repositories!: Repository[];
  private readonly includedRepositories = [
    'iact-check',
    'omni-board',
    'huggler.io',
    'balloon-mail',
    'dotfiles',
    'mac-setup-script',
  ];

  constructor(private readonly githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .getRepositoriesByUsername('solec0der')
      .subscribe((repositories) => {
        this.repositories = repositories.filter((repository) =>
          this.includedRepositories.includes(repository.name)
        );
      });
  }
}
