import './header.css';

const Header = () => {
    return ( 
        <section>
            <div className="wrapper">
             <input type="checkbox" id="check-menu" />
                <label htmlFor="check-menu">MENU</label>
                <label htmlFor="check-menu">MENU</label>
                <div className="burger-line first"></div>
                <div className="burger-line second"></div>
                <div className="burger-line third"></div>
                <div className="burger-line fourth"></div>
                <nav className="main-menu">
                    <div className="menu">
                        <a href="#">НОВОСТИ</a>
                        <a href="#">БРЕНДЫ</a>
                        <a href="#">МАГАЗИНЫ</a>
                        <a href="#">КАТАЛОГИ</a>
                        <a href="#">ПРОГРАММА ЛОЯЛЬНОСТИ</a>
                        <a href="#">ИНТЕРНЕТ-МАГАЗИН</a>
                        <a href="#">PEZZO</a>
                        <a href="#">О КОМПАНИИ</a>
                    </div>
                </nav>
            </div>
        </section>
     );
}
 
export default Header;