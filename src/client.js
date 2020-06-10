const url = 'ws://localhost:3000';
const connection = new WebSocket(url);
const Logs = require("./Logs");

connection.onopen = _ => {
    Logs.push({
        sender: "Client",
        message: "Initial Test message",
    });
};

connection.onmessage = _ => {
    Logs.push({
        sender: "Server",
        message: _.data,
    });

    m.redraw();
};

connection.onerror = _ => {
    alert("Server error.");
};

module.exports = {
    connection,
};