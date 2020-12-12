import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // populate the array for demo purposes
  serverElements = [{type: 'server', name: 'TestServer', content: 'Testing....'}];

}
