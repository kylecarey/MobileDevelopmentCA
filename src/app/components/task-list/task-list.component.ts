import { Component, Input, NgModule, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/task';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})

export class TaskListComponent implements OnInit {
  tasks : Array <Task> = [];
  uid: string;

  constructor(
    private taskService: TaskService,
    public ngFireAuth: AngularFireAuth
  ) {
    this.ngOnInit();
  }

  async ngOnInit() {
    this.tasks = new Array<Task>();
    var uid = await this.getCurrentUserId();
    console.log(uid);
    var tsks = await this.taskService.getUserTasks(uid);
    console.log(tsks);
    this.tasks = this.populate(tsks);
    console.log(this.tasks);
  }

  populate(tasks: Observable<Task[]>): Task[]{
    var arr = new Array<Task>();
     tasks.forEach((element) =>{
      element.forEach(e =>{
        var temp = new Task();
        temp.id = null;
        temp.title = e.title;
        temp.description = e.description;
        temp.userId = e.userId;
        arr.push(temp);
      })
    })
    return arr;
  }

  create(task: Task) {
    this.taskService.updateTask(task);
  }

  update(task: Task) {
    this.taskService.updateTask(task);
  }

  delete(id: string) {
    this.taskService.deleteTask(id);
  }

  async getCurrentUserId() {
    var user = await this.ngFireAuth.currentUser;
    return user.uid;
  }
}

@NgModule({
  imports: [BrowserModule],
  declarations: [TaskListComponent]
})
class AppModule {

}
