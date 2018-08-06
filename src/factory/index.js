import set from './set'
import cost from './cost'
import stat from './stat'
import race from './race'
import rarity from './rarity'
import flavor from './flavor'

import request from '../request'
import pickOne from '../util/pick-one'
import pickSome from '../util/pick-some'
import { CARDS_JSON_URL as CARDS, STRINGS_JSON_URL as STRINGS } from '../config'

const factories = [set, cost, stat, race, rarity, flavor]

export default async count => {
  const database = {
    strings: await request(STRINGS),
    cards: (await request(CARDS)).filter(c => c.type !== 'HERO' || c.flavor)
  }

  return () => {
    const problem = pickOne(factories)(database)
    problem.choices = pickSome(database.cards, count, problem.criteria)
    return problem
  }
}
