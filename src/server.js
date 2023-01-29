import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require('dotenv').config();

let app = express();

//config app
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());


viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Backend Nodejs is running on port ${port}`);
});