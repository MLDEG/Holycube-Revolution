StartupEvents.registry("item", (e) => {
    // e.create('easter_egg').displayName('Easter EGG').food(food => {
    //     food
    //         .nutrition(1)
    //         .saturation(1)
    //         .effect('minecraft:speed', 600, 0, 1)
    //         .removeEffect('minecraft:poison')
    //         .alwaysEdible(true)
    //         .eatSeconds(0.8)
    // })
})
ItemEvents.modification(e => {
    e.modify('createsandpapers:mineral_sand_paper', item => {
        item.maxDamage = 1024
    })
    e.modify('createsandpapers:soul_sand_paper', item => {
        item.maxDamage = 16
    })
})