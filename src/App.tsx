import './App.scss'
import { NavBar } from './components/NavBar/NavBar'
import { Switch, Route } from 'wouter'
import { Home } from './components/Pages/Home/Home'
import { Footer } from './components/Footer/Footer'
import { Movies } from './components/Pages/Movies/Movies'

function App() {

    return (
        <>
            <NavBar />

            <main>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/movies" component={Movies} />
                </Switch>
            </main>

            <Footer />
        </>
    )
}

export default App
