import { Component } from '@angular/core';
import { ProjectcardComponent } from "../../components/projectcard/projectcard.component";
import { faCcStripe, faCss3, faHtml5, faJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBiohazard, faDatabase, faFire, faS, faWind } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectcardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: "Mitchell's Portfolio",
      date: "June 2024",
      info: "This portfolio website showcases my projects. It features a sleek, responsive design, highlighting my expertise in React, Node.js, and MongoDB.",
      skills: [
          {
            icon: faReact,
            skill: 'React JS',
          },
          {
            icon: faWind,
            skill: 'Tailwindcss',
          },
          {
            icon: faNode,
            skill: 'Node JS',
          },
          {
            icon: faDatabase,
            skill: 'MongoDB',
          },
          {
            icon: faHtml5,
            skill: 'HTML',
          },
          {
            icon: faCss3,
            skill: 'CSS',
          },
          {
            icon: faJs,
            skill: 'JavaScript',
          },
        ],
      link: 'https://elsemitchell1.github.io/MitchellsPortfolio/',
      image: 'assets/images/Portfolio.png',
    },
    {
      name: "Just Natural Paws",
      date: "July 2023 - May 2024",
      info: "The Just Natural Paws website was built from scratch to provide an online presence and a place to purchase products.",
      skills: [
          {
            icon: faReact,
            skill: 'React JS',
          },
          {
            icon: faBiohazard,
            skill: 'Redux',
          },
          {
            icon: faWind,
            skill: 'Tailwindcss',
          },
          {
            icon: faNode,
            skill: 'Node JS',
          },
          {
            icon: faFire,
            skill: 'Firebase',
          },
          {
            icon: faCcStripe,
            skill: 'Stripe',
          },
          {
            icon: faHtml5,
            skill: 'HTML',
          },
          {
            icon: faCss3,
            skill: 'CSS',
          },
          {
            icon: faJs,
            skill: 'JavaScript',
          },
        ],
      link: 'https://www.justnaturalpaws.org',
      image: 'assets/images/JNPImage.png',
    },
    {
      name: "Mitch's Pizzeria",
      date: "September 2023",
      info: "Mitch's Pizzeria was built for testing google firebase and redux state management for Just Natural Paws website.",
      skills: [
          {
            icon: faReact,
            skill: 'React JS',
          },
          {
            icon: faBiohazard,
            skill: 'Redux',
          },
          {
            icon: faFire,
            skill: 'Firebase',
          },
          {
            icon: faCcStripe,
            skill: 'Stripe',
          },
          {
            icon: faHtml5,
            skill: 'HTML',
          },
          {
            icon: faCss3,
            skill: 'CSS',
          },
          {
            icon: faJs,
            skill: 'JavaScript',
          },
        ],
      link: 'https://elsemitchell1.github.io/MitchsPizzeria/',
      image: 'assets/images/MitchsPizzaImage.png',
    },
    {
      name: "Pupshare",
      date: "September 2022",
      info: "PupShare is a website I made that mimics Pinterest and Instagram. It allows people to sign in with their google account to share pictures of their dogs.",
      skills: [
          {
            icon: faReact,
            skill: 'React JS',
          },
          {
            icon: faS,
            skill: 'Sanity.io',
          },
          {
            icon: faWind,
            skill: 'Tailwindcss',
          },
          {
            icon: faHtml5,
            skill: 'HTML',
          },
          {
            icon: faCss3,
            skill: 'CSS',
          },
          {
            icon: faJs,
            skill: 'JavaScript',
          },
        ],
      link: 'https://pupshare.netlify.app/',
      image: 'assets/images/PupShareImage.png',
    },
    {
      name: "Chewbarker.ca",
      date: "Jan 2022 - April 2022",
      info: "Chewbarker.ca utilises a variety of HTML, CSS, JavaScript, and API's to create a fun, interactive, and informative website about German Shepherds.",
      skills: [
          {
            icon: faHtml5,
            skill: 'HTML',
          },
          {
            icon: faCss3,
            skill: 'CSS',
          },
          {
            icon: faJs,
            skill: 'JavaScript',
          },
          {
            icon: faJs,
            skill: 'JQuery',
          },
        ],
      link: 'https://elsemitchell1.github.io/Chewbarker.ca/index.html',
      image: 'assets/images/ChewbarkerImage.png',
    },
    {
      name: "NASA API Project",
      date: "Jan 2022",
      info: "This was a project to apply for a Shopify Internship. It uses Nasa API data to display image arrays and functional like buttons for each image.",
      skills: [
          {
            icon: faReact,
            skill: 'React JS',
          },
          {
            icon: faHtml5,
            skill: 'HTML',
          },
          {
            icon: faCss3,
            skill: 'CSS',
          },
          {
            icon: faJs,
            skill: 'JavaScript',
          },
        ],
      link: 'https://elsemitchell1.github.io/Internship',
      image: 'assets/images/NASAImage.png',
    },
    {
      name: "Coursera Projects",
      date: "Dec 2021",
      info: "5 assignments were required to pass the HTML, CSS, and Javascript for Web Developers course. See the assignments at my github page.",
      skills: [
          {
            icon: faHtml5,
            skill: 'HTML',
          },
          {
            icon: faCss3,
            skill: 'CSS',
          },
          {
            icon: faJs,
            skill: 'JavaScript',
          },
        ],
      link: 'https://github.com/elsemitchell1',
      image: 'assets/images/WebDevCertificate.png',
    },
  ]
}
