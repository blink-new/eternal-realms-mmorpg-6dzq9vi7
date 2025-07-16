import { CharacterClass } from '../types/game'

export const characterClasses: CharacterClass[] = [
  {
    id: 'warrior',
    name: 'Warrior',
    description: 'Masters of melee combat, wielding sword and shield with unmatched prowess.',
    primary_stat: 'Strength',
    role: 'Tank',
    subclasses: ['Paladin', 'Dark Knight', 'Berserker'],
    icon: '⚔️'
  },
  {
    id: 'paladin',
    name: 'Paladin',
    description: 'Holy warriors who protect allies while smiting evil with divine power.',
    primary_stat: 'Strength',
    role: 'Tank',
    subclasses: [],
    icon: '🛡️'
  },
  {
    id: 'dark-knight',
    name: 'Dark Knight',
    description: 'Fallen warriors who embrace darkness to deal devastating damage.',
    primary_stat: 'Strength',
    role: 'DPS',
    subclasses: [],
    icon: '🗡️'
  },
  {
    id: 'berserker',
    name: 'Berserker',
    description: 'Savage fighters who enter battle rage for maximum damage output.',
    primary_stat: 'Strength',
    role: 'DPS',
    subclasses: [],
    icon: '🪓'
  },
  {
    id: 'archer',
    name: 'Archer',
    description: 'Skilled marksmen who strike from afar with deadly precision.',
    primary_stat: 'Dexterity',
    role: 'DPS',
    subclasses: ['Hunter', 'Sniper'],
    icon: '🏹'
  },
  {
    id: 'hunter',
    name: 'Hunter',
    description: 'Nature-bound archers with animal companions and tracking abilities.',
    primary_stat: 'Dexterity',
    role: 'DPS',
    subclasses: [],
    icon: '🦅'
  },
  {
    id: 'sniper',
    name: 'Sniper',
    description: 'Elite marksmen specializing in critical strikes and long-range combat.',
    primary_stat: 'Dexterity',
    role: 'DPS',
    subclasses: [],
    icon: '🎯'
  },
  {
    id: 'mage',
    name: 'Mage',
    description: 'Wielders of arcane magic, capable of devastating elemental attacks.',
    primary_stat: 'Intelligence',
    role: 'DPS',
    subclasses: ['Elementalist', 'Necromancer', 'Healer'],
    icon: '🔮'
  },
  {
    id: 'elementalist',
    name: 'Elementalist',
    description: 'Masters of fire, ice, and lightning magic with area-of-effect spells.',
    primary_stat: 'Intelligence',
    role: 'DPS',
    subclasses: [],
    icon: '⚡'
  },
  {
    id: 'necromancer',
    name: 'Necromancer',
    description: 'Dark mages who command undead minions and drain life from enemies.',
    primary_stat: 'Intelligence',
    role: 'DPS',
    subclasses: [],
    icon: '💀'
  },
  {
    id: 'healer',
    name: 'Healer',
    description: 'Divine spellcasters dedicated to supporting and healing their allies.',
    primary_stat: 'Wisdom',
    role: 'Healer',
    subclasses: [],
    icon: '✨'
  },
  {
    id: 'assassin',
    name: 'Assassin',
    description: 'Shadow warriors who strike from stealth with lethal precision.',
    primary_stat: 'Dexterity',
    role: 'DPS',
    subclasses: ['Thief', 'Ninja'],
    icon: '🗡️'
  },
  {
    id: 'thief',
    name: 'Thief',
    description: 'Cunning rogues with utility skills and stealth capabilities.',
    primary_stat: 'Dexterity',
    role: 'Support',
    subclasses: [],
    icon: '🔓'
  },
  {
    id: 'ninja',
    name: 'Ninja',
    description: 'Swift shadow warriors specializing in burst damage and mobility.',
    primary_stat: 'Dexterity',
    role: 'DPS',
    subclasses: [],
    icon: '🥷'
  }
]