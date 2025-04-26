StartupEvents.registry("block", (e) => {
    function block(id, name, hard, sound, tag) {
        e.create(id).displayName(name).hardness(hard).soundType(sound).tagBlock('minecraft:mineable/' + tag)
    }
    function slabNstairs(id, name, hard, sound, tag) {
        e.create(id + '_slab', "slab").displayName(name + ' Slab').hardness(hard).soundType(sound).tagBlock('minecraft:mineable/' + tag)
        e.create(id + '_stairs', "stairs").displayName(name + ' Stairs').hardness(hard).soundType(sound).tagBlock('minecraft:mineable/' + tag)
    }
    function slabNstairsnoTag(id, name, hard, sound) {
        e.create(id + '_slab', "slab").displayName(name + ' Slab').hardness(hard).soundType(sound)
        e.create(id + '_stairs', "stairs").displayName(name + ' Stairs').hardness(hard).soundType(sound)
    }
    function slabNstairsGlass(id, name, hard, sound) {
        e.create(id + '_slab', "slab").displayName(name + ' Slab').hardness(hard).soundType(sound).renderType('translucent')
        e.create(id + '_stairs', "stairs").displayName(name + ' Stairs').hardness(hard).soundType(sound).renderType('translucent')
    }
    function button(id, name, hard, sound) {
        e.create(id, "button").displayName(name).hardness(hard).soundType(sound)
    }
    block('polished_rose_quartz_block', 'Polish rose Quartz Block', 5.0, 'metal', 'pickaxe')
    block('creamy_terracotta', 'Creamy Terracotta', 1.25, 'stone', 'pickaxe')
    button('nether_brick_button', 'Nether Brick Button', 0.5, 'nether_bricks')
    button('brick_button', 'Brick Button', 0.5, 'stone')
    button('polished_deepslate_button', 'Polished Deepslate Button', 0.5, 'deepslate')
    button('red_nether_brick_button', 'Red Nether Brick Button', 0.5, 'nether_bricks')
    //Coal Block Slab
    e.create('coal_block_slab', "slab")
        .displayName('Coal Block Slab')
        .hardness(5.0)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .item(item =>
            item.burnTime(8000)
        )
    //Charcoal Block
    e.create('block_charcoal')
        .displayName('Charcoal Block')
        .hardness(5.0)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
        .item(item =>
            item.burnTime(16000)
        )
    //Slab and Stairs
    slabNstairs('industrial_iron', 'Industrial Iron', 5.0, 'netherite_block', 'pickaxe')
    slabNstairs('weathered_iron', 'Weathered Iron', 5.0, 'netherite_block', 'pickaxe')
    slabNstairs('sanded_blackstone', 'Sanded Blackstone', 1.5, 'stone', 'pickaxe')
    slabNstairs('dirt', 'Dirt', 0.5, 'gravel', 'shovel')
    slabNstairs('gravel', 'Gravel', 0.6, 'gravel', 'shovel')
    slabNstairs('sand', 'Sand', 0.5, 'sand', 'shovel')
    slabNstairs('red_sand', 'Red Sand', 0.5, 'sand', 'shovel')
    slabNstairs('moss_block', 'Moss Block', 0.1, 'moss', 'hoe')
    slabNstairs('pale_moss_block', 'Pale Moss Block', 0.1, 'moss', 'hoe')
    slabNstairs('sculk', 'Sculk', 0.2, 'sculk', 'hoe')
    slabNstairsnoTag('honeycomb_block', 'Honeycomb Block', 0.6, 'coral_block')
    slabNstairsGlass('glass', 'Glass', 0.3, 'glass')
    slabNstairsGlass('red_stained_glass', 'Red Stained Glass', 0.3, 'glass')
    slabNstairsGlass('orange_stained_glass', 'Orange Stained Glass', 0.3, 'glass')
    slabNstairsGlass('yellow_stained_glass', 'Yellow Stained Glass', 0.3, 'glass')
    slabNstairsGlass('lime_stained_glass', 'Lime Stained Glass', 0.3, 'glass')
    slabNstairsGlass('green_stained_glass', 'Green Stained Glass', 0.3, 'glass')
    slabNstairsGlass('cyan_stained_glass', 'Cyan Stained Glass', 0.3, 'glass')
    slabNstairsGlass('blue_stained_glass', 'Blue Stained Glass', 0.3, 'glass')
    slabNstairsGlass('light_blue_stained_glass', 'Light Blue Stained Glass', 0.3, 'glass')
    slabNstairsGlass('pink_stained_glass', 'Pink Stained Glass', 0.3, 'glass')
    slabNstairsGlass('magenta_stained_glass', 'Magenta Stained Glass', 0.3, 'glass')
    slabNstairsGlass('purple_stained_glass', 'Purple Stained Glass', 0.3, 'glass')
    slabNstairsGlass('black_stained_glass', 'Black Stained Glass', 0.3, 'glass')
    slabNstairsGlass('gray_stained_glass', 'Gray Stained Glass', 0.3, 'glass')
    slabNstairsGlass('light_gray_stained_glass', 'Light Gray Stained Glass', 0.3, 'glass')
    slabNstairsGlass('white_stained_glass', 'White Stained Glass', 0.3, 'glass')
    slabNstairsGlass('brown_stained_glass', 'Brown Stained Glass', 0.3, 'glass')
    slabNstairsGlass('tinted_glass', 'Tinted Glass', 0.3, 'glass')

    //Bee Nest Block (deco)
    e.create('bee_nest_block').displayName('Bee Nest Block').hardness(2.0).soundType('wood').tagBlock('minecraft:mineable/axe').property(BlockProperties.FACING).placementState(s => s.setValue(BlockProperties.FACING, s.clickedFace));

    //Sticks Bundle
    e.create('sticks_bundle').displayName('Sticks Bundle').hardness(2.0).soundType('wood').tagBlock('minecraft:mineable/axe').property(BlockProperties.AXIS).placementState(s => s.setValue(BlockProperties.AXIS, s.clickedFace.axis))
        .item(item =>
            item.burnTime(900)
        )
    //Pale Oak Heart
    e.create('pale_oak_heart').displayName('Pale Oak Heart').hardness(10).soundType('wood').tagBlock('minecraft:mineable/axe').property(BlockProperties.AXIS).placementState(s => s.setValue(BlockProperties.AXIS, s.clickedFace.axis))
    //Incomplete Pale Oak Heart
    e.create('incomplete_pale_oak_heart').displayName('Incomplete Pale Oak Heart').hardness(10).soundType('wood').tagBlock('minecraft:mineable/axe').property(BlockProperties.AXIS).placementState(s => s.setValue(BlockProperties.AXIS, s.clickedFace.axis))
    //Empty Pale Oak Heart
    e.create('empty_pale_oak_heart').displayName('Empty Pale Oak Heart').hardness(10).soundType('wood').tagBlock('minecraft:mineable/axe').property(BlockProperties.AXIS).placementState(s => s.setValue(BlockProperties.AXIS, s.clickedFace.axis))

    //Nerf Enderman Block
    e.create('nerf_enderman').displayName('Nerf Enderman')

    //Chipped Pale Oak    
    function planksChipped(id, name) {
        e.create(id).displayName(name).hardness(2.0).soundType('wood').tagBlock(['minecraft:mineable/axe', 'minecraft:planks', 'chipped:pale_oak_planks']).tag(['minecraft:planks', 'chipped:pale_oak_planks']).item(item => item.burnTime(300))
    }
    planksChipped('pale_oak_planks/basket_woven_pale_oak_planks', 'Basket Woven Pale Oak Planks')
    planksChipped('pale_oak_planks/boxed_pale_oak_planks', 'Boxed Pale Oak Planks')
    planksChipped('pale_oak_planks/brick_bond_pale_oak_planks', 'Brick Bond Pale Oak Planks')
    planksChipped('pale_oak_planks/bricky_pale_oak_planks', 'Bricky Pale Oak Planks')
    planksChipped('pale_oak_planks/cornered_pale_oak_planks', 'Cornered Pale Oak Planks')
    planksChipped('pale_oak_planks/crated_pale_oak_planks', 'Crated Pale Oak Planks')
    planksChipped('pale_oak_planks/cross_laced_pale_oak_planks', 'Cross Laced Pale Oak Planks')
    planksChipped('pale_oak_planks/crossed_pale_oak_planks', 'Crossed Pale Oak Planks')
    planksChipped('pale_oak_planks/detailed_pale_oak_planks', 'Detailed Pale Oak Planks')
    planksChipped('pale_oak_planks/diagonal_pale_oak_planks', 'Diagonal Pale Oak Planks')
    planksChipped('pale_oak_planks/diamond_pale_oak_planks', 'Diamond Pale Oak Planks')
    planksChipped('pale_oak_planks/double_herringbone_pale_oak_planks', 'Double Herringbone Pale Oak Planks')
    planksChipped('pale_oak_planks/enclosed_pale_oak_planks', 'Enclosed Pale Oak Planks')
    planksChipped('pale_oak_planks/fine_pale_oak_planks', 'Fine Pale Oak Planks')
    planksChipped('pale_oak_planks/fine_vertical_pale_oak_planks', 'Fine Vertical Pale Oak Planks')
    planksChipped('pale_oak_planks/framed_pale_oak_planks', 'Framed Pale Oak Planks')
    planksChipped('pale_oak_planks/herringbone_pale_oak_planks', 'Herringbone Pale Oak Planks')
    planksChipped('pale_oak_planks/hewn_pale_oak_planks', 'Hewn Pale Oak Planks')
    planksChipped('pale_oak_planks/laced_pale_oak_planks', 'Laced Pale Oak Planks')
    planksChipped('pale_oak_planks/nailed_pale_oak_planks', 'Nailed Pale Oak Planks')
    planksChipped('pale_oak_planks/natural_pale_oak_planks', 'Natural Pale Oak Planks')
    planksChipped('pale_oak_planks/pale_oak_planks_mosaic', 'Pale Oak Planks Mosaic')
    planksChipped('pale_oak_planks/pale_oak_planks_panel', 'Pale Oak Planks Panel')
    planksChipped('pale_oak_planks/pale_oak_planks_shavings', 'Pale Oak Planks Shabings')
    planksChipped('pale_oak_planks/pegged_pale_oak_planks', 'Pegged Pale Oak Planks')
    planksChipped('pale_oak_planks/polished_pale_oak_planks', 'Polished Pale Oak Planks')
    planksChipped('pale_oak_planks/railed_pale_oak_planks', 'Railed Pale Oak Planks')
    planksChipped('pale_oak_planks/shifted_pale_oak_planks', 'Shifted Pale Oak Planks')
    planksChipped('pale_oak_planks/slanted_pale_oak_planks', 'Slanted Pale Oak Planks')
    planksChipped('pale_oak_planks/smooth_pale_oak_planks', 'Smooth Pale Oak Planks')
    planksChipped('pale_oak_planks/stacked_pale_oak_planks', 'Stacked Pale Oak Planks')
    planksChipped('pale_oak_planks/thin_pale_oak_planks', 'Thin Pale Oak Planks')
    planksChipped('pale_oak_planks/tiled_pale_oak_planks', 'Tiled Pale Oak Planks')
    planksChipped('pale_oak_planks/versailles_pale_oak_planks', 'Versailles Pale Oak Planks')
    planksChipped('pale_oak_planks/vertical_pale_oak_planks', 'Vertical Pale Oak Planks')
    planksChipped('pale_oak_planks/vertically_railed_pale_oak_planks', 'Vertically Railed Pale Oak Planks')
    planksChipped('pale_oak_planks/whirlwind_pale_oak_planks', 'Whirlwind Pale Oak Planks')
    planksChipped('pale_oak_planks/wickered_pale_oak_planks', 'Wickered Pale Oak Planks')

    //Pale Oak Log
    function logChipped(id, name) {
        e.create(id).displayName(name).hardness(2.0).soundType('wood').tagBlock(['minecraft:mineable/axe', 'minecraft:logs', 'chipped:pale_oak_log']).tag(['minecraft:logs', 'chipped:pale_oak_log']).property(BlockProperties.FACING).placementState(s => s.setValue(BlockProperties.FACING, s.clickedFace)).item(item => item.burnTime(300));
    }
    logChipped('bundled_pale_oak_log', 'Bundled Pale Oak Log')
    logChipped('center_cut_pale_oak_log', 'Center Cut Pale Oak Log')
    logChipped('damaged_pale_oak_log', 'Damaged Pale Oak Log')
    logChipped('edge_cut_pale_oak_log', 'Edge Cut Pale Oak Log')
    logChipped('firewood_pale_oak_log', 'Firewood Pale Oak Log')
    logChipped('flowering_pale_oak_log', 'Flowering Pale Oak Log')
    logChipped('mixed_pale_oak_log', 'Mixed Pale Oak Log')
    logChipped('nailed_pale_oak_log', 'Nailed Pale Oak Log')
    logChipped('overgrown_pale_oak_log', 'Overgrown Pale Oak Log')
    logChipped('planked_pale_oak_log', 'Planked Pale Oak Log')
    logChipped('reinforced_pale_oak_log', 'Reinforced Pale Oak Log')

})