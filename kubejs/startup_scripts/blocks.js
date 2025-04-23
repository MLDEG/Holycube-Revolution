StartupEvents.registry("block", (e) => {
    function block(id, name, hard, sound) {
        e.create(id).displayName(name).hardness(hard).soundType(sound).tagBlock('minecraft:mineable/pickaxe')
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
    block('polished_rose_quartz_block', 'Polish rose Quartz Block', 5.0, 'metal')
    block('creamy_terracotta', 'Creamy Terracotta', 1.25, 'stone')
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

    //Nerf Enderman Block
    e.create('nerf_enderman').displayName('Nerf Enderman')
})