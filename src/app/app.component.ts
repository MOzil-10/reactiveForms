import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//firstly we declare the formGroup variable
registerForm!:FormGroup  //this binds it to our angular component

  title = 'formValiadation';


  submitted = false ;  //the form is not submitted when we load the page for the very first time

  constructor(private formBuilder:FormBuilder){}

//when this component is initialized this function will automaticall trigger
    ngOnInit(){

      //Validations

      this.registerForm= this.formBuilder.group({
        firstName:['',Validators.required], //if user submits nothing this validation will trigger
        lastName:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(6)]]
      })
    }

    onSubmit(){
this.submitted=true;

if(this.registerForm.invalid){
  return
}

//if all the fields are successfully filed then display this 
alert("Success")
    }
  }



