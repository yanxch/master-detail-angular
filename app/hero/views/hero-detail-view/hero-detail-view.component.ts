import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import { Hero, HeroService, HeroDetailComponent }  from '../../index';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MdButton} from '@angular2-material/button/button';


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
    directives: [MD_CARD_DIRECTIVES, MdButton, HeroDetailComponent],
    providers: [HeroService]
})
export class HeroDetailView implements OnActivate {

    constructor(private _router: Router,
                private _heroService: HeroService) {}

    selectedHero: Hero;

    routerOnActivate(curr: RouteSegment): void {
        let id = curr.getParam('id');
        this.selectedHero = this._heroService.getHeroById(id);
    }

    save() {
        console.log('shaved');
        this._router.navigate(['/heros']);
    }

    cancel() {
        console.log('canceld');
        this._router.navigate(['/heros']);
    }
}
