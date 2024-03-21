import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

class NavItem {
  label: string = "";
  route: string = '';
  transitionName: string = '';
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navItems: NavItem[] = [
    { label: 'Home', route: '', transitionName: 'home' },
    { label: 'Contact', route: 'contact', transitionName: 'contact' },
    { label: 'About', route: 'about', transitionName: 'about' }
  ]
}
