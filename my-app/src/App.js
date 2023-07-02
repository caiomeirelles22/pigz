import './App.css';
import Header from './components/header';
import Logo from './components/header/logo/logo';
import Intro from './components/intro';
import Main from './components/main';

function App() {
  return (
    <div className="App">
     <Header/>
     <Intro/>
     <Main/>
    </div>
  );
}

export default App;
