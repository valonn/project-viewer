import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  theme = 'dark_mode';

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Toggles the theme from the light to the dark one and vice versa
   */
  toggleTheme(): void {
    const theme = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? '' : 'dark');
    this.theme = theme === 'dark' ? 'dark_mode' : 'light_mode';
  }

  /**
   * Changes the language, needs further implementation on the server side
   * @param lang - language
   */
  changeLanguage(lang: string): void {
    window.location.href = window.location.origin + '/' + lang;
  }

}
