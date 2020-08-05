import { Component, OnInit } from '@angular/core';

// 引入服務
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  public keyword:string = '';

  public toDoList:any[] = [];

  constructor(
    public storage:StorageService,
    ) { }

  ngOnInit() {

    let toDoList = this.storage.get('toDoList');

    if(toDoList){
      this.toDoList = toDoList;
    }

  }

  addedTodoItem(e){
    if(e.keyCode === 13){
      if(!this.addTodoCheck(this.toDoList,this.keyword)){
        this.toDoList.push({
          title:this.keyword,
          status:0
        })
        // 設定localStorage
        this.storage.set('toDoList',this.toDoList);

        this.keyword = '';
      }else{
        alert(this.keyword + '重覆事項');
        this.keyword = '';
      }
    }
  }

  delTodoItem(key){
    this.toDoList.splice(key,1);

    // 設定localStorage
    this.storage.set('toDoList',this.toDoList);

    let toDoList = this.storage.get('toDoList');

    if(toDoList.length === 0){
      this.storage.remove('toDoList');
    }
  }

  addTodoCheck(toDoList:any,keyword:any){
    if(keyword =='') return true

    for(let i=0 ; i<toDoList.length; i++){
      if(toDoList[i].title === keyword){
        return true
      }
    }
    return false
  }

  // 當checkbox改變時，重新set localStorage
  checkboxChange(){
    this.storage.set('toDoList',this.toDoList);
  }

}
