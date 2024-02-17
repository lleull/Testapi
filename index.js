import  express  from "express";
const app = express();
const Port= 3300
import connectmonogo from "./mongo.js";


app.get("/test", (req, res) => {
    res.json({
        server: "This is the test Route"
    })
})


app.listen(Port, () => {
    console.log(`Our Server has started on ${Port}`)
   connectmonogo()
})