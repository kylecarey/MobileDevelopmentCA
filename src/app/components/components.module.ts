import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [TaskListComponent],
  exports: [TaskListComponent],
})
export class ComponentsModule {}
