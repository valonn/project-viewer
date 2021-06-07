import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ProjectListModule} from './project-list/project-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './service/in-memory-data.service';
import {ViewModule} from './view/view.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        ProjectListModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        ),
        ViewModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
