import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'any'
})
export class TasksService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    completed: new FormControl(false)
  });

  // Create
  createTask(data){
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('tasks').add(data).then(res => {}, err => reject(err));
    })
  }

  // Read
  getTasks(userId){
    return this.firestore.collection('tasks', ref => ref.where("userId", "==", userId)).snapshotChanges();
  }

  // Update
  updateTask(data){
    return this.firestore.collection('tasks').doc(data.payload.doc.id).set({completed: true}, {merge: true});
  }

  // Delete
  deleteTask(data) {
    return this.firestore.collection('tasks').doc(data.payload.doc.id).delete();
  }
}
