ServerEvents.recipes(e => {
    //bone
    e.custom({ "type": "create:cutting", "ingredients": [{ "item": "minecraft:bone_block" }], "processing_time": 20, "results": [{ "count": 3, "id": "minecraft:bone" }] })

    //Copper Unoxidation
    function unoxidation(clean, exposed, weathered, oxidized) {
        e.custom({ "type": "create:cutting", "ingredients": [{ "item": oxidized }], "processing_time": 20, "results": [{ "id": weathered }] })
        e.custom({ "type": "create:cutting", "ingredients": [{ "item": weathered }], "processing_time": 20, "results": [{ "id": exposed }] })
        e.custom({ "type": "create:cutting", "ingredients": [{ "item": exposed }], "processing_time": 20, "results": [{ "id": clean }] })
    }
    unoxidation('minecraft:copper_block', 'minecraft:exposed_copper', 'minecraft:weathered_copper', 'minecraft:oxidized_copper')
    unoxidation('minecraft:chiseled_copper', 'minecraft:exposed_chiseled_copper', 'minecraft:weathered_chiseled_copper', 'minecraft:oxidized_chiseled_copper')
    unoxidation('minecraft:copper_grate', 'minecraft:exposed_copper_grate', 'minecraft:weathered_copper_grate', 'minecraft:oxidized_copper_grate')
    unoxidation('minecraft:cut_copper', 'minecraft:exposed_cut_copper', 'minecraft:weathered_cut_copper', 'minecraft:oxidized_cut_copper')
    unoxidation('minecraft:cut_copper_stairs', 'minecraft:exposed_cut_copper_stairs', 'minecraft:weathered_cut_copper_stairs', 'minecraft:oxidized_cut_copper_stairs')
    unoxidation('minecraft:cut_copper_slab', 'minecraft:exposed_cut_copper_slab', 'minecraft:weathered_cut_copper_slab', 'minecraft:oxidized_cut_copper_slab')
    unoxidation('minecraft:copper_door', 'minecraft:exposed_copper_door', 'minecraft:weathered_copper_door', 'minecraft:oxidized_copper_door')
    unoxidation('minecraft:copper_trapdoor', 'minecraft:exposed_copper_trapdoor', 'minecraft:weathered_copper_trapdoor', 'minecraft:oxidized_copper_trapdoor')
    unoxidation('minecraft:copper_bulb', 'minecraft:exposed_copper_bulb', 'minecraft:weathered_copper_bulb', 'minecraft:oxidized_copper_bulb')
    unoxidation('create:copper_shingle_slab', 'create:exposed_copper_shingle_slab', 'create:weathered_copper_shingle_slab', 'create:oxidized_copper_shingle_slab')
    unoxidation('create:copper_shingle_stairs', 'create:exposed_copper_shingle_stairs', 'create:weathered_copper_shingle_stairs', 'create:oxidized_copper_shingle_stairs')
    unoxidation('create:copper_tiles', 'create:exposed_copper_tiles', 'create:weathered_copper_tiles', 'create:oxidized_copper_tiles')
    unoxidation('create:copper_tile_slab', 'create:exposed_copper_tile_slab', 'create:weathered_copper_tile_slab', 'create:oxidized_copper_tile_slab')
    unoxidation('create:copper_tile_stairs', 'create:exposed_copper_tile_stairs', 'create:weathered_copper_tile_stairs', 'create:oxidized_copper_tile_stairs')
    unoxidation('additionallanterns:copper_chain', 'additionallanterns:exposed_copper_chain', 'additionallanterns:weathered_copper_chain', 'additionallanterns:oxidized_copper_chain')

})