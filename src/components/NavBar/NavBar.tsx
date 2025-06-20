import "./NavBar.scss"
import { Link } from "wouter"
import { useNavBarStyle } from "./hooks/useNavBarStyle"

export const NavBar = () => {
    const { newStyle } = useNavBarStyle()


    return (
        <header 
            className={`header ${newStyle ? "new-style" : ""}`}
        >

            <nav className="nav">
                <Link className="nav-logo" href="/">
                    Cineverse
                    < i className='bx  bx-movie-play'  ></i>
                </Link>

                <form className="nav__search">
                    <input type="search" className="nav__search-input" placeholder="Search movie ..." name="" id="" />
                    <button className="nav__search-btn" type="submit">
                        < i className='bx  bx-search-alt'  ></i>
                    </button>
                </form>

                <ul className="nav__links">
                    <li>
                        <Link href="/" className="nav__links-link">Home</Link>
                    </li>
                    <li>
                        <Link href="/movies" className="nav__links-link">Movies</Link>
                    </li>
                    <li>
                        <Link href="/series" className="nav__links-link">Series</Link>
                    </li>
                    <li>
                        <Link href="/tvseries" className="nav__links-link">TV Series</Link>
                    </li>
                    <li>
                        <Link href="/tvseries" className="nav__links-link">My Favorites</Link>
                    </li>

                    <li>
                        <form className="nav__search">
                            <input type="search" className="nav__search-input" placeholder="Search movie ..." name="" id="" />
                            <button className="nav__search-btn" type="submit">
                                < i className='bx  bx-search-alt'  ></i>
                            </button>
                        </form>
                    </li>
                </ul>

                <button className="nav__hamburger" aria-label="Open/close menu">
                    < i className='bx  bx-menu'  ></i>
                </button>
            </nav>

        </header>
    )
}
