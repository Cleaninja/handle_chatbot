import { useEffect } from 'react';
import 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import pluginConfig from './CookieConfig';

const CookieBanner = () => {
  useEffect(() => {

    if (!document.getElementById('cc--main')) {
        window.CC = window.initCookieConsent();
        window.CC.run(pluginConfig);
    }
}, []);
  return null;
};

export default CookieBanner;
