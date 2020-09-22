import { ParseTreeResult } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActionSequence } from 'protractor';

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
  show = 'green';
  color = 'brown';
  data = [
    {
      name: 'aneeq',
      age: 20,
      email: 'kuxhbhi',
    },
    {
      name: 'Murshad',
      age: 35,
      email: 'kuxhbhi',
    },
    {
      name: 'Sarkar',
      age: 3500,
    },
    {
      name: 'Chutti Kar',
      age: 15,
    },
  ];
  showBox = false;
  getUserValue(values) {
    console.log(values);
  }
  updateColor() {
    this.color = 'red';
  }
  err = false;
}
