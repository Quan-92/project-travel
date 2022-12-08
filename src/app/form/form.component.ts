import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  userInput: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.userInput = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^[0]+[0-9]{1,9}")]),
      email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$")])
    });
  }
  onClick() {
    console.log(this.userInput.value)

  }

}
