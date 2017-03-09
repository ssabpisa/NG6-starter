import angular from 'angular';
import uiRouter from 'angular-ui-router';
import catalogComponent from './catalog.component';

let catalogModule = angular.module('catalog', [
        uiRouter
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";
        $stateProvider
            .state('catalog', {
                url: '/catalog/:collection?',
                component: 'catalog'
            });
    })
    .component('catalog', catalogComponent)

.name;

export default catalogModule;