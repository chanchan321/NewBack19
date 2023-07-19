const whitelist = [
    'https://newfront19.onrender.com','http://localhost:3000'

];

const config = {
    headers: {
        "Access-Control-Allow-Origin": "https://newfront19.onrender.com",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
  };

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORSs'));
        }
    },
    config,
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions;
