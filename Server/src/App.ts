import express from 'express';
const path = require('path');
class App {
  public app: express.Application;

  /**
   * @ class App
   * @ method bootstrap
   * @ static
   * 
   */
  public static bootstrap (): App {
    return new App();
  }

  constructor () {

      this.app = express();
      this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
          res.render('index.html');
        });
        this.app.get('/about',(req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.render('about.html');
        });
        
  }
}

export default App;