// Exercício 13: Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m.

> db.superheroes.find({$nor: [{race: "Human"},{"aspects.height": { $gt: 180}}]}).pretty().limit(2)
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
{
        "_id" : ObjectId("5f51208695a95c89ec51235e"),
        "name" : "Adam Monroe",
        "alignment" : "good",
        "gender" : "Male",
        "aspects" : {
                "eyeColor" : "blue",
                "hairColor" : "Blond",
                "height" : -99,
                "weight" : -44.9
        },
        "publisher" : "NBC - Heroes"
}