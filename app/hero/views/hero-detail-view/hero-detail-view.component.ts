import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MdButton} from '@angular2-material/button/button';

import {Hero, HeroService, HeroDetailComponent} from '../../index';

@Component({
    selector: 'hero-detail-view',
    template: `
        <div *ngIf="selectedHero">

            <md-card>
                <md-card-title>Hero Detail</md-card-title>
                <md-card-content>
                    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
                </md-card-content>
                <md-card-actions>
                    <button md-button color="primary" (click)="save()">Save</button>
                    <button md-button color="primary" (click)="cancel()">Cancel</button>
                </md-card-actions>
            </md-card>

        </div>
    `,
    styleUrls: ['app/hero/views/hero-detail-view/hero-detail-view.css'],
    providers: [HeroService],
    directives: [MD_CARD_DIRECTIVES, MdButton, HeroDetailComponent]
})
export class HeroDetailView implements OnInit {

    constructor(private _routeParams: RouteParams,
                private _router: Router,
                private _heroService: HeroService) {}

    selectedHero: Hero;

    ngOnInit() {
        console.log('HeroDetailView');
        var id = this._routeParams.get('id');
        this.selectedHero = this._heroService.getHeroById(id);
        console.log(id);
    }

    save() {
        console.log('shaved');
        this._router.navigate(['/HeroView']);
    }

    cancel() {
        console.log('canceld');
        this._router.navigate(['/HeroView']);
    }
}
