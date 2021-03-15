import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currentIndex = 0;

  public readonly availableWords = ['code', 'space', 'tech'];

  constructor() {}

  ngOnInit(): void {
    this.cycleThroughWords();
  }

  public cycleThroughWords(): void {
    setInterval(() => {
      if (this.currentIndex + 1 >= this.availableWords.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }, 5000);
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
