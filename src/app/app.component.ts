import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Api Movie';

  value = '';

  onKey(value: string) {
    this.value = value;
  }

}
