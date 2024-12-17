import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';  // Import MatIconModule
import {MatMenuModule} from '@angular/material/menu';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { HighlightsDirective } from './container/Custom directive/highlights.directive';
import { SetBackgroundDirective } from './container/Custom directive/set-background.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './container/product-list/product-list/product-list.component';
import { ProductDetailsComponent } from './container/product-list/product-details/product-details.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment} from './firebase/environmentFireBase';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './authentication/login/sign-in.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    SetBackgroundDirective,
    HighlightsDirective,
    FooterComponent,
    HomeComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    SignInComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAuthModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
