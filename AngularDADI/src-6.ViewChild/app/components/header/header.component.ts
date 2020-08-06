import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public str:string = '我是header裡面的公開變量';

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    alert('我是hearder裡面的方法');
  }

}
