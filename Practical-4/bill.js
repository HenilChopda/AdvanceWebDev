<!DOCTYPE html>
<html ng-app="myApp">
<head>
	<title>Order Form</title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
</head>
<body ng-controller="myCtrl">
	<h1>Order Form</h1>
	<table>
		<thead>
			<tr>
				<th>Product</th>
				<th>Price</th>
				<th>Quantity</th>
				<th>Total Price</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="product in products">
				<td>{{ product.name }}</td>
				<td>{{ product.price }}</td>
				<td><input type="number" ng-model="product.quantity" ng-change="updateTotal()"></td>
				<td>{{ product.totalPrice }}</td>
			</tr>
		</tbody>
	</table>
	<p>Subtotal: {{ subtotal }}</p>
	<p>GST: {{ gst }}</p>
	<p>Total: {{ total }}</p>

	<script>
		var app = angular.module("myApp", []);
		app.controller("myCtrl", function($scope) {
			$scope.products = [
				{name: "Product A", price: 10, quantity: 0, totalPrice: 0},
				{name: "Product B", price: 20, quantity: 0, totalPrice: 0},
				{name: "Product C", price: 30, quantity: 0, totalPrice: 0},
				{name: "Product D", price: 40, quantity: 0, totalPrice: 0},
				{name: "Product E", price: 50, quantity: 0, totalPrice: 0}
			];

			$scope.updateTotal = function() {
				var subtotal = 0;
				for (var i = 0; i < $scope.products.length; i++) {
					$scope.products[i].totalPrice = $scope.products[i].price * $scope.products[i].quantity;
					subtotal += $scope.products[i].totalPrice;
				}
				$scope.subtotal = subtotal;
				$scope.gst = $scope.subtotal * 0.18;
				$scope.total = $scope.subtotal + $scope.gst;
			};
		});
	</script>
</body>
</html>
