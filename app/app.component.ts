import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  //@Component is known as a decorator. Decorators are special pieces of syntax that configure elements like components. The decorator above tells Angular that the code following it defines a new component and should therefore have the functionalities outlined by Angular's own Component code imported at the top of the file.
  selector: 'app-root',
  //selector: 'app-root' defines what tag corresponds with the component. Because we want this root component rendered within the <app-root></app-root> tags in index.html, the component's selector property must also be app-root. A component's selector determines what its corresponding tags will look like.
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>


    <hr>
    <edit-task [childSelectedTask]="selectedTask"></edit-task>
  </div>
  `
  //The template portion (above) provides the HTML that will be displayed wherever the component is placed. Because we've defined our root component's selector property as app-root, the HTML listed in the template property will be rendered wherever the <app-root></app-root> tags are placed. We placed ours directly in the <body> tags of index.html. So, the HTML <h1>My First Angular 2 App</h1> will render in those same <body> tags.
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedTask = null;

  masterTaskList: Task[] = [
    new Task('Resolve existential angst', 1),
    new Task('Stare into void until it blinks', 2),
    new Task('Paint the black hole blacker', 3)
  ];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing(){
    this.selectedTask = null;
  }
}
