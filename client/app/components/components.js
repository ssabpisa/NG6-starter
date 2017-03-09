import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Infobar from './infobar/infobar';
import Catalog from './catalog/catalog'

let componentModule = angular.module('app.components', [
    Home,
    About,
    Infobar,
    Catalog
])

.name;

export default componentModule;