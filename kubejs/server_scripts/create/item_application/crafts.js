ServerEvents.recipes(e => {

    function itemApp(block, input, output) { e.custom({ "type": "create:item_application", "ingredients": [{ "item": block }, { "item": input }], "results": [{ "id": output }] }) }
    function itemAppTag(block, input, output) { e.custom({ "type": "create:item_application", "ingredients": [{ "tag": block }, { "item": input }], "results": [{ "id": output }] }) }
    itemApp('minecraft:dirt', 'minecraft:hanging_roots', 'minecraft:rooted_dirt')
    itemApp('minecraft:short_grass', 'minecraft:blaze_powder', 'minecraft:firefly_bush')
    itemAppTag('holycube:stripped_mushroom', 'minecraft:red_mushroom', 'minecraft:red_mushroom_block')
    itemAppTag('holycube:stripped_mushroom', 'minecraft:brown_mushroom', 'minecraft:brown_mushroom_block')
    itemAppTag('holycube:stripped_mushroom', 'minecraft:feather', 'minecraft:mushroom_stem')

})
