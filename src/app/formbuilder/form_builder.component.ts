import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Component} from '@angular/core';

@Component({ 
    selector: 'product-formbuilder-form', 
    templateUrl: 'app/model_driven/productmdfform.html', 
    styles: [`input.ng-invalid {border-left: 5px solid red}   input.ng-valid {border-left: 5px solid green}`] }) 
    
    
    export class ProductFormBuilderComponent { 
         category:string[]=["Mobile","Car","Furniture"];
        productForm: FormGroup; 
        constructor(private formBuilder: FormBuilder) { 
            this.productForm = this.formBuilder.group({ 
                name: ['kirti', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]], 
                quantity: [], 
                category: [] }); } } 