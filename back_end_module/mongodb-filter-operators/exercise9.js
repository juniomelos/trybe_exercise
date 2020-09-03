// Exercício 9: Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos ou carecas ("No Hair").

> db.superheroes.find( { "aspects.hairColor": { $in: ["black", "No Hair"] }} ).pretty().limit(3)
{
        "_id" : ObjectId("5f51208695a95c89ec512358"),
        "name" : "Abomination",
        "alignment" : "bad",
        "gender" : "Male",
        "race" : "Human / Radiation",
        "aspects" : {
                "eyeColor" : "green",
                "hairColor" : "No Hair",
                "height" : 203,
                "weight" : 200
        },
        "publisher" : "Marvel Comics"
}
{
        "_id" : ObjectId("5f51208695a95c89ec512359"),
        "name" : "A-Bomb",
        "alignment" : "good",
        "gender" : "Male",
        "race" : "Human",
        "aspects" : {
                "eyeColor" : "yellow",
                "hairColor" : "No Hair",
                "height" : 203,
                "weight" : 200
        },
        "publisher" : "Marvel Comics"
}
{
        "_id" : ObjectId("5f51208695a95c89ec51235a"),
        "name" : "Abin Sur",
        "alignment" : "good",
        "gender" : "Male",
        "race" : "Ungaran",
        "aspects" : {
                "eyeColor" : "blue",
                "hairColor" : "No Hair",
                "skinColor" : "red",
                "height" : 185,
                "weight" : 40.82
        },
        "publisher" : "DC Comics"
}

