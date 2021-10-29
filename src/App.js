import "./App.scss";
import Header from "./Components/layout/Header";
import News from "./Components/News";
import Main from "./Components/Main";
import { useSelector } from "react-redux";

function App() {
  const tab = useSelector((store) => store.tab);
  return (
    <div className="App col">
      <Header />
      {tab === "main" && <Main />}
      {tab === "news" && <News />}
    </div>
  );
}

export default App;
