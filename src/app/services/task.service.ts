import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { element } from 'protractor';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { threadId } from 'worker_threads';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task$: Observable<Task[]>
  user$: BehaviorSubject<string>;

  constructor(private firestore: AngularFirestore, private ngFireAuth: AngularFireAuth) {
  
  }

  getTasks(){
    return this.firestore.collection('tasks').snapshotChanges();
  }

  async getUserTasks(userId: string){
    // Creating the Query
    this.user$ = new BehaviorSubject(userId);
        
    // Getting Results
    this.task$ = this.user$.pipe(
      switchMap(task => { return this.firestore.collection<Task>('tasks', ref => ref.where('userId', '==', task)).valueChanges() })
    );

    return this.task$;
  }

  createTask(task: Task){
    var t = JSON.stringify(task);
    var ta = JSON.parse(t);
    return this.firestore.collection('tasks').add(ta);
  }

  updateTask(task: Task){
    delete task.id;
    this.firestore.doc('tasks/' + task.id).update(task);
  }

  deleteTask(taskId: string){
    this.firestore.doc('tasks/' + taskId).delete();
  }
}
