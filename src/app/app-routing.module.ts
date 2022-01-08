import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { LaunchesListComponent } from './launches-list/launches-list.component';
import { RoadsterComponent } from './roadster/roadster.component';

const routes: Routes = [
  { path: '', component: CounterComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'launchesList', component: LaunchesListComponent },
  { path: 'roadster', component: RoadsterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
