ServerEvents.recipes(e => {

    //Calcite
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "minecraft:powder_snow" }, "second": { "blocks": "minecraft:water" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "minecraft:calcite" } })
    //Dripstone
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "create:chocolate" }, "second": { "blocks": "minecraft:lava" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "minecraft:dripstone_block" } })
    //Deepslate
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "minecraft:water" }, "second": { "blocks": "minecraft:lava" } }, "catalyst": { "blocks": "minecraft:bedrock" }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "minecraft:cobbled_deepslate" } })
    //Larvikite
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "kubejs:light_blue" }, "second": { "blocks": "minecraft:lava" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "embellishcraft:larvikite" } })
    //Slate
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "kubejs:blue" }, "second": { "blocks": "minecraft:lava" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "embellishcraft:slate" } })
    //Jade
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "create_mechanical_chicken:chicken_nutrient" }, "second": { "blocks": "minecraft:lava" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "embellishcraft:jade" } })
    //Marble
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "kubejs:white" }, "second": { "blocks": "minecraft:lava" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "embellishcraft:marble" } })
    //Gneiss
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "create_confectionery:white_chocolate" }, "second": { "blocks": "minecraft:lava" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "embellishcraft:gneiss" } })
    //Basalt
    e.custom({ "type": "create_mechanical_extruder:extruding", "blockIngredients": { "first": { "blocks": "kubejs:black" }, "second": { "blocks": "minecraft:lava" } }, "consumeBlocks": { "first": false, "second": false }, "result": { "id": "embellishcraft:basalt" } })

})