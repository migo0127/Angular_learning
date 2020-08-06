import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public flag = true;

  constructor() { }

  ngOnInit(): void {
    /*
     ngOnInit()：是組件和指令初始化完成，並不是真正的DOM加載完成。
    */

    // Angular獲取DOM節點的方式之一
    // 操作DOM：原生js寫法
    let box:any = document.getElementById('box');
    box.style.color = 'red';

    
    // 若是該標籤含有angular指令(ex：*ngIf)，則無法在ngOnInit獲取DOM
    // let box2:any = document.getElementById('box2');
    // box2.style.color = 'orange';  // 報錯
    // ERROR TypeError: Cannot read property 'style' of null
    
  }

  ngAfterViewInit(): void {
    // ngAfterViewInit()：才是真正的DOM加載完成，視圖加載完成後觸發的方法(建議把DOM操作放在這個裡面)
    // 再此寫入含有angular指令的標籤時，才能被獲取到
    let box2 = document.getElementById('box2');
    box2.style.color = 'blue';
  }

}
