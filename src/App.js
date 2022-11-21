import './App.css';
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"

const User = {
  name: "Daniel",
  surname: "Miguelez",
  Age: "29",
  hobbies : ["Sports", "Eat tons of food"],
}

function App (){
  return(
    <div className="App">
      <Header User = {User}/>
      <Home User = {User}/>
    </div>
  )
}
export default App;
