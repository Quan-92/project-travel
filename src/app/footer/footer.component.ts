import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 content='The payment is encrypted and transmitted securely with an SSL protocol.';

 footers=[
   {
     id:1,
     name:'Facebook',
     iconUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQLB2KFWm2hya2Nz9XUCcweXttDpWj4fDoA&usqp=CAU',
     about:'Our Story'
   },
   {
    id:2,
    name:'Youtube',
    iconUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHWZGTQXvO_I2o1WY4twCnyX2Pgiywk3JvQ&usqp=CAU',
    about:'Travel Blog'
  },
  {
    id:3,
    name:'Instagram',
    iconUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToyH8IEqITAEfDnaQ5a8V9DR5J4oRci0RpXg&usqp=CAU',
    about:'WorkStay'
  },
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
