import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {Hero} from '../../index';

@Component({
    selector: 'my-hero-list',
    template: `
        <ul class="heroes">
            <li *ngFor="#hero of heros"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
    `,
    styleUrls: ['app/hero/components/hero-list/hero-list.css']
})
export class HeroListComponent {
    @Input()
    heros: Hero[];

    @Output()
    heroSelectedEvent: EventEmitter<Hero> = new EventEmitter<Hero>();

    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
        this.heroSelectedEvent.emit(hero);
    }
}
