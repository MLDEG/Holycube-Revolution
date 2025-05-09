ServerEvents.recipes(e => {
    //Tall Dry Grass
    e.custom({ "type": "cmr:custom_fan", "ingredients": [{ "item": "minecraft:short_grass" }, { "item": "kubejs:sand_slab" }], "results": [{ "id": "minecraft:tall_dry_grass" }] })
    //Bush
    e.custom({ "type": "cmr:custom_fan", "ingredients": [{ "item": "minecraft:short_grass" }, { "item": "minecraft:oak_leaves" }], "results": [{ "id": "minecraft:bush" }] })
})