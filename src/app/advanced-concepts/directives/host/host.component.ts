import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-host',
  host: {
    "[attr.role]": "'button'",
    "(click)": "onClick()",
    "class": "active",
    "excluded": "true",
  },
  standalone: true,
  imports: [],
  templateUrl: './host.component.html',
  styles: `
  :host[role="button"] {
    color:red
  }

  :host(.active) {
    background-color: yellow;
  }

  :host[excluded] {
    opacity: 0.5;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostComponent {

  onClick() {
    console.log('Host element clicked');
  }
}
