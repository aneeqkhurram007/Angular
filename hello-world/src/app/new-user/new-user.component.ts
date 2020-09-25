import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  @Output() parent: EventEmitter<any> = new EventEmitter();
  constructor() {} // @Input() name;

  ngOnInit(): void {}
  sendData() {
    this.parent.emit({ name: 'Aneeq', age: 30 });
  }
}
