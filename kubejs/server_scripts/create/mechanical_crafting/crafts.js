ServerEvents.recipes(e => {

    //Trident
    e.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false, "category": "misc",
        "key": {
            "A": { "item": "create_aquatic_ambitions:polished_quartz_tine" },
            "B": { "item": "create_aquatic_ambitions:prismarine_rod" }
        },
        "pattern": [" AA", " BA", "B  "],
        "result": { "count": 1, "id": "minecraft:trident" }, "show_notification": false
    })
    function moltenVent(material, output) { e.custom({ "type": "create:mechanical_crafting", "accept_mirrored": false, "key": { "A": { "item": material }, "P": { "item": "minecraft:magma_block" }, "S": { "item": "minecraft:nether_star" } }, "pattern": [" AAA ", "AAPAA", "APSPA", "AAPAA", " AAA "], "result": { "count": 1, "id": output }, "show_notification": false }) }
    moltenVent('create:scoria', 'molten_vents:dormant_molten_scoria')
    moltenVent('create:scorchia', 'molten_vents:dormant_molten_scorchia')
    moltenVent('create:ochrum', 'molten_vents:dormant_molten_ochrum')
    moltenVent('create:crimsite', 'molten_vents:dormant_molten_crimsite')
    moltenVent('create:veridium', 'molten_vents:dormant_molten_veridium')
    moltenVent('create:asurine', 'molten_vents:dormant_molten_asurine')
    moltenVent('create_d2d:dolomite', 'molten_vents:active_molten_dolomite')
    moltenVent('create_d2d:breccia', 'molten_vents:active_molten_breccia')
    moltenVent('create_d2d:gabbro', 'molten_vents:active_molten_gabbro')
})