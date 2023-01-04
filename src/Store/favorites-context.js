import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup)=>{}, //These are just added to help us in the auto completion in the other component part where we use this context.
    removeFavorite: (meetUpId)=>{},
    itemIsFavorite: (meetUpId)=>{}
}); //The object returned by createContext is a react component.

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevState)=>{
            return prevState.concat(favoriteMeetup);
        });
    }
    function removeFavoriteHandler(meetUpId){
        setUserFavorites((prevState)=>{
            return prevState.filter(item=>item.id !== meetUpId);
        });
    }
    function checkItemIsOnFavoritesHandler(meetUpId){
        return userFavorites.some(meetup=>meetup.id === meetUpId); //returns true if one of the condition specified is matched in the function.
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler, //pointer to the function.
        removeFavorite: removeFavoriteHandler, //pointer to the function.
        itemIsFavorite: checkItemIsOnFavoritesHandler //pointer to the function.
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;