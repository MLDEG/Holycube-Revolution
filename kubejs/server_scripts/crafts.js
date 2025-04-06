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
    }
    var coral = ['horn', 'fire', 'bubble', 'brain', 'tube']
    coral.forEach(I => { corals(I) })
})