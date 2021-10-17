const { User } = require('../database/models');

exports.criarUmUsuario = (user) => User.create(user);

exports.listarUsuarioPorSenha = ({ nome }) => {
  const userEncontrado = User.findOne({ where: { nome }});
  return userEncontrado;}