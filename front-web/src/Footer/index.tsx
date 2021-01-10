import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as Instagram} from './instagram.svg'
function Footer() {
    return (
        
        <footer > 
        <div className="main-footer">
                  
                 
           App desenvolvido durante a 2ª ed. do evento Semana DevSuperior 
                  
               <div className="footer-icons">

           
           <a href="s" target="_new" >
            <YoutubeIcon />   
           </a>

           <a href="https://www.linkedin.com/in/pedro-antonio-villalba-imbrech-aa61841a1/" target="_new">
           <LinkedinIcon/>
           </a>

           <a href="s" target="_new">
           <Instagram/>
           </a> 

         </div>  


           </div>
        </footer>
    )
}

export default Footer;

