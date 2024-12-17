import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './container/product-list/product-list/product-list.component';
import { ContainerComponent } from './container/container.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './authentication/login/sign-in.component';
import SignUpComponent from './authentication/sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  {path: 'sign-in',component:SignInComponent},
  {path: 'sign-up',component:SignUpComponent},
  {path:'',
    component:HomeComponent,
    children : [
      { path: '', component:LandingPageComponent , pathMatch: 'full' },  // Default route

      {path:'product-list',component:ContainerComponent },
      {path:'about',component:AboutComponent },
      { path: '**', redirectTo: 'home' }, 
    ]
  },
  

   // Fallback route for undefined path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }