import logo from './logo.svg';
import './App.css';
import './SCSS/left-menu/index.scss'
import './SCSS/main.scss'
import LeftMenu from "./components/left-menu";

function App() {
  return (
    <div className={'main-section '}>
        <div className={''}>
            <LeftMenu/>

        </div>
    </div>
  );
}

export default App;
