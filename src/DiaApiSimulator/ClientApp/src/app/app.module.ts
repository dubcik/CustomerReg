import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DiaApiSimulatorComponent } from './dia-api-simulator/dia-api-simulator.component';
import { DiaApiSimulatorFormComponent } from './dia-api-simulator/dia-api-simulator-form/dia-api-simulator-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaApiSimulatorComponent,
    DiaApiSimulatorFormComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DiaApiSimulatorComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
