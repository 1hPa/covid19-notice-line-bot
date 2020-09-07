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

// router settings
server.post('/bot/webhook', line.middleware(line_config), (req, res, next) => {
    res.sendStatus(200);
    console.log(req.body);
});

client.pushMessage('LINE_USER_ID', {
  type: 'text',
  text: 'hello, world',
})
