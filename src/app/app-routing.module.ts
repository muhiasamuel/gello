import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './container/product-list/product-list/product-list.component';
import { ContainerComponent } from './container/container.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [

  {path:'',
    component:HomeComponent,
    children : [
      { path: '', component:LandingPageComponent , pathMatch: 'full' },  // Default route

      {path:'product-list',component:ContainerComponent },
      { path: '**', redirectTo: 'home' },
    ]
  },
  // { path: 'Categories', component: CategoriesComponent },

   // Fallback route for undefined path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
