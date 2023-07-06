import './App.css';
import EMais from './components/eMais/eMais';
import Footer from './components/footer';
import Header from './components/header';
import Intro from './components/intro';
import Main from './components/main';
import Planos from './components/planos/planos';
import ComponenteSlide from './components/slide/slide';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Main />
      <ComponenteSlide />
      <EMais />
      <Planos/>
      <Footer/>
    </div>
  );
}

export default App;
