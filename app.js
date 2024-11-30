import carros2024 from './tabelacarros.js';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => { 
    resposta.status(200).send(carros2024);
});

app.get('/:sigla',(requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase(); //Obtendo a sigla.
    const carro = carros2024.find((infoCarro) => infoCarro.sigla === siglaInformada); //Buscando a sigla.
    
    if (!carro) {
        //Vazio Not.
        resposta
        .status(404)
        .send(
            'Não existe um carro com a sigla informada' //Mensagem de erro.
        );
    return;
    }
    resposta.status(200).send(carro); //Se encontrado a sigla retorna a resposta correta.
});

app.post('/', (req, res ) => {
    const novoCarro = req.body; //Obtém o corpo enviado para incluir um carro.
    carros2024.push(novoCarro); //Adiciona o novo carro a array.
    res.status(200).send(novoCarro); //Retorna o carro add com o status 200(OK).
});


// Inicia o servidor na porta 3000:
app.listen(3000,() => console.log("Servidor Rodando com Sucesso"));

// http://localhost:3000/
// node app.js