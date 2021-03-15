import { Injectable } from '@angular/core';
import { SUBJECTS } from '../model/subjects';
import { BehaviorSubject, Observable } from 'rxjs';
import { Subject } from '../model/subject';

@Injectable({
  providedIn: 'root',
})
export class CurrentSubjectService {
  private readonly subjects = SUBJECTS;
  private activeSubject = new BehaviorSubject<Subject>(this.subjects[0]);
  private currentIndex = 0;

  constructor() {
    this.cycleThroughSubjects();
  }

  public getActiveSubject(): Observable<Subject> {
    return this.activeSubject.asObservable();
  }

  private cycleThroughSubjects(): void {
    setInterval(() => {
      if (this.currentIndex + 1 >= this.subjects.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.activeSubject.next(this.subjects[this.currentIndex]);
    }, 5000);
  }
}
