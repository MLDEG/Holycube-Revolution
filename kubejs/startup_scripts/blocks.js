const Axis = Java.loadClass('net.minecraft.core.Direction$Axis');
StartupEvents.registry("block", (e) => {
    const axis = { north: Axis.Z, south: Axis.Z, east: Axis.X, west: Axis.X, up: Axis.Y, down: Axis.Y }
    function block(id, name, hard, sound) {
        e.create(id).displayName(name).hardness(hard).soundType(sound).tagBlock('minecraft:mineable/pickaxe')
    }
    function slabNstairs(id, name, hard, sound, tag) {
        e.create(id + '_slab', "slab").displayName(name + ' Slab').hardness(hard).soundType(sound).tagBlock('minecraft:mineable/' + tag)
        e.create(id + '_stairs', "stairs").displayName(name + ' Stairs').hardness(hard).soundType(sound).tagBlock('minecraft:mineable/' + tag)
    }
    block('polished_rose_quartz_block', 'Polish rose Quartz Block', 5.0, 'metal')
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
    slabNstairs('dirt', 'Dirt', 0.5, 'gravel', 'shovel')
    slabNstairs('gravel', 'Gravel', 0.6, 'gravel', 'shovel')
    slabNstairs('sand', 'Sand', 0.5, 'sand', 'shovel')
    slabNstairs('red_sand', 'Red Sand', 0.5, 'sand', 'shovel')
    slabNstairs('moss_block', 'Moss Block', 0.1, 'moss', 'hoe')
    slabNstairs('pale_moss_block', 'Pale Moss Block', 0.1, 'moss', 'hoe')
    slabNstairs('sculk', 'Sculk', 0.2, 'sculk', 'hoe')

    //Bee Nest Block (deco)
    e.create('bee_nest_block').displayName('Bee Nest Block').hardness(2.0).soundType('wood').tagBlock('minecraft:mineable/axe').property(BlockProperties.FACING).placementState(s => s.setValue(BlockProperties.FACING, s.clickedFace));

    //Sticks Bundle
    e.create('sticks_bundle').displayName('Sticks Bundle').hardness(2.0).soundType('wood').tagBlock('minecraft:mineable/axe').property(BlockProperties.AXIS).placementState(s => s.setValue(BlockProperties.AXIS, axis[s.clickedFace]))
        .item(item =>
            item.burnTime(900)
        )

    //Nerf Enderman Block
    e.create('nerf_enderman').displayName('Nerf Enderman')
})