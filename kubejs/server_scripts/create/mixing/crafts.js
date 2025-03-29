ServerEvents.recipes(e => {

    //Tuff
    e.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:andesite"
            },
            {
                "item": "minecraft:diorite"
            },
            {
                "type": "fluid_tag",
                "amount": 250,
                "fluid_tag": "c:lava"
            }
        ],
        "results": [
            {
                "id": "minecraft:tuff"
            }
        ]
    })
})