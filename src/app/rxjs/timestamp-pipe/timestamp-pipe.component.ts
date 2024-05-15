import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ng-timestamp-pipe',
  standalone: true,
  imports: [],
  templateUrl: './timestamp-pipe.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimestampPipeComponent {

}
