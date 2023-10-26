import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent},
  { path: 'contacts/:id', component:ContactListComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
