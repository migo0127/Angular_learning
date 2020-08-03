import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AngularApp';
  classStr = 'coloStr';
  bgPink = 'bgPink';
  htmlES6 = "[innerHtml]='html'";
  htmlES5 = '<h3>TEST</h3>';
  script = `<div>innerHtml寫法+script：script標籤會被阻檔，不會顯示<script>location.href='http://www.google.com.tw'</script></div>`;

  sum(a,b){
    return a+b;
  }
}
