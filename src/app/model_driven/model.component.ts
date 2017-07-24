import {Component} from '@angular/core'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector :'adModelDriven',

    templateUrl : './productmdfform.html'
})


export class ProductMdfFormComponent { 
    category:string[]=["Mobile","Car","Furniture"];
    productForm = new FormGroup({ 
    name: new FormControl(null, [Validators.required, Validators.minLength(3), 
Validators.maxLength(8)]),

        quantity: new FormControl(50,[Validators.required]), 
        category: new FormControl() });

onSubmit() { console.log(this.productForm.value); } } 