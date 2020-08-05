import { Component, OnInit } from '@angular/core';

// 引入服務
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  public keyword:any = '';
  public history:any[] = [];

  constructor(
    public storage:StorageService,
  ) { }

  ngOnInit() {

    let searchHistory = this.storage.get('searchHistory');

    if(searchHistory){
      this.history = searchHistory;
    }

  }

  doSearch(){

    // 當history中不存在keyword時，條件成立，若有重覆無法輸入
    if(this.history.indexOf(this.keyword) == -1 && this.keyword !== ''){
      this.history.push(this.keyword);

      // 設定localStorage
      this.storage.set('searchHistory',this.history);
    }

    // 輸入框內容重新為空
    this.keyword = '';

  }

  delHistory(key){
    let searchHistory;

    this.history.splice(key,1);

    // 設定localStorage
    this.storage.set('searchHistory',this.history);

    // 當localStorage中的searchHistory為空陣列時，移除searchHistory
    searchHistory = this.storage.get('searchHistory');

    if(searchHistory.length == 0){
      this.storage.remove('searchHistory');
    }
  }

}
