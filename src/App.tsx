import Header from './components/Header/Header.tsx'
import Hero from './components/Hero/Hero.tsx'

export default function App() {

    return (
        <div className='landing-page'>
            <Header/>
            
            <main className='landing-page__content'>
                <Hero/>
            </main>
        </div>
    )
}

