const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID|| 'your session id here',
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/Jc9Zzww/ceee7893444e61d7.jpg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "false",
AUTO_TYPING:"true",
AUTO_BIO:"true",
AUTO_VOICE:"true"
};
