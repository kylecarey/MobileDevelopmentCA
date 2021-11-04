import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import * as firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {

  constructor(private tasksService: TasksService, private ngFireAuth: AngularFireAuth) { }

   ngOnInit() { 
    this.ngFireAuth.currentUser.then(e => {
      this.getTasks(e.uid);
    })
   }

   taskList;
   getTasks = (uid) => {
     this.tasksService.getTasks(uid).subscribe(res => (this.taskList = res));
   }

}
