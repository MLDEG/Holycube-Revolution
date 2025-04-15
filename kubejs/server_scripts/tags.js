//ITEM TAGS
ServerEvents.tags('item', e => {
    e.add('c:storage_blocks', ['kubejs:polished_rose_quartz_block'])
    e.add('c:storage_blocks/polished_rose_quartz', ['kubejs:polished_rose_quartz_block'])
    e.add('minecraft:beacon_payment_items', ['create:polished_rose_quartz'])
    e.add('c:foods/dough', ['#c:doughs'])
    e.add('c:dough', ['#c:foods/dough'])
})
//BLOCK TAGS
ServerEvents.tags('block', e => {
    e.add('minecraft:beacon_base_blocks', ['kubejs:polished_rose_quartz_block'])
    e.add('create:wrench_pickup', ['supplementaries:faucet', 'trashcans:liquid_trash_can', 'trashcans:ultimate_trash_can', 'trashcans:energy_trash_can', 'trashcans:item_trash_can', 'holycube_additions_yassou:iron_lever', 'minecraft:brewing_stand', 'minecraft:stonecutter', 'minecraft:crafter', 'minecraft:fletching_table', 'minecraft:cartography_table', 'minecraft:smithing_table', 'minecraft:grindstone', 'minecraft:loom', 'minecraft:anvil', 'minecraft:chipped_anvil', 'minecraft:composter', 'minecraft:damaged_anvil', 'holycube_additions_yassou:industrial_blue_lever', 'holycube_additions_yassou:industrial_green_lever', 'holycube_additions_yassou:industrial_yellow_lever', 'holycube_additions_yassou:industrial_red_lever', 'holycube_additions_yassou:valve', 'minecraft:beacon', 'minecraft:cauldron'])
})