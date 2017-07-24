import { ProductService } from './product.service';
import {Component} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({ 
    selector: 'sample', 
    templateUrl: 'app/model_driven/productmdfform.html', 
    providers: [ProductService] 
})

export class SampleComponent { 
     category:string[]=["Mobile","Car","Furniture"];
    productForm = new FormGroup({ 
    name: new FormControl(null, [Validators.required, Validators.minLength(3), 
Validators.maxLength(8)]),

        quantity: new FormControl(50,[Validators.required]), 
        category: new FormControl() });
    
    
    constructor(productService: ProductService) 
    { console.log("Products = ", productService.getAdvertise()); } } 