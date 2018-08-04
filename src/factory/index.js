import set from './set'
import cost from './cost'
import stat from './stat'
import race from './race'

import request from '../request'
import pickOne from '../util/pick-one'
import pickSome from '../util/pick-some'
import { CARDS_JSON_URL as CARDS, STRINGS_JSON_URL as STRINGS } from '../config'

const factories = [set, cost, stat, race]

export default async count => {
  const database = {
    strings: await request(STRINGS),
    cards: (await request(CARDS)).filter(c => c.type !== 'HERO' || c.flavor)
  }

  return () => {
    const {value} = pickOne(factories)(database, count).next()
    value.choices = pickSome(database.cards, count, value.criteria)
    return value
  }
}
