// Importando o Joi (Validação)
import Joi from "joi";

// Validação para inclusão de modelo carro
export const modeloCarro = Joi.object({
    nome: Joi.string().min(3).required(), //min() - minimo, () - Quantidade de caracteres, length() - Número de caracteres.
    sigla: Joi.string().length(3).required,
    potencia: Joi.number().min(1).required(),
    velocidadeMaxima: Joi.number().min(1).required(),
    consumo: Joi.number().min(0.1).required(),
    aceleracao: Joi.number().min(0).required(),
    preco: Joi.number().min(0).required(),
});

export const modeloAtualizacaoCarro =Joi.object({
    nome: Joi.string().min(3),
    sigla: Joi.string().length(3),
    potencia: Joi.number().min(1),
    velocidadeMaxima: Joi.number().min(1),
    consumo: Joi.number().min(0.1),
    aceleracao: Joi.number().min(0.1),
    preco: Joi.number().min(0),
    // ano: Joi.number().integer().min(1886).max(new Date().getFullYear()),
}).min(1); // Força a alterar no minimo 1 campo ou mais.