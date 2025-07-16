export interface Character {
  id: string
  name: string
  class: CharacterClass
  level: number
  experience: number
  stats: CharacterStats
  equipment: Equipment[]
  guild_id?: string
  created_at: string
  last_played: string
  user_id: string
}

export interface CharacterClass {
  id: string
  name: string
  description: string
  primary_stat: string
  role: 'Tank' | 'DPS' | 'Support' | 'Healer'
  subclasses: string[]
  icon: string
}

export interface CharacterStats {
  strength: number
  dexterity: number
  intelligence: number
  constitution: number
  wisdom: number
  charisma: number
  health: number
  mana: number
  armor: number
}

export interface Equipment {
  id: string
  name: string
  type: EquipmentType
  rarity: ItemRarity
  level: number
  enhancement: number
  stats: Partial<CharacterStats>
  set_bonus?: string
}

export type EquipmentType = 
  | 'weapon' 
  | 'armor' 
  | 'helmet' 
  | 'boots' 
  | 'gloves' 
  | 'ring' 
  | 'necklace' 
  | 'earring'

export type ItemRarity = 
  | 'common' 
  | 'magic' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'mythic'

export interface Guild {
  id: string
  name: string
  description: string
  level: number
  members: GuildMember[]
  castle_id?: string
  created_at: string
  leader_id: string
}

export interface GuildMember {
  user_id: string
  character_name: string
  rank: 'Leader' | 'Officer' | 'Veteran' | 'Member'
  contribution: number
  joined_at: string
}

export interface Zone {
  id: string
  name: string
  description: string
  level_range: [number, number]
  type: 'City' | 'Dungeon' | 'PvP' | 'Raid' | 'Open World'
  coordinates: [number, number]
  is_conquered?: boolean
  controlling_guild?: string
}