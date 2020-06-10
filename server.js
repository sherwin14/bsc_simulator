const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', ws => {

    var json = {
        "message_type": "first_data",
        "data": {
            "Fan": 1,
            "Lamp": 1,
            "Lamp Intensity": 1,
            "Socket": 1,
            "Selenoid Gas": 1,
            "UV Lamp": 1,
            "Alarm": 1,
            "Sash Windows": 2,
            "Inflow": 1,
            "Downflow": 1,
            "Exhaust": 1,
            "Thimble Collar/SEAS": 1,
            "Temperature": 1,
            "Filter Life Remaining": 1,
            "UV Life Remaining": 1,
            "Blower Hour Meter": 1,
            "Fan Speed RPM": 1,
            "Mode Operation": 1,
            "Inflow Set Point Nominal": 1,
            "Downflow Set Point Nominal": 1,
            "Exhaust Set Point Nominal": 1,
            "Serial Number": "BSC 1234",
            "Cabinet Model": "Model 1234",
            "Certification Date": "11/11/2019",
            "Certification Engineer": "Engr. Sample Person",
            "Certification Company Mail": "esco.sample@escoglobal.com",
            "Certification Company Phone": "09123123422"
        }
    };
    
    var alarm = {
        "message_type": "alarm",
        "data": {
            "Serial Number": "BSC 1234",
            "Alarm": 1,
            "Sash Windows": 2,
            "Inflow": 1,
            "Downflow": 1,
            "Exhaust": 1,
            "Thimble Collar/SEAS": 1,
            "Temperature": 1,
            "Filter Life Remaining": 1,
            "UV Life Remaining": 1,
            "Blower Hour Meter": 1,
            "Fan Speed RPM": 1
        }
    };
    

    ws.send("Server: Started WebSocket Server");

    ws.on("message", msg => {

        try {
            let message = JSON.parse(msg);
            console.log("Message content =>", message);

            if (message.event == "get_data") {
                ws.send(JSON.stringify(json));
            } else if (message.event == "error") {
                wss.clients.forEach(client => client.send(JSON.stringify(alarm)));
            }
        } catch (e) {
            ws.send("Error..");
        }

    });

});