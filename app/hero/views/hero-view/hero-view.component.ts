import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {RouteConfig, AuxRoute, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';

import {Empty} from '../../../empty/index';
import {HeroDetailView} from '../hero-detail-view/hero-detail-view.component';
import {Hero, HeroService, HeroListComponent} from '../../index';

@Component({
    selector: 'hero-view',
    template: `
        <div class="Grid">
            <div class="Grid-cell">
                <md-card>
                    <md-card-title>Heros</md-card-title>
                    <md-card-content>
                        <my-hero-list [heros]="heros" (heroSelectedEvent)="heroSelected($event)"></my-hero-list>
                    </md-card-content>
                </md-card>
            </div>
            <div class="Grid-cell">
                <!-- outlet for the detail view -->
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styleUrls: ['app/hero/views/hero-view/hero-view.css'],
    directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, HeroListComponent],
    providers: [HeroService]
})
@RouteConfig([
    {
        path: '',
        name: 'EmptyComponent',
        component: Empty,
        useAsDefault: true
    },
    {
        path: '/detail',
        name: 'HeroDetailView',
        component: HeroDetailView
    }
])
export class HeroView implements OnInit {

    constructor(private _heroService: HeroService,
                private _routeParams: RouteParams,
                private _router: Router) {}

    heros: Hero[];

    ngOnInit() {
        this._loadHeros();
    }

    heroSelected(hero: Hero) {
        this._router.navigate(['HeroView', 'HeroDetailView', {id: hero.id}]);
    }

    _loadHeros() {
        this._heroService.getHerosSlowly()
            .then(heros => {
                console.log('Load heros');
                this.heros = heros;
            });
    }
}
