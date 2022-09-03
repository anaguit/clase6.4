let db = require("../database/models");

let moviesController={
    list:(req,res)=>{
        db.Movie.findAll()
        .then((resultados)=>{
            res.render("moviesList",{movies:resultados});
        });
    },
    detail:(req,res)=>{
        db.Movie.findByPk(req.params.id)
        .then((resultado)=>{
            res.render("moviesDetail",{movie:resultado})
        })
    },
    new:(req,res)=>{
        db.Movie.findAll({
            order:[["release_date","DESC"]]
        })
        .then((resultados)=>{
            res.render("newestMovies",{movies:resultados})
        })
    },
    recomended:(req,res)=>{
        db.Movie.findAll({
            order:[["release_date","DESC"]],
            limit:5})
        .then((resultados)=>{
            res.render("recommendedMovies",{movies:resultados})
        })
    }
};

module.exports=moviesController;