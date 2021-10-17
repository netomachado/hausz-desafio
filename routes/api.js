const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')
const loginController = require('../controllers/loginController')

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', {title: Cadastro });
});

router.post("/cadastro", async function (req, res, next) {
  const { nome, senha } = req.body;

  const { senha: senhaNaoUsada, ...usuario } = await loginController.criarUsuario({
    nome,
    senha
  }).then(user => user.dataValues);

  req.session.usuario = usuario;
 

  res.redirect("/clientes");
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login" });
});

router.post("/login", async function (req, res, next) {
  const { email, senha } = req.body;

  const { senha: senhaNaoUsada, ...usuario } = await loginController.logarUsuario({
    email,
    senha,
  });

  req.session.usuario = usuario;

  res.redirect("/clientes");
});


router.post("/clientes", async function (req, res, next) {
  
    const info = req.body;
    
    const lista = await apiController.postClientes(info);
  
    console.log(lista.data)
    res.json(lista.data);
  });

router.post("/pedidos", async function (req, res, next) {
  
  const info = req.body;
  
  const lista = await apiController.postPedidos(info);

  console.log(lista.data)
  res.json(lista.data);
});


module.exports = router;
