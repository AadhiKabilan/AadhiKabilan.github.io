import { Outlet } from 'react-router-dom'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'

export default function RootLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Global Ambient Background Orbs & Radial Mesh for Every Page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="orb orb-1" style={{ top: '-10%', left: '-5%', opacity: 0.25 }} />
        <div className="orb orb-2" style={{ top: '45%', right: '-8%', opacity: 0.2 }} />
        <div className="orb orb-3" style={{ bottom: '-5%', left: '30%', opacity: 0.2 }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.06) 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        <Header />

        <main id="main-content" className="flex-grow">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  )
}
