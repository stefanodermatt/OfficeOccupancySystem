!function(){"use strict";angular.module("app.home",["ui.router","app.example"])}(),function(){"use strict";function a(a){a.state("home",{url:"/",templateUrl:"modules/home/home.tpl.html",controller:"HomeController",controllerAs:"home",data:{requiresLogin:!1}})}angular.module("app.home").config(a),a.$inject=["$stateProvider"]}(),function(){"use strict";function a(a){var b=this;b.items=a.getSomething()}angular.module("app.home").controller("HomeController",a),a.$inject=["ExampleService"]}(),function(){"use strict";angular.module("app.example",[])}(),function(){"use strict";function a(){function a(){return[{value:"thank"},{value:"you"},{value:"for"},{value:"trying"}]}var b={getSomething:a};return b}angular.module("app.example").factory("ExampleService",a)}(),function(){"use strict";angular.module("app",["app.home","app.example"])}(),function(){"use strict";function a(a){a.otherwise("/")}angular.module("app").config(a),a.$inject=["$urlRouterProvider"]}();