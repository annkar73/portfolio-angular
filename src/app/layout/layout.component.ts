import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Se till att RouterModule importeras

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],  // RouterModule behövs för att routing ska fungera
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  title = 'Anna Karlsen Portfolio';
}
