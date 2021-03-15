import { Component, OnInit } from '@angular/core';
import { CurrentSubjectService } from '../services/current-subject.service';
import { Subject } from '../model/subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currentSubject!: Subject;
  public isAnimatingContentChange = false;
  public isInitialContentChange = true;

  constructor(private readonly currentSubjectService: CurrentSubjectService) {}

  ngOnInit(): void {
    this.currentSubjectService
      .getActiveSubject()
      .subscribe((currentSubject) => {
        if (!this.isInitialContentChange) {
          this.isAnimatingContentChange = true;
        }
        setTimeout(() => {
          this.currentSubject = currentSubject;
          this.isInitialContentChange = false;
        }, 500);
      });
  }

  public scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  public openLink(link: string): void {
    window.open(link, '_blank');
  }
}
