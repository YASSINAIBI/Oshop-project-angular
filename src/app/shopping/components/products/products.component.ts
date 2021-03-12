import { ShoppingCardService } from 'shared/services/shopping-card.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'shared/models/products';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filtredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;
  // subscription: Subscription

  constructor(private route: ActivatedRoute, private productservice: ProductService, private shoppingcardservice: ShoppingCardService) {    

   }

  async ngOnInit() {
    this.cart$ = await this.shoppingcardservice.getCart();
    this.populateProducts();
  }

  private populateProducts() {

    this.productservice.getAll().switchMap(products => {
      this.products = products;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  private applyFilter() {
    this.filtredProducts = (this.category) ? 
    this.products.filter(p => p.category === this.category) : 
    this.products;
  }
}
