import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  // 引入整個footer(子組件)實例
  @ViewChild('footer') footer:any;

  public title:string = '';
  public msg:string = '';
  public content:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getChildRun(){
    this.footer.footerRun();

    this.title = this.footer.title;
    this.msg = this.footer.msg;
    this.content = this.footer.content;

  }


}
