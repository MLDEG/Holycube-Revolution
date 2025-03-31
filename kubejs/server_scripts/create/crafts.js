ServerEvents.recipes(e => {
    //Propeller Create D2D
    e.shaped('create_d2d:propeller', [' B ', 'BAB', ' B '], {
        A: 'create:propeller',
        B: 'create:iron_sheet'
    })
    //Colored Propeller
    function dyePropeller(dye) {
        e.shapeless('create_d2d:' + dye + '_propeller', ['create_d2d:propeller', 'minecraft:' + dye + '_dye'])
    }
    var dye = ['red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink', 'white', 'light_gray', 'gray', 'black', 'brown']
    dye.forEach(D => { dyePropeller(D) })
})