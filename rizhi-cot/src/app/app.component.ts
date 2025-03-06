import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title: string = 'Hello, Angular';
  
  operation : number = 2 + 2 * 2;
}






