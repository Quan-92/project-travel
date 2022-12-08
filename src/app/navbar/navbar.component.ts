import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logo: String = 'https://demoasia.webtravel.vn/images/logo.png'
  navigaters = [
    {
      id: 1,
      name: 'Trang chủ'
    },
    {
      id: 2,
      name: 'Tour'
    },
    {
      id: 3,
      name: 'Khách sạn'
    },
    {
      id: 4,
      name: 'Phương tiện'
    },
    {
      id: 5,
      name: 'Liên hệ'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
