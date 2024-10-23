import { Component, Input , Output, EventEmitter } from '@angular/core';
import { IProduct } from '../catalog/product.model'; // Chemin correct


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() product!:IProduct;
  @Output() buy= new EventEmitter();


  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }

  addTocart(product: IProduct){
   
    console.log('product ${product.name} added to cart');
  }
  buyButtonClicked(product:IProduct){
    this.buy.emit();
  }

}
