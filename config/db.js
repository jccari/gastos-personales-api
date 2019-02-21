module.exports = {
    dbuser : "<USER>",
    dbpassword : "<PASSWORD>",
    dbUrl : function (){
        var url = "mongodb+srv://"+ this.dbuser+":"+ this.dbpassword + "@clustergastospersonales-gqibo.gcp.mongodb.net/gastos-personales?retryWrites=true"
        return url;
    }
}