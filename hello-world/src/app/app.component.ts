import { ParseTreeResult } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world';
  /* name = 'ANeeq';
  getName() {
    return this.name;
  }
  sheikh = {
    name: 'peter',
    age: 20,
  };
  arr = ['bruce', 'wayne', 220];
  a = 20;
  b = 100;
  site = window.location.href;*/

  getName(name) {
    //let name = prompt('Enter your name: ');
    alert(name);
    document.write(name);
  }
  newEvent(event) {
    console.log(event);
  }
  currentval = '';
  getVal(val) {
    console.log(val);
    this.currentval = val;
  }
}
