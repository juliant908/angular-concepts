import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map, observable, withLatestFrom } from 'rxjs';

@Component({
  selector: 'ng-with-latest-from-pipe',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './with-latest-from-pipe.component.html',
  styles: `    :host {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      gap: 1rem;
      padding: 1rem;
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithLatestFromPipeComponent implements OnInit{
  mainForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl('')
  });
  result$!: Observable<string> | undefined;

  ngOnInit(): void {
      this.result$ = this.mainForm.get('lastName')?.valueChanges
        .pipe(
          withLatestFrom(this.mainForm.get('name')?.valueChanges as Observable<string>),
          map(([lastName, name]) => `${name} ${lastName}`)
        )
  }
}
