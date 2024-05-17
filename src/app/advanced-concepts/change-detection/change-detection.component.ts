import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OnpushComponent } from './onpush/onpush.component';
import { DefaultComponent } from './default/default.component';

@Component({
  selector: 'ng-change-detection',
  standalone: true,
  imports: [OnpushComponent, DefaultComponent],
  templateUrl: './change-detection.component.html',
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

      .change-detection {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 3rem;
        padding: 1rem;
        * {
          max-width: 50%;
        }
    }

    img {
      width: 500px;
      height: auto;
      object-fit: cover;
    }

    .scenarios {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ChangeDetectionComponent {

}
