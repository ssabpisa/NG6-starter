import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Infobar from './infobar/infobar';

let componentModule = angular.module('app.components', [
    Home,
    About,
    Infobar
])

.name;

export default componentModule;