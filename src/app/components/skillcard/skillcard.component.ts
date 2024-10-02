import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-skillcard',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './skillcard.component.html',
  styleUrl: './skillcard.component.css'
})
export class SkillcardComponent {
  @Input() heading: string = '';
  @Input() skills: {icon: any, skill: string}[] = [];
}
