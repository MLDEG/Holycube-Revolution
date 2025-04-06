ServerEvents.recipes(e => {

    //Tuff
    e.custom({ "type": "create:mixing", "heat_requirement": "heated", "ingredients": [{ "item": "minecraft:andesite" }, { "item": "minecraft:diorite" }, { "type": "fluid_tag", "amount": 250, "fluid_tag": "c:lava" }], "results": [{ "id": "minecraft:tuff" }] })

    //Podzol
    e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:dirt" }, { "tag": "minecraft:leaves" }, { "type": "fluid_tag", "amount": 250, "fluid_tag": "c:water" }], "results": [{ "id": "minecraft:podzol" }] })

    //Mycelium
    e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:dirt" }, { "tag": "c:mushrooms" }, { "type": "fluid_tag", "amount": 250, "fluid_tag": "c:water" }], "results": [{ "id": "minecraft:mycelium" }] })

    //Asphalt
    e.custom({ "type": "create:mixing", "heat_requirement": "heated", "ingredients": [{ "item": "minecraft:black_concrete_powder" }, { "type": "fluid_stack", "amount": 50, "fluid": "create_things_and_misc:slime" }], "results": [{ "id": "create_d2d:asphalt" }] })

    function dyeCrafts(dye) {
        e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:" + dye + "_dye" }, { "type": "fluid_tag", "amount": 250, "fluid_tag": "c:water" }], "results": [{ "amount": 250, "id": "kubejs:" + dye }] })
        e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:gravel" }, { "item": "minecraft:sand" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "count": 2, "id": "minecraft:" + dye + "_concrete_powder" }] })
    }

    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { dyeCrafts(D) })
})