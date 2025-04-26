ServerEvents.recipes(e => {
    function dyeCrafts(dye) {
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:white_wool" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "minecraft:" + dye + "_wool" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:glass" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "minecraft:" + dye + "_stained_glass" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:terracotta" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "minecraft:" + dye + "_terracotta" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create:framed_glass" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "createframed:" + dye + "_stained_framed_glass" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create_d2d:asphalt" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_d2d:" + dye + "_asphalt" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create_d2d:bore_block" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_d2d:" + dye + "_bore_block" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:white_dye" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "minecraft:" + dye + "_dye" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create_vibrant_vaults:vertical_item_vault" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_vertical_item_vault" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create:item_vault" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_item_vault" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create:redstone_requester" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_redstone_requester" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create:packager" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_packager" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create:package_frogport" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_package_frogport" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create:stock_link" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_stock_link" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create_vibrant_vaults:shipping_container" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_shipping_container" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create_vibrant_vaults:basic_shipping_container" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_basic_shipping_container" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create_vibrant_vaults:vertical_shipping_container" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_vertical_shipping_container" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create_vibrant_vaults:vertical_basic_shipping_container" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_vibrant_vaults:" + dye + "_vertical_basic_shipping_container" }] })
    }

    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { dyeCrafts(D) })

    //Crying Obsidian
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:obsidian" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:purple" }], "results": [{ "id": "minecraft:crying_obsidian" }] })

    //Bee Nest Block
    e.custom({ "type": "create:filling", "ingredients": [{ "tag": "minecraft:planks" }, { "type": "fluid_stack", "amount": 50, "fluid": "create:honey" }], "results": [{ "id": "kubejs:bee_nest_block" }] })

    //Lumisens bottle
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:glass_bottle" }, { "type": "fluid_stack", "amount": 250, "fluid": "supplementaries:lumisene" }], "results": [{ "id": "supplementaries:lumisene_bottle" }] })

    //Pale Oak Heart
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "kubejs:empty_pale_oak_heart" }, { "type": "fluid_stack", "amount": 250, "fluid": "create_confectionery:caramel" }], "results": [{ "id": "kubejs:pale_oak_heart" }] })

})