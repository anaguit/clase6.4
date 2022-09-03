function movieData(sequelize,DataTypes){

    let alias="Movie";
    
    let cols={
        id:{type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            notNull:true},
        title:{type:DataTypes.STRING,
            notNull:true},
        rating:{type:DataTypes.INTEGER,
            notNull:true},
        awards:{type:DataTypes.INTEGER,
            notNull:true},
        release_date:{type:DataTypes.DATE,
            notNull:true},
        length:{type:DataTypes.INTEGER},
        genre_id:{type:DataTypes.INTEGER}
    };

    let config={
        timestamps:false,
        tableName:"movies"
    };

    let movie = sequelize.define(alias,cols,config)
    return movie;
};


module.exports = movieData