import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestDetailViewComponent } from './request-detail-view/request-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestListComponent,
    RequestDetailViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: RequestListComponent },
      { path: 'requestViewByGuid/:Guid', component: RequestDetailViewComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
