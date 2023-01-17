import { Route, Switch } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import AllMeetupsPage from "./Pages/AllMeetUps";
import FavoritesPage from "./Pages/Favorites";
import MapPage from "./Pages/Map";
import NewMeetUpsPage from "./Pages/NewMeetUp";
import './App.css';

function App() {
  return <div className="App">
    <Layout>
      <Switch>
        <Route path='/' exact><AllMeetupsPage /></Route>
        <Route path='/new-meetup'><NewMeetUpsPage /></Route>
        <Route path='/favorites'><FavoritesPage /></Route>
        <Route path='/map'><MapPage /></Route>
      </Switch>
    </Layout>
  </div>;
}

export default App;
