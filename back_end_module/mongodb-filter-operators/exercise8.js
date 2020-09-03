// Exercício 8: Retorne o total de super-heróis com olhos azuis.
// Utilizando o operador $eq:

> db.superheroes.count({ "aspects.eyeColor": { $eq: "blue" } })
225

