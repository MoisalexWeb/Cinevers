import "./Footer.scss"
import { Link } from "wouter"
import IMDB from "/images/imdb-logo.svg"


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Link href="/" className="footer-logo">
                    Cineverse
                    <i className="bx  bx-movie-play"></i>
                </Link>

                <ul className="footer__item footer__item--menu">
                    <li>
                        <Link href="/" className="footer__item-link">Home</Link>
                    </li>

                    <li>
                        <Link href="/movies" className="footer__item-link">Movies</Link>
                    </li>

                    <li>
                        <Link href="/tvseries" className="footer__item-link">TV Series</Link>
                    </li>
                </ul>

                <ul className="footer__item footer__item--link">
                    <li>
                        <Link href="#" className="footer__item-link">FAQ</Link>
                    </li>

                    <li>
                        <Link href="#" className="footer__item-link">Privacy Policy</Link>
                    </li>

                    <li>
                        <Link href="#" className="footer__item-link">Premium</Link>
                    </li>
                </ul>

                <a className="footer__api" href="https://www.themoviedb.org/" target="_blank" rel="noopener">
                    <img src={IMDB} className="footer__api-img" alt="The Movie Data" />
                </a>
            </div>
        </footer>
    )
}
