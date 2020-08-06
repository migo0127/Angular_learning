import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public title:string = 'Title:首頁(父)';
  public msg:string = '我是home(父)的msg變量';
  public content:string = '首頁內容(父)';

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    alert('我是home(父)的run()方法');
  }

  all(){
    alert('我是home(父)的all()方法');
  }

}
