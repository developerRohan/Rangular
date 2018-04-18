import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  template: `<h1>hello {{title}} angular, this is rails plus angular</h1>`
  
})
export class HomepageComponent {
  title = 'app';
}
