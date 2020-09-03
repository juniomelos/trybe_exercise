// Exercício 2: Selecione todos os super-heróis menores do que 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.

> db.superheroes.find(
...     { "aspects.height": { $lt: 180 } }
... ).pretty();
{
        "_id" : ObjectId("5f51208695a95c89ec51235d"),
        "name" : "Abraxas",
        "alignment" : "bad",
        "gender" : "Male",
        "race" : "Cosmic Entity",
        "aspects" : {
                "eyeColor" : "blue",
                "hairColor" : "Black",
                "height" : -99,
                "weight" : -44.9
        },
        "publisher" : "Marvel Comics"
}
Type "it" for more
