import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //server: {id: number, name: string, status: string};
  product:any={};

  constructor(private prdService: ProductsService,
    private route:Router,
    private actRoute:ActivatedRoute) { }

  ngOnInit() {
    //http://localhost:4200/product/3
    const prodId=+this.actRoute.snapshot.params['id'];
    this.product = this.prdService.getProduct(prodId);

    this.actRoute.params.subscribe(

      (params:Params)=>{
        this.product=this.prdService.getProduct(+params['id']);
      }
    )
  }

  editProduct(){
    //http://localhost:4200/products/1/edit?allowEdit=0
    this.route.navigate(['\products',this.product.id,'edit'],
    {queryParamsHandling:'preserve'});
  }

}
