import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Sword, Shield, Zap, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-fantasy-background via-fantasy-dark to-fantasy-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,90,60,0.3)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(212,175,55,0.2)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-fantasy-accent rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <div className="mb-12">
          <Badge 
            variant="outline" 
            className="mb-6 border-fantasy-accent text-fantasy-accent bg-fantasy-accent/10 animate-glow"
          >
            🎮 Now in Open Beta
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-fantasy font-bold mb-6 leading-tight">
            <span className="fantasy-text-gradient">Eternal Realms</span>
            <br />
            <span className="text-3xl md:text-4xl text-muted-foreground">
              MMORPG Portal
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Enter a vast fantasy world with 12 unique character classes, epic guild warfare, 
            and endless adventures across 50km² of immersive landscapes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="fantasy-gradient text-white hover:opacity-90 text-lg px-8 py-6 animate-glow"
            >
              <Sword className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-fantasy-primary text-fantasy-accent hover:bg-fantasy-primary/20 text-lg px-8 py-6"
            >
              Watch Trailer
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-fantasy-dark/50 border-fantasy-primary/30 p-6 hover:bg-fantasy-primary/10 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-12 h-12 fantasy-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                <Sword className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-fantasy text-lg font-semibold text-fantasy-accent mb-2">
                12 Classes
              </h3>
              <p className="text-sm text-muted-foreground">
                Master unique abilities across diverse character classes
              </p>
            </div>
          </Card>

          <Card className="bg-fantasy-dark/50 border-fantasy-primary/30 p-6 hover:bg-fantasy-primary/10 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-12 h-12 fantasy-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-fantasy text-lg font-semibold text-fantasy-accent mb-2">
                Guild Wars
              </h3>
              <p className="text-sm text-muted-foreground">
                Conquer castles and dominate territories with your clan
              </p>
            </div>
          </Card>

          <Card className="bg-fantasy-dark/50 border-fantasy-primary/30 p-6 hover:bg-fantasy-primary/10 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-12 h-12 fantasy-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-fantasy text-lg font-semibold text-fantasy-accent mb-2">
                Epic Raids
              </h3>
              <p className="text-sm text-muted-foreground">
                Challenge massive bosses in 25-dungeon campaign
              </p>
            </div>
          </Card>

          <Card className="bg-fantasy-dark/50 border-fantasy-primary/30 p-6 hover:bg-fantasy-primary/10 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-12 h-12 fantasy-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-float">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-fantasy text-lg font-semibold text-fantasy-accent mb-2">
                50km² World
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore vast open world with 12 unique zones
              </p>
            </div>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-fantasy font-bold fantasy-text-gradient mb-2">
              50,000+
            </div>
            <div className="text-sm text-muted-foreground">Active Players</div>
          </div>
          <div>
            <div className="text-3xl font-fantasy font-bold fantasy-text-gradient mb-2">
              12
            </div>
            <div className="text-sm text-muted-foreground">Unique Zones</div>
          </div>
          <div>
            <div className="text-3xl font-fantasy font-bold fantasy-text-gradient mb-2">
              25
            </div>
            <div className="text-sm text-muted-foreground">Epic Dungeons</div>
          </div>
          <div>
            <div className="text-3xl font-fantasy font-bold fantasy-text-gradient mb-2">
              7
            </div>
            <div className="text-sm text-muted-foreground">Conquerable Castles</div>
          </div>
        </div>
      </div>
    </section>
  )
}