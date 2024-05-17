import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngHostBinding]',
  standalone: true
})
export class HostBindingDirective {

  @HostBinding('tab-index')
  getTabIndex() {
    console.log('tab')
  };

}
