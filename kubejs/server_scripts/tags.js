//ITEM TAGS
ServerEvents.tags('item', e => {
    e.add('chipped:stripped_pale_oak_log', 'minecraft:stripped_pale_oak_log')
    e.add('chipped:pale_moss_block', 'minecraft:pale_moss_block')
    e.add('chipped:pale_oak_door', 'minecraft:pale_oak_door')
    e.add('chipped:pale_oak_trapdoor', 'minecraft:pale_oak_trapdoor')
    e.add('c:storage_blocks', ['kubejs:polished_rose_quartz_block'])
    e.add('c:storage_blocks/polished_rose_quartz', ['kubejs:polished_rose_quartz_block'])
    e.add('minecraft:beacon_payment_items', ['create:polished_rose_quartz'])
    e.add('c:tools/knife', ['create_things_and_misc:brass_knife', 'create_things_and_misc:zinc_knife', 'create_things_and_misc:copper_knife'])
    e.add('curios:backtank', ['create:netherite_backtank', 'create:copper_backtank'])
    e.add('create:upright_on_belt', ['minecraft:ominous_bottle', 'minecraft:experience_bottle', 'supplementaries:lumisene_bottle', 'kubejs:empty_ominous_bottle', 'kubejs:incomplete_ominous_bottle'])
    e.add('create:fan_transparent', ['kubejs:sand_slab'])
    e.add('supplementaries:throwable_bricks', ['minecraft:resin_brick'])
    e.add('chipped:pale_oak_planks', 'minecraft:pale_oak_planks')
    e.add('handcrafted:counter_materials', 'minecraft:pale_oak_planks')
    e.add('handcrafted:trim_materials', 'minecraft:pale_oak_planks')
    e.add('holycube:stripped_mushroom', ['minecraft:stripped_mushroom_stem', 'minecraft:stripped_red_mushroom_block', 'minecraft:stripped_brown_mushroom_block'])
    e.add('create:sandpaper', ['createsandpapers:mineral_sand_paper', 'createsandpapers:soul_sand_paper'])
    e.remove('curios:back', ['create:netherite_backtank', 'create:copper_backtank'])

    function tagGlassDye(color) {
        e.add('c:dyed/' + color, 'kubejs:polished_glass/' + color + '_stained_glass')
        e.add('c:glass_blocks/' + color, 'kubejs:polished_glass/' + color + '_stained_glass')
    }
    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { tagGlassDye(D) })
    /**************************************Holycube Revolution Tags**************************************/
    e.add('holycube:storage_blocks', ['mapperbase:steel_block', 'minecraft:copper_block', 'minecraft:netherite_block', 'minecraft:diamond_block', 'minecraft:redstone_block', 'minecraft:lapis_block', 'minecraft:emerald_block', 'minecraft:gold_block', 'minecraft:iron_block', 'kubejs:polished_rose_quartz_block', 'create:zinc_block', 'create:andesite_alloy_block', 'create:brass_block', 'create_enchantment_industry:super_experience_block', 'create:experience_block', 'minecraft:glowstone'])
    e.add('holycube:ingots', ['mapperbase:steel_ingot', 'create:brass_ingot', 'create:zinc_ingot', 'create:andesite_alloy', 'minecraft:netherite_ingot', 'minecraft:gold_ingot', 'minecraft:copper_ingot', 'minecraft:iron_ingot'])
    e.add('holycube:nuggets', ['mapperbase:steel_nugget', 'create_enchantment_industry:super_experience_nugget', 'create:experience_nugget', 'create:brass_nugget', 'create:zinc_nugget', 'create:copper_nugget', 'minecraft:gold_nugget', 'minecraft:iron_nugget'])
    e.add('holycube:raw_materials', ['create:raw_zinc', 'minecraft:raw_iron', 'minecraft:raw_copper', 'minecraft:raw_gold', 'mapperbase:raw_steel'])
    e.add('holycube:raw_storage_blocks', ['minecraft:resin_block', 'minecraft:raw_iron_block', 'create:raw_zinc_block', 'minecraft:raw_copper_block', 'minecraft:raw_gold_block'])
    e.add('holycube:bricks', ['supplementaries:ash_brick', 'minecraft:resin_brick', 'minecraft:nether_brick', 'minecraft:brick'])
    e.add('holycube:gems', ['minecraft:emerald', 'minecraft:lapis_lazuli', 'minecraft:diamond'])
    e.add('holycube:shards', ['minecraft:quartz', 'minecraft:amethyst_shard', 'minecraft:prismarine_crystals', 'minecraft:prismarine_shard', 'minecraft:echo_shard', 'endersdelight:ender_shard', 'waystones:dormant_shard', 'create_aquatic_ambitions:flint_shard', 'minecraft:small_amethyst_bud', 'minecraft:medium_amethyst_bud', 'minecraft:large_amethyst_bud', 'minecraft:amethyst_cluster'])
    e.add('holycube:ores', ['minecraft:deepslate_emerald_ore', 'minecraft:deepslate_diamond_ore', 'expandeddelight:deepslate_salt_ore', 'minecraft:emerald_ore', 'minecraft:redstone_ore', 'minecraft:gold_ore', 'minecraft:copper_ore', 'minecraft:iron_ore', 'minecraft:coal_ore', 'minecraft:deepslate_coal_ore', 'minecraft:deepslate_copper_ore', 'minecraft:deepslate_redstone_ore', 'create:deepslate_zinc_ore', 'minecraft:deepslate_lapis_ore', 'minecraft:deepslate_iron_ore', 'minecraft:deepslate_gold_ore', 'expandeddelight:salt_ore', 'create:zinc_ore', 'minecraft:nether_gold_ore', 'minecraft:nether_quartz_ore', 'minecraft:diamond_ore', 'minecraft:lapis_ore'])
    e.add('holycube:sculk', ['minecraft:recovery_compass', 'minecraft:sculk_catalyst', 'minecraft:sculk_vein', 'minecraft:sculk', 'kubejs:sculk_slab', 'kubejs:sculk_stairs', 'minecraft:calibrated_sculk_sensor', 'minecraft:sculk_sensor', 'minecraft:sculk_shrieker', 'minecraft:echo_shard'])
    e.add('holycube:hostile_drops', ['minecraft:slime_ball', 'minecraft:string', 'minecraft:ender_pearl', 'minecraft:rotten_flesh', 'minecraft:spider_eye', 'minecraft:bone', 'minecraft:breeze_rod', 'minecraft:blaze_rod', 'minecraft:phantom_membrane', 'minecraft:ghast_tear', 'supplementaries:enderman_head', 'minecraft:shulker_shell', 'minecraft:nether_star', 'minecraft:gunpowder', 'minecraft:magma_cream', 'minecraft:wither_skeleton_skull', 'minecraft:piglin_head', 'minecraft:creeper_head', 'minecraft:zombie_head', 'minecraft:skeleton_skull', 'minecraft:dragon_egg', 'minecraft:dragon_head'])
    e.add('holycube:passive_drops', ['minecraft:rabbit_hide', 'minecraft:leather', 'minecraft:beef', 'minecraft:egg', 'minecraft:armadillo_scute', 'minecraft:turtle_scute', 'minecraft:tropical_fish', 'minecraft:salmon', 'minecraft:cod', 'minecraft:nautilus_shell', 'minecraft:glow_ink_sac', 'minecraft:pufferfish', 'minecraft:rabbit', 'minecraft:chicken', 'minecraft:ink_sac', 'minecraft:feather', 'minecraft:mutton', 'minecraft:porkchop'])
    e.add('holycube:dusts', ['minecraft:glowstone_dust', 'minecraft:redstone', 'waystones:warp_dust', 'supplementaries:ash', 'expandeddelight:salt', 'expandeddelight:cinnamon', 'create:powdered_obsidian', 'create:cinder_flour', 'minecraft:gunpowder'])

})
//BLOCK TAGS
ServerEvents.tags('block', e => {
    e.add('minecraft:dirt', /chipped:.+_moss_block/)
    e.add('supplementaries:brick_breakable_recursive', /(kubejs|chipped):(.+)?glass(.+)?/)
    e.add('minecraft:beacon_base_blocks', ['kubejs:polished_rose_quartz_block'])
    e.add('create:wrench_pickup', ['create_things_and_misc:train_stop', 'supplementaries:cog_block', 'supplementaries:faucet', 'trashcans:liquid_trash_can', 'trashcans:ultimate_trash_can', 'trashcans:energy_trash_can', 'trashcans:item_trash_can', 'holycube_additions_yassou:iron_lever', 'minecraft:brewing_stand', 'minecraft:stonecutter', 'minecraft:crafter', 'minecraft:fletching_table', 'minecraft:cartography_table', 'minecraft:smithing_table', 'minecraft:grindstone', 'minecraft:loom', 'minecraft:anvil', 'minecraft:chipped_anvil', 'minecraft:composter', 'minecraft:damaged_anvil', 'holycube_additions_yassou:industrial_blue_lever', 'holycube_additions_yassou:industrial_green_lever', 'holycube_additions_yassou:industrial_yellow_lever', 'holycube_additions_yassou:industrial_red_lever', 'holycube_additions_yassou:valve', 'minecraft:beacon', 'minecraft:cauldron', 'easy_villagers:inventory_viewer', 'easy_villagers:incubator', 'easy_villagers:converter', 'easy_villagers:breeder', 'easy_villagers:auto_trader', 'easy_villagers:trader', 'easy_piglins:barterer', 'create_things_and_misc:brass_tiles', 'create_things_and_misc:brass_bricks', 'create_things_and_misc:brass_tiles_slab', 'create_things_and_misc:brass_tiles_stair', 'create_things_and_misc:brass_brick_slab', 'create_things_and_misc:brass_brick_stairs', 'create_things_and_misc:train_buffer', 'create_things_and_misc:sturdy_sheet_slab_stairs', 'create_things_and_misc:sturdy_sheet_slab', 'create_things_and_misc:sturdy_sheet_block', 'create_things_and_misc:mangrove_sail', 'create_things_and_misc:crimson_sail', 'create_things_and_misc:oak_sail', 'create_things_and_misc:dark_oak_sail', 'create_things_and_misc:birch_sail', 'create_things_and_misc:cherry_sail', 'create_things_and_misc:jungle_sail', 'create_things_and_misc:spruce_sail', 'create_things_and_misc:bamboo_sail', 'create_things_and_misc:warped_sail', 'create_things_and_misc:acacia_sail', 'waterframes:tv_box', 'waterframes:big_tv', 'waterframes:tv', 'waterframes:projector', 'waterframes:frame', 'waystones:warp_plate'])
    e.add('holycube:stripped_mushroom', ['minecraft:stripped_mushroom_stem', 'minecraft:stripped_red_mushroom_block', 'minecraft:stripped_brown_mushroom_block'])
    e.add('minecraft:mineable/pickaxe', ['create_things_and_misc:train_stop', 'create_things_and_misc:sturdy_sheet_slab_stairs', 'create_things_and_misc:sturdy_sheet_slab', 'create_things_and_misc:sturdy_sheet_block', 'create_things_and_misc:card_press'])
    function tagGlassDye(color) {
        e.add('c:dyed/' + color, 'kubejs:polished_glass/' + color + '_stained_glass')
    }
    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { tagGlassDye(D) })
    e.add('create:crushing_wheels', ['dndecor:stone_crushing_wheel', 'dndecor:packed_mud_crushing_wheel', 'dndecor:amethyst_crushing_wheel', 'dndecor:netherrack_crushing_wheel', 'dndecor:basalt_crushing_wheel', 'dndecor:blackstone_crushing_wheel', 'dndecor:weathered_limestone_crushing_wheel', 'dndecor:gabbro_crushing_wheel', 'dndecor:dolomite_crushing_wheel', 'create:crushing_wheel', 'dndecor:veridium_crushing_wheel', 'dndecor:scorchia_crushing_wheel', 'dndecor:scoria_crushing_wheel', 'dndecor:ochrum_crushing_wheel', 'dndecor:limestone_crushing_wheel', 'dndecor:crimsite_crushing_wheel', 'dndecor:asurine_crushing_wheel', 'dndecor:tuff_crushing_wheel', 'dndecor:deepslate_crushing_wheel', 'dndecor:dripstone_crushing_wheel', 'dndecor:calcite_crushing_wheel', 'dndecor:diorite_crushing_wheel', 'dndecor:granite_crushing_wheel'])
    e.add('create:millstones', ['dndecor:stone_millstone', 'dndecor:packed_mud_millstone', 'dndecor:amethyst_millstone', 'dndecor:netherrack_millstone', 'dndecor:basalt_millstone', 'dndecor:blackstone_millstone', 'dndecor:weathered_limestone_millstone', 'dndecor:gabbro_millstone', 'dndecor:dolomite_millstone', 'dndecor:veridium_millstone', 'dndecor:scorchia_millstone', 'dndecor:scoria_millstone', 'dndecor:ochrum_millstone', 'dndecor:limestone_millstone', 'dndecor:crimsite_millstone', 'dndecor:asurine_millstone', 'dndecor:tuff_millstone', 'dndecor:deepslate_millstone', 'dndecor:dripstone_millstone', 'dndecor:calcite_millstone', 'dndecor:diorite_millstone', 'dndecor:granite_millstone'])
})
//FLUID TAGS
ServerEvents.tags('fluid', e => {
    function dyesFluid(color) { e.add('c:dyes/' + color, 'kubejs:' + color) }
    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { dyesFluid(D) })

})