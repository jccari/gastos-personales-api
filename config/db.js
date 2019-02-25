module.exports = {
    dbuser : "jhoelccari",
    dbpassword : "YmibOMgJ5LPI8VVJ",
    dbUrl : function (){
        var url = "mongodb+srv://"+ this.dbuser+":"+ this.dbpassword + "@clustergastospersonales-gqibo.gcp.mongodb.net/gastos-personales?retryWrites=true"
        return url;
    }
}