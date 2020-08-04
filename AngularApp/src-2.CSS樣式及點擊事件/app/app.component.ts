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

  classObj = {
    bgBlue:true,
    active:false
  };

  isShow = true;
  
  classArr2 = ['bbb','ccc','bgBlue'];
  
  styleStr = 'background:pink;width:150px;';

  styleObj = {
    background :　'pink',
    width : '200px'
  }

    color = 'pink';

    widthNum = '200';

    styleObj2 = {
      background :　'skyblue',
      width : '200px'
    }

    colorToggle = true;
    changeColor(){
      let colorChange = !this.colorToggle;
      if(colorChange){
        this.styleObj2 = {
          background :　'pink',
          width : '100px'
        }
      }else{
          this.styleObj2 = {
            background :　'skyblue',
            width : '200px'
        }
      }
      this.colorToggle = colorChange;
    }

    buttonToggle = true;
    changeButton(event){
      
      let check = !this.buttonToggle;       
      console.log(event);
      if(check){
        event.target.style.background = 'pink';
      }else{
        event.target.style.background = 'skyblue';
      }

      this.buttonToggle = check; 
    }

  sum(a,b){
    return a+b;
  }
}
