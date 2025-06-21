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
    function polishedGlass(id, name, hard, sound) {
        e.create('polished_glass/' + id + '_stained_glass').displayName("Polished " + name + " Stained Glass").hardness(hard).soundType(sound).defaultTranslucent().tagBlock(['supplementaries:brick_breakable_recursive', 'c:dyed', 'c:glass_blocks', 'c:glass_blocks/cheap', 'minecraft:impermeable']).tagItem(['c:dyed', 'c:glass_blocks', 'c:glass_blocks/cheap'])
    }
    polishedGlass("red", "Red", 0.3, "glass")
    polishedGlass("orange", "Orange", 0.3, "glass")
    polishedGlass("yellow", "Yellow", 0.3, "glass")
    polishedGlass("lime", "Lime", 0.3, "glass")
    polishedGlass("green", "Green", 0.3, "glass")
    polishedGlass("blue", "Blue", 0.3, "glass")
    polishedGlass("cyan", "Cyan", 0.3, "glass")
    polishedGlass("light_blue", "Light Blue", 0.3, "glass")
    polishedGlass("pink", "Pink", 0.3, "glass")
    polishedGlass("magenta", "Magenta", 0.3, "glass")
    polishedGlass("purple", "Purple", 0.3, "glass")
    polishedGlass("brown", "Brown", 0.3, "glass")
    polishedGlass("black", "Black", 0.3, "glass")
    polishedGlass("gray", "Gray", 0.3, "glass")
    polishedGlass("light_gray", "Light Gray", 0.3, "glass")
    polishedGlass("white", "White", 0.3, "glass")
    block('polished_rose_quartz_block', 'Polish rose Quartz Block', 5.0, 'metal', 'pickaxe')
    block('creamy_terracotta', 'Creamy Terracotta', 1.25, 'stone', 'pickaxe')
    block('minecraft:stripped_mushroom_stem', 'Stripped Mushroom Stem', 0.2, 'wood', 'axe')
    block('minecraft:stripped_red_mushroom_block', 'Stripped Red Mushroom Block', 0.2, 'wood', 'axe')
    block('minecraft:stripped_brown_mushroom_block', 'Stripped Brown Mushroom Block', 0.2, 'wood', 'axe')
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

    //Stripped Pale Oak Log
    function strippedLogChipped(id, name) {
        e.create(id).displayName(name).hardness(2.0).soundType('wood').tagBlock(['minecraft:mineable/axe', 'minecraft:logs', 'chipped:stripped_pale_oak_log']).tag(['minecraft:logs', 'chipped:stripped_pale_oak_log']).property(BlockProperties.FACING).placementState(s => s.setValue(BlockProperties.FACING, s.clickedFace)).item(item => item.burnTime(300));
    }
    strippedLogChipped('carved_stripped_pale_oak_log', 'Carved Stripped Pale Oak Log')
    strippedLogChipped('chipped_stripped_pale_oak_log', 'Chipped Stripped Pale Oak Log')
    strippedLogChipped('d_sign_stripped_pale_oak_log', 'D Sign Stripped Pale Oak Log')
    strippedLogChipped('edged_stripped_pale_oak_log', 'Edged Stripped Pale Oak Log')
    strippedLogChipped('f_sign_stripped_pale_oak_log', 'F Sign Stripped Pale Oak Log')
    strippedLogChipped('i_sign_stripped_pale_oak_log', 'I Sign Stripped Pale Oak Log')
    strippedLogChipped('k_sign_stripped_pale_oak_log', 'K Sign Stripped Pale Oak Log')
    strippedLogChipped('knotted_stripped_pale_oak_log', 'Knotted Stripped Pale Oak Log')
    strippedLogChipped('l_sign_stripped_pale_oak_log', 'L Sign Stripped Pale Oak Log')
    strippedLogChipped('layered_stripped_pale_oak_log', 'Layered Stripped Pale Oak Log')
    strippedLogChipped('lumpy_stripped_pale_oak_log', 'Lumpty Stripped Pale Oak Log')
    strippedLogChipped('m_sign_stripped_pale_oak_log', 'M Sign Stripped Pale Oak Log')
    strippedLogChipped('patient_stripped_pale_oak_log', 'Patient Stripped Pale Oak Log')
    strippedLogChipped('reinforced_stripped_pale_oak_log', 'Reinforced Stripped Pale Oak Log')
    strippedLogChipped('sign_stripped_pale_oak_log', 'Sign Stripped Pale Oak Log')
    strippedLogChipped('stern_stripped_pale_oak_log', 'Stern Stripped Pale Oak Log')
    strippedLogChipped('wise_stripped_pale_oak_log', 'Wise Stripped Pale Oak Log')

    //Pale Moss
    function palemossChipped(id, name) {
        e.create(id).displayName(name).hardness(0.1).soundType('moss').tagBlock(['minecraft:mineable/hoe', 'minecraft:dirt', 'chipped:pale_moss_block']).tag('chipped:pale_moss_block')
    }
    palemossChipped('pale_moss_block/blobby_pale_moss_block', 'Blobby Pale Moss Block')
    palemossChipped('pale_moss_block/blue_pale_moss_block', 'Blue Pale Moss Block')
    palemossChipped('pale_moss_block/crunchy_pale_moss_block', 'Crunchy Pale Moss Block')
    palemossChipped('pale_moss_block/lime_pale_moss_block', 'Lime Pale Moss Block')
    palemossChipped('pale_moss_block/old_pale_moss_block', 'Old Pale Moss Block')
    palemossChipped('pale_moss_block/red_pale_moss_block', 'Red Pale Moss Block')
    palemossChipped('pale_moss_block/smooth_pale_moss_block', 'Smooth Pale Moss Block')
    palemossChipped('pale_moss_block/spongy_pale_moss_block', 'Spongy Pale Moss Block')
    palemossChipped('pale_moss_block/sprinkled_pale_moss_block', 'Sprinkled Pale Moss Block')
    palemossChipped('pale_moss_block/yellow_pale_moss_block', 'Yellow Pale Moss Block')
    palemossChipped('pale_moss_block/purple_pale_moss_block', 'Purple Pale Moss Block')
    palemossChipped('pale_moss_block/white_pale_moss_block', 'White Pale Moss Block')
    palemossChipped('pale_moss_block/black_pale_moss_block', 'Black Pale Moss Block')

    function doorChipped(id, name) {
        e.create(id, "door").displayName(name).hardness(3.0).tagBlock(['minecraft:mineable/axe', 'minecraft:wooden_doors', 'chipped:pale_oak_door']).tag(['minecraft:wooden_doors', 'chipped:pale_oak_door'])
    }
    doorChipped('pale_oak_door/barred_pale_oak_door', 'Barred Pale Oak Door')
    doorChipped('pale_oak_door/beach_pale_oak_door', 'Beach Pale Oak Door')
    doorChipped('pale_oak_door/dual_paneled_pale_oak_door', 'Dual Paneled Pale Oak Door')
    doorChipped('pale_oak_door/fortified_pale_oak_door', 'Fortified Pale Oak Door')
    doorChipped('pale_oak_door/gated_pale_oak_door', 'Gated Pale Oak Door')
    doorChipped('pale_oak_door/glass_pale_oak_door', 'Glass Pale Oak Door')
    doorChipped('pale_oak_door/heavy_pale_oak_door', 'Heavy Pale Oak Door')
    doorChipped('pale_oak_door/modern_pale_oak_door', 'Modern Pale Oak Door')
    doorChipped('pale_oak_door/overgrown_pale_oak_door', 'Overgrown Pale Oak Door')
    doorChipped('pale_oak_door/paneled_pale_oak_door', 'Paneled Pale Oak Door')
    doorChipped('pale_oak_door/paper_pale_oak_door', 'Paper Pale Oak Door')
    doorChipped('pale_oak_door/pressed_pale_oak_door', 'Pressed Pale Oak Door')
    doorChipped('pale_oak_door/screen_pale_oak_door', 'Screen Pale Oak Door')
    doorChipped('pale_oak_door/secret_pale_oak_door', 'Secret Pale Oak Door')
    doorChipped('pale_oak_door/shack_pale_oak_door', 'Shack Pale Oak Door')
    doorChipped('pale_oak_door/sliding_pale_oak_door', 'Sliding Pale Oak Door')
    doorChipped('pale_oak_door/supported_pale_oak_door', 'Supported Pale Oak Door')
    doorChipped('pale_oak_door/tile_windowed_pale_oak_door', 'Tile Windowed Pale Oak Door')
    doorChipped('pale_oak_door/tiled_pale_oak_door', 'Tiled Pale Oak Door')
    doorChipped('pale_oak_door/windowed_pale_oak_door', 'Windowed Pale Oak Door')

    function trapdoorChipped(id, name) {
        e.create(id, "trapdoor").displayName(name).hardness(3.0).tagBlock(['minecraft:mineable/axe', 'minecraft:wooden_trapdoors', 'chipped:pale_oak_trapdoor']).tag(['minecraft:wooden_trapdoors', 'chipped:pale_oak_trapdoor'])
    }
    trapdoorChipped('pale_oak_trapdoor/woven_pale_oak_trapdoor', 'Woven Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/windowed_pale_oak_trapdoor', 'Windowed Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/warted_pale_oak_trapdoor', 'Warted Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/vined_pale_oak_trapdoor', 'Vinted Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/twisted_pale_oak_trapdoor', 'Twisted Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/suspicious_pale_oak_trapdoor', 'Suspicious Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/solid_pale_oak_trapdoor', 'Solid Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/slotted_pale_oak_trapdoor', 'Slotted Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/screened_pale_oak_trapdoor', 'Screened Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/pointless_pale_oak_trapdoor', 'Pointless Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/overgrown_pale_oak_trapdoor', 'Overgrown Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/meshed_pale_oak_trapdoor', 'Meshed Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/leafy_pale_oak_trapdoor', 'Leafy Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/iron_barred_pale_oak_trapdoor', 'Iron Barred Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/golden_barred_pale_oak_trapdoor', 'Golden Barred Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/fancy_pale_oak_trapdoor', 'Fancy Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/distorted_pale_oak_trapdoor', 'Distorted Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/cobweb_pale_oak_trapdoor', 'Cobweb Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/classic_windowed_pale_oak_trapdoor', 'Classic Windowed Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/classic_pale_oak_trapdoor', 'Classic Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/checkered_pale_oak_trapdoor', 'Checkered Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/barred_pale_oak_trapdoor', 'Barred Pale Oak Trapdoor')
    trapdoorChipped('pale_oak_trapdoor/airy_pale_oak_trapdoor', 'Airy Pale Oak Trapdoor')

    //Moss
    function mossChipped(id, name) {
        e.create(id).displayName(name).hardness(0.1).soundType('moss').tagBlock(['minecraft:mineable/hoe', 'minecraft:dirt', 'chipped:moss_block']).tag('chipped:moss_block')
    }
    mossChipped('moss_block/purple_moss_block', 'Purple Moss Block')
    mossChipped('moss_block/white_moss_block', 'White Moss Block')
    mossChipped('moss_block/black_moss_block', 'Black Moss Block')

})