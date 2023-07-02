

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductsService } from './products/products.service';
import { ProductsComponent } from './products/products.component';
import { RouterModule,Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';
import { CandeactivateService } from './candeactivate.service';


const appRoutes:Routes=[

  {path:"",component:HomeComponent},

  /*
  {path:"customers",component:UsersComponent},
  {path:"customers/:id/:name",component:UserComponent},*/
  

  {path:"customers",component:UsersComponent,
  children:[
      {path:":id/:name",component:UserComponent},
            ]},


  /* {path:"products",component:ProductsComponent},
  {path:"products/:id",component:ProductComponent},
  {path:"products/:id/edit",component:EditProductComponent},*/



  {path:"products",
    canActivateChild:[AuthguardService],
    //canActivate:[AuthguardService],
    component:ProductsComponent,
  children:[
     {path:":id",component:ProductComponent},
      {path:":id/edit",component:EditProductComponent,
          canDeactivate:[CandeactivateService]}
]}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    UserComponent,
    EditProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [ProductsService,CandeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
