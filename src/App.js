import './styles/App.css';
import ShopItemFunc from './components/ShopItemFunc';
import item from './constants/item';

export default function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
}
