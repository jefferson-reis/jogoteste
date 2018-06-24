var express    = require('express');        // call express
var app        = express();                 // define our app using express


app.listen(8080, () => {
    console.log("listen on 8080")
});


app.get("/jogo/:numerointeracoes", (req,res) => {

    let numerointeracoes = req.params.numerointeracoes;

    let print;
    
//o if deve selecionar os numeros multiplos de 7 e todos os numeros que tenham 7
    for (i = 0; i <= numerointeracoes; i++) {
        
        let a = i.toString();
        let separado = a.split(''); // isso faz algum sentido? poderia usar o lenght = -1?

      
        if(a % 7 === 0 &&  (separado.indexOf('7'))){

            print += 'pi \n\n';
    
        }
        
        else{
            
            print += a + ' \n\n';
        }

        
    }

    return res.send(print);


})


