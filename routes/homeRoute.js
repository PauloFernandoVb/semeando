//=============================//

const express =require("express");
//=============================//
const HomeController=require("../controllers/homeController");//chamo a controler para usar a renderizaçao dela

const router = express.Router();//inicio como uma rota

const homeController= new HomeController();

router.get("/", homeController.homeView);
//dentro da home controller pego o / que esta dentro da funçao homeView que renderiza essa rota
router.get("/admin",homeController.home);
router.get("/principal",homeController.menuView);

module.exports = router;//exporta a route para usar no servidor