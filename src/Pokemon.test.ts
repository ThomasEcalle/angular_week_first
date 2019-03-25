import {Move, Pokemon, Type} from './Pokemon'
import {whichPokemonStart} from './PokemonUtils'

const ditto = new Pokemon("ditto",
    10,
    48,
    48,
    48,
    48,
    48,
    48,
    Type.FLYING,
    new Move("ecrase'face", 10, Type.NORMAL));


const pikachu = new Pokemon("pikachu",
    10,
    35,
    55,
    40,
    50,
    50,
    90,
    Type.ELECTRIC,
    new Move("eclair", 15, Type.ELECTRIC)
);


describe("Pokemons speed comparaison", () => {
    it("should be Pickachu that starts before Ditto", () => {
        expect(whichPokemonStart(ditto, pikachu)).toBe(pikachu);
    });

    it("should be first pokemon if both speed are equals", () => {
        ditto.speed = 50;
        pikachu.speed = 50;
        expect(whichPokemonStart(ditto, pikachu)).toBe(ditto);
    });
});

describe("Pokemons fighting tests", () => {

    it("Pikachu should attack ditto", () => {
        const dittoInitialHp = ditto.hp;
        const pikachuAttackDamages = pikachu.move.calculateDamages(pikachu, ditto);
        pikachu.attackOn(ditto);
        expect(ditto.hp).toBe(dittoInitialHp - pikachuAttackDamages);
    });
});
