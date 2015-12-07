var MainCtrl = (function () {
    function MainCtrl() {
        this.message = 'Hello, MEAN App!';
        this.items = ['Sun', 'Earth'];
    }
    MainCtrl.prototype.sayHello = function () {
        alert(this.message);
    };
    return MainCtrl;
})();
angular.module('app').controller('mainCtrl', MainCtrl);
//# sourceMappingURL=mainCtrl.js.map