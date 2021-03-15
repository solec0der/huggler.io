import { Component, OnInit } from '@angular/core';
import { Subject } from '../../../shared/model/subject';
import { CurrentSubjectService } from '../../../shared/serviecs/current-subject.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public currentSubject!: Subject;
  public isInitialContentChange = true;

  public particlesUrl = '../../../../assets/particles.json';

  constructor(private readonly currentSubjectService: CurrentSubjectService) {}

  ngOnInit(): void {
    this.currentSubjectService
      .getActiveSubject()
      .subscribe((currentSubject) => {
        const subjectImage = document.getElementById('subject-image');

        if (!this.isInitialContentChange) {
          subjectImage?.classList.add('content-swap-animation');
        } else {
          this.currentSubject = currentSubject;
        }
        setTimeout(() => {
          this.currentSubject = currentSubject;
          this.isInitialContentChange = false;
        }, 500);
      });
  }
}
