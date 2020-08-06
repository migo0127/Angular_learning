import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  public title:string = 'Title:頁尾(子)';
  public msg:string = '我是footer(子)的msg';
  public content:string = '頁尾內容(子)';

  constructor() { }

  ngOnInit(): void {
  }

  footerRun(){
    alert('我是footer(子)的run()方法');
  }

}
