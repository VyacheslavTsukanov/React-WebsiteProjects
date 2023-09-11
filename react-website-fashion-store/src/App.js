import './styles/style.css';

import Header from "./components/header/Header";
import Logo from './components/logo/Logo';
import DepartStores from './components/shops/DepartStores';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App">

        <Header />
        <Logo />
        <DepartStores />
        <Footer />

    </div>
  );
}

export default App;
