import CatalogModule from './catalog'
import CatalogController from './catalog.controller';
import CatalogComponent from './catalog.component';
import CatalogTemplate from './catalog.html';

describe('Catalog', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CatalogModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CatalogController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(CatalogTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CatalogComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CatalogTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CatalogController);
      });
  });
});
