angular.module('app.appCtrl').service('itemListService',function () {

    this.itemTypes = [{'itemDescp': 'Electronics', 'itemId': '1'},
        {'itemDescp': 'Home Appliances', 'itemId': '2'},
        {'itemDescp': 'Kitchen Utensils', 'itemId': '3'},
        {'itemDescp': 'Stationery', 'itemId': '4'},
        {'itemDescp': 'Grocery', 'itemId': '5'},
        {'itemDescp': 'Vehicles', 'itemId': '6'},
        {'itemDescp': 'Gym', 'itemId': '7'}];
    this.items = [{
        'itemName': 'Dishes',
        'price': '$1499.00',
        'itemType': this.itemTypes[0].itemId,
        'description': 'This is the available in the market, with high demand ever'
    },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[1].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[2].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[3].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[4].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[5].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        },
        {
            'itemName': 'Mac Book Pro',
            'price': '$1499.00',
            'itemType': this.itemTypes[6].itemId,
            'description': 'This is the latest macbook available in the market, with high performance and best processing ever'
        }];


});


