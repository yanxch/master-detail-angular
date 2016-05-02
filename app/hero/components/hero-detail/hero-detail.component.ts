import {Component, Input} from 'angular2/core';

import {Hero} from '../../index';

@Component({
    selector: 'my-hero-detail',
    template: `
        <h2>{{hero.name}}</h2>
        <div>
            <label>id: </label>
            {{hero.id}}
        </div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name" />
        </div>
    `
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
