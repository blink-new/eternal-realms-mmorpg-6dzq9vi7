import { useState } from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { 
  Menu, 
  Home, 
  User, 
  Map, 
  Users, 
  Trophy, 
  ShoppingCart,
  LogOut,
  Settings,
  Crown
} from 'lucide-react'
import { blink } from '../../blink/client'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: 'home' | 'dashboard' | 'world-map' | 'guild' | 'leaderboards' | 'marketplace') => void
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: User },
    { id: 'world-map', label: 'World Map', icon: Map },
    { id: 'guild', label: 'Guild', icon: Users },
    { id: 'leaderboards', label: 'Leaderboards', icon: Trophy },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart }
  ]

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId as any)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-fantasy-dark/95 backdrop-blur-sm border-b border-fantasy-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => handleNavigation('home')}
          >
            <div className="w-10 h-10 fantasy-gradient rounded-lg flex items-center justify-center animate-glow">
              <span className="text-xl">⚔️</span>
            </div>
            <div>
              <h1 className="font-fantasy text-xl font-bold fantasy-text-gradient">
                Eternal Realms
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">MMORPG Portal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.id
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => handleNavigation(item.id)}
                  className={
                    isActive 
                      ? 'fantasy-gradient text-white hover:opacity-90' 
                      : 'text-muted-foreground hover:text-fantasy-accent hover:bg-fantasy-primary/20'
                  }
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              )
            })}
          </div>

          {/* User Menu & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* User Status */}
            <div className="hidden sm:flex items-center space-x-2">
              <Badge className="bg-fantasy-accent/20 text-fantasy-accent border-fantasy-accent/30">
                <Crown className="w-3 h-3 mr-1" />
                Shadow Legion
              </Badge>
              <div className="text-right">
                <div className="text-sm font-medium text-fantasy-accent">Shadowbane</div>
                <div className="text-xs text-muted-foreground">Level 67</div>
              </div>
            </div>

            {/* Settings & Logout */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-fantasy-accent hover:bg-fantasy-primary/20"
              >
                <Settings className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => blink.auth.logout()}
                className="text-muted-foreground hover:text-red-400 hover:bg-red-500/20"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-muted-foreground hover:text-fantasy-accent"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-fantasy-dark border-fantasy-primary/30">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center space-x-3 pb-6 border-b border-fantasy-primary/30">
                    <div className="w-12 h-12 fantasy-gradient rounded-lg flex items-center justify-center">
                      <span className="text-xl">⚔️</span>
                    </div>
                    <div>
                      <h2 className="font-fantasy text-lg font-bold fantasy-text-gradient">
                        Eternal Realms
                      </h2>
                      <p className="text-sm text-muted-foreground">MMORPG Portal</p>
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="py-6 border-b border-fantasy-primary/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-fantasy-primary rounded-lg flex items-center justify-center text-white font-bold">
                        SB
                      </div>
                      <div>
                        <div className="font-medium text-fantasy-accent">Shadowbane</div>
                        <div className="text-sm text-muted-foreground">Level 67 Dark Knight</div>
                        <Badge className="mt-1 bg-fantasy-accent/20 text-fantasy-accent border-fantasy-accent/30 text-xs">
                          <Crown className="w-2 h-2 mr-1" />
                          Shadow Legion
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Items */}
                  <div className="flex-1 py-6">
                    <div className="space-y-2">
                      {navigationItems.map((item) => {
                        const Icon = item.icon
                        const isActive = currentPage === item.id
                        
                        return (
                          <Button
                            key={item.id}
                            variant={isActive ? 'default' : 'ghost'}
                            className={`w-full justify-start ${
                              isActive 
                                ? 'fantasy-gradient text-white' 
                                : 'text-muted-foreground hover:text-fantasy-accent hover:bg-fantasy-primary/20'
                            }`}
                            onClick={() => handleNavigation(item.id)}
                          >
                            <Icon className="w-4 h-4 mr-3" />
                            {item.label}
                          </Button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Mobile Footer */}
                  <div className="border-t border-fantasy-primary/30 pt-6">
                    <div className="space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-muted-foreground hover:text-fantasy-accent hover:bg-fantasy-primary/20"
                      >
                        <Settings className="w-4 h-4 mr-3" />
                        Settings
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => blink.auth.logout()}
                        className="w-full justify-start text-muted-foreground hover:text-red-400 hover:bg-red-500/20"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}