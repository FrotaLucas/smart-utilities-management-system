import { Component } from '@angular/core';
import { Customer } from '../../../interfaces/customer';
import { listOfCustomers } from '../../../shared/list-customers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-customer',
  imports: [CommonModule],
  templateUrl: './show-customer.component.html',
  styleUrl: './show-customer.component.css'
})
export class ShowCustomerComponent {

  myList: Customer[] = listOfCustomers;
  text: string = "mensage";

  ngOnit() : void{
    this.refreshPage();
  }

  refreshPage() :void {
    this.myList = listOfCustomers;
  }

  eventClick() : void {
    this.text = "click from mouse";
  }

  eventInput(event: Event) : void{
      const input = event.target as HTMLInputElement;

      this.text = `${input.value}`;

  }

  eventKeyDown(event: KeyboardEvent) : void{
    const keydown = event.key;

    this.text = `you pressed the key ${keydown}`;
  }

  eventKeyUp(event: KeyboardEvent) : void {
    this.text = `you left the key ${event.key}`;
  }
}
