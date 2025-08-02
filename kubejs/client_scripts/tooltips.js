ItemEvents.modifyTooltips(e => {
    //Imprinted Slime Ball
    e.add('entitydetectors:imprinted_slime_ball', Text.gray('Shift right click with a Slimeball on a mob.'))
    //DON'T USE IT
    function nope(blocks) {
        e.add([
            'dndecor:' + blocks,
            'dndecor:cut_' + blocks,
            'dndecor:cut_' + blocks + '_stairs',
            'dndecor:cut_' + blocks + '_slab',
            'dndecor:cut_' + blocks + '_wall',
            'dndecor:polished_cut_' + blocks,
            'dndecor:polished_cut_' + blocks + '_stairs',
            'dndecor:polished_cut_' + blocks + '_slab',
            'dndecor:polished_cut_' + blocks + '_wall',
            'dndecor:cut_' + blocks + '_bricks',
            'dndecor:cut_' + blocks + '_brick_stairs',
            'dndecor:cut_' + blocks + '_brick_slab',
            'dndecor:cut_' + blocks + '_brick_wall',
            'dndecor:small_' + blocks + '_bricks',
            'dndecor:small_' + blocks + '_brick_stairs',
            'dndecor:small_' + blocks + '_brick_slab',
            'dndecor:small_' + blocks + '_brick_wall',
            'dndecor:layered_' + blocks,
            'dndecor:' + blocks + '_pillar'
        ]
            , Text.red('DON\'T USE IT !'))
    }
    nope('dolomite')
    nope('gabbro')
    nope('weathered_limestone')
    nope('blackstone')
    nope('basalt')
    nope('netherrack')
    nope('amethyst')
    nope('packed_mud')
    nope('stone')

})