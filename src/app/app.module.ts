import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HelloComponent } from './components/hello/hello.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MyStackComponent } from './components/my-stack/my-stack.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ModalComponent } from './components/modal/modal.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloComponent,
    AboutMeComponent,
    MyStackComponent,
    CardProjectComponent,
    ProjectsComponent,
    ModalComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
