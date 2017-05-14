import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';

import { GitRepoComponent } from './git-repo/git-repo.component';
import { GitRepoService } from './git-repo/git-repo.service';

@NgModule({
  declarations: [
    AppComponent,
    GitRepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    HttpModule
  ],
  providers: [GitRepoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
