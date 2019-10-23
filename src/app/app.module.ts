import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WhenPipe } from './Pipes/when.pipe';
import { ShowPipeComponent } from './show-pipe/show-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    WhenPipe,
    ShowPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
