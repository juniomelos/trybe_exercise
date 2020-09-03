// Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

> db.superheroes.find( { "aspects.hairColor": { $nin: ["black", "No Hair"] } } ).pretty().limit(1)
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