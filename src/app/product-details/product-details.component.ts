import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductInterface} from "../product-list/product-interface";
import {ProductService} from "../product-list/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = 'Product Detail: ';
  product: ProductInterface | undefined;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += id;
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.productService
      .getProduct(id)
      .subscribe((data) => {
        console.log(data);
        this.product = data;
      })
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }


}
