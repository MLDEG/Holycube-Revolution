// const Axis = Java.loadClass('net.minecraft.core.Direction$Axis');
StartupEvents.registry("block", (e) => {
    // const axis = { north: Axis.Z, south: Axis.Z, east: Axis.X, west: Axis.X, up: Axis.Y, down: Axis.Y }
    function block(id, name, hard, sound) {
        e.create(id).displayName(name).hardness(hard).soundType(sound).tagBlock('minecraft:mineable/pickaxe')
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

    // //Bee Nest Block (deco)
    // e.create('bee_nest_block').displayName('Bee Nest Block').hardness(2.0).soundType('wood').tagBlock('minecraft:mineable/axe').property(BlockProperties.AXIS).placementState(s => s.setValue(BlockProperties.AXIS, axis[s.clickedFace]))

    // //Sticks Stack
    // e.create('sticks_stack').displayName('Sticks Stack').hardness(2.0).soundType('wood').tagBlock('minecraft:mineable/axe').property(BlockProperties.AXIS).placementState(s => s.setValue(BlockProperties.AXIS, axis[s.clickedFace]))

})