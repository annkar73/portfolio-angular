import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true, // Viktigt!
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [NgFor, NgIf]
})
export class ProjectsComponent {
  constructor() {
    console.log('ProjectComponent rendered');
  }
  openProject(link:string) {
    window.open(link, '_blank');
  }
  projects: IProject[] = [
    {
      title: 'Slumpa spelrader', 
      description: 'En slumpgenerator för sifferspel som tex Lotto och Keno. Skrivet i Vue', 
      image: 'assets/slumpgenerator.png', 
      link: 'https://annkar73.github.io/lotto-generator/'
      },
    {
      title: 'Tre i rad', 
      description: 'Ett enkelt tre i rad. Skrivet i Vue', 
      image: 'assets/tictactoe2.png', 
      link: 'https://annkar73.github.io/tic-tac-toe/'
    },
    {
      title: 'Memory', 
      description: 'Ett enkelt memoryspel som räknar antal drag. Skrivet i Vue', 
      image: 'assets/memory_vue.png', 
      link: 'https://annkar73.github.io/memory-game/'
    },
    {
      title: 'OrdMatch - matcha ord och bild', 
      description: 'Mitt examensarbete, ett spel av memorytyp där man matchar bilder mot ord. Skapat för att vara ett pedagogiskt och roligt spel för barn som börjar visa intresse för bokstäver och ord. Skrivet i React med styled components och TypeScript.', 
      image: 'assets/matcha_ord.png', 
      link: 'https://karlsen-wordmatch.netlify.app/'
    },
    {
      title: 'The Nightingale Project',
      description:'Min första praktikperiod inom The Nightingale Project under Johannes Gutenberg Universität innebar att refaktorera projektets hemsida. Valet föll på React med styled components och TypeScript.',
      image:'assets/nightingale.png',
      link:'https://nightingale.uni-mainz.de/'
    }

  ];
}

