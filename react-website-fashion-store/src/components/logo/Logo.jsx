
import './logo.css';
import logoImg from './../../магазин моды.png';


const Logo = () => {
    return ( 
        <section>
			<img className="logoIMG" src={logoImg} alt="магазин моды" />
			<div className="logo">
                Магазин моды
            </div>
		</section>
     );
}
 
export default Logo;