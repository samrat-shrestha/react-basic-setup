import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavoritesContext from "../../Store/favorites-context";
import classes from './MainNavigation.module.css'

function MainNavigation() {
    const favoritesCtx = useContext(FavoritesContext);
    return <header className={classes.header}>
        <div className={classes.logo}>
            MeetUpzzz
        </div>
        <nav>
            <ul>
                <li><NavLink to='/' activeClassName={classes.active} exact={true}>All Meet Ups</NavLink></li>
                <li><NavLink to='/map' activeClassName={classes.active}>Show Map</NavLink></li>
                <li><NavLink to='/new-meetup' activeClassName={classes.active}>New Meet Up</NavLink></li>
                <li><NavLink to='/favorites' activeClassName={classes.active}>Favorites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></NavLink></li>
            </ul>
        </nav>
    </header>;
}

export default MainNavigation;