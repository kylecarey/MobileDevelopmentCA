import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  @ViewChild('mySuccessOut') divElementRef: ElementRef;
  divElement: HTMLElement;

  constructor(
    private tasksService: TasksService,
    private ngFireAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    try {
      this.divElement = this.divElementRef.nativeElement;
      this.divElement.style.visibility = "hidden";
    } catch (err) {
      console.log(err);
    }
  }

  taskList = [];

  removeTask = (task) => {
    let index = this.taskList.indexOf(task);
    if (index > -1) this.taskList.splice(index, 1);
  };

  onSubmit() {
    let data = this.tasksService.form.value;
    this.ngFireAuth.currentUser.then((e) => {
      data.userId = e.uid;
      this.tasksService.createTask(data);
      alert('Task Added!');
      this.divElement.style.visibility = "visible";
      this.tasksService.form.reset();
    });

  }
}
