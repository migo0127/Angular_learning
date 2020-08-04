import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AngularApp';

  // 1：*ngIf條件渲染，建議一次渲染使用
  person = '金門人';

  // 2：style條件渲染，建議多次渲染使用
  person2 = '台北人';

  // 3-1：*ngFor 列表循環
  arr = ['DL','AYG','WX','SS'];

  // 3-2：*ngFor 列列表循環加索引值
  arr2 = ['DL','AYG','WX','SS'];

  // 3-3：*ngFor：將列表的內容傳入事件
  chooesPerson(person:string,i:number){
    alert(`大四角共有 ${this.arr.length} 位，第 ${i+1} 位 ${person}`);
  }

  // 4.*ngFor：循環複雜陣列
  arr3:any[] = [
    {
      name:'DL',
      age:30,
      hobby:'音樂劇'
    },
    {
      name:'AYG',
      age:32,
      hobby:'音樂劇'
    },
    {
      name:'ZZ',
      age:24,
      hobby:'歌劇'
    },
  ]

  // 5.*ngSwitch：匹配多種情況
  orderState:string = 'AYG';
  orderState2:number = 5;

}
