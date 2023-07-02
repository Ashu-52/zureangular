import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthentcationService } from '../authentcation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,
    private authService:AuthentcationService) { }

  ngOnInit() {
  }

  loadProducts(id:number){

    this.route.navigate(['/products',id,'edit'],
    {queryParams:{allowEdit:1}});

  }

  loadCustomers(){
    this.route.navigate(['/customers']);

  }

  login(){
    this.authService.login();
    console.log("User is Logged In")
  }
  logout(){
    this.authService.logout();
    console.log("User is Logged Out")
  }

}
