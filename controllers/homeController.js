class HomeController{
    homeView(req,res){
        res.render('index');//responde a chamada com uma renderizaçao
    }
    home(req,res){
        res.render('admin');
    }
    menuView(req,res){
        res.render('principal');//loja
    }

}
module.exports=HomeController;//expota a controladora para o resto