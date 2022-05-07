import "./App.css"
import Header from "./components/Header";

import Body from "./components/Body";
import UserCityweather from "./components/UserCityweather";

function App() {
  return (
    <div className="App">
      <Header />
     <UserCityweather/>
     <Body/>
    </div>
  );
}

export default App;
