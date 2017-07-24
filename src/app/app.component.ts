import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import {sample} from './components/adForm.component'
import {sampleTable} from './components/adTable.component'
import {ProductService } from './products/product.service';
import {adValidate } from './template_driven/adForm.component';
import { ProductMdfFormComponent} from './model_driven/model.component';
@Component({
  selector: 'my-app',
  template: `<AdvertisementFormComponent (childEvent)="addAdvertise($event)"></AdvertisementFormComponent>
  <adTable></adTable>`,
  providers: [ProductService] 
})

export class AppComponent  { 
addAdvertise(obj:any){
      this.productService.addnewAdv(obj);
   }
  constructor(private productService: ProductService) 
    {}
   
   

 }
