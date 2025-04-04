ServerEvents.recipes(e => {

    //Calcite
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "minecraft:powder_snow" }, "second": { "blocks": "minecraft:water" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "minecraft:calcite" } })
    //Dripstone
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "create:chocolate" }, "second": { "blocks": "minecraft:lava" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "minecraft:dripstone_block" } })
    //Deepslate
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "minecraft:water" }, "second": { "blocks": "minecraft:lava" } }, "catalyst": { "blocks": "minecraft:bedrock" }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "minecraft:cobbled_deepslate" } })

})