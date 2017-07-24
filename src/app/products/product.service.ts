import { Injectable } from '@angular/core';

@Injectable() 
export class ProductService { 
    arr:{title:any,name:any,cate:any,desc:any} []=[];
   
addnewAdv(newobj:any)
   {
     this.arr.push(newobj);
     console.log(newobj);
   }

   getAllAd(){
       return this.arr;
   }

   
}
