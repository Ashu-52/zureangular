import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CanComponentCanDeactivate } from 'src/app/candeactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit,
CanComponentCanDeactivate {
  //server?: {id: number, name: string, status: string};
  product:any={};
  productName = '';
  productStatus = '';
  allowEdit:boolean=true;

  constructor(private prdService: ProductsService,
              private actRoute:ActivatedRoute) { }
 
  ngOnInit() {
    console.log('Query Params ====> ');
    console.log(this.actRoute.snapshot.queryParams);

    this.actRoute.queryParams.subscribe(
        (params:Params)=>{
          this.allowEdit=params['allowEdit']=='1'?true:false

        }

    )

    const prodId=+this.actRoute.snapshot.params['id'];
    this.product = this.prdService.getProduct(prodId);
    this.actRoute.params.subscribe(
      (params:Params)=>{
        this.product = this.prdService.getProduct(+(params['id']));
 
      }
    )
    this.productName = this.product.name;
    this.productStatus = this.product.status;
  }

  onUpdateProduct() {
    this.prdService.updateProduct(this.product.id, {name: this.productName, status: this.productStatus});
  }

  canDeactivate(): 
  boolean | Observable<boolean> | Promise<boolean>{
      if(!this.allowEdit){
        return true;
      }
      if(  (this.productName != this.product.name) ||
           (this.productStatus!=this.product.status)
      
      ){

        return confirm("You Did some Changes on Edit Product ...Do you want to Discard?......");
      }
        else
        {
          return true;
        }
        
      }


      
  }



