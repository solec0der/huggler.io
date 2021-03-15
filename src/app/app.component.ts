import { Component, OnInit } from '@angular/core';
import { CurrentSubjectService } from './shared/services/current-subject.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public particlesUrl = '../../../../assets/particles.json';

  constructor(
    private readonly title: Title,
    private readonly currentSubjectService: CurrentSubjectService
  ) {}

  ngOnInit(): void {
    this.currentSubjectService
      .getActiveSubject()
      .subscribe((currentSubject) => {
        this.title.setTitle('huggler.io | ' + currentSubject.displayName);
      });
  }
}
