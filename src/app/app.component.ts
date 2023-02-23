import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // text interpolations
  title = 'Todos';

  // property binding
  placeholder = 'Whats needs to be done???';

  toggleAllBtn = false;
  check1 = false;
  check2 = false;

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.check1 = this.toggleAllBtn;
    this.check2 = this.toggleAllBtn;
  }
  // event binding
  toggleOne(event: MouseEvent) {
    // 傳入事件後可以抓值
    console.log(event);
    this.check1 = !this.check1;
  }

  toggleTwo() {
    this.check2 = !this.check2;
  }
}
