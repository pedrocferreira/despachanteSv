var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports = function (app) {
    app.get('/apiscaj', function (req, res) {
        console.log('Recebida quequisisçao  de teste na porta 3000');
        console.log('Conectato API Scaj');
        res.send('<script> TEste</script>');

    });
    //Retorna toda lista completa de mercados  
    app.get('/apiscaj/orcamentos', (req, res, err) => {
        var connection = app.persistencia.connectionFactory();
        connection.query('select * from orcamentos', (err, orcamentos) => {

            console.log('Select tudo :::::::: ok;');
            console.log('....');
            console.log('Sv conectado');
            res.json(orcamentos);
        });
    })

  
    // restorna URL do avatar
    app.get('/torresoff/mercados/avatar', (req, res, err) => {
        var connection = app.persistencia.connectionFactory();
        connection.query('select id, avatar,endereco  from mercado', (err, mercados) => {
            console.log('Select avatar :::::::: ok;');
            console.log('....');
            console.log('Sv conectado');



            res.json(mercados);
        });
    });


    app.post('/torresoff/mercados/folders', (req, res, err) => {
        var connection = app.persistencia.connectionFactory();
        var id = req.body;
        var sql = 'SELECT * FROM mercado WHERE id = ' + mysql.escape(id);

        connection.query('SELECT * FROM mercado WHERE id = ' + mysql.escape(id), (err, mercados) => {
            res.json(mercados);
        })
    }
    );

    // retorna nome, endereço e URL dos fodlder0

    app.get('/torresoff/mercados/folders', (req, resp, err) => {
        var connection = app.persistencia.connectionFactory();
        connection.query('select ')

    })



    app.post('/apiscaj/inserir', function (req, res) {
        var connection = app.persistencia.connectionFactory();
        var id = req.body.id;
        var valorTotal = req.body.valorTotal;
        var placa = req.body.placa;
        var renavam = req.body.renavam;
        var lucro = req.body.lucro;
        console.log("______________________________");
        console.log(id);
        console.log(valorTotal);
        console.log(placa);
        console.log(renavam);
        console.log(lucro);
        console.log("_________________________________");



        connection.query("INSERT INTO `orcamentos` (`id`, `valorTotal`, `placa`, `renavam`, `lucro`) VALUES (NULL,  " + valorTotal +" ,  '" +placa+ "' , " +renavam+ ", " +lucro+ ");", (err, mercados) => {
            console.log("Regitrado ");

            console.log(err);




        });







    })


    app.get('/apiscaj/orcamentos/lucro', (req, res, err) => {
        var connection = app.persistencia.connectionFactory();
        connection.query('select sum(lucro) from orcamentos', (err, orcamentos) => {

            console.log('Select tudo :::::::: ok;');
            console.log('....');
            console.log('Sv conectado');
            res.json(orcamentos);
        });
    })




    app.post('/apiscaj/orcamentos/delete', function (req, res) {
        var connection = app.persistencia.connectionFactory();
        var id = req.body.id;
 

        connection.query("DELETE FROM orcamentos     WHERE id = '" +id+ "' ");

        console.log("Deletado",id);
        



    

    });


    app.put('/apiscaj/orcamentos/edit', function (req, res) {
        var connection = app.persistencia.connectionFactory();
        var id = req.body.id;
        var valorTotal = req.body.valorTotal;
        var placa = req.body.placa;
        var renavam = req.body.renavam;
        var lucro = req.body.lucro;
        
        connection.query("UPDATE  orcamentos set  valorTotal = " + valorTotal + " , placa =  " + placa + ", renavam = " + renavam + " , lucro = " + lucro + "  WHERE id = '"+id+"' ;", (err, mercados) => {
            console.log("Editado ");

            console.log(err);




        });

       

        
    })

    
    app.post('/apiscaj/orcamentos/edit/return', function (req, res) {
        var connection = app.persistencia.connectionFactory();
        var id = req.body.id;
        connection.query("select * from orcamentos where id =  '" + id + "' ", (err, orcamentos) => {
            console.log("Editado ");
            res.json(orcamentos);
        });
    })


}



