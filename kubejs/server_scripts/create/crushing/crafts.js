ServerEvents.recipes(e => {

    //Experience Nugget
    e.custom({ "type": "create:crushing", "ingredients": [{ "item": "kubejs:polished_rose_quartz_block" }], "processing_time": 350, "results": [{ "count": 3, "id": "create:polished_rose_quartz" }, { "chance": 0.75, "id": "create:experience_nugget" }] })

    //Quartz
    e.custom({ "type": "create:crushing", "ingredients": [{ "item": "minecraft:quartz_block" }], "processing_time": 20, "results": [{ "count": 4, "id": "minecraft:quartz" }] })

    //Gilded Blackstone
    e.custom({ "type": "create:crushing", "ingredients": [{ "item": "minecraft:gilded_blackstone" }], "processing_time": 400, "results": [{ "count": 8, "id": "minecraft:gold_nugget" }, { "chance": 0.75, "id": "create:experience_nugget" }, { "chance": 0.125, "id": "minecraft:blackstone" }] })

})