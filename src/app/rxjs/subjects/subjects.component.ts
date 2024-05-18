import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'ng-subjects',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './subjects.component.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
    }
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsComponent {

  subject$ = new Subject<number | null>();

  setValue(event: any){
    event.preventDefault();
    const value = event.target[0].value;
    this.subject$.next(value);
  }

}
