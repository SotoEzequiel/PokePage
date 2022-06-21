const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique:true
    },
    basededatos:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
        allowNull:true
    },
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,
    },
    vida:{
      type:DataTypes.INTEGER,
      defaultValue:50
      
    },
    ataque:{
      type:DataTypes.INTEGER,
      defaultValue:50
    },
    defensa:{
      type:DataTypes.INTEGER,
      defaultValue:50
    },
    velocidad:{
      type:DataTypes.INTEGER,
      defaultValue:50
    },
    altura:{
      type:DataTypes.INTEGER,
      defaultValue:50
    },
    peso:{
      type:DataTypes.INTEGER,
      defaultValue:50
      
    },
    img:{
      type:DataTypes.STRING,
      allowNull:true
    }
  },{timestamps:false,createdAt:false,updatedAt:false});
};
