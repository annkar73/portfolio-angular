import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true, // Viktigt!
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EduComponent {
  courses: string[] = [
    'HTML och CSS',
    'JavaScript - grundkurs',
    'Agilt projektarbete',
    'API-utveckling',
    'Arbetsmetodik för utvecklare',
    'Grafiska verktyg för gränssnittsdesign',
    'UX Usability',
    'Testning',
    'JavaScript - fördjupning',
    'LIA - Lärande i Arbete',
    'Examensarbete',
    'Kompetensportfölj och Entreprenörskap'
  ];

  liaText: string ='Lägg till information om lia-perioder.';
  degreeText: string = 'Lägg till information om examensarbete';
}