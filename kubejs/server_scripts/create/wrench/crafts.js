ServerEvents.recipes(e => {
    //Cog
    function cog(planks, material) { e.custom({ "type": "extendedwrenches:wrench_material_swap", "addition": { "item": planks }, "material": material, "part": "cog", "template": { "item": "extendedwrenches:wrench_cog_augment" } }) }

    cog('minecraft:pale_oak_planks', 'extendedwrenches:pale_oak_cog')
    cog('mynethersdelight:powdery_planks', 'extendedwrenches:powdery_cog')
    cog('expandeddelight:cinnamon_planks', 'extendedwrenches:cinnamon_cog')

    //handle
    function handle(planks, material) { e.custom({ "type": "extendedwrenches:wrench_material_swap", "addition": { "item": planks }, "material": material, "part": "handle", "template": { "item": "extendedwrenches:wrench_handle_augment" } }) }

    handle('minecraft:pale_oak_planks', 'extendedwrenches:pale_oak_handle')
    handle('mynethersdelight:powdery_planks', 'extendedwrenches:powdery_handle')
    handle('expandeddelight:cinnamon_planks', 'extendedwrenches:cinnamon_handle')

    //head
    function head(item, material) { e.custom({ "type": "extendedwrenches:wrench_material_swap", "addition": { "item": item }, "material": material, "part": "head", "template": { "item": "extendedwrenches:wrench_head_augment" } }) }

    head('minecraft:netherite_ingot', 'extendedwrenches:netherite_head')
    head('mapperbase:steel_ingot', 'extendedwrenches:steel_head')
    head('create_aquatic_ambitions:prismarine_alloy', 'extendedwrenches:prismarine_head')
    head('create:shadow_steel', 'extendedwrenches:shadow_head')
    head('create:refined_radiance', 'extendedwrenches:radiance_head')
    head('createqol:shadow_radiance', 'extendedwrenches:shadow_radiance_head')
    head('minecraft:resin_brick', 'extendedwrenches:resin_head')

})