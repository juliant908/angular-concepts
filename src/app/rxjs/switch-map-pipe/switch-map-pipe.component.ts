import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject, of, switchMap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

class SwitchMapPipeService {
  getUsers(search: string) {
    const filteredUsers = this.users().filter(user => user.name.toLowerCase().includes(search))
    return filteredUsers ? of(filteredUsers) : EMPTY;
  }

  users() {
    return [
      {
        name: 'John',
        age: 20
      },
      {
        name: 'Doe',
        age: 30
      },
      {
        name: 'Jane',
        age: 25
      },
      {
        name: 'Smith',
        age: 40
      }
    ]
  }
}

@Component({
  selector: 'ng-switch-map-pipe',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './switch-map-pipe.component.html',
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
export class SwitchMapPipeComponent implements OnInit{
  searchTerm$ = new Subject<string>();
  results$: Observable<any> = new Observable();

  service = new SwitchMapPipeService();
  ngOnInit(): void {
    this.results$ = this.searchTerm$.pipe(
      switchMap(search => this.service.getUsers(search)),
    );
  }

  search(search: any) {
    this.searchTerm$.next(search.target.value);
  }

}
