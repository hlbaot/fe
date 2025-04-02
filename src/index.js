const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const syncDatabase = require('./configs/sync.config');
const cors = require('cors');
const session = require('express-session');
const sequelize = require('./configs/database.config');
const router = require('./routers/index.router');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}));

app.use(
    session({
        secret: process.env.SESSION_SECRET || "superkey",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, httpOnly: true, maxAge: 3600000 },
    })
);

router(app);

(async () => {
    try {
        await sequelize.authenticate();
        console.log(`Connect SQL successfully!!`);

        // Dong bo database
        await syncDatabase();

        // Start server after DB connection is successful
        app.listen(port, '0.0.0.0', () => {
            console.log(`🚀Server running at http://192.168.15.98:${port}`);
        });
    } catch (error) {
        console.error(`❌ Không thể kết nối MySQL: ${error.message}`);
    }
})();