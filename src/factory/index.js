import set from './set'
import cost from './cost'

import request from '../request'
import pickOne from '../util/pick-one'
import { CARDS_JSON_URL as CARDS, STRINGS_JSON_URL as STRINGS } from '../config'

const factories = [set, cost]

export default async count => {
  const cards = await request(CARDS)

  const database = {
    strings: await request(STRINGS),
    cards: cards.filter(c => c.type !== 'HERO' || c.flavor)
  }

  return () => pickOne(factories)(database, count)
}
