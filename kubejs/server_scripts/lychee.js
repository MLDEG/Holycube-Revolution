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

    function changeCrushingwheels(block, output) { e.custom({ "type": "lychee:block_interacting", "item_in": { "item": block }, "block_in": '#create:crushing_wheels', "post": [{ "type": "place", "block": output }] }) }
    changeCrushingwheels('create_d2d:dolomite', 'dndecor:dolomite_crushing_wheel')
    changeCrushingwheels('minecraft:stone', 'dndecor:stone_crushing_wheel')
    changeCrushingwheels('minecraft:packed_mud', 'dndecor:packed_mud_crushing_wheel')
    changeCrushingwheels('minecraft:amethyst_block', 'dndecor:amethyst_crushing_wheel')
    changeCrushingwheels('minecraft:netherrack', 'dndecor:netherrack_crushing_wheel')
    changeCrushingwheels('minecraft:basalt', 'dndecor:basalt_crushing_wheel')
    changeCrushingwheels('minecraft:blackstone', 'dndecor:blackstone_crushing_wheel')
    changeCrushingwheels('create_d2d:weathered_limestone', 'dndecor:weathered_limestone_crushing_wheel')
    changeCrushingwheels('create_d2d:gabbro', 'dndecor:gabbro_crushing_wheel')
    changeCrushingwheels('create:veridium', 'dndecor:veridium_crushing_wheel')
    changeCrushingwheels('create:scorchia', 'dndecor:scorchia_crushing_wheel')
    changeCrushingwheels('create:scoria', 'dndecor:scoria_crushing_wheel')
    changeCrushingwheels('create:ochrum', 'dndecor:ochrum_crushing_wheel')
    changeCrushingwheels('create:limestone', 'dndecor:limestone_crushing_wheel')
    changeCrushingwheels('create:crimsite', 'dndecor:crimsite_crushing_wheel')
    changeCrushingwheels('create:asurine', 'dndecor:asurine_crushing_wheel')
    changeCrushingwheels('minecraft:tuff', 'dndecor:tuff_crushing_wheel')
    changeCrushingwheels('minecraft:deepslate', 'dndecor:deepslate_crushing_wheel')
    changeCrushingwheels('minecraft:dripstone_block', 'dndecor:dripstone_crushing_wheel')
    changeCrushingwheels('minecraft:calcite', 'dndecor:calcite_crushing_wheel')
    changeCrushingwheels('minecraft:diorite', 'dndecor:diorite_crushing_wheel')
    changeCrushingwheels('minecraft:granite', 'dndecor:granite_crushing_wheel')

    function changemillstones(block, output) { e.custom({ "type": "lychee:block_interacting", "item_in": { "item": block }, "block_in": '#create:millstones', "post": [{ "type": "place", "block": output }] }) }
    changemillstones('minecraft:stone', 'dndecor:stone_millstone')
    changemillstones('minecraft:packed_mud', 'dndecor:packed_mud_millstone')
    changemillstones('minecraft:amethyst_block', 'dndecor:amethyst_millstone')
    changemillstones('minecraft:netherrack', 'dndecor:netherrack_millstone')
    changemillstones('minecraft:basalt', 'dndecor:basalt_millstone')
    changemillstones('minecraft:blackstone', 'dndecor:blackstone_millstone')
    changemillstones('create_d2d:weathered_limestone', 'dndecor:weathered_limestone_millstone')
    changemillstones('create_d2d:gabbro', 'dndecor:gabbro_millstone')
    changemillstones('create_d2d:dolomite', 'dndecor:dolomite_millstone')
    changemillstones('create:veridium', 'dndecor:veridium_millstone')
    changemillstones('create:scorchia', 'dndecor:scorchia_millstone')
    changemillstones('create:scoria', 'dndecor:scoria_millstone')
    changemillstones('create:ochrum', 'dndecor:ochrum_millstone')
    changemillstones('create:limestone', 'dndecor:limestone_millstone')
    changemillstones('create:crimsite', 'dndecor:crimsite_millstone')
    changemillstones('create:asurine', 'dndecor:asurine_millstone')
    changemillstones('minecraft:tuff', 'dndecor:tuff_millstone')
    changemillstones('minecraft:deepslate', 'dndecor:deepslate_millstone')
    changemillstones('minecraft:dripstone_block', 'dndecor:dripstone_millstone')
    changemillstones('minecraft:calcite', 'dndecor:calcite_millstone')
    changemillstones('minecraft:diorite', 'dndecor:diorite_millstone')
    changemillstones('minecraft:granite', 'dndecor:granite_millstone')

    //Polished Glass In World
    function sandingStainedGlass(color) { e.custom({ "type": "lychee:block_interacting", "item_in": { "tag": "create:sandpaper" }, "block_in": "minecraft:" + color + "_stained_glass", "post": [{ "type": "damage_item" }, { "type": "place", "block": "kubejs:polished_glass/" + color + "_stained_glass" }, { "type": "execute", "command": "playsound create:sanding_short block", "hide": true }] }) }
    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { sandingStainedGlass(D) })
})