import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HostListenerDirective } from './examples/host-listener.directive';
import { HostBindingDirective } from './examples/host-binding.directive';
import { InputDirective } from './examples/input.directive';
import { HostComponent } from './host/host.component';

@Component({
  selector: 'ng-directives',
  standalone: true,
  imports: [HostListenerDirective, HostBindingDirective, InputDirective, HostComponent],
  templateUrl: './directives.component.html',
  styles: `
        :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
      margin-bottom: 3rem;
      }

      code {
        display: block;
      }
      `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectivesComponent {

}
