import { ChangeDetectionStrategy, Component, HostAttributeToken, inject } from '@angular/core';

@Component({
  selector: 'ng-injected-component',
  standalone: true,
  imports: [],
  templateUrl: './injected-component.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InjectedComponentComponent {

  injectedProp1 = inject(new HostAttributeToken('injected-prop1'));
  injectedProp2 = inject(new HostAttributeToken('injected-prop2'), { optional: true});
}
