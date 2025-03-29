ServerEvents.recipes(e => {
    function r(craft) { e.remove({ id: craft }) }
    var removeId = [
        'sophisticatedbackpacks:stack_upgrade_tier_4',
        'sophisticatedbackpacks:stack_upgrade_omega_tier',
        'createcasing:sequenced_assembly/chorium_ingot',
        'createcasing:crafting/adjustable_chain_drive/creative',
        'createcasing:crafting/chain_drive/creative_zinc',
        'createcasing:crafting/chain_drive/creative',
        'createcasing:crafting/depot/creative',
        'createcasing:crafting/press/creative',
        'createcasing:crafting/mixer/creative',
        'createcasing:crafting/gearbox/creative_vertical_from_conversion',
        'createcasing:crafting/gearbox/creative',
        'createcasing:crafting/gearbox/creative_from_conversion',
        'createcasing:item_application/creative_casing',
        'minecraft:lodestone',
        'minecraft:cake',
        'sophisticatedbackpacks:inception_upgrade',
        'create_mechanical_extruder:extruding/scoria',
        'create_mechanical_extruder:extruding/andesite',
        'create_mechanical_extruder:extruding/netherack',
        'create_mechanical_extruder:extruding/ochrum',
        'create_mechanical_extruder:extruding/obsidian',
        'create_mechanical_extruder:extruding/snow_block',
        'create_mechanical_extruder:extruding/sandstone',
        'create_mechanical_extruder:extruding/diorite',
        'create_mechanical_extruder:extruding/advanced_obsidian',
        'create_mechanical_extruder:extruding/asurine',
        'create_mechanical_extruder:extruding/deepslate',
        'create_mechanical_extruder:extruding/granite',
        'create_mechanical_extruder:extruding/crimsite',
    ]
    removeId.forEach(C => { r(C) })

})