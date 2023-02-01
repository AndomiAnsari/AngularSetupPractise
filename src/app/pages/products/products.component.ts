import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyJsonService } from 'src/app/services/dummy-json.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productId: any;
  products: any;
  specificProduct: any;
  arrayUniqueByKey: any;
  item: any;

  constructor(
    private route: ActivatedRoute,
    private productsData: DummyJsonService
  ) {
    this.productsData.product().subscribe((data: any) => {
      console.log(data.products, 'data product');
      this.products = data.products;
      this.specificProduct = this.products[this.productId - 1];
      console.log(
        '🚀 ~ file: products.component.ts:25 ~ ProductsComponent ~ this.productsData.product ~ specificProduct',
        this.specificProduct
      );

      // this.specificProduct = this.products.id === this.productId;
      // this.specificProduct = this.products.id === this.productId;
      // console.log("🚀 ~ file: products.component.ts:23 ~ ProductsComponent ~ this.productsData.product ~ this.specificProduct", this.specificProduct)
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    console.log(
      '🚀 ~ file: user.component.ts:19 ~ UserComponent ~ ngOnInit ~ log',
      this.route.snapshot.paramMap.get('id')
    );

    this.productId = this.route.snapshot.paramMap.get('id');
  }

}
