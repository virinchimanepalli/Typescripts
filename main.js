"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msg = 'hello_world ra';
console.log(msg);
var x = 10;
var y = 20;
var title = 'coding is not easy';
var isBegginer = true;
var total = 0;
var name = 'virinchi';
var sentence = "my name is " + name + " and i am very smart";
console.log(sentence);
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 3, 2];
var person1 = ['vir', 22];
// fixed number of values and also order has to be match
console.log(person1);
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["green"] = 1] = "green";
    color[color["pink"] = 2] = "pink";
})(color || (color = {}));
var colora;
(function (colora) {
    colora[colora["Red"] = 0] = "Red";
    colora[colora["green"] = 1] = "green";
    colora[colora["pink"] = 2] = "pink";
    colora[colora["orange"] = 10] = "orange";
})(colora || (colora = {}));
var c = color.green;
var d = colora.orange;
console.log(c);
console.log(d);
// type any i can by any methon
var randomnum = 11;
//  randomnum.name
//  randomnum ='true'
//  randomnum =true
// obj as parameter of type any and return name as string and name property exist in the object
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(randomnum)) {
    console.log(randomnum);
}
var m;
m = 25;
m = true;
m = false;
//  anytype has no restrictions
var n;
n = 25;
n = "string";
n = true;
n = false;
n = [1, 2, 4];
console.log(n);
//  functions
// optional parameters(num?:) 
function added(num1, num2) {
    return num1 + num2;
}
added(1, 3);
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
n = add(5, 10);
console.log(n);
n = add(4);
console.log(n);
function list(name) {
    console.log(name.firstname + " " + name.lastname + " " + name.wifename);
}
var p = {
    firstname: 'rishita',
    lastname: 'manepalli'
};
list(p);
// classes
var office = /** @class */ (function () {
    function office(wname) {
        this.top = wname;
        this.worker = wname;
    }
    office.prototype.greet = function () {
        console.log("good afternoon mr bloody work mr. " + this.worker);
    };
    return office;
}());
var obj = new office('aakash');
console.log(obj.top);
obj.greet();
// to extend this class that mean to use the parameters in office class.
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(k) {
        return _super.call(this, k) || this;
    }
    manager.prototype.exnd = function () {
        console.log(this.worker + " have to be prinde using extention");
    };
    return manager;
}(office));
var m1 = new manager("rahul");
m1.exnd();
m1.greet();
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(l) {
        return _super.call(this, l) || this;
    }
    employee.prototype.Test = function () {
        var carrot = "hello";
        console.log("practice done");
        console.log(carrot);
    };
    return employee;
}(office));
var m2 = new employee("ravi is given");
m2.Test();
console.log(m2.top);
