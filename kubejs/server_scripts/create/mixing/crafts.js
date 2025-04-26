ServerEvents.recipes(e => {
    //Tuff
    e.custom({ "type": "create:mixing", "heat_requirement": "heated", "ingredients": [{ "item": "minecraft:andesite" }, { "item": "minecraft:diorite" }, { "type": "fluid_tag", "amount": 250, "fluid_tag": "c:lava" }], "results": [{ "id": "minecraft:tuff" }] })
    //Podzol
    e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:dirt" }, { "tag": "minecraft:leaves" }, { "type": "fluid_tag", "amount": 250, "fluid_tag": "c:water" }], "results": [{ "id": "minecraft:podzol" }] })
    //Mycelium
    e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:dirt" }, { "tag": "c:mushrooms" }, { "type": "fluid_tag", "amount": 250, "fluid_tag": "c:water" }], "results": [{ "id": "minecraft:mycelium" }] })
    //Asphalt
    e.custom({ "type": "create:mixing", "heat_requirement": "heated", "ingredients": [{ "item": "minecraft:black_concrete_powder" }, { "type": "fluid_stack", "amount": 50, "fluid": "create_things_and_misc:slime" }], "results": [{ "id": "create_d2d:asphalt" }] })
    //Tinted Glass Alt
    e.custom({ "type": "create:mixing", "heat_requirement": "heated", "ingredients": [{ "item": "minecraft:glass" }, { "item": "minecraft:iron_nugget" }], "results": [{ "id": "minecraft:tinted_glass" }] })
    //Creamy Terracotta
    e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:terracotta" }, { "type": "fluid_stack", "amount": 50, "fluid": "minecraft:milk" }], "results": [{ "id": "kubejs:creamy_terracotta" }] })
    //Dye Crafts
    function dyeCrafts(dye) {
        e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:" + dye + "_dye" }, { "type": "fluid_tag", "amount": 250, "fluid_tag": "c:water" }], "results": [{ "amount": 250, "id": "kubejs:" + dye }] })
        e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:gravel" }, { "item": "minecraft:sand" }, { "type": "fluid_stack", "amount": 50, "fluid": "kubejs:" + dye }], "results": [{ "count": 2, "id": "minecraft:" + dye + "_concrete" }] })
        e.custom({ "type": "create:crushing", "ingredients": [{ "item": "minecraft:" + dye + "_concrete" }], "processing_time": 20, "results": [{ "id": "minecraft:" + dye + "_concrete_powder" }] })
    }
    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { dyeCrafts(D) })
    //Wild Plants
    function wildPlants(input, output) { e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:short_grass" }, { "item": input }, { "item": input }, { "item": input }, { "item": input }, { "item": input }], "results": [{ "id": output }] }) }
    wildPlants('minecraft:potato', 'farmersdelight:wild_potatoes')
    wildPlants('farmersdelight:cabbage', 'farmersdelight:wild_cabbages')
    wildPlants('farmersdelight:onion', 'farmersdelight:wild_onions')
    wildPlants('minecraft:carrot', 'farmersdelight:wild_carrots')
    wildPlants('expandeddelight:chili_pepper', 'expandeddelight:wild_chili_pepper')
    wildPlants('expandeddelight:sweet_potato', 'expandeddelight:wild_sweet_potato')
    wildPlants('expandeddelight:asparagus', 'expandeddelight:wild_asparagus')
    wildPlants('farmersdelight:rice', 'farmersdelight:wild_rice')
    wildPlants('supplementaries:flax', 'supplementaries:wild_flax')
    wildPlants('expandeddelight:peanut', 'expandeddelight:wild_peanuts')
    wildPlants('minecraft:beetroot', 'farmersdelight:wild_beetroots')
    wildPlants('farmersdelight:tomato', 'farmersdelight:wild_tomatoes')
    //Sandy Shrub
    e.custom({ "type": "create:mixing", "ingredients": [{ "item": "minecraft:short_grass" }, { "item": 'minecraft:sand' }], "results": [{ "id": 'farmersdelight:sandy_shrub' }] })
    //Salt
    e.custom({ "type": "create:mixing", "heat_requirement": "heated", "ingredients": [{ "type": "fluid_tag", "amount": 250, "fluid_tag": "c:water" }], "results": [{ "id": "expandeddelight:salt" }] })
    //Wheat Dough
    e.custom({ "type": "create:mixing", "ingredients": [{ "type": "fluid_tag", "amount": 250, "fluid_tag": "c:water" }, { "item": "expandeddelight:salt" }, { "item": "create:wheat_flour" }], "results": [{ "id": "farmersdelight:wheat_dough" }] })
})