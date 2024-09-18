import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule]
})
export class HeroComponent implements OnInit {
  @Input() heading!: string;
  @Input() secondheading!: string[];
  @Input() info!: string;
  @Input() image!: string;
  @Input() reverse!: boolean;

  typedText = '';
  currentIndex = 0;
  phraseIndex = 0;

  ngOnInit(): void {
    if (this.secondheading) {
      this.startTyping();
    }
  }

  startTyping() {
    const interval = setInterval(() => {
      const text = this.secondheading[this.phraseIndex];
      this.typedText = text.substring(0, this.currentIndex + 1);
      this.currentIndex += 1;

      if (this.currentIndex === text.length) {
        setTimeout(() => {
          this.phraseIndex = (this.phraseIndex + 1) % this.secondheading.length;
          this.currentIndex = 0;
        }, 500);
      }
    }, 200);
  }
}
