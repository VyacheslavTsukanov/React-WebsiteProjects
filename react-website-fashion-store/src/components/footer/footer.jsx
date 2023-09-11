import './footer.css';

import GitHub from './../../img/GitHub.png';


const Footer = () => {
    return ( 
        <footer>
			ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ


			<div class="foot">
				<p>
						© 2023. All Rights Reserved. <br /> Сайт сделал - Tsukanov Vaycheslav
				</p>
				<a href="" target="_blank" title="Cсылка на GitHub">
					<img src={GitHub} alt="GitHub" width="50px" />
				</a>
			</div>
		</footer>
     );
}
 
export default Footer;