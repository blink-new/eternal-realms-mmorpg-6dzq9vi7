import { useState, useEffect } from 'react'
import { Navigation } from './components/layout/Navigation'
import { HeroSection } from './components/sections/HeroSection'
import { CharacterClassesSection } from './components/sections/CharacterClassesSection'
import { Dashboard } from './pages/Dashboard'
import { WorldMap } from './pages/WorldMap'
import { GuildManagement } from './pages/GuildManagement'
import { Leaderboards } from './pages/Leaderboards'
import { Marketplace } from './pages/Marketplace'
import { blink } from './blink/client'

type Page = 'home' | 'dashboard' | 'world-map' | 'guild' | 'leaderboards' | 'marketplace'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState<Page>('home')

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  // Handle navigation
  const navigateTo = (page: Page) => {
    setCurrentPage(page)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-fantasy-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 fantasy-gradient rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl">⚔️</span>
          </div>
          <p className="text-fantasy-accent font-fantasy text-lg">Loading Eternal Realms...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-fantasy-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 fantasy-gradient rounded-lg flex items-center justify-center mx-auto mb-6 animate-glow">
            <span className="text-3xl">⚔️</span>
          </div>
          <h1 className="font-fantasy text-3xl font-bold fantasy-text-gradient mb-4">
            Welcome to Eternal Realms
          </h1>
          <p className="text-muted-foreground mb-6">
            Please sign in to access your character portal and begin your epic journey.
          </p>
          <button
            onClick={() => blink.auth.login()}
            className="fantasy-gradient text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Sign In to Continue
          </button>
        </div>
      </div>
    )
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'world-map':
        return <WorldMap />
      case 'guild':
        return <GuildManagement />
      case 'leaderboards':
        return <Leaderboards />
      case 'marketplace':
        return <Marketplace />
      default:
        return (
          <main className="pt-16">
            <HeroSection />
            <CharacterClassesSection />
          </main>
        )
    }
  }

  return (
    <div className="min-h-screen bg-fantasy-background">
      <Navigation currentPage={currentPage} onNavigate={navigateTo} />
      {renderCurrentPage()}
    </div>
  )
}

export default App