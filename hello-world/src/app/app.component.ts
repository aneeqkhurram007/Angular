import { ParseTreeResult } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActionSequence } from 'protractor';
import { UsersDataService } from './users-data.service';

interface dataType {
  name: string;
  id: number;
  pakistani: boolean;
  address: any;
}
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
  formatLabel(value: number) {
    if (value >= 20) {
      return value;
    }

    return value;
  }
  newName = '';
  constData: any = [];

  parent(data) {
    console.warn(data);
    this.newName = data.age;
  }
  pipeName = 'aneeq khurram';
  toDay = Date.now();
  constructor(private user: UsersDataService) {
    this.user.getData().subscribe((data) => {
      console.warn(data);
      this.constData = data;
    });
  }
  fetchData() {
    const data: dataType = {
      name: 'Aneeq Khurram',
      id: 100,
      pakistani: true,
      address: '23564H',
    };
    return data;
  }
}
