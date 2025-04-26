ServerEvents.recipes(e => {
    //Spore Blossom
    e.custom({ "type": "create:pressing", "ingredients": [{ "item": "minecraft:flowering_azalea_leaves" }], "results": [{ "id": "minecraft:spore_blossom" }] })
    //Lilly Pad
    e.custom({ "type": "create:pressing", "ingredients": [{ "item": "minecraft:kelp" }], "results": [{ "id": "minecraft:lily_pad" }] })
    //Steel Rivet
    e.custom({ "type": "create:pressing", "ingredients": [{ "item": "mapperbase:steel_nugget" }], "results": [{ "id": "mapperbase:rivet" }] })
    //Steel Plate
    e.custom({ "type": "create:pressing", "ingredients": [{ "item": "mapperbase:steel_ingot" }], "results": [{ "id": "mapperbase:steel_plate" }] })
})