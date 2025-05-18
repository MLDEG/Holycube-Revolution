ServerEvents.recipes(e => {

    function sandPaper(input, output) { e.custom({ "type": "create:sandpaper_polishing", "ingredients": [{ "item": input }], "results": [{ "id": output }] }) }
    function polishedGlass(color) {
        sandPaper('minecraft:' + color + '_stained_glass', 'kubejs:polished_glass/' + color + '_stained_glass')
    }
    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { polishedGlass(D) })

})