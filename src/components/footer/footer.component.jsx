

import './footer.styles.scss';

import { SiCnn, SiFoxtel } from 'react-icons/si';

export const Footer = () => (
    <footer className='main-footer'>
        <div className="info-container">
         <span>© Kevin Taufer | 2022 </span>
        </div>
        <div className="company-logo-container">
            <span><SiCnn /></span>
            <span><SiFoxtel /></span>
        </div>
    </footer>
)

export default Footer;