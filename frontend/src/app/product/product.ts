import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {ProductService} from '../services/product';


@Component({
  selector: 'app-product',
  imports: [
    // NgIf
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  products : any;

  constructor(private productService : ProductService) {
  }

  ngOnInit() : void {
    this.getAllProducts()
  }

  getAllProducts() : void {
    this.productService.getAllProducts().subscribe({

      next: resp => {
        this.products = resp;
      },

      error: err => {
        console.log(err);
      }
    })
  }


  protected handelDeleteProduct(product: any) {
    let v = confirm("Sure you want to delete it?")

    if(v==true){
      this.productService.deleteProduct(product).subscribe({

        next: resp => {
          this.getAllProducts();
        },

        error: err => {
          console.log(err);
        }

      })
      this.getAllProducts()
    }

  }
}
