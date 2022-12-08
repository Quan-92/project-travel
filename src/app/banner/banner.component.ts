import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
 banner1: String = 'https://demoasia.webtravel.vn/images/saigon.jpg';

  banner2: String = 'https://demoasia.webtravel.vn/images/images1.jpg';

  banner3: String = 'https://demoasia.webtravel.vn/images/images5.jpg';

  bannerTitle = 'Du Lịch Việt Nam'

  bannerTxt = 'Nunc molestie mi nunc, nec accumsan libero dignissim sit amet. Fusce sit amet tincidunt metus.Nunc eu risus suscipit massa dapibus blandit. Vivamus ac commodo eros, vel mattis libero.';
  constructor() { }

  ngOnInit(): void {
  }

}
