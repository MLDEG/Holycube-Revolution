ServerEvents.recipes(e => {
    //Phantom Membrane
    e.custom({ "type": "create:haunting", "ingredients": [{ "item": "minecraft:leather" }], "results": [{ "id": "minecraft:phantom_membrane" }] })
    //Ender Pearl
    e.custom({ "type": "create:haunting", "ingredients": [{ "item": "minecraft:slime_ball" }], "results": [{ "id": "minecraft:ender_pearl" }] })
})