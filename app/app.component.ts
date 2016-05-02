import {Component} from 'angular2/core';

import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MdSidenav, MdSidenavLayout} from '@angular2-material/sidenav/sidenav';
import {MdCard, MdCardHeader, MdCardTitleGroup} from '@angular2-material/card/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdButton} from '@angular2-material/button/button';

import {HomeView} from './home/index';
import {HeroView} from './hero/views/index';

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

            <!--router-outlet name="detail"></router-outlet-->

        </md-sidenav-layout>

   `,
   styleUrls: ['app/app.css'],
   directives: [ROUTER_DIRECTIVES, MD_LIST_DIRECTIVES, MdButton, MdToolbar, MdSidenav, MdSidenavLayout, MdCard, MdCardHeader, MdCardTitleGroup]
})
@RouteConfig([
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
        useAsDefault: true
    },
    {
        path: '/heros/...',
        name: 'HeroView',
        component: HeroView
    }
])
export class AppComponent {
    constructor(private _router: Router) {}

    navigateToHome() {
        this._router.navigate(['HomeView']);
    }

    navigateToHeros() {
        this._router.navigate(['HeroView']);
    }
}
