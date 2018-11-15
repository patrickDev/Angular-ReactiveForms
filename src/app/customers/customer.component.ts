import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { FormGroup,  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;  
  customer = new Customer();

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: '', 
      lastName: '', 
      email:  '', 
      sendCatalog: true
    })
    
  }

  populateTestData(): void{
    this.customerForm.patchValue({  //use setValue to set all the value in the form control and PatchValue to set a value to subset of value on the form                         
      firstName: 'Patrick', 
      lastName: 'Herve', 
    
      sendCatalog: false
    });
  }
  save() {
   console.log(this.customerForm);
   console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}
