ServerEvents.recipes(e => {
    //Gabbro
    e.custom({ "type": "create:compacting", "ingredients": [{ "item": "minecraft:granite" }, { "item": "minecraft:dripstone_block" }, { "type": "fluid_stack", "amount": 100, "fluid": "minecraft:lava" }], "results": [{ "id": "create_d2d:gabbro" }] })
    //Dolomite
    e.custom({ "type": "create:compacting", "ingredients": [{ "item": "minecraft:calcite" }, { "item": "create:limestone" }, { "type": "fluid_stack", "amount": 100, "fluid": "minecraft:lava" }], "results": [{ "id": "create_d2d:dolomite" }] })
    //Breccia
    e.custom({ "type": "create:compacting", "ingredients": [{ "item": "minecraft:granite" }, { "item": "minecraft:terracotta" }, { "type": "fluid_stack", "amount": 100, "fluid": "minecraft:lava" }], "results": [{ "id": "create_d2d:breccia" }] })
})