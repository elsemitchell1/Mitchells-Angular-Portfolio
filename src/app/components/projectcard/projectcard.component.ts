import { Component, Input } from '@angular/core';
import { CommentsComponent } from "../comments/comments.component";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-projectcard',
  standalone: true,
  imports: [CommonModule, CommentsComponent, FontAwesomeModule],
  templateUrl: './projectcard.component.html',
  styleUrl: './projectcard.component.css'
})
export class ProjectcardComponent {
  @Input() project: any;
}
