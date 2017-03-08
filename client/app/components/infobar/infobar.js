import angular from 'angular';
import uiRouter from 'angular-ui-router';
import infobarComponent from './infobar.component';

let infobarModule = angular.module('infobar', [
  uiRouter
])

.component('infobar', infobarComponent)

.name;

export default infobarModule;
