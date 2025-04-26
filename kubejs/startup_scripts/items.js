StartupEvents.registry("item", (e) => {
    //Incomplete Dragon Egg
    e.create('incomplete_dragon_egg').displayName('§dIncomplete Dragon Egg')
    e.create('incomplete_ominous_bottle').displayName('Incomplete Ominous Bottle')
    e.create('empty_ominous_bottle').displayName('Empty Ominous Bottle')
})
ItemEvents.modification(e => {
    e.modify('createsandpapers:mineral_sand_paper', item => {
        item.maxDamage = 1024
    })
    e.modify('createsandpapers:soul_sand_paper', item => {
        item.maxDamage = 16
    })
})