import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './shared/components/form/form.component';
import { MoviesComponent } from './shared/components/movies/movies.component';
import { AlbumeComponent } from './shared/components/albume/albume.component';
import { FormsModule } from '@angular/forms';
import { SeriesComponent } from './shared/components/series/series.component';
import { CartoonComponent } from './shared/components/cartoon/cartoon.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    MoviesComponent,
    AlbumeComponent,
    SeriesComponent,
    CartoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
