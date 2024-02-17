const express = require("express")
const app = express()
import connectmonogo from "./mongo"
const Port= 3000


app.get("/test", (req, res) => {
    res.json({
        server: "This is the test Route"
    })
})


app.listen(Port, () => {
    console.log(`Our Server has started on ${Port}`)
})
connectmonogo()