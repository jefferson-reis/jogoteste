var express    = require('express');        // call express
var app        = express();                 // define our app using express


app.listen(8080, () => {
    console.log("listen on 8080")
});


app.get("/jogo/:numerointeracoes", (req,res) => {

    let numerointeracoes = req.params.numerointeracoes;
    let print;
    let str = numerointeracoes; 
    let res = str.substr();
    
//o if deve selecionar os numeros multiplos de 7 e todos os numeros que tenham 7
    for (i = 0; i <= numerointeracoes; i++) {

        if(i % 7 === 0){

            print += 'pi \n\n';
    
        }
        
        else{
            
            print += i + ' \n\n';
        }

        
    }

    return res.send(print);


})

