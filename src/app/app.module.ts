import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JsonplaceholderListComponent } from './jsonplaceholder-list/jsonplaceholder-list.component';
import { PicsumListComponent } from './picsum-list/picsum-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonplaceholderListComponent,
    PicsumListComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
