import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;

  constructor(private categoryservice: CategoryService, private productservice: ProductService, private router: Router, private route: ActivatedRoute){
    this.categories$ = categoryservice.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id)
      this.productservice.get(this.id).take(1).subscribe(p => this.product = p);
  }

  save(product){
    if(this.id){
      this.productservice.update(this.id, product);
    }
    else{
      this.productservice.create(product);
      console.log(product);
    }

    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(confirm("are you sure do you want delete this product?")){
      this.productservice.delete(this.id);

      this.router.navigate(['/admin/products']);
    }
  }

  ngOnInit() {
  }

}
