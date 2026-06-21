import Navbar              from './components/Navbar/Navbar'
import Hero                from './components/Hero/Hero'
import Ticker              from './components/Ticker/Ticker'
import AboutMe             from './components/AboutMe/AboutMe'
import MyTools             from './components/MyTools/MyTools'
import AudiovisualContent  from './components/AudiovisualContent/AudiovisualContent'
import PressContent        from './components/PressContent/PressContent'
import ConceptShooting     from './components/ConceptShooting/ConceptShooting'
import ManualWork          from './components/ManualWork/ManualWork'
import Contacts            from './components/Contacts/Contacts'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <AboutMe />
      <MyTools />
      <AudiovisualContent />
      <PressContent />
      <ConceptShooting />
      <ManualWork />
      <Contacts />
    </>
  )
}
