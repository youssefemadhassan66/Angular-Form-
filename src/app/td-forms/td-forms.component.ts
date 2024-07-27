import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-td-forms',
  templateUrl: './td-forms.component.html',
  styleUrl: './td-forms.component.css'
})
export class TdFormsComponent {

  postData(myForm:NgForm){
    //console.log(myForm);
    //console.log(myForm.value);
    //console.log(myForm.controls);
    //console.log(myForm.controls['username'].value);

    /*myForm.setValue({
    about:"",
    username:"jo123e",
    email:"",
    phone:"12"

    })
    */

    
  }

  changeUserName(myForm:NgForm){
    myForm.form.patchValue({username:'ahmed',age:10});
    console.log(myForm.value);
  }
}
