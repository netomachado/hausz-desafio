const { User } = require('../database/models');

exports.criarUmUsuario = ({ nome, senhaCriptografada:senha }) => User.create({ nome, senha });

exports.buscarUsuarioPorNome = (nome) => {
  const userEncontrado = User.findOne({ where: { nome }});
  return userEncontrado;}