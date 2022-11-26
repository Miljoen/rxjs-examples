import { log } from 'console'
import { from } from 'rxjs'

const fruits = from([
    "apple",
    "banana",
    "cherry"
])

fruits.subscribe(toConveyerBelt)

function toConveyerBelt(fruit: string): void {
    log(`Going to conveyer belt: ${fruit}`)
}
