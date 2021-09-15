const moment = require('moment');
const WebSocket = require('ws');

const ws_port = 3232;

log('websocket server listening on port ' + ws_port);
const ws_server = new WebSocket.Server({
	port: ws_port
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

function log(str, tag) {
	console.log(moment().format('YYYY-MM-DD HH:mm:ss.SSS') + '\t' + tag + '\t' + str);
}
