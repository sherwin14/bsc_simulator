const Logs = require("./Logs");
const Client = require("./client");

function messageServer(message) {
    Client.connection.send(message);
}

module.exports = {
    view() {
        return [
            m("div", {
                style: {
                    display: "flex",
                    "flex-flow": "column wrap",
                    height: "300px",
                    border: "1px solid black",
                    overflow: "auto",
                    padding: "2em 1em"
                }
            }, Logs.map(item => {
                return m("code", { style: { width: "100%" } }, `${item.sender} => ${item.message}`);
            })),

            m("div", {
                style: {
                    display: "flex",
                    flexGrow: 1,
                    height: "200px"
                }
            }, [
                m("button", {
                    style: {
                        width: "25%",
                    },
                    onclick: _ => {
                        const message = document.getElementById("message").value;
                        Logs.push({
                            sender: "Client",
                            message
                        });
                        messageServer(message);
                    },
                }, "Submit"),
                m("textarea", {
                    id: "message",
                    style: {
                        width: "100%"
                    }
                }),
            ]),

        ];
    }
};