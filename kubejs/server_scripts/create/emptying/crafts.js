ServerEvents.recipes(e => {

    //Lumisens bottle
    e.custom({ "type": "create:emptying", "ingredients": [{ "item": "supplementaries:lumisene_bottle" }], "results": [{ "id": "minecraft:glass_bottle" }, { "amount": 250, "id": "supplementaries:lumisene" }] })

})