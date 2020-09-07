// import module
const server = require("express")();
const line = require("@line/bot-sdk");

// parameter settings
const line_config = {
    channelAccessToken: process.env.LINE_ACCESS_TOKEN,
    channelSecret: process.env.LINE_CHANNEL_SECRET
};

// web server settings
server.listen(process.env.PORT || 3000);
