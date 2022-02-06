import './sass/main.scss';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Main} from "./layout/Main";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main/>
      <Footer/>
    </div>
  );
}

export default App;
