import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from './MainNavigation.module.css'
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
    const favoritesContext = useContext(FavoritesContext)
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav className={classes.menu}>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
            </ul>
            <ul>
                <li><Link to='/new-meetup'>Add New Meetup</Link></li>
            </ul>
            <ul>
                <li><Link to='/favorites'>
                    My Favorites
                    <span className={classes.badge}>{favoritesContext.totalFavorites}</span>
                    </Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;