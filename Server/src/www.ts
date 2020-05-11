import 'source-map-support/register'; // source-map을 사용하기 위해 추가함.
import App from './App';
import * as express from "express";

const port: number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;

app.set('views', "d:\\93.dfm\\FM\\Client\\src\\views\\");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => {console.log(`Express server listening at ${port}`
); console.log('test');}

)
.on('error', err => console.error(err));