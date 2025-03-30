StartupEvents.registry("fluid", (e) => {

    //Red dye liquid
    e.create('red')
        .displayName('Red')
        .stillTexture('kubejs:fluid/red/still')
        .flowingTexture('kubejs:fluid/red/flowing')
        .bucketItem.texture('kubejs:item/red/bucket')


})