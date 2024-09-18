//Importa o módulo Router do express
//Router será utilizada para definir rotas específicas
const router = require('express').Router();

const controllerNumbers = require("../controllers/controllerNumbers") //Volto o diretório pra acessar a pasta

router.post("/par/", controllerNumbers.checkPar);
router.post("/primo/", controllerNumbers.checkPrimo);

module.exports = router
