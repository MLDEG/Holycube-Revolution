ServerEvents.recipes(e => {
    //Clean Terracotta
    e.custom({ "type": "create:splashing", "ingredients": [{ "tag": "minecraft:terracotta" }], "results": [{ "id": "minecraft:terracotta" }] })
    //Clean Asphalt
    e.custom({ "type": "create:splashing", "ingredients": [{ "tag": "create_d2d:asphalts" }], "results": [{ "id": "create_d2d:asphalt" }] })
    //Clean Bore
    e.custom({ "type": "create:splashing", "ingredients": [{ "tag": "create_d2d:bore_blocks" }], "results": [{ "id": "create_d2d:bore_block" }] })
    //Weathered Limestone
    e.custom({ "type": "create:splashing", "ingredients": [{ "item": "create:limestone" }], "results": [{ "id": "create_d2d:weathered_limestone" }] })
})