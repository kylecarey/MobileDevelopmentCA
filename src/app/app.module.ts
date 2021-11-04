import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksService } from './services/tasks/tasks.service';
import { ReactiveFormsModule } from '@angular/forms';

// Importing Firebase details from environment and FireModule
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { TasksComponent } from './components/TaskComponents/tasks/tasks.component';
import { TaskListComponent } from './components/TaskComponents/task-list/task-list.component';

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskListComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
