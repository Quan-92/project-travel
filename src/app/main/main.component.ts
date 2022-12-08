import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  selectSearchs = [
    {
      option:'0~1,000,000'
    },
    {
      option:'1,000,000~2,000,000'
    },
    {
      option:'2,000,000~3,000,000'
    },
    {
      option:'3,000,000~4,000,000'
    },
    {
      option:'4,000,000~5,000,000'
    },
    {
      option:'5,000,000~6,000,000'
    },
    {
      option:'6,000,000~7,000,000'
    },
    {
      option:'7,000,000~8,000,000'
    },
    {
      option:'8,000,000~9,000,000'
    },
    {
      option:'9,000,000~10,000,000'
    },
  ]

  title = 'Du Lịch Nổi Bật'

  travels =
    [
      {
        id: 1,
        nameTour: 'Du lịch Hà Nội - Đảo Cát Bà - Vịnh Lan Hạ',
        price: 5699000,
        time: '3 ngày 2 đêm',
        imgUrl: 'https://cdnimg.vietnamplus.vn/t1200/Uploaded/lepz/2020_10_10/ttxvn20201010_du_lich_cat_ba.jpg',
        start: 'Hà Nội',
        arrival: 'Hải Phòng'
      },
      {
        id: 2,
        nameTour: 'Du lịch Miền Bắc - Đông Bắc - Hà Giang ',
        price: 5689000,
        time: '3 ngày 2 đêm',
        imgUrl: 'https://vietjet.net/includes/uploads/2020/09/cot-co-lung-cu-600x400.jpg',
        start: 'Hà Nội',
        arrival: 'Hà Giang'
      },
      {
        id: 3,
        nameTour: 'Du lịch Vịnh Hạ Long - Bãi biển Bãi Cháy',
        price: 5599000,
        time: '3 ngày 2 đêm',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTC8xwKPV16Yyw9PyJGvwfvwN4IjJhIkGBQ&usqp=CAU',
        start: 'Hải Phòng',
        arrival: 'Quảng Ninh'
      },
      {
        id: 4,
        nameTour: 'Du lịch Bãi biển Sầm sơn- Bãi biển Cửa Lò',
        price: 3250000,
        time: '2 ngày 1 đêm',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsEi2vLxtPbWfFDvyIqCRNmRaGm1Z1gvzR8Q&usqp=CAU',
        start: 'Thanh Hóa',
        arrival: 'Nghệ An'
      },
      {
        id: 5,
        nameTour: 'Tour Sa Pa - Fansipan - Chinh phục nóc nhà Việt Nam',
        price: 7889000,
        time: '3 ngày 2 đêm',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ-Uygpixuqu0cgWK93tmC6cBnQLw7dop6mw&usqp=CAU',
        start: 'Quảng Ninh',
        arrival: 'Lào Cai'
      },
      {
        id: 6,
        nameTour: 'Du lịch Đà Nẵng - Ngũ Hành Sơn - Bà Nà - Nha  Trang',
        price: 9599000,
        time: '4 ngày 3 đêm',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKt0ceru-nGbaWvA49dv2Y876eNUsgj_Nziw&usqp=CAU',
        start: 'Nam Định',
        arrival: 'Đà Nẵng'
      },
      {
        id: 7,
        nameTour: 'Du lịch Đà Nẵng - Phố cổ Hội An - Bãi biển Nha Trang',
        price: 5599000,
        time: '3 ngày 2 đêm',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd96BUfgLUOmJbR60MDcP0359m9ReujjV9dA&usqp=CAU',
        start: 'Đà Nẵng',
        arrival: 'Khánh Hòa'
      },
      {
        id: 8,
        nameTour: 'Du lịch Hà Nội - Chùa Bái Đính - Di tích Tràng An',
        price: 3099000,
        time: '1ngày',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBb_tvixBa8u6oZkQOoAxpQWC8Pyo_Xnd6dQ&usqp=CAU',
        start: 'Hà Nội',
        arrival: 'Ninh Bình'
      },
      {
        id: 9,
        nameTour: 'Du lịch Đà Nẵng - Ngũ Hành Sơn - Phố Cổ Hội An',
        price: 5599000,
        time: '1 ngày 1 đêm',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSlrQLP3-ZNOlSRVu7liw3k5cfzPmCnVOM1A&usqp=CAU',
        start: 'Đà Nẵng',
        arrival: 'Quảng Nam'
      },
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
