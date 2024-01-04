import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import Profile from "./Comtonents/Profile";
import Statistics from "./Comtonents/Statistics";
import Friends from "./Comtonents/Friends";
function App() {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics data={data} />
      <Friends friends={friends} />
    </div>
  );
}

export default App;
