import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div>
      <img src="./assets/lazy_reimu.png">
      <p>I found nothing and got tired from this search</p>
    </div>

  `,
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
