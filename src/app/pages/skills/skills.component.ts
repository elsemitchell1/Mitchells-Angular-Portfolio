import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillcardComponent } from "../../components/skillcard/skillcard.component";
import { faCcStripe, faCss3, faGit, faHtml5, faJava, faJs, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBiohazard, faBrain, faBusinessTime, faC, faChalkboardUser, faCircleExclamation, faCommentDots, faDatabase, faDotCircle, faFire, faPeopleGroup, faS, faServer, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillcardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    {
      heading: 'Frontend',
      skills: [
        { icon: faReact, skill: 'React JS' },
        { icon: faBiohazard, skill: 'Redux' },
        { icon: faWind, skill: 'Tailwindcss' },
        { icon: faHtml5, skill: 'HTML' },
        { icon: faCss3, skill: 'CSS' },
        { icon: faJs, skill: 'JavaScript' },
        { icon: faJs, skill: 'JQuery' },
      ]
    },
    {
      heading: 'Backend',
      skills: [
        { icon: faNode, skill: 'Node JS' },
        { icon: faServer, skill: 'Express JS' },
        { icon: faDatabase, skill: 'MySQL' },
        { icon: faFire, skill: 'Firebase' },
        { icon: faS, skill: 'Sanity.io' },
        { icon: faDatabase, skill: 'MongoDB' },
        { icon: faCcStripe, skill: 'Stripe' },
      ]
    },
    {
      heading: 'Languages',
      skills: [
        { icon: faHtml5, skill: 'HTML' },
        { icon: faCss3, skill: 'CSS' },
        { icon: faJs, skill: 'JavaScript' },
        { icon: faPython, skill: 'Python' },
        { icon: faC, skill: 'C++' },
        { icon: faC, skill: 'C#' },
        { icon: faJava, skill: 'Java' },
        { icon: faDotCircle, skill: 'Dot.Net' },
        { icon: faGit, skill: 'Git' },
      ]
    },
    {
      heading: 'Soft Skills',
      skills: [
        { icon: faCircleExclamation, skill: 'Problem Solving' },
        { icon: faChalkboardUser, skill: 'Fast Learner' },
        { icon: faBrain, skill: 'Critical Thinking' },
        { icon: faCommentDots, skill: 'Communication' },
        { icon: faPeopleGroup, skill: 'Teamwork' },
        { icon: faBusinessTime, skill: 'Time Management' },
      ]
    }
  ];
}
