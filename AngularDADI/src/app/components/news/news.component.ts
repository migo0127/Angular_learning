import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  public picUrl:string = 'https://img9.doubanio.com/view/group/sqxs/public/f0759126f5c4e93.webp';

  public flag:boolean = false;

  public list:string[] = ['這是第一條新聞','這是第二條新聞','這是第三條新聞','這是第四條新聞'];

  public orderStatus:number = 0;

  public styleColor:string = 'orange';

  public today:any = new Date();

  public title:string = '執行事件之前的值';

  public keywords:string = '';

  public username:string = 'DL';

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    alert('執行事件');
  }

  setDate(){
    this.title = '執行方法修改數據';
  }

  getDate(){
    alert(this.title);
  }

  runEvent(e){
    let dom:any = e.target;
    dom.style.color = 'blue';
  }

  keyDown(e){
    if(e.keyCode===13){
      console.log('按了一下enter');

    }
  }

  keyUp(e){
    console.log(e.target.value);
  }

  changeUsername(){
    this.username = 'ZZ';
  }

  getUsername(){
    alert(this.username);
  }
}
