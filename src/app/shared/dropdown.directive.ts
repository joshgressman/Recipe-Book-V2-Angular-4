
import { Directive, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
@HostBinding('class.open') isOpen = false;
//allows to be binded to an element, binds to class in this case
//the host binding is binding to an element, in this case assigning the open property to the class

@HostListener('click') onToggle() {
  this.isOpen = !this.isOpen;
}

//listens for an event, in this case the click

//All of this is contained within the appDropdown directive
}
