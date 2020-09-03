// Exercício 17: Retorne o total de documentos que contém o campo hairColor.

> db.superheroes.count( { "aspects.hairColor": { $exists: true } } )
562
