import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES  } from '@angular/router';

import { MdToolbar } from '@angular2-material/toolbar/toolbar';
import { MdButton } from '@angular2-material/button/button';
import {MdCard, MdCardHeader, MdCardTitleGroup} from '@angular2-material/card/card';


import { Hero, HeroService, HeroView } from './hero/index';
import { HomeView } from './home/index';

@Component({
  selector: 'my-app',
  template: `

            <md-toolbar color="primary">
                <button md-icon-button (click)="nav.toggle()">
                    <i class="material-icons demo-toolbar-icon">menu</i>
                </button>
                <span> My Heros Application</span>
            </md-toolbar>

            <md-sidenav-layout class="hundred">

                <md-sidenav #nav opened="true" mode="side">
                    <md-list>
                        <md-list-item>
                            <button md-button (click)="navigateToHome()">Home</button>
                        </md-list-item>
                        <md-list-item>
                            <button md-button (click)="navigateToHeros()">Heros</button>
                        </md-list-item>
                    </md-list>
                </md-sidenav>

                <router-outlet></router-outlet>

            </md-sidenav-layout>
    
  `,
  styleUrls: ['app/app.css'],
  directives: [ROUTER_DIRECTIVES, MdToolbar, MdButton, MdCard, MdCardHeader, MdCardTitleGroup],
  providers: [HeroService]
})
@Routes([
    { path: '/', component: HomeView },
    { path: '/heros', component: HeroView }
])
export class AppComponent {

    constructor(private _router: Router) { }

    navigateToHome() {
        this._router.navigate(['/']);
    }

    navigateToHeros() {
        this._router.navigate(['/heros']);
    }
}
