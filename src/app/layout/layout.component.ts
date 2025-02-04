import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Lägg till CommonModule

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],  // Lägg till CommonModule här
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  title = 'Anna Karlsen Portfolio';
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
