ServerEvents.recipes(e => {

    //Experience Nugget
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "kubejs:polished_rose_quartz_block"
            }
        ],
        "processing_time": 350,
        "results": [
            {
                "count": 3,
                "id": "create:polished_rose_quartz"
            },
            {
                "chance": 0.75,
                "id": "create:experience_nugget"
            }
        ]
    })
})