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
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create:andesite_casing" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:" + dye }], "results": [{ "id": "create_extra_casing:" + dye + "_casing" }] })
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

    //Pale Oak Heart
    e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:snowball" }, { "type": "fluid_stack", "amount": 250, "fluid": "kubejs:lime" }], "results": [{ "id": "minecraft:slime_ball" }] })

    //Copper Oxidation
    function oxidation(clean, exposed, weathered, oxidized) {
        e.custom({ "type": "create:filling", "ingredients": [{ "item": clean }, { "type": "fluid_stack", "amount": 10, "fluid": "minecraft:water" }], "results": [{ "id": exposed }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": exposed }, { "type": "fluid_stack", "amount": 10, "fluid": "minecraft:water" }], "results": [{ "id": weathered }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": weathered }, { "type": "fluid_stack", "amount": 10, "fluid": "minecraft:water" }], "results": [{ "id": oxidized }] })
    }
    oxidation('minecraft:copper_block', 'minecraft:exposed_copper', 'minecraft:weathered_copper', 'minecraft:oxidized_copper')
    oxidation('minecraft:chiseled_copper', 'minecraft:exposed_chiseled_copper', 'minecraft:weathered_chiseled_copper', 'minecraft:oxidized_chiseled_copper')
    oxidation('minecraft:copper_grate', 'minecraft:exposed_copper_grate', 'minecraft:weathered_copper_grate', 'minecraft:oxidized_copper_grate')
    oxidation('minecraft:cut_copper', 'minecraft:exposed_cut_copper', 'minecraft:weathered_cut_copper', 'minecraft:oxidized_cut_copper')
    oxidation('minecraft:cut_copper_stairs', 'minecraft:exposed_cut_copper_stairs', 'minecraft:weathered_cut_copper_stairs', 'minecraft:oxidized_cut_copper_stairs')
    oxidation('minecraft:cut_copper_slab', 'minecraft:exposed_cut_copper_slab', 'minecraft:weathered_cut_copper_slab', 'minecraft:oxidized_cut_copper_slab')
    oxidation('minecraft:copper_door', 'minecraft:exposed_copper_door', 'minecraft:weathered_copper_door', 'minecraft:oxidized_copper_door')
    oxidation('minecraft:copper_trapdoor', 'minecraft:exposed_copper_trapdoor', 'minecraft:weathered_copper_trapdoor', 'minecraft:oxidized_copper_trapdoor')
    oxidation('minecraft:copper_bulb', 'minecraft:exposed_copper_bulb', 'minecraft:weathered_copper_bulb', 'minecraft:oxidized_copper_bulb')
    oxidation('create:copper_shingle_slab', 'create:exposed_copper_shingle_slab', 'create:weathered_copper_shingle_slab', 'create:oxidized_copper_shingle_slab')
    oxidation('create:copper_shingle_stairs', 'create:exposed_copper_shingle_stairs', 'create:weathered_copper_shingle_stairs', 'create:oxidized_copper_shingle_stairs')
    oxidation('create:copper_tiles', 'create:exposed_copper_tiles', 'create:weathered_copper_tiles', 'create:oxidized_copper_tiles')
    oxidation('create:copper_tile_slab', 'create:exposed_copper_tile_slab', 'create:weathered_copper_tile_slab', 'create:oxidized_copper_tile_slab')
    oxidation('create:copper_tile_stairs', 'create:exposed_copper_tile_stairs', 'create:weathered_copper_tile_stairs', 'create:oxidized_copper_tile_stairs')
    oxidation('additionallanterns:copper_chain', 'additionallanterns:exposed_copper_chain', 'additionallanterns:weathered_copper_chain', 'additionallanterns:oxidized_copper_chain')

})