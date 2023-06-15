const express = require("express");
const cors =  require("cors");

const app  = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rota simples

require("./app/routes/cadastro.routes.js")(app);
require("./app/routes/filme.routes.js")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT,  () =>{
    console.log(`Server is running on port ${PORT}`);
})


