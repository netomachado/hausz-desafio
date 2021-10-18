module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      notNull: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(100),
      notNull: true
    },
    senha: {
      type: DataTypes.CHAR(60),
      notNull: true
    },
  }, {
    underscored:true
  },{
    tablename: 'users'
    
  });

  return User;
}