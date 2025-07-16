import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { characterClasses } from '../../data/character-classes'
import { CharacterClass } from '../../types/game'

const roleColors = {
  Tank: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  DPS: 'bg-red-500/20 text-red-400 border-red-500/30',
  Support: 'bg-green-500/20 text-green-400 border-green-500/30',
  Healer: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
}

function ClassCard({ characterClass }: { characterClass: CharacterClass }) {
  return (
    <Card className="bg-fantasy-dark/50 border-fantasy-primary/30 hover:border-fantasy-accent/50 transition-all duration-300 group hover:scale-105">
      <CardHeader className="text-center pb-4">
        <div className="text-4xl mb-3 group-hover:animate-float">
          {characterClass.icon}
        </div>
        <CardTitle className="font-fantasy text-xl text-fantasy-accent">
          {characterClass.name}
        </CardTitle>
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge 
            variant="outline" 
            className={roleColors[characterClass.role]}
          >
            {characterClass.role}
          </Badge>
          <Badge variant="outline" className="border-fantasy-primary/50 text-muted-foreground">
            {characterClass.primary_stat}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {characterClass.description}
        </CardDescription>
        
        {characterClass.subclasses.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-fantasy-accent font-medium mb-2">Subclasses:</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {characterClass.subclasses.map((subclass) => (
                <Badge 
                  key={subclass} 
                  variant="secondary" 
                  className="text-xs bg-fantasy-primary/20 text-fantasy-accent border-fantasy-primary/30"
                >
                  {subclass}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full border-fantasy-primary text-fantasy-accent hover:bg-fantasy-primary/20"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}

export function CharacterClassesSection() {
  // Group classes by base type
  const baseClasses = characterClasses.filter(c => c.subclasses.length > 0)
  const allClasses = characterClasses

  return (
    <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fantasy font-bold mb-6">
            <span className="fantasy-text-gradient">Choose Your Destiny</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master one of 12 unique character classes, each with distinct abilities, 
            playstyles, and progression paths. From mighty warriors to cunning assassins, 
            find your perfect role in the eternal conflict.
          </p>
        </div>

        {/* Base Classes Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-fantasy font-semibold text-fantasy-accent mb-8 text-center">
            Base Classes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {baseClasses.map((characterClass) => (
              <ClassCard key={characterClass.id} characterClass={characterClass} />
            ))}
          </div>
        </div>

        {/* All Classes Grid */}
        <div>
          <h3 className="text-2xl font-fantasy font-semibold text-fantasy-accent mb-8 text-center">
            All Available Classes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allClasses.map((characterClass) => (
              <ClassCard key={characterClass.id} characterClass={characterClass} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-fantasy-dark/30 border-fantasy-primary/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-fantasy font-bold fantasy-text-gradient mb-4">
              Ready to Begin Your Adventure?
            </h3>
            <p className="text-muted-foreground mb-6">
              Create your character and join thousands of players in the ultimate MMORPG experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="fantasy-gradient text-white hover:opacity-90"
              >
                Create Character
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-fantasy-primary text-fantasy-accent hover:bg-fantasy-primary/20"
              >
                View Character Builder
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}