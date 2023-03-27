import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './modules/todo/page/todo-page/todo-page.component';


//const routes: Routes = [];
const todoRoutes: Routes = [
  {
    path: '',
    component: TodoPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(todoRoutes),    
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }

