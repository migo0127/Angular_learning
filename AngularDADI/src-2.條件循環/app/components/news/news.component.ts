import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  /*
    聲明屬性的3種方式：
      1.public：共有(默認值)，可以在這個類/子類裡面使用，也可以在類外面使用。
      2.protected：保護類型，只有在當前類和它的子類裡可以訪問。
      3.private：私有，只有在當前類才可以訪問這個屬性。
  */
  msg = '我是一個新聞組件的msg';

  // 推薦使用
  private username:any = 'AYG';
  public student:string = 'DL';
  public title:string = '我是一個title屬性';
  public userInfo:object = {
    username:'AYG',
    age:"32"
  };
  public message:string;

  public content = '<h2>我是一個html標籤</h2>';

  // 定義陣列
  public arr:string[] = ['111','222','333'];
  public list:any[] = ['我是第一個新聞',22222222,'我是第三個新聞'];
  public items:Array<number> = [123,456,789];

  public userlist:any[] = [
    {
      username:'DL',
      age:30
    },
    {
      username:'AYG',
      age:32
    },
    {
      username:'ZZ',
      age:24
    }
  ];

  public carList:any[] = [
    {
      cate:'寶馬',
      list:[
        {
          title:'寶馬X1',
          priece:'20萬'
        },
        {
          title:'寶馬X2',
          priece:'27萬'
        },
        {
          title:'寶馬X3',
          priece:'40萬'
        }
      ]
    },
    {
      cate:'奧迪',
      list:[
        {
          title:'奧迪Q1',
          priece:'18萬'
        },
        {
          title:'奧迪Q2',
          priece:'25萬'
        },
        {
          title:'奧迪Q3',
          priece:'35萬'
        }
      ]
    }
  ]

  constructor() {
    this.message = '這是給屬性賦值，改變屬性的值';
    console.log(this.message);

  }

  ngOnInit(): void {
  }

}
