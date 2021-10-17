const bcrypt = require("bcryptjs");
const userModels = require('../models/userModels');

exports.criarUsuario = ({ nome, senha }) => {
  const senhaCriptografada = bcrypt.hashSync(senha);

  const user = userModels.criarUmUsuario({ nome, senha: senhaCriptografada });

  return user;
};

exports.logarUsuario = async ({ nome, senha }) => {
  const user = await userModels.listarUsuarioPorSenha({ nome });
  
  if (!user) {
    throw new Error("Access denied");
  }

  const senhaCheck = bcrypt.compareSync(senha, user.senha);

  if (!senhaCheck) {
    throw new Error("Access denied");
  }

  return user.dataValues;
};