ServerEvents.recipes(e => {

    //Empty Ominous Bottle
    e.custom({ "type": "create:deploying", "ingredients": [{ "item": "minecraft:glass_bottle" }, { "item": "minecraft:sculk_vein" }], "results": [{ "id": "kubejs:empty_ominous_bottle" }] })

})