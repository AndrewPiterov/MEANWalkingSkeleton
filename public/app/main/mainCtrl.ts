declare var angular:any;

interface IMainModel {
  message:string;
  items:any[];
  sayHello():void;
}

class MainCtrl implements IMainModel {

  items:any[];
  message:string;

  constructor() {
    this.message = 'Hello, MEAN App!';
    this.items = ['Sun', 'Earth'];
  }

  sayHello():void {
    alert(this.message);
  }
}

angular.module('app')
  .controller('mainCtrl', MainCtrl);