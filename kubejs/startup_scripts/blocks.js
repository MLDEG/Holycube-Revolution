StartupEvents.registry("block", (e) => {

    function block(id, name, hard, sound) {
        e.create(id).displayName(name).hardness(hard).soundType(sound).tagBlock('minecraft:mineable/pickaxe')
    }

    block('polished_rose_quartz_block', 'Polish rose Quartz Block', 5.0, 'metal')

})