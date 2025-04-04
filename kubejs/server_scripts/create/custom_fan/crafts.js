ServerEvents.recipes(e => {
    //Pale Oak Sapling
    e.custom({ "type": "cmr:custom_fan", "ingredients": [{ "item": "minecraft:dark_oak_sapling" }, { "item": "minecraft:powder_snow_bucket" }], "results": [{ "id": "minecraft:pale_oak_sapling" }] })
    //Closed Eyeblossom
    e.custom({ "type": "cmr:custom_fan", "ingredients": [{ "tag": "minecraft:small_flowers" }, { "item": "minecraft:powder_snow_bucket" }], "results": [{ "id": "minecraft:closed_eyeblossom" }] })
})