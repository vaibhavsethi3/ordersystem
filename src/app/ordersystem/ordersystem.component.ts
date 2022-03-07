import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { OrderModel } from './order.model';

@Component({
  selector: 'app-ordersystem',
  templateUrl: './ordersystem.component.html',
  styleUrls: ['./ordersystem.component.css'],
})
export class OrderSystemComponent implements OnInit {
  orderValue!: FormGroup;
  orderObj: OrderModel = new OrderModel();
  orderList: any = [];

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.orderValue = this.formBuilder.group({
      name: [''],
      email: [''],
    });
    this.getOrder();
  }
  AddOrder() {
    this.orderObj.name = this.orderValue.value.name;
    this.orderObj.qty = this.orderValue.value.qty;

    this.api.postOrder(this.orderObj).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e);
        alert('Error');
      },
      complete: () => {
        console.log('Order record added!');
        alert('Order record added!');
        this.getOrder();
        this.orderValue.reset();
      },
    });
  }
  getOrder() {
    this.api.getOrder().subscribe((res) => {
      this.orderList = res;
    });
  }

  deleteOrder(data: any) {
    this.api.deleteOrder(data.id).subscribe({
      next: (v) => {
        console.log(v);
      },
      error: (e) => {
        console.log(e);
        alert('Error');
      },
      complete: () => {
        console.log('Order record delete!');
        alert('Order record delete!');
        this.getOrder();
      },
    });
  }

  editOrder(data: any) {}
}