ServerEvents.recipes(e => {
    //Spore Blossom
    e.custom({ "type": "create:pressing", "ingredients": [{ "item": "minecraft:flowering_azalea_leaves" }], "results": [{ "id": "minecraft:spore_blossom" }] })
    //Lilly Pad
    e.custom({ "type": "create:pressing", "ingredients": [{ "item": "minecraft:kelp" }], "results": [{ "id": "minecraft:lily_pad" }] })
})