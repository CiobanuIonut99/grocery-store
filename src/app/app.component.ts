import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocery-store';

  changeProductListColor(): void {
    const element = document.querySelector('.app-navbar') as HTMLElement;
    element.style.backgroundColor = '#71A7EC';
  }

  changeHomeColor(): void {
    const element = document.querySelector('.app-navbar') as HTMLElement;
    element.style.backgroundColor = 'white';
  }
}
