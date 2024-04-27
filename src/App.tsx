import Banner from "./components/Banner";
import Menu from "./components/Menu";
import './App.css';
import Card from "./components/Card";
import { card1, card2, card3 } from "./Texts/strings";
function App() {
  return (
    <div className="container">
      <Menu />
      <Banner />
      <div className="cards">
        <Card
          title={card1.title}
          content={card1.content}
          sizeCard={{ width: "400px", height: "400px", margin: "10px" }}
        />
        <Card
          title={card2.title}
          content={card2.content}
          sizeCard={{ width: "400px", height: "400px", margin: "10px" }}
        />
      </div>
      <Card
        title={card3.title}
        content={card3.content}
        sizeCard={{ width: "800px", height: "400px", margin: "100px" }}
      />
    </div>
  )
}

export default App;
