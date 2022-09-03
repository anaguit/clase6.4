let db = require("../database/models");

let genresController = {
    list:(req,res)=>{
        db.Genre.findAll()
        .then((resultados)=>{
            res.render("genresList",{genres:resultados})
        });
    },
    detail:(req,res)=>{
        db.Genre.findByPk(req.params.id)
        .then((resultado)=>{
            res.render("genresDetail",{genre:resultado})
        });
    }
};

module.exports = genresController;