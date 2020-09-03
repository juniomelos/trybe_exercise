// Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.

> db.superheroes.findOne({ "aspects.height": { $gte: 200 } });
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
