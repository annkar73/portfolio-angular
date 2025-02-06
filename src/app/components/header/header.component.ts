import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isMenuOpen = false;

    // Funktion för att toggla menyn
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  
    // Funktion för att stänga menyn när en länk klickas
    closeMenu() {
      this.isMenuOpen = false;
    }
  
}