import {Component, OnInit} from '@angular/core';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { HeroListComponent } from '../../components/hero-list/hero-list.component';
import { HeroDetailView } from '../hero-detail-view/hero-detail-view.component';

import { Routes, Router, ROUTER_DIRECTIVES  } from '@angular/router';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';


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
@Routes([
    { path: '/detail/:id', component: HeroDetailView}
])
export class HeroView implements OnInit {

    constructor(private _heroService: HeroService,
                private _router: Router) {}

    heros: Hero[];

    ngOnInit() {
        this._loadHeros();
    }

    heroSelected(hero: Hero) {
        this._router.navigate(['/heros/detail/', hero.id]);
    }

    _loadHeros() {
        this._heroService.getHerosSlowly()
            .then(heros => {
                console.log('Load heros');
                this.heros = heros;
            });
    }
}
