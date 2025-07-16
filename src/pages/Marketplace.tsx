import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { 
  ShoppingCart, 
  Search, 
  Filter, 
  Sword, 
  Shield, 
  Gem, 
  Coins,
  Star,
  Clock,
  User,
  TrendingUp,
  Package
} from 'lucide-react'

interface MarketItem {
  id: string
  name: string
  type: 'weapon' | 'armor' | 'accessory' | 'consumable' | 'material'
  rarity: 'common' | 'magic' | 'rare' | 'epic' | 'legendary' | 'mythic'
  level: number
  enhancement: number
  price: number
  seller: string
  timeLeft: string
  stats?: { [key: string]: number }
  image?: string
}

interface CraftingMaterial {
  id: string
  name: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  price: number
  quantity: number
  seller: string
  description: string
}

const marketItems: MarketItem[] = [
  {
    id: '1',
    name: 'Shadowbane Greatsword',
    type: 'weapon',
    rarity: 'legendary',
    level: 65,
    enhancement: 12,
    price: 2500000,
    seller: 'DragonSlayer',
    timeLeft: '2h 34m',
    stats: { attack: 2847, critical: 34 }
  },
  {
    id: '2',
    name: 'Draconic Plate Armor',
    type: 'armor',
    rarity: 'epic',
    level: 60,
    enhancement: 10,
    price: 1800000,
    seller: 'Ironshield',
    timeLeft: '5h 12m',
    stats: { defense: 1923, health: 5000 }
  },
  {
    id: '3',
    name: 'Ring of Ancient Power',
    type: 'accessory',
    rarity: 'mythic',
    level: 70,
    enhancement: 8,
    price: 5000000,
    seller: 'Mysticfire',
    timeLeft: '1h 45m',
    stats: { magic_power: 1456, mana: 2000 }
  },
  {
    id: '4',
    name: 'Greater Health Potion',
    type: 'consumable',
    rarity: 'rare',
    level: 1,
    enhancement: 0,
    price: 5000,
    seller: 'AlchemyMaster',
    timeLeft: '12h 30m'
  },
  {
    id: '5',
    name: 'Crown of Shadows',
    type: 'armor',
    rarity: 'legendary',
    level: 68,
    enhancement: 9,
    price: 3200000,
    seller: 'Nightwhisper',
    timeLeft: '3h 20m',
    stats: { defense: 1234, magic_resist: 28 }
  },
  {
    id: '6',
    name: 'Boots of Swiftness',
    type: 'armor',
    rarity: 'epic',
    level: 55,
    enhancement: 11,
    price: 950000,
    seller: 'Swiftarrow',
    timeLeft: '8h 15m',
    stats: { defense: 567, speed: 42 }
  }
]

const craftingMaterials: CraftingMaterial[] = [
  {
    id: '1',
    name: 'Dragon Scale',
    rarity: 'legendary',
    price: 150000,
    quantity: 5,
    seller: 'DragonHunter',
    description: 'Rare scales from ancient dragons, used in legendary equipment crafting'
  },
  {
    id: '2',
    name: 'Shadow Essence',
    rarity: 'epic',
    price: 75000,
    quantity: 12,
    seller: 'VoidWalker',
    description: 'Dark magical essence extracted from shadow creatures'
  },
  {
    id: '3',
    name: 'Mithril Ore',
    rarity: 'rare',
    price: 25000,
    quantity: 50,
    seller: 'MinerGuild',
    description: 'Precious metal ore used in high-quality weapon smithing'
  },
  {
    id: '4',
    name: 'Phoenix Feather',
    rarity: 'legendary',
    price: 200000,
    quantity: 2,
    seller: 'FireMage',
    description: 'Mystical feathers that grant fire resistance and regeneration'
  },
  {
    id: '5',
    name: 'Crystal Shard',
    rarity: 'epic',
    price: 50000,
    quantity: 25,
    seller: 'CrystalMiner',
    description: 'Magical crystals used to enhance equipment properties'
  }
]

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'common': return 'text-gray-400 border-gray-500/30'
    case 'magic': return 'text-green-400 border-green-500/30'
    case 'rare': return 'text-blue-400 border-blue-500/30'
    case 'epic': return 'text-purple-400 border-purple-500/30'
    case 'legendary': return 'text-yellow-400 border-yellow-500/30'
    case 'mythic': return 'text-red-400 border-red-500/30'
    default: return 'text-gray-400 border-gray-500/30'
  }
}

const getRarityGlow = (rarity: string) => {
  switch (rarity) {
    case 'legendary': return 'shadow-lg shadow-yellow-500/20'
    case 'mythic': return 'shadow-lg shadow-red-500/20'
    case 'epic': return 'shadow-lg shadow-purple-500/20'
    default: return ''
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'weapon': return <Sword className="w-4 h-4" />
    case 'armor': return <Shield className="w-4 h-4" />
    case 'accessory': return <Gem className="w-4 h-4" />
    case 'consumable': return <Package className="w-4 h-4" />
    case 'material': return <Star className="w-4 h-4" />
    default: return <Package className="w-4 h-4" />
  }
}

export function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedRarity, setSelectedRarity] = useState('all')
  const [sortBy, setSortBy] = useState('price_low')

  const filteredItems = marketItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory
    const matchesRarity = selectedRarity === 'all' || item.rarity === selectedRarity
    return matchesSearch && matchesCategory && matchesRarity
  })

  return (
    <div className="min-h-screen bg-fantasy-background pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-fantasy font-bold fantasy-text-gradient mb-2">
            Marketplace
          </h1>
          <p className="text-muted-foreground">
            Trade equipment, materials, and consumables with other players
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="bg-fantasy-dark/50 border-fantasy-primary/30 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-fantasy-background/50 border-fantasy-primary/30 focus:border-fantasy-accent"
                  />
                </div>
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 bg-fantasy-background/50 border-fantasy-primary/30">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="weapon">Weapons</SelectItem>
                  <SelectItem value="armor">Armor</SelectItem>
                  <SelectItem value="accessory">Accessories</SelectItem>
                  <SelectItem value="consumable">Consumables</SelectItem>
                  <SelectItem value="material">Materials</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRarity} onValueChange={setSelectedRarity}>
                <SelectTrigger className="w-full md:w-48 bg-fantasy-background/50 border-fantasy-primary/30">
                  <SelectValue placeholder="Rarity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rarities</SelectItem>
                  <SelectItem value="common">Common</SelectItem>
                  <SelectItem value="magic">Magic</SelectItem>
                  <SelectItem value="rare">Rare</SelectItem>
                  <SelectItem value="epic">Epic</SelectItem>
                  <SelectItem value="legendary">Legendary</SelectItem>
                  <SelectItem value="mythic">Mythic</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 bg-fantasy-background/50 border-fantasy-primary/30">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price_low">Price: Low to High</SelectItem>
                  <SelectItem value="price_high">Price: High to Low</SelectItem>
                  <SelectItem value="level">Level</SelectItem>
                  <SelectItem value="time">Time Left</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="equipment" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-fantasy-dark/50 border border-fantasy-primary/30">
            <TabsTrigger value="equipment" className="data-[state=active]:bg-fantasy-primary/20 data-[state=active]:text-fantasy-accent">
              <Sword className="w-4 h-4 mr-2" />
              Equipment
            </TabsTrigger>
            <TabsTrigger value="materials" className="data-[state=active]:bg-fantasy-primary/20 data-[state=active]:text-fantasy-accent">
              <Gem className="w-4 h-4 mr-2" />
              Materials
            </TabsTrigger>
            <TabsTrigger value="my_listings" className="data-[state=active]:bg-fantasy-primary/20 data-[state=active]:text-fantasy-accent">
              <User className="w-4 h-4 mr-2" />
              My Listings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="equipment" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card 
                  key={item.id} 
                  className={`bg-fantasy-dark/50 border-fantasy-primary/30 hover:border-fantasy-accent/50 transition-all duration-300 ${getRarityGlow(item.rarity)}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(item.type)}
                        <Badge variant="outline" className={getRarityColor(item.rarity)}>
                          {item.rarity}
                        </Badge>
                      </div>
                      {item.enhancement > 0 && (
                        <Badge className="bg-fantasy-accent/20 text-fantasy-accent border-fantasy-accent/30">
                          +{item.enhancement}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-fantasy-accent font-fantasy text-lg">
                      {item.name}
                    </CardTitle>
                    <CardDescription>
                      Level {item.level} • {item.type}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {item.stats && (
                      <div className="space-y-1">
                        {Object.entries(item.stats).map(([stat, value]) => (
                          <div key={stat} className="flex justify-between text-sm">
                            <span className="capitalize">{stat.replace('_', ' ')}</span>
                            <span className="font-bold text-fantasy-accent">
                              {typeof value === 'number' ? value.toLocaleString() : value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="border-t border-fantasy-primary/20 pt-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Price</span>
                        <div className="flex items-center space-x-1">
                          <Coins className="w-4 h-4 text-fantasy-accent" />
                          <span className="font-bold text-fantasy-accent">
                            {item.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-muted-foreground">Seller</span>
                        <span className="text-sm font-medium">{item.seller}</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          Time left
                        </span>
                        <span className="text-sm font-medium text-fantasy-accent">
                          {item.timeLeft}
                        </span>
                      </div>
                      
                      <Button className="w-full fantasy-gradient text-white hover:opacity-90">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="materials" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {craftingMaterials.map((material) => (
                <Card 
                  key={material.id} 
                  className="bg-fantasy-dark/50 border-fantasy-primary/30 hover:border-fantasy-accent/50 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={getRarityColor(material.rarity)}>
                        {material.rarity}
                      </Badge>
                      <Badge className="bg-fantasy-primary/20 text-fantasy-accent border-fantasy-primary/30">
                        x{material.quantity}
                      </Badge>
                    </div>
                    <CardTitle className="text-fantasy-accent font-fantasy text-lg">
                      {material.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {material.description}
                    </p>
                    
                    <div className="border-t border-fantasy-primary/20 pt-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Price per unit</span>
                        <div className="flex items-center space-x-1">
                          <Coins className="w-4 h-4 text-fantasy-accent" />
                          <span className="font-bold text-fantasy-accent">
                            {material.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-muted-foreground">Seller</span>
                        <span className="text-sm font-medium">{material.seller}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1 fantasy-gradient text-white hover:opacity-90">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Buy All
                        </Button>
                        <Button variant="outline" className="border-fantasy-primary text-fantasy-accent hover:bg-fantasy-primary/20">
                          Custom
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my_listings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-fantasy-dark/50 border-fantasy-primary/30">
                  <CardHeader>
                    <CardTitle className="text-fantasy-accent font-fantasy">
                      Your Active Listings
                    </CardTitle>
                    <CardDescription>
                      Manage your items currently for sale
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <Package className="w-16 h-16 text-fantasy-accent mx-auto mb-4 opacity-50" />
                      <h3 className="text-lg font-medium text-fantasy-accent mb-2">
                        No Active Listings
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        You don't have any items for sale right now
                      </p>
                      <Button className="fantasy-gradient text-white hover:opacity-90">
                        <Package className="w-4 h-4 mr-2" />
                        List an Item
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-fantasy-dark/50 border-fantasy-primary/30">
                  <CardHeader>
                    <CardTitle className="text-fantasy-accent font-fantasy">
                      Sales Statistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Items Sold</span>
                      <span className="font-bold text-fantasy-accent">23</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Revenue</span>
                      <span className="font-bold text-fantasy-accent">1,247,500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average Price</span>
                      <span className="font-bold text-fantasy-accent">54,239</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Success Rate</span>
                      <span className="font-bold text-fantasy-accent">87.3%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-fantasy-dark/50 border-fantasy-primary/30">
                  <CardHeader>
                    <CardTitle className="text-fantasy-accent font-fantasy">
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full fantasy-gradient text-white hover:opacity-90">
                      <Package className="w-4 h-4 mr-2" />
                      Sell Equipment
                    </Button>
                    <Button variant="outline" className="w-full border-fantasy-primary text-fantasy-accent hover:bg-fantasy-primary/20">
                      <Gem className="w-4 h-4 mr-2" />
                      Sell Materials
                    </Button>
                    <Button variant="outline" className="w-full border-fantasy-primary text-fantasy-accent hover:bg-fantasy-primary/20">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Price History
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}