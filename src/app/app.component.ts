import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Terra';
  hobbies = ['Swimming', 'Coding', 'Acting'];
  hobby = '';
  hobbyDel = false;

  onAddHobby(hobby){
    this.hobbies.push(hobby);
    this.hobby = '';
  }
  onHobbyWasClicked(hobby: string){
    const idx = this.hobbies.indexOf(hobby);
    this.hobbies.splice(idx, 1);
    this.hobbyDel = true;
  }
}
