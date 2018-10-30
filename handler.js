'use strict';

const uuidv1 = require('uuid/v1');

module.exports.hacerPedido = (event, context, callback) => {
	const orderId = uuidv1();
	//const orderId = '1234';

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: `El pedido se ha registrado con el numero de orden: ${orderId}`
		})
	};

	callback(null, response);
};