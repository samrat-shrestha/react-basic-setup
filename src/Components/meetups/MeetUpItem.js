import { useContext } from 'react';
import FavoritesContext from '../../Store/favorites-context';
import Card from '../UI/Card';
import classes from './MeetUpItem.module.css'

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id); 

    function toggleFavoritesStatusHandler(){
        if(itemIsFavorite)
        {
            favoritesCtx.removeFavorite(props.id);
        }
        else
        {
            let meetUpData = {
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            };
            favoritesCtx.addFavorite(meetUpData);
        }
    }

    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove from Favorites': 'Add to Favorites'}</button>
            </div>
        </Card>
    </li>;
}

export default MeetupItem;