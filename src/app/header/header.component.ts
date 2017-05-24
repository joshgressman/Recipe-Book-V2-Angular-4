import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
@Output() selectedFeature = new EventEmitter<string>();
//@Output = event can be LISTNEDED to outside of this component

onSelected(item){
  this.selectedFeature.emit(item);
}


}
