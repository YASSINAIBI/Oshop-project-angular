import { OrderService } from 'shared/services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  allOrder$;
  viewOrder = {};

  constructor(private router: Router, private orderservice: OrderService, private route: ActivatedRoute) { 
    this.allOrder$ = orderservice.getOrders();

    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.orderservice.get(id).take(1).subscribe(O => this.viewOrder = O)
   }

  ngOnInit() {
  }
}
