ServerEvents.recipes(e => {

    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": { "item": "minecraft:sniffer_egg" },
            "loops": 16,
            "results": [
                { "id": "minecraft:dragon_egg" }
            ],
            "sequence": [
                {
                    "type": "create:filling",
                    "ingredients": [
                        { "item": "kubejs:incomplete_dragon_egg" },
                        { "type": "fluid_stack", "amount": 250, "fluid": "create_dragons_plus:dragons_breath" }
                    ],
                    "results": [
                        { "id": "kubejs:incomplete_dragon_egg" }
                    ]
                }
            ],
            "transitional_item": { "id": "kubejs:incomplete_dragon_egg" }
        }
    )

})