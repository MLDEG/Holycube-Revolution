// ServerEvents.recipes(e => {

//     function dyeCrafts(dye) {
//         e.custom({ "type": "create:emptying", "ingredients": [{ "item": "createframed:" + dye + "_stained_framed_glass" }], "results": [{ "id": "create:framed_glass" }, { "amount": 25, "id": "kubejs:" + dye }] })
//         e.custom({ "type": "create:emptying", "ingredients": [{ "item": "minecraft:" + dye + "_terracotta" }], "results": [{ "id": "minecraft:terracotta" }, { "amount": 25, "id": "kubejs:" + dye }] })
//         e.custom({ "type": "create:emptying", "ingredients": [{ "item": "minecraft:" + dye + "_stained_glass" }], "results": [{ "id": "minecraft:glass" }, { "amount": 25, "id": "kubejs:" + dye }] })
//         e.custom({ "type": "create:emptying", "ingredients": [{ "item": "minecraft:" + dye + "_wool" }], "results": [{ "id": "minecraft:white_wool" }, { "amount": 25, "id": "kubejs:" + dye }] })
//     }

//     var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
//     dye.forEach(D => { dyeCrafts(D) })
// })