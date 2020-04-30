import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent {

    @Input() hobby: string;
    @Output() hobbyClicked = new EventEmitter<string>();


  onHobbyClicked(){
    this.hobbyClicked.emit(this.hobby);
  }

  getColor(hobby){
    return 'blue';
  }


}
