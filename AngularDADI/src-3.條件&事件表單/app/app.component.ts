// 引入核心模塊裡的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 使用這個組件的名稱
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.sass'] // css
})
export class AppComponent {
  title = 'AngularDADI'; // 定義屬性

  constructor(){  // 構造函數

  }
}
