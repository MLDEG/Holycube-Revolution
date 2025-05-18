ServerEvents.recipes(e => {
    //Pale Oak Heart
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": { "tag": "c:tools/knife" },
        "block_in": "kubejs:pale_oak_heart",
        "post": [
            { "type": "drop_item", "id": "minecraft:resin_clump" },
            { "type": "damage_item" },
            { "type": "place", "block": "kubejs:empty_pale_oak_heart", "if": { "type": "chance", "chance": 0.1 } }
        ]
    })
    //Wildflowers
    e.custom({
        "type": "lychee:block_interacting",
        "item_in": { "item": "minecraft:yellow_dye" },
        "block_in": "minecraft:pink_petals",
        "post": [{ "type": "place", "block": "minecraft:wildflowers" }]
    })
    //Dup Bone Meal
    function dupBoneMeal(item, block) {
        e.custom({
            "type": "lychee:block_interacting",
            "item_in": { "item": "minecraft:bone_meal" },
            "block_in": block,
            "post": [{ "type": "drop_item", "id": item }]
        })
    }
    dupBoneMeal('endersdelight:amberveil', 'endersdelight:amberveil_mushroom')
    dupBoneMeal('endersdelight:chorusflame', 'endersdelight:chorusflame_bush')
    dupBoneMeal('endersdelight:ethereal_saffron', 'endersdelight:ethereal_saffron_bush')
    dupBoneMeal('endersdelight:voidpepper', 'endersdelight:voidpepper_bush')
    dupBoneMeal('minecraft:torchflower', 'minecraft:torchflower')
    dupBoneMeal('minecraft:pitcher_plant', 'minecraft:pitcher_plant')

    //Stripped Mushroom Block
    function strippedMushroom(blockIn, blockOut) { e.custom({ "type": "lychee:block_interacting", "item_in": { "tag": "minecraft:axes" }, "block_in": blockIn, "post": [{ "type": "place", "block": blockOut }, { "type": "damage_item" }] }) }
    strippedMushroom('minecraft:mushroom_stem', 'minecraft:stripped_mushroom_stem')
    strippedMushroom('minecraft:red_mushroom_block', 'minecraft:stripped_red_mushroom_block')
    strippedMushroom('minecraft:brown_mushroom_block', 'minecraft:stripped_brown_mushroom_block')

    //Polished Glass In World
    function sandingStainedGlass(color) { e.custom({ "type": "lychee:block_interacting", "item_in": { "tag": "create:sandpaper" }, "block_in": "minecraft:" + color + "_stained_glass", "post": [{ "type": "damage_item" }, { "type": "place", "block": "kubejs:polished_glass/" + color + "_stained_glass" }, { "type": "execute", "command": "playsound create:sanding_short block", "hide": true }] }) }
    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { sandingStainedGlass(D) })
})