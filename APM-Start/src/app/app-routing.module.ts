import { NgModule }  from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { Router } from '@angular/router/src/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent},
            { path: '', redirectTo: 'welcome', pathMatch: 'full'},
            { path: '**', component: PageNotFoundComponent }
          ], { /*enableTracing: true */})
    ],
    exports: [ RouterModule]
})

export class AppRoutingModule{ }