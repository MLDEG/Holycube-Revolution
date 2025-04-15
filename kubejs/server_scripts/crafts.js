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

    function ashCrafting(input) {
        e.smelting('supplementaries:ash', input)
    }
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
    //Coal Block Slab
    e.shaped('3x minecraft:pale_moss_carpet', ['AA '], {
        A: 'minecraft:pale_moss_block'
    })
    
    // dough recipe change
    e.replaceInput(
        { input: 'create:dough' },
        'create:dough',
        '#c:dough'
    )
})