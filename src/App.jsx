import './App.css';
import logo from '../src/img/Logo.svg'
import search from '../src/img/Search.svg'
import cart from '../src/img/Cart.svg'
import background from '../src/img/Background.svg'
import aerrow from '../src/img/Aerrow.svg'

function App() {
  return (
    <div className="main_block">
    {/* =====================================
        --шапка-- */}
    <div className="header"> 
      <img src={logo} alt="logo"></img>
      <p>Organick</p>
      <ul className='tab'>
        <il><a href="#">Home</a></il>
        <il><a href="#">About</a></il>
        <il><a href="#">Pages</a></il>
        <il><a href="#">Shop</a></il>
        <il><a href="#">Projects</a></il>
        <il><a href="#">News</a></il>
      </ul>
      <div className="block_input">
        <input type="text" />
        <img src={search} alt=''/>
      </div>
      <div className='cart'>
        <img src={cart} alt=''/>
        <p>cart(0)</p>
      </div>
    </div>

    {/* ===================================== 
        --картинка--*/}
    <div className="background"> <img src={background} alt=''/>
      <div className="text1">
        <p>100% Natural Food</p>
        <p>Choose the best \ healthier way \ of life</p>
        <div className="button1">
          <p>Explore Now</p>
          <img src={aerrow} alt=''/>
        </div>
      </div>
    </div>

    {/* =========================================
        --выбор-- */}
    <div className="">

    </div>
    {/* ======================================== */}
    </div>
  );
}

export default App;
