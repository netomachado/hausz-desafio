const bcrypt = require("bcryptjs");
const userModels = require('../models/userModels');

exports.criarUsuario = ({ nome, senha }) => {
  const senhaCriptografada = bcrypt.hashSync(senha);

  const usuario = userModels.criarUmUsuario({ nome, senhaCriptografada });

  return usuario;
};

exports.logarUsuario = async (nome, senha) => {
  const usuario = await userModels.buscarUsuarioPorNome(nome);
  
  if (!usuario) {
    throw new Error("Access denied");
  }

  const senhaCheck = bcrypt.compareSync(senha, usuario.senhaCriptografada);

  if (!senhaCheck) {
    throw new Error("Access denied");
  }

  return usuario.dataValues;
};