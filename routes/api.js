const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')
const loginController = require('../controllers/loginController')

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', {title: "Cadastro" });
});

router.post("/cadastro", async function (req, res, next) {
  const { nome, senha } = req.body;
  
  const usuario = await loginController.criarUsuario({ nome, senha } );

  req.session.usuario = usuario;
 

  return res.redirect("/api/clientes");
});

router.get("/login", function (req, res, next) {
  const { session } = req;
  res.render("login", { title: "Login" });
});

router.post("/login", async function (req, res, next) {
  const { nome, senha } = req.body;

  let usuario=  loginController.logarUsuario(
    nome,
    senha
  );

  req.session.usuario = usuario;

  return res.redirect("/api/clientes");
});

router.get("/clientes", function (req, res, next) {
  const { session } = req;
  res.render("clientes", { title: "clientes" });
});

router.post("/clientes", async function (req, res, next) {
  
    const info = req.body;
    
    const lista = await apiController.postClientes(info);
  
    console.log(lista.data)
    return res.render('clientes');
  });

router.post("/pedidos", async function (req, res, next) {
  
  const info = req.body;
  
  const lista = await apiController.postPedidos(info);

  console.log(lista.data)
  return res.json(lista.data);
});


module.exports = router;
