import { Component } from '@angular/core';
import { DummyJsonService } from 'src/app/services/dummy-json.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  products: any;
  constructor(private productsData: DummyJsonService) {
    this.productsData.product().subscribe((data: any) => {
      console.log(data.products, 'data');
      this.products = data.products;
    });
  }

}
