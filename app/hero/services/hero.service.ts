import {Injectable} from 'angular2/core';

import {Hero, HEROS} from '../index';

@Injectable()
export class HeroService {
    getHeros() {
        return Promise.resolve(HEROS);
    }

    getHerosSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROS), 250)
        );
    }

    getHeroById(id) {
        var result = undefined;
        HEROS.forEach((hero) => {
            if(hero.id == id) {
                result = hero;
            }
        });
        console.log(result);
        return result;
    }
}
