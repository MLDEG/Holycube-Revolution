ServerEvents.recipes(e => {


    function dyeCrafts(dye) {
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:white_wool" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "minecraft:" + dye + "_wool" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:glass" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "minecraft:" + dye + "_stained_glass" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "minecraft:terracotta" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "minecraft:" + dye + "_terracotta" }] })
        e.custom({ "type": "create:filling", "ingredients": [{ "item": "create:framed_glass" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "id": "createframed:" + dye + "_stained_framed_glass" }] })
    }


    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { dyeCrafts(D) })
})