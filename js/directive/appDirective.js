angular.module('app.directive').
                            directive("landingTemplate", [function($scope) {
                            return {
                                restrict:'EAC',
                                templateUrl : "/shoppingcartangular/view/landingTemplate.html",
                                link:function($scope){

                                }
                            };
                        }])
                        .directive('titleDir', [function ($scope) {
                            return {
                                restrict:'EAC',
                                templateUrl : "/shoppingcartangular/view/title.html",
                                link:function($scope){

                                }
                            };

                        }])
                        .directive('leftBodyDir', [function ($scope) {
                            return {
                                restrict:'EAC',
                                templateUrl : "/shoppingcartangular/view/leftBody.html",
                                link:function($scope){

                                }
                            };

                                            }])
                        .directive('coursalDir', [function ($scope) {
                            return {
                                restrict:'EAC',
                                templateUrl : "/shoppingcartangular/view/cousral.html",
                                link:function($scope){

                                }
                            };

                        }])
                        .directive('rightBodyDir', [function ($scope) {
                            return {
                                restrict:'EAC',
                                templateUrl : "/shoppingcartangular/view/rightBOdy.html",
                                link:function($scope){

                                },

                                controller:'appCtrl'
                            }

                        }]);
