ServerEvents.recipes(e => {

    function itemApp(block, input, output) { e.custom({ "type": "create:item_application", "ingredients": [{ "item": block }, { "item": input }], "results": [{ "id": output }] }) }
    itemApp('minecraft:dirt', 'minecraft:hanging_roots', 'minecraft:rooted_dirt')

})
