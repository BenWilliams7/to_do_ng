import { NgModule }      from '@angular/core';
//NgModule imports general Module code from the Angular framework's core.
import { BrowserModule } from '@angular/platform-browser';
//BrowserModule imports code necessary to run our app in the browser, including built-in directives that allow us to add things like conditionals and loops to our components.
import { AppComponent }   from './app.component';
//AppComponent actually refers to the root component we created! We call it AppComponent because that's the name of the class declaration exported at the bottom of its file.
import { FormsModule }  from '@angular/forms';
import { TaskListComponent } from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import { NewTaskComponent } from './new-task.component';
import { CompletenessPipe } from './completeness.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  //imports is an array of other modules and content this module requires. Here, we import a built-in module called BrowserModule. Note that this imports array differs from the import statements at the top of the file. The import statements at the top import functionality from the Angular core. The imports array under the decorator imports other pieces of our application we want included in this module.
  declarations: [ AppComponent, TaskListComponent, EditTaskComponent, NewTaskComponent, CompletenessPipe ],
  //declarations is an array of all components that will reside in this module. Because we only have one root component, we only list AppComponent here.
  bootstrap:    [ AppComponent ]
  //bootstrap is an array of components required immediately upon launching the application. Because our page will use our root AppComponent right on the index, that component must be available as soon as the application boots up.
})

export class AppModule { }
//AppModule is the standard name for the root module's class declaration.
