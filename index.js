const WebSocket = require('ws');
const ws_server = new WebSocket.Server({
	port: 3232
});

ws_server.on('connection', function(socket) {
	console.log('client connected.');

	socket.on('message', function(msg) {
		socket.send(msg);

		// ws_server.clients.forEach(function(client) {
		// 	client.send("broadcast: " + msg);
		// });
	});
});
