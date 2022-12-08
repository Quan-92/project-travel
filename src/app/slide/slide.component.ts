import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  slide1: String = 'https://demoasia.webtravel.vn/images/hoguom.jpg';

  slide2: String = 'https://demoasia.webtravel.vn/images/danang.jpg';

  slide3: String = 'https://demoasia.webtravel.vn/images/saigon.jpg';
  constructor() { }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  ngOnInit(): void {
  }

}
