(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var list = this;
    list.items = ShoppingListCheckOffService.getItems();

    list.removeItem = function (itemIndex) {
        ShoppingListCheckOffService.removeItem(itemIndex);
      };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(AlreadyBoughtController){
var list = this;
list.items = AlreadyBoughtController.getBoughtItems();
}


function ShoppingListCheckOffService(){
var service = this;
var items  = [
{ name: "muffins", quantity: 10 },
{ name: "gummies", quantity: 9 },
{ name: "waffles", quantity: 8 },
{ name: "toothpaste", quantity: 7 },
{ name: "nuts", quantity: 6 }
];

var boughtitems = [];

service.getItems = function () {
    return items;
  };

service.removeItem = function (itemIndex) {
    boughtitems.push(items[itemIndex]);
    items.splice(itemIndex, 1);
  };

  service.getBoughtItems = function () {
    return boughtitems;
  };


}


})();
