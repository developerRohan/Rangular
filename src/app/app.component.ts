import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  template: '<h1> navigation {{title}} </h1>'
})
export class AppComponent {
  title = 'app';
}
