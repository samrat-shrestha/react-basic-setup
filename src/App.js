import { Route, Switch } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import AllMeetupsPage from "./Pages/AllMeetUps";
import FavoritesPage from "./Pages/Favorites";
import NewMeetUpsPage from "./Pages/NewMeetUp";

function App() {
  return <div>
    <Layout>
      <Switch>
        <Route path='/' exact><AllMeetupsPage /></Route>
        <Route path='/new-meetup'><NewMeetUpsPage /></Route>
        <Route path='/favorites'><FavoritesPage /></Route>
      </Switch>
    </Layout>
  </div>;
}

export default App;
