function movieData(sequelize,DataTypes){
    let alias="Genre";

    let cols={
        id:{type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            notNull:true},
        name:{type:DataTypes.STRING,
            notNull:true},
        ranking:{type:DataTypes.INTEGER,
            notNull:true},
        active:{type:DataTypes.INTEGER,
            notNull:true}
    };

    let config={
        timestamps:false,
        tableName:"genres"
    };

    let genre = sequelize.define(alias,cols,config);

    return genre;
};

module.exports = movieData;