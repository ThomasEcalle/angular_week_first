import {Pokemon} from "./Pokemon";

export function whichPokemonStart(first: Pokemon, second: Pokemon): Pokemon {
    return second.speed > first.speed ? second : first;
}
