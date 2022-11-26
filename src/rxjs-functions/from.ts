import { from } from 'rxjs'
import { toConveyorBelt } from './../global.lib'

const fruits = from([
    "apple",
    "banana",
    "cherry"
])

fruits.subscribe(toConveyorBelt)
