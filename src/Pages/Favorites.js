import { useContext } from "react";
import MeetUpList from "../Components/meetups/MeetUpList";
import FavoritesContext from "../Store/favorites-context";

function FavoritesPage(){
    const favoritesCtx = useContext(FavoritesContext);
    let content;

    if(favoritesCtx.totalFavorites === 0)
    {
        content = <p>No Favorites Found!!</p>
    }
    else
    {
        content = <MeetUpList meetups={favoritesCtx.favorites}/>;
    }
    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default FavoritesPage;