// Exercício 16: Retorne o total de documentos que não contém o campo race.

> db.superheroes.count( { race: { $exists: false } } )
304
