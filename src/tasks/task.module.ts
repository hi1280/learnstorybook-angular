import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TaskComponent } from './components/task.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { TasksState } from './state/task.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, PureTaskListComponent],
  declarations: [TaskComponent, PureTaskListComponent],
  providers: [],
})
export class TaskModule {}
