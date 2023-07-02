import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user?: {id: number, name: string};

  paramSubscription?:Subscription;

  constructor(private actRoute:ActivatedRoute,private route:Router) { }

  ngOnInit() {

    this.user={
      //http://localhost:4200/1/Ramu
      id:this.actRoute.snapshot.params['id'], //1
      name:this.actRoute.snapshot.params['name'] //Ramu
    }

    
  this.paramSubscription=  this.actRoute.params.subscribe(
      (params:Params)=>{
        if(this.user?.id){ //Null Check
           this.user.id=params['id']; //LatestId
           this.user.name=params['name']; //LatestName
        }
      }
    )
    

   
  }

  ngOnDestroy(){
  
    this.paramSubscription?.unsubscribe();
  }


 
}

