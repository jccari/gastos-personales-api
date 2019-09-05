module.exports = {
    dbuser : "",        // set userdb
    dbpassword : "",    // set password
    dbUrl : function (){
        var url = "";   // set url database connection like:
                        // var url = "mongodb+srv://"+ this.dbuser+":"+ this.dbpassword + "@clustergastospersonales-gqibo.gcp.mongodb.net/gastos-personales?retryWrites=true"                   
        return url;
    }
}
