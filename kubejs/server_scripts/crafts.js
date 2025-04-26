ServerEvents.recipes(e => {

    //Plolished Rose Quartz Block
    e.shapeless('kubejs:polished_rose_quartz_block', '9x create:polished_rose_quartz')
    e.shapeless('9x create:polished_rose_quartz', 'kubejs:polished_rose_quartz_block')

    //Coral Crafts
    function corals(item) {
        e.shapeless('4x minecraft:' + item + '_coral', 'minecraft:' + item + '_coral_block')
        e.shapeless('minecraft:' + item + '_coral_block', '4x minecraft:' + item + '_coral')
        e.shapeless('minecraft:' + item + '_coral', 'minecraft:' + item + '_coral_fan')
        e.shapeless('minecraft:' + item + '_coral_fan', 'minecraft:' + item + '_coral')
        e.custom({ "type": "create_aquatic_ambitions:channeling", "ingredients": [{ "item": "minecraft:dead_" + item + "_coral_block" }], "results": [{ "id": "minecraft:" + item + "_coral_block" }] })
        e.custom({ "type": "create_aquatic_ambitions:channeling", "ingredients": [{ "item": "minecraft:dead_" + item + "_coral" }], "results": [{ "id": "minecraft:" + item + "_coral" }] })
        e.custom({ "type": "create_aquatic_ambitions:channeling", "ingredients": [{ "item": "minecraft:dead_" + item + "_coral_fan" }], "results": [{ "id": "minecraft:" + item + "_coral_fan" }] })
    }
    var coral = ['horn', 'fire', 'bubble', 'brain', 'tube']
    coral.forEach(I => { corals(I) })

    function ashCrafting(input) { e.smelting('supplementaries:ash', input) }
    var wood = ['#minecraft:wooden_buttons', '#minecraft:wooden_pressure_plates', '#minecraft:wooden_doors', '#minecraft:planks', '#minecraft:wooden_stairs', '#minecraft:wooden_slabs', '#c:fences/wooden', '#c:fence_gates/wooden', '#minecraft:wooden_trapdoors']
    wood.forEach(W => { ashCrafting(W) })

    //Shelf Supplementaries
    e.shapeless('supplementaries:item_shelf', '#minecraft:wooden_slabs')
    //Coal Block Slab
    e.shaped('6x kubejs:coal_block_slab', ['AAA'], {
        A: 'minecraft:coal_block'
    })
    e.stonecutting('2x kubejs:coal_block_slab', 'minecraft:coal_block')

    //Charcoal Block
    e.shapeless('9x minecraft:charcoal', 'kubejs:block_charcoal')
    e.shapeless('kubejs:block_charcoal', '9x minecraft:charcoal')

    //pale moss
    e.shaped('3x minecraft:pale_moss_carpet', ['AA '], {
        A: 'minecraft:pale_moss_block'
    })
    //Blazing Template
    e.shaped('create_dragons_plus:blaze_upgrade_smithing_template', ['BAB', 'BCB', 'BBB'], {
        A: 'minecraft:netherite_upgrade_smithing_template',
        B: 'minecraft:blaze_rod',
        C: 'minecraft:netherrack',
    })
    //Sleeping Bag
    function sleepingBag(color) { e.shaped('comforts:sleeping_bag_' + color, ['AAA'], { A: 'handcrafted:' + color + '_sheet', }) }
    var colorBag = ['lime', 'yellow', 'orange', 'red', 'brown', 'black', 'gray', 'light_gray', 'white', 'pink', 'magenta', 'purple', 'blue', 'light_blue', 'cyan', 'green']
    colorBag.forEach(C => { sleepingBag(C) })

    function slabNstairs(input, output) {
        //slab
        e.stonecutting('2x kubejs:' + output + '_slab', input)
        e.shaped('6x kubejs:' + output + '_slab', ['AAA'], { A: input })
        //stairs
        e.stonecutting('kubejs:' + output + '_stairs', input)
        e.shaped('4x kubejs:' + output + '_stairs', ['A  ', 'AA ', 'AAA'], { A: input })
    }

    slabNstairs('create:industrial_iron_block', 'industrial_iron')
    slabNstairs('create:weathered_iron_block', 'weathered_iron')
    slabNstairs('minecraft:gravel', 'gravel')
    slabNstairs('minecraft:moss_block', 'moss_block')
    slabNstairs('minecraft:dirt', 'dirt')
    slabNstairs('minecraft:sand', 'sand')
    slabNstairs('minecraft:red_sand', 'red_sand')
    slabNstairs('minecraft:pale_moss_block', 'pale_moss_block')
    slabNstairs('minecraft:sculk', 'sculk')
    slabNstairs('minecraft:glass', 'glass')
    slabNstairs('minecraft:red_stained_glass', 'red_stained_glass')
    slabNstairs('minecraft:orange_stained_glass', 'orange_stained_glass')
    slabNstairs('minecraft:yellow_stained_glass', 'yellow_stained_glass')
    slabNstairs('minecraft:lime_stained_glass', 'lime_stained_glass')
    slabNstairs('minecraft:green_stained_glass', 'green_stained_glass')
    slabNstairs('minecraft:blue_stained_glass', 'blue_stained_glass')
    slabNstairs('minecraft:cyan_stained_glass', 'cyan_stained_glass')
    slabNstairs('minecraft:light_blue_stained_glass', 'light_blue_stained_glass')
    slabNstairs('minecraft:pink_stained_glass', 'pink_stained_glass')
    slabNstairs('minecraft:magenta_stained_glass', 'magenta_stained_glass')
    slabNstairs('minecraft:purple_stained_glass', 'purple_stained_glass')
    slabNstairs('minecraft:brown_stained_glass', 'brown_stained_glass')
    slabNstairs('minecraft:black_stained_glass', 'black_stained_glass')
    slabNstairs('minecraft:gray_stained_glass', 'gray_stained_glass')
    slabNstairs('minecraft:light_gray_stained_glass', 'light_gray_stained_glass')
    slabNstairs('minecraft:white_stained_glass', 'white_stained_glass')
    slabNstairs('minecraft:tinted_glass', 'tinted_glass')
    slabNstairs('chipped:sanded_blackstone', 'sanded_blackstone')

    //Stick Bundle
    e.shapeless('9x minecraft:stick', 'kubejs:sticks_bundle')
    e.shapeless('kubejs:sticks_bundle', '9x minecraft:stick')

    //Display Plate
    e.shapeless('handcrafted:wood_plate', 'displaydelight:food_plate')
    e.shapeless('displaydelight:food_plate', 'handcrafted:wood_plate')

    //Stone Chaine
    e.shaped('16x additionallanterns:stone_chain', ['A', 'B', 'A'], {
        A: 'minecraft:stone',
        B: 'minecraft:cobblestone'
    })

    //Raw Burger Bun
    e.shapeless('someassemblyrequired:raw_burger_bun', ['farmersdelight:wheat_dough', '#c:seeds'])

    //Diamond Sand Paper
    e.shapeless('createsandpapers:mineral_sand_paper', ['minecraft:paper', 'minecraft:diamond'])

    //Soul Sand Sand Paper
    e.shapeless('createsandpapers:soul_sand_paper', ['minecraft:paper', '#minecraft:soul_fire_base_blocks'])

    //Warped Lamp
    e.shaped('4x additional_lights:al_lamp_warped_planks', ['A', 'B'], {
        A: 'minecraft:glowstone',
        B: 'minecraft:warped_planks'
    })

    //Crimson Lamp
    e.shaped('4x additional_lights:al_lamp_crimson_planks', ['A', 'B'], {
        A: 'minecraft:glowstone',
        B: 'minecraft:crimson_planks'
    })

    //Warped AlTorch
    e.shaped('4x additional_lights:al_torch_warped_planks', ['AA', 'AA', 'B '], {
        A: 'minecraft:torch',
        B: 'minecraft:warped_planks'
    })

    //Crimson AlTorch
    e.shaped('4x additional_lights:al_torch_crimson_planks', ['AA', 'AA', 'B '], {
        A: 'minecraft:torch',
        B: 'minecraft:crimson_planks'
    })
    //Pale Oak Heart
    e.shaped('kubejs:pale_oak_heart', ['A', 'B', 'A'], {
        A: 'minecraft:pale_oak_log',
        B: 'minecraft:resin_block'
    })

    //Ominous Bottle II
    e.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [{ "item": "minecraft:ominous_bottle" }, { "item": "create:experience_nugget" }],
        "result": { "id": "minecraft:ominous_bottle", "components": { "minecraft:ominous_bottle_amplifier": 1 } }
    })
    //Ominous Bottle III
    e.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [{ "item": "minecraft:ominous_bottle" }, { "item": "minecraft:blaze_rod" }],
        "result": { "id": "minecraft:ominous_bottle", "components": { "minecraft:ominous_bottle_amplifier": 2 } }
    })
    //Ominous Bottle IV
    e.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [{ "item": "minecraft:ominous_bottle" }, { "item": "minecraft:sculk" }],
        "result": { "id": "minecraft:ominous_bottle", "components": { "minecraft:ominous_bottle_amplifier": 3 } }
    })
    //Ominous Bottle V
    e.custom({
        "type": "minecraft:crafting_shapeless",
        "ingredients": [{ "item": "minecraft:ominous_bottle" }, { "item": "minecraft:breeze_rod" }],
        "result": { "id": "minecraft:ominous_bottle", "components": { "minecraft:ominous_bottle_amplifier": 4 } }
    })

    /****************************** Lychee Crafts ******************************/
    //Pale Oak Heart
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": "c:tools/knife" },
        "block_in": "kubejs:pale_oak_heart",
        "post": [
            { "type": "drop_item", "id": "minecraft:resin_clump" },
            { "type": "damage_item" },
            { "type": "place", "block": "kubejs:empty_pale_oak_heart", "if": { "type": "chance", "chance": 0.1 } }
        ]
    })
    //Wildflowers
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": { "item": "minecraft:yellow_dye" },
        "block_in": "minecraft:pink_petals",
        "post": [{ "type": "place", "block": "minecraft:wildflowers" }]
    })

    //Leather
    e.smelting('minecraft:leather', 'minecraft:rotten_flesh')

    //Nether Brick Button
    e.shapeless('kubejs:nether_brick_button', 'minecraft:nether_bricks')
    e.shapeless('kubejs:brick_button', 'minecraft:bricks')
    e.shapeless('kubejs:red_nether_brick_button', 'minecraft:red_nether_bricks')
    e.shapeless('kubejs:polished_deepslate_button', 'minecraft:polished_deepslate')

    //Chipped Crafts
    e.custom({ "type": "chipped:workbench", "ingredients": [{ "tag": "chipped:pale_oak_log" }] })
    e.custom({ "type": "chipped:workbench", "ingredients": [{ "tag": "chipped:pale_oak_planks" }] })
})