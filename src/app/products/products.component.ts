import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productsnew',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: {id: number, name: string, status: string}[] = [];

  constructor(private prdService: ProductsService,
    private route:Router,
    private actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.products = this.prdService.getProducts();
  }
  reloadProducts(){
    this.route.navigate(['/products'],{relativeTo:this.actRoute});

  }

}
