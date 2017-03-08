import InfobarModule from './infobar'
import InfobarController from './infobar.controller';
import InfobarComponent from './infobar.component';
import InfobarTemplate from './infobar.html';

describe('Infobar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(InfobarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new InfobarController();
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
      expect(InfobarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = InfobarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(InfobarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(InfobarController);
      });
  });
});
