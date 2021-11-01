import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  task = {
    title: '',
    description: '',

  };

  constructor(router: Router, public ngFireAuth: AngularFireAuth, private ts: TaskService) {}

  async addTask() {
    var user = await this.ngFireAuth.currentUser;
    var task = new Task;
    task.userId = user.uid;
    task.title = this.task.title;
    task.description = this.task.description;
    console.log("Here");
    this.ts.createTask(task);
    alert("Task successfully Created!")
  }
}

