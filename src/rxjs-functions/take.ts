import { from, take } from "rxjs"
import { toConveyorBelt } from './../global.lib'

const fruits = from([
    "banana",
    "banana",
    "banana",
    "banana"]);

fruits.pipe(
    take(2),
).subscribe(fruit => toConveyorBelt(fruit));
