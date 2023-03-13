import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  name: string = '';
  address: string = '';
  creditCard: string = '';

  @Output() submitInfo: EventEmitter<any> = new EventEmitter();
  @Output() navigateToSuccess: EventEmitter<any> = new EventEmitter();

  submitForm = () => {
    const user = {
      name: this.name,
      address: this.address,
      creditCard: this.creditCard,
    };
    this.submitInfo.emit(user);
    this.name = '';
    this.address = '';
    this.creditCard = '';
  };

  moveToSuccess = () => {
    this.navigateToSuccess.emit(this.name);
  };
}
