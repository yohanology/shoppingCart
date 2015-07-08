$(document).ready(function(){


	// Create item button
	$('#createItem').click(function(){
		var itemName = $('#createItemName').val();
		var itemPrice = $('#createItemPrice').val();
		$('.cart-item').first().before('<div class="cart-item col-xs-12"><div class="cart-item-name col-xs-4"><p>' + itemName + '</p></div><div class="cart-item-price col-xs-3"><p>' + '$' + itemPrice + '</p></div><div class="cart-item-qty col-xs-3"><p class="col-xs-2">QTY</p><input class="itemQty col-xs-7"><button class="itemCancel col-xs-3">Cancel</button></div><div class="cart-item-total col-xs-2"><p>$0.00</p></div>');
		console.log('Item added.', 'Name:', itemName, 'Price', itemPrice);
	});










});