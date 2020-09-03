// Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
// Sem utilizar o operador $eq:

> db.superheroes.find({ "aspects.eyeColor": "green" }).pretty().limit(3)
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
        "_id" : ObjectId("5f51208695a95c89ec512373"),
        "name" : "Annihilus",
        "alignment" : "bad",
        "gender" : "Male",
        "aspects" : {
                "eyeColor" : "green",
                "hairColor" : "No Hair",
                "height" : 180,
                "weight" : 40.82
        },
        "publisher" : "Marvel Comics"
}
{
        "_id" : ObjectId("5f51208695a95c89ec512395"),
        "name" : "Batgirl",
        "alignment" : "good",
        "gender" : "Female",
        "race" : "Human",
        "aspects" : {
                "eyeColor" : "green",
                "hairColor" : "Red",
                "height" : 170,
                "weight" : 25.85
        },
        "publisher" : "DC Comics"
}

