import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InjectedComponentComponent } from './injected-component/injected-component.component';

@Component({
  selector: 'ng-host-attribute-token',
  standalone: true,
  imports: [InjectedComponentComponent],
  templateUrl: './host-attribute-token.component.html',
  styles: `
          :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
      margin-bottom: 3rem;
      }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostAttributeTokenComponent {

}
