//ITEM TAGS
ServerEvents.tags('item', e => {
    e.add('c:storage_blocks', ['kubejs:polished_rose_quartz_block'])
    e.add('c:storage_blocks/polished_rose_quartz', ['kubejs:polished_rose_quartz_block'])
    e.add('minecraft:beacon_payment_items', ['create:polished_rose_quartz'])
})
//BLOCK TAGS
ServerEvents.tags('block', e => {

    e.add('minecraft:beacon_base_blocks', ['kubejs:polished_rose_quartz_block'])


})