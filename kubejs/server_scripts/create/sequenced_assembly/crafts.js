ServerEvents.recipes(e => {

    //Dragon Egg
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
    //Ominous Bottle
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": { "item": "kubejs:empty_ominous_bottle" },
            "loops": 1,
            "results": [{ "id": "minecraft:ominous_bottle" }],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:incomplete_ominous_bottle" }, { "item": "minecraft:rotten_flesh" }],
                    "results": [{ "id": "kubejs:incomplete_ominous_bottle" }]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:incomplete_ominous_bottle" }, { "item": "minecraft:bone" }],
                    "results": [{ "id": "kubejs:incomplete_ominous_bottle" }]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:incomplete_ominous_bottle" }, { "item": "minecraft:spider_eye" }],
                    "results": [{ "id": "kubejs:incomplete_ominous_bottle" }]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:incomplete_ominous_bottle" }, { "item": "minecraft:gunpowder" }],
                    "results": [{ "id": "kubejs:incomplete_ominous_bottle" }]
                }
            ],
            "transitional_item": { "id": "kubejs:incomplete_ominous_bottle" }
        }
    )
    //Pale Oak Heart
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": { "item": "minecraft:pale_oak_log" },
            "loops": 8,
            "results": [{ "id": "kubejs:pale_oak_heart" }],
            "sequence": [
                {
                    "type": "create:filling",
                    "ingredients": [
                        { "item": "kubejs:incomplete_pale_oak_heart" },
                        { "type": "fluid_stack", "amount": 250, "fluid": "create_confectionery:caramel" }
                    ],
                    "results": [
                        { "id": "kubejs:incomplete_pale_oak_heart" }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "kubejs:incomplete_pale_oak_heart" }, { "tag": "minecraft:axes" }],
                    "results": [{ "id": "kubejs:incomplete_pale_oak_heart" }]
                }
            ],
            "transitional_item": { "id": "kubejs:incomplete_pale_oak_heart" }
        }
    )
    //Raw Steel
    e.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": { "item": "mapperbase:pig_iron_chunk" },
            "loops": 1,
            "results": [{ "id": "mapperbase:raw_steel" }],
            "sequence": [
                { "type": "create:pressing", "ingredients": [{ "item": "mapperbase:pig_iron_chunk" }], "results": [{ "id": "mapperbase:pig_iron_chunk" }] },
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "mapperbase:pig_iron_chunk" }, { "item": "mapperbase:pig_iron_chunk" }],
                    "results": [{ "id": "mapperbase:pig_iron_chunk" }]
                },
                { "type": "create:pressing", "ingredients": [{ "item": "mapperbase:pig_iron_chunk" }], "results": [{ "id": "mapperbase:pig_iron_chunk" }] },
                {
                    "type": "create:deploying",
                    "ingredients": [{ "item": "mapperbase:pig_iron_chunk" }, { "item": "mapperbase:pig_iron_chunk" }],
                    "results": [{ "id": "mapperbase:pig_iron_chunk" }]
                },
                { "type": "create:pressing", "ingredients": [{ "item": "mapperbase:pig_iron_chunk" }], "results": [{ "id": "mapperbase:pig_iron_chunk" }] }
            ],
            "transitional_item": { "id": "mapperbase:pig_iron_chunk" }
        }
    )

})