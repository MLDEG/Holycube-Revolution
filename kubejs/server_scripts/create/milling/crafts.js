ServerEvents.recipes(e => {

    //Gun powder from powder cannon
    e.custom({ "type": "create:milling", "ingredients": [{ "item": "mynethersdelight:powder_cannon" }], "processing_time": 350, "results": [{ "count": 1, "id": "minecraft:gunpowder" }, { "chance": 0.25, "id": "minecraft:gunpowder" }] })

    e.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "minecraft:pitcher_plant"
            }
        ],
        "processing_time": 100,
        "results": [
            {
                "count": 3,
                "id": "minecraft:cyan_dye"
            },
            {
                "chance": 0.25,
                "id": "minecraft:cyan_dye"
            },
            {
                "chance": 0.25,
                "id": "minecraft:purple_dye"
            }
        ]
    })

    e.custom({
        "type": "create:milling",
        "ingredients": [
            {
                "item": "minecraft:torchflower"
            }
        ],
        "processing_time": 50,
        "results": [
            {
                "count": 2,
                "id": "minecraft:orange_dye"
            },
            {
                "chance": 0.1,
                "id": "minecraft:red_dye"
            }
        ]
    })

})