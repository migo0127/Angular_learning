// 引入核心模塊裡的Component
import { Component } from '@angular/core';

import { Message } from './meessage.componrnt';

@Component({
  selector: 'app-root', // 使用這個組件的名稱
  templateUrl: './app.component.html', // html
  styleUrls: ['./app.component.sass'] // css
})
export class AppComponent {
  title = 'AngularDADI'; // 定義屬性

  public name: string;
  public content: string;
  public date: Date;

  public message: Message[] = [];

  constructor(){  // 構造函數
  }

  public addMessage(): void{
    if( !this.name.trim() || !this.content.trim()){
      return
    }

    const messageList = new Message(this.name,this.content);

    this.message.push(messageList);

    this.name = '';
    this.content = '';

  }

}
