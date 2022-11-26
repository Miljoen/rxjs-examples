import { distinct, from } from "rxjs"
import { toConveyorBelt } from './../global.lib'

const fruits = from([
    "apple",
    "apple",
    "banana",
    "apple"
])

fruits.pipe(
    distinct(),
).subscribe(fruit => toConveyorBelt(fruit))
