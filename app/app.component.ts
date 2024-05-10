import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
  isLoggedIn: boolean = true;
  name = "Sef";

  employee: any[] = [
    { id: 100, name: "Sef" },
    { id: 101, name: "Alex" },
    { id: 102, name: "Mela" },
    { id: 103, name: "John" },
    { id: 104, name: "Joan" },
    { id: 101, name: "Frankie" }

]
}
