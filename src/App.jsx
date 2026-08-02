import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'
import RiseMatePrivacyPage from './pages/RiseMatePrivacyPage.jsx'
import ValePrivacyPage from './pages/ValePrivacyPage.jsx'
import './App.css'

function App() {
  const path = window.location.pathname.slice(import.meta.env.BASE_URL.length)

  if (path === 'privacy/risemate') {
    return <RiseMatePrivacyPage />
  }

  if (path === 'privacy/vale') {
    return <ValePrivacyPage />
  }

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default App
