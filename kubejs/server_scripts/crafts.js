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
    slabNstairs('minecraft:honeycomb_block', 'honeycomb_block')
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
    e.custom({ "type": "chipped:workbench", "ingredients": [{ "tag": "chipped:pale_moss_block" }] })
    e.custom({ "type": "chipped:workbench", "ingredients": [{ "tag": "chipped:pale_oak_door" }] })
    e.custom({ "type": "chipped:workbench", "ingredients": [{ "tag": "chipped:pale_oak_trapdoor" }] })
    e.custom({ "type": "chipped:workbench", "ingredients": [{ "tag": "chipped:stripped_pale_oak_log" }] })
    //Vault Component
    e.shapeless('create_sa:vault_component', ['create:item_vault', 'minecraft:tripwire_hook'])
    //Pale Oak Corner Trim
    e.shaped('4x kubejs:pale_oak_corner_trim', ['A  ', 'A  ', 'AAA'], {
        A: 'minecraft:pale_oak_planks'
    })
    //Pale Oak Pillar Trim
    e.shaped('4x kubejs:pale_oak_pillar_trim', ['A', 'A', 'A'], {
        A: 'minecraft:pale_oak_planks'
    })
    //Pale Oak Bench
    e.shaped('2x kubejs:pale_oak_bench', ['AAA', 'BBB', 'A A'], {
        A: 'minecraft:pale_oak_planks',
        B: 'minecraft:pale_oak_slab'
    })
    //Pale Oak Couch
    e.shaped('2x kubejs:pale_oak_couch', ['BCB', 'AAA'], {
        A: 'minecraft:pale_oak_planks',
        B: '#minecraft:wool',
        C: '#handcrafted:cushions'
    })
    //Pale Oak Chair
    e.shaped('2x kubejs:pale_oak_chair', ['B ', 'AA', 'CC'], {
        A: 'minecraft:pale_oak_planks',
        B: 'minecraft:pale_oak_slab',
        C: 'minecraft:stick'
    })
    //Pale Oak Dining Bench
    e.shaped('2x kubejs:pale_oak_dining_bench', ['BBB', 'A A'], {
        A: 'minecraft:pale_oak_planks',
        B: 'minecraft:pale_oak_slab'
    })
    //Pale Oak Table
    e.shaped('2x kubejs:pale_oak_table', ['AAA', 'B B'], {
        A: 'minecraft:pale_oak_planks',
        B: 'minecraft:stick'
    })
    //Pale Oak Fancy Bed
    e.shaped('kubejs:pale_oak_fancy_bed', [' DB', 'ACC', 'AAA'], {
        A: 'minecraft:pale_oak_planks',
        B: '#handcrafted:sheets',
        C: '#minecraft:wool',
        D: '#handcrafted:cushions'
    })

    //Bedrock Breaker
    e.custom({
        "type": "minecraft:crafting_shaped", "category": "misc", "key": { "#": { "item": "minecraft:stick" }, "X": { "item": "minecraft:netherite_block" } },
        "pattern": ["XXX", " # ", " # "],
        "result": { "count": 1, "id": "bedrock_breaker:bedrock_breaker", "components": { "minecraft:max_damage": 900, "minecraft:custom_data": { "last_layer": false, "the_end": false } } }
    })
    //Mob Detector
    e.shaped('entitydetectors:mob_detector', ["ABA", "CDC", "AEA"], {
        A: 'minecraft:red_nether_bricks',
        B: '#c:slimeballs',
        C: 'minecraft:spider_eye',
        D: '#c:gems/quartz',
        E: '#c:dusts/redstone'
    })
    //Player Detector
    e.shaped('entitydetectors:player_detector', ["ABA", "CDC", "ABA"], {
        A: '#c:cobblestones',
        B: '#c:dusts/redstone',
        C: 'minecraft:spider_eye',
        D: '#c:gems/quartz',
    })
    //Bundle
    e.shaped('minecraft:bundle', ["A", "B"], {
        A: 'minecraft:string',
        B: 'minecraft:leather'
    })
    //Ink Sac
    e.shapeless('minecraft:ink_sac', ['minecraft:black_dye', 'minecraft:leather'])
    //Tall Grass
    e.shapeless('minecraft:tall_grass', '2x minecraft:short_grass')
    //Large Fern
    e.shapeless('minecraft:large_fern', '2x minecraft:fern')
    //Copper Unoxidation
    function unoxidation(clean, exposed, weathered, oxidized) {
        e.stonecutting(weathered, oxidized)
        e.stonecutting(exposed, weathered)
        e.stonecutting(clean, exposed)
    }
    unoxidation('minecraft:copper_block', 'minecraft:exposed_copper', 'minecraft:weathered_copper', 'minecraft:oxidized_copper')
    unoxidation('minecraft:chiseled_copper', 'minecraft:exposed_chiseled_copper', 'minecraft:weathered_chiseled_copper', 'minecraft:oxidized_chiseled_copper')
    unoxidation('minecraft:copper_grate', 'minecraft:exposed_copper_grate', 'minecraft:weathered_copper_grate', 'minecraft:oxidized_copper_grate')
    unoxidation('minecraft:cut_copper', 'minecraft:exposed_cut_copper', 'minecraft:weathered_cut_copper', 'minecraft:oxidized_cut_copper')
    unoxidation('minecraft:cut_copper_stairs', 'minecraft:exposed_cut_copper_stairs', 'minecraft:weathered_cut_copper_stairs', 'minecraft:oxidized_cut_copper_stairs')
    unoxidation('minecraft:cut_copper_slab', 'minecraft:exposed_cut_copper_slab', 'minecraft:weathered_cut_copper_slab', 'minecraft:oxidized_cut_copper_slab')
    unoxidation('minecraft:copper_door', 'minecraft:exposed_copper_door', 'minecraft:weathered_copper_door', 'minecraft:oxidized_copper_door')
    unoxidation('minecraft:copper_trapdoor', 'minecraft:exposed_copper_trapdoor', 'minecraft:weathered_copper_trapdoor', 'minecraft:oxidized_copper_trapdoor')
    unoxidation('minecraft:copper_bulb', 'minecraft:exposed_copper_bulb', 'minecraft:weathered_copper_bulb', 'minecraft:oxidized_copper_bulb')
    unoxidation('create:copper_shingle_slab', 'create:exposed_copper_shingle_slab', 'create:weathered_copper_shingle_slab', 'create:oxidized_copper_shingle_slab')
    unoxidation('create:copper_shingle_stairs', 'create:exposed_copper_shingle_stairs', 'create:weathered_copper_shingle_stairs', 'create:oxidized_copper_shingle_stairs')
    unoxidation('create:copper_tiles', 'create:exposed_copper_tiles', 'create:weathered_copper_tiles', 'create:oxidized_copper_tiles')
    unoxidation('create:copper_tile_slab', 'create:exposed_copper_tile_slab', 'create:weathered_copper_tile_slab', 'create:oxidized_copper_tile_slab')
    unoxidation('create:copper_tile_stairs', 'create:exposed_copper_tile_stairs', 'create:weathered_copper_tile_stairs', 'create:oxidized_copper_tile_stairs')
    unoxidation('additionallanterns:copper_chain', 'additionallanterns:exposed_copper_chain', 'additionallanterns:weathered_copper_chain', 'additionallanterns:oxidized_copper_chain')

    //Chain crafts
    function chains(material, output, count) { e.shaped(count + 'x ' + output, ["A", "B", "A"], { A: material, B: 'minecraft:chain', }) }
    chains('minecraft:amethyst_shard', 'additionallanterns:amethyst_chain', 8)
    chains('minecraft:andesite', 'additionallanterns:andesite_chain', 16)
    chains('minecraft:basalt', 'additionallanterns:basalt_chain', 16)
    chains('minecraft:blackstone', 'additionallanterns:blackstone_chain', 16)
    chains('minecraft:cobblestone', 'additionallanterns:cobblestone_chain', 16)
    chains('minecraft:cobbled_deepslate', 'additionallanterns:cobbled_deepslate_chain', 16)
    chains('minecraft:sandstone', 'additionallanterns:normal_sandstone_chain', 16)
    chains('minecraft:obsidian', 'additionallanterns:obsidian_chain', 16)
    chains('minecraft:red_sandstone', 'additionallanterns:red_sandstone_chain', 16)
    chains('minecraft:smooth_stone', 'additionallanterns:smooth_stone_chain', 16)
    chains('minecraft:end_stone', 'additionallanterns:end_stone_chain', 16)
    chains('minecraft:granite', 'additionallanterns:granite_chain', 16)
    chains('minecraft:mossy_cobblestone', 'additionallanterns:mossy_cobblestone_chain', 16)
    chains('minecraft:nether_brick', 'additionallanterns:normal_nether_bricks_chain', 16)
    chains('minecraft:copper_ingot', 'additionallanterns:copper_chain', 16)
    chains('minecraft:crimson_planks', 'additionallanterns:crimson_chain', 16)
    chains('minecraft:deepslate_bricks', 'additionallanterns:deepslate_bricks_chain', 16)
    chains('minecraft:diorite', 'additionallanterns:diorite_chain', 16)
    chains('minecraft:stone', 'additionallanterns:stone_chain', 16)
    chains('minecraft:stone_bricks', 'additionallanterns:stone_bricks_chain', 16)
    chains('minecraft:warped_planks', 'additionallanterns:warped_chain', 16)
    chains('minecraft:bone_block', 'additionallanterns:bone_chain', 8)
    chains('minecraft:brick', 'additionallanterns:bricks_chain', 8)
    chains('minecraft:dark_prismarine', 'additionallanterns:dark_prismarine_chain', 8)
    chains('minecraft:prismarine_bricks', 'additionallanterns:prismarine_chain', 8)
    chains('minecraft:purpur_block', 'additionallanterns:purpur_chain', 8)
    chains('minecraft:quartz_block', 'additionallanterns:quartz_chain', 8)
    chains('minecraft:red_nether_bricks', 'additionallanterns:red_nether_bricks_chain', 8)
    chains('minecraft:gold_ingot', 'additionallanterns:gold_chain', 1)
    chains('minecraft:diamond', 'additionallanterns:diamond_chain', 32)
    chains('minecraft:emerald', 'additionallanterns:emerald_chain', 32)
    chains('minecraft:netherite_ingot', 'additionallanterns:netherite_chain', 32)

    //Table Another Furniture
    function tableFurniture(wood) { e.shaped('3x another_furniture:' + wood + '_table', ["AAA", "B B"], { A: 'minecraft:' + wood + '_slab', B: 'minecraft:stick', }) }
    var tableWood = ['dark_oak', 'acacia', 'warped', 'crimson', 'bamboo', 'cherry', 'mangrove', 'jungle', 'birch', 'oak', 'spruce']
    tableWood.forEach(W => { tableFurniture(W) })
    //Terracotta Plate
    e.shaped('3x handcrafted:terracotta_plate', ["AAA"], {
        A: 'bountifulblocks:terracotta_slab'
    })
    //Polished Terracotta
    e.shaped('embellishcraft:polished_terracotta', ["A", "A"], {
        A: 'bountifulblocks:terracotta_slab'
    })
    //Terracotta Thin Pot
    e.shaped('3x handcrafted:terracotta_thin_pot', ["AA", "AA"], {
        A: 'embellishcraft:terracotta_slab'
    })
    //Carved Bamboo Planks
    e.shaped('bountifulblocks:carved_bamboo_planks', ["A", "A"], {
        A: 'minecraft:bamboo_mosaic_slab'
    })
    //Red Sandstone Stairs
    e.shaped('4x minecraft:red_sandstone_stairs', ["A  ", "AA ", "AAA"], {
        A: 'minecraft:red_sandstone'
    })
    //Sandstone Stairs
    e.shaped('4x minecraft:sandstone_stairs', ["A  ", "AA ", "AAA"], {
        A: 'minecraft:sandstone'
    })
    //Service Bell
    e.shaped('another_furniture:service_bell', ["A", "B"], {
        A: 'minecraft:iron_nugget',
        B: 'dndecor:iron_dot_bolt'
    })
    //Saddle Craft
    e.shaped('minecraft:saddle', [" A ", "ABA"], {
        A: 'minecraft:leather',
        B: 'minecraft:iron_ingot'
    })
    //Dried Ghastling
    e.shaped('happyghastmod:ghastling_incubator', ["AAA", "ABA", "AAA"], {
        A: 'minecraft:ghast_tear',
        B: 'minecraft:soul_sand'
    })
    //Winx Harness
    e.shaped('happyghastmod:moddy_harness', ["AAA", "BCB", "DED"], {
        A: 'minecraft:leather',
        B: 'minecraft:glass',
        C: 'minecraft:pink_wool',
        D: 'minecraft:gold_nugget',
        E: 'minecraft:magenta_wool'
    })

    //Netherite Portable Whistle
    e.smithing('create_things_and_misc:netherite_portable_whistle', 'create_things_and_misc:portable_whistle', 'minecraft:netherite_ingot')
    //Design n' Decor stuff
    e.shapeless('dndecor:stone_millstone', ['minecraft:stone', '#c:create/millstones'])
    e.shapeless('dndecor:packed_mud_millstone', ['minecraft:packed_mud', '#c:create/millstones'])
    e.shapeless('dndecor:amethyst_millstone', ['minecraft:amethyst_block', '#c:create/millstones'])
    e.shapeless('dndecor:netherrack_millstone', ['minecraft:netherrack', '#c:create/millstones'])
    e.shapeless('dndecor:basalt_millstone', ['minecraft:basalt', '#c:create/millstones'])
    e.shapeless('dndecor:blackstone_millstone', ['minecraft:blackstone', '#c:create/millstones'])
    e.shapeless('dndecor:weathered_limestone_millstone', ['create_d2d:weathered_limestone', '#c:create/millstones'])
    e.shapeless('dndecor:gabbro_millstone', ['create_d2d:gabbro', '#c:create/millstones'])
    e.shapeless('dndecor:dolomite_millstone', ['create_d2d:dolomite', '#c:create/millstones'])
    e.shapeless('dndecor:veridium_millstone', ['create:veridium', '#c:create/millstones'])
    e.shapeless('dndecor:scorchia_millstone', ['create:scorchia', '#c:create/millstones'])
    e.shapeless('dndecor:scoria_millstone', ['create:scoria', '#c:create/millstones'])
    e.shapeless('dndecor:ochrum_millstone', ['create:ochrum', '#c:create/millstones'])
    e.shapeless('dndecor:limestone_millstone', ['create:limestone', '#c:create/millstones'])
    e.shapeless('dndecor:crimsite_millstone', ['create:crimsite', '#c:create/millstones'])
    e.shapeless('dndecor:asurine_millstone', ['create:asurine', '#c:create/millstones'])
    e.shapeless('dndecor:tuff_millstone', ['minecraft:tuff', '#c:create/millstones'])
    e.shapeless('dndecor:deepslate_millstone', ['minecraft:deepslate', '#c:create/millstones'])
    e.shapeless('dndecor:dripstone_millstone', ['minecraft:dripstone_block', '#c:create/millstones'])
    e.shapeless('dndecor:calcite_millstone', ['minecraft:calcite', '#c:create/millstones'])
    e.shapeless('dndecor:diorite_millstone', ['minecraft:diorite', '#c:create/millstones'])
    e.shapeless('dndecor:granite_millstone', ['minecraft:granite', '#c:create/millstones'])
    e.shapeless('dndecor:dolomite_crushing_wheel', ['create_d2d:dolomite', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:stone_crushing_wheel', ['minecraft:stone', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:packed_mud_crushing_wheel', ['minecraft:packed_mud', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:amethyst_crushing_wheel', ['minecraft:amethyst_block', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:netherrack_crushing_wheel', ['minecraft:netherrack', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:basalt_crushing_wheel', ['minecraft:basalt', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:blackstone_crushing_wheel', ['minecraft:blackstone', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:weathered_limestone_crushing_wheel', ['create_d2d:weathered_limestone', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:gabbro_crushing_wheel', ['create_d2d:gabbro', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:veridium_crushing_wheel', ['create:veridium', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:scorchia_crushing_wheel', ['create:scorchia', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:scoria_crushing_wheel', ['create:scoria', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:ochrum_crushing_wheel', ['create:ochrum', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:limestone_crushing_wheel', ['create:limestone', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:crimsite_crushing_wheel', ['create:crimsite', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:asurine_crushing_wheel', ['create:asurine', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:tuff_crushing_wheel', ['minecraft:tuff', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:deepslate_crushing_wheel', ['minecraft:deepslate', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:dripstone_crushing_wheel', ['minecraft:dripstone_block', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:calcite_crushing_wheel', ['minecraft:calcite', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:diorite_crushing_wheel', ['minecraft:diorite', '#c:create/crushing_wheels'])
    e.shapeless('dndecor:granite_crushing_wheel', ['minecraft:granite', '#c:create/crushing_wheels'])

    //Packed Snow
    e.shapeless('2x bountifulblocks:snow_bricks', '4x bountifulblocks:packed_snow')
    function slabStairsWall(input, output) {
        //slab
        e.stonecutting('2x ' + output + '_slab', input)
        e.shaped('6x ' + output + '_slab', ['AAA'], { A: input })
        //stairs
        e.stonecutting(output + '_stairs', input)
        e.shaped('4x ' + output + '_stairs', ['A  ', 'AA ', 'AAA'], { A: input })
        //Wall
        e.stonecutting(output + '_wall', input)
        e.shaped('6x ' + output + '_wall', ['AAA', 'AAA'], { A: input })
    }
    slabStairsWall('bountifulblocks:packed_snow', 'bountifulblocks:packed_snow')
    slabStairsWall('bountifulblocks:snow_bricks', 'bountifulblocks:snow_brick')

})