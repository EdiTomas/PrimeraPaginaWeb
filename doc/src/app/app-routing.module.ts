import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';

const routes: Routes = [
    
     
    {
      path : '',
      redirectTo: '/inicio',
       pathMatch: 'full'
   }, 

  {  path: 'inicio', 
     component: PaginaprincipalComponent 
  }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
