ServerEvents.recipes(e => {

    //Netherrack
    e.custom({
        "type": "cmr:block_spouting",
        "ingredients": [
            {
                "item": "minecraft:cobblestone"
            },
            {
                "type": "fluid_stack",
                "amount": 250,
                "fluid": "minecraft:lava"
            }
        ],
        "results": [
            {
                "item": {
                    "id": "minecraft:netherrack"
                }
            }
        ]
    })
    //Magma Block
    e.custom({
        "type": "cmr:block_spouting",
        "ingredients": [
            {
                "item": "minecraft:blackstone"
            },
            {
                "type": "fluid_stack",
                "amount": 250,
                "fluid": "minecraft:lava"
            }
        ],
        "results": [
            {
                "item": {
                    "id": "minecraft:magma_block"
                }
            }
        ]
    })
})