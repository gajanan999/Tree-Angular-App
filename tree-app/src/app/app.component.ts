import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tree-app';

  
  abc=[];
  constructor() { 
   
  this.abc=[1,2,3,4,5,6]
  }

  ngOnInit() {
  }

 
  
}
