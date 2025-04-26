ServerEvents.recipes(e => {

    //Gun powder from powder cannon
    e.custom({ "type": "create:milling", "ingredients": [{ "item": "mynethersdelight:powder_cannon" }], "processing_time": 350, "results": [{ "count": 1, "id": "minecraft:gunpowder" }, { "chance": 0.25, "id": "minecraft:gunpowder" }] })

})