import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  // 接收父組件傳遞過來的數據及方法
  @Input() title:string;
  @Input() msg:string;
  @Input() run:any;
  @Input() content:string;
  @Input() all:any;

  constructor() { }

  ngOnInit(): void {
  }

  // 使用父組件的run()方法
  getParentRun(){
    this.run();
  }

  // 使用父組件的all()方法
  getParentAll(){
    this.all();
  }

}
