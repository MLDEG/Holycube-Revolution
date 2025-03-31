StartupEvents.registry("fluid", (e) => {

    function newFluid(id, name) {
        e.create(id).displayName(name).stillTexture("kubejs:fluid/" + id + "/still").flowingTexture("kubejs:fluid/" + id + "/flowing").renderType('translucent')
    }
    newFluid('red', 'Red Dye')
    newFluid('orange', 'Orange Dye')
    newFluid('yellow', 'Yellow Dye')
    newFluid('lime', 'Lime Dye')
    newFluid('green', 'Green Dye')
    newFluid('cyan', 'Cyan Dye')
    newFluid('light_blue', 'Light Blue Dye')
    newFluid('blue', 'Blue Dye')
    newFluid('purple', 'Purple Dye')
    newFluid('magenta', 'Magenta Dye')
    newFluid('pink', 'Pink Dye')
    newFluid('white', 'White Dye')
    newFluid('light_gray', 'Light Gray Dye')
    newFluid('gray', 'Gray Dye')
    newFluid('black', 'Black Dye')
    newFluid('brown', 'Brown Dye')
})