import './departStores.css';

import Woman1 from './../../img/Woman1.png';
import Woman2 from './../../img/Woman2.png';
import Woman3 from './../../img/Woman3.png';

const DepartStores = () => {
    return ( 
        <section>
			<div className="img_and_txt">
				<img className="imgWH" src={Woman1} alt="Woman1" />
				<div className="txt">
					<p className="name_txt">ХЦ УНИВЕРМАГИ</p>
					<p className="txt_mar">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet.
					</p><br /><br />
					<a className="btn_more btn_little_mobil" href="#!">ПОДРОБНЕЕ</a>
				</div>
			</div>
			<div className="img_and_txt">
				<div className="txt">
					<p className="name_txt">МАГАЗИНЫ</p>
					<p className="txt_mar">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet.
					</p><br /><br />
					<a className="btn_more btn_little_mobil" href="#!">ПОДРОБНЕЕ</a>

				</div>
				<img className="imgWH" src={Woman2} alt="Woman2" />
			</div>
			<div className="img_and_txt">
				<img className="imgWH" src={Woman3} alt="Woman3" />
				<div className="txt">
					<p className="name_txt">МОНОМАГАЗИНЫ</p>
					<p className="txt_mar">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet.
					</p><br /><br />
					<a className="btn_more btn_little_mobil" href="#!">ПОДРОБНЕЕ</a>
				</div>
			</div>
		</section>
     );
}
 
export default DepartStores;