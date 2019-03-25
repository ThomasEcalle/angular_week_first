import {Move, Pokemon, Type} from "./Pokemon";
import {whichPokemonStart} from "./PokemonUtils";

const ditto = new Pokemon("ditto",
    10,
    48,
    48,
    48,
    48,
    48,
    48,
    Type.FLYING,
    new Move("ecrase'face", 3, Type.NORMAL));


const pikachu = new Pokemon("pikachu",
    10,
    35,
    55,
    40,
    50,
    50,
    90,
    Type.ELECTRIC,
    new Move("eclair", 5, Type.ELECTRIC)
);

console.log(`Starting fight between ${ditto.name} and ${pikachu.name}`);

const starter = whichPokemonStart(ditto, pikachu);
const other = starter == ditto ? pikachu : ditto;

console.log(`${starter.name} will start the fight`);

let attacker = starter;
let defender = other;
let winner = undefined;
while (winner === undefined) {
    console.log(`${attacker.name} attack ${defender.name} with ${attacker.move.name}`);
    attacker.attackOn(defender);
    console.log(`${defender.name} has ${defender.hp} hps left`);

    if (defender.hp <= 0) winner = attacker;

    const tmp = attacker;
    attacker = defender;
    defender = tmp;
}

console.log(`${winner.name} has won the fight`);


