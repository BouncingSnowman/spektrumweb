'use strict';
const origin=window.SPEKTRUM_WEBMASTER_ORIGIN;
if(typeof origin==='string'&&/^https:\/\/[a-z0-9-]+\.hostingersite\.com$/.test(origin)){
 for(const [id,path] of [['editor','/'],['site','/site/index.html?draft=0']]){const link=document.getElementById(id);link.href=origin+path;link.removeAttribute('aria-disabled');link.removeAttribute('tabindex');}
 document.getElementById('status').textContent='Åpnes i et eget passordbeskyttet testområde. Bruk pilotinnloggingen du har fått.';
}
