//Code by AHL
const AttachFace = Java.loadClass('net.minecraft.world.level.block.state.properties.AttachFace'),
	BenchBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.BenchBlock'),
	BlockBehaviour = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties'),
	//BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem'),
	ChairBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.ChairBlock'),
	CouchBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.CouchBlock'),
	CornerTrimBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.trims.CornerTrimBlock'),
	//CounterBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.CounterBlock'),
	//CupboardBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.CupboardBlock'),
	//DeskBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.DeskBlock'),
	DiningBenchBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.DiningBenchBlock'),
	//DrawerBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.DrawerBlock'),
	FancyBedBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.FancyBedBlock'),
	//NightstandBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.NightstandBlock'),
	//ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties'),
	PillarTrimBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.trims.PillarTrimBlock'),
	//ShelfBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.ShelfBlock'),
	//SideTableBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.SideTableBlock'),
	TableBlock = Java.loadClass('earth.terrarium.handcrafted.common.blocks.TableBlock'),
	attachFaces = {
		east: AttachFace.WALL,
		west: AttachFace.WALL,
		down: AttachFace.CEILING,
		up: AttachFace.FLOOR,
		north: AttachFace.WALL,
		south: AttachFace.WALL
	},
	reverseDirection = {
		east: Direction.WEST,
		west: Direction.EAST,
		down: Direction.UP,
		up: Direction.DOWN,
		north: Direction.SOUTH,
		south: Direction.NORTH
	};

let paleOakBench,
	paleOakChair,
	paleOakCornerTrim,
	paleOakCouch,
	//paleOakCounter,
	//paleOakCupboard,
	//paleOakDesk,
	paleOakDiningBench,
	//paleOakDrawer,
	paleOakFancyBed,
	//paleOakNightstand,
	paleOakPillarTrim,
	//paleOakShelf,
	//paleOakSideTable,
	paleOakTable;

StartupEvents.registry('block', r => {
	paleOakBench = r.createCustom('handcrafted:pale_oak_bench', () => new BenchBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion()))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:benches');
	r.create('pale_oak_bench', 'trapdoor');

	paleOakCouch = r.createCustom('handcrafted:pale_oak_couch', () => new CouchBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion()))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:couches');
	r.create('pale_oak_couch', 'trapdoor');

	paleOakChair = r.createCustom('handcrafted:pale_oak_chair', () => new ChairBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion()))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:chairs');
	r.create('pale_oak_chair', 'trapdoor');

	paleOakDiningBench = r.createCustom('handcrafted:pale_oak_dining_bench', () => new DiningBenchBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion()))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:dining_benches');
	r.create('pale_oak_dining_bench', 'trapdoor');

	/*paleOakSideTable = r.createCustom('handcrafted:pale_oak_side_table', () => new SideTableBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion().isRedstoneConductor(() => false)))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:side_tables');
	r.create('side_table')
		.box(2, 12, 2, 14, 16, 14, true)
		.box(4, 8, 4, 12, 12, 12, true)
		.box(3, 0, 10, 6, 12, 13, true)
		.box(10, 0, 3, 13, 12, 6, true)
		.box(3, 0, 3, 6, 12, 6, true)
		.box(10, 0, 10, 13, 12, 13, true)
		.property(BlockProperties.HORIZONTAL_FACING)
		.placementState(p => p.setValue(BlockProperties.HORIZONTAL_FACING, reverseDirection[p.nearestLookingDirections[1]]));*/

	/*paleOakDesk = r.createCustom('handcrafted:pale_oak_desk', () => new DeskBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion().isRedstoneConductor(() => false)))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:desks');
	r.create('pale_oak_desk')
		.box(0, 12, 0, 16, 16, 16, true)
		.box(2, 3, 2, 14, 12, 14, true)
		.box(12, 0, 12, 15, 12, 15, true)
		.box(12, 0, 1, 15, 12, 4, true)
		.box(1, 0, 1, 4, 12, 4, true)
		.box(1, 0, 12, 4, 12, 15, true)
		.property(BlockProperties.HORIZONTAL_FACING)
		.placementState(p => p.setValue(BlockProperties.HORIZONTAL_FACING, reverseDirection[p.nearestLookingDirections[1]]));*/

	/*paleOakNightstand = r.createCustom('handcrafted:pale_oak_nightstand', () => new NightstandBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion().isRedstoneConductor(() => false)))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:nightstands');
	r.create('pale_oak_nightstand')
		.box(0, 12, 0, 16, 16, 16, true)
		.box(12, 0, 12, 15, 12, 15, true)
		.box(12, 0, 1, 15, 12, 4, true)
		.box(1, 0, 1, 4, 12, 4, true)
		.box(1, 0, 12, 4, 12, 15, true)
		.box(2, 0, 2, 14, 12, 14, true)
		.property(BlockProperties.HORIZONTAL_FACING)
		.placementState(p => p.setValue(BlockProperties.HORIZONTAL_FACING, reverseDirection[p.nearestLookingDirections[1]]));*/

	paleOakTable = r.createCustom('handcrafted:pale_oak_table', () => new TableBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion()))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:tables')
		.tag('handcrafted:table_connectable');
	r.create('pale_oak_table');

	paleOakFancyBed = r.createCustom('handcrafted:pale_oak_fancy_bed', () => new FancyBedBlock(BlockBehaviour.ofFullCopy(Blocks.WHITE_BED).noOcclusion()))
		.tag('minecraft:mineable/axe')
		.tag('minecraft:beds')
		.tag('handcrafted:fancy_beds');
	r.create('pale_oak_fancy_bed', 'fence_gate');

	/*paleOakCounter = r.createCustom('handcrafted:pale_oak_counter', () => new CounterBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).isRedstoneConductor(() => false)))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:counters');
	r.create('pale_oak_counter')
		.property(BlockProperties.HORIZONTAL_FACING)
		.placementState(p => p.setValue(BlockProperties.HORIZONTAL_FACING, reverseDirection[p.nearestLookingDirections[1]]));*/

	/*paleOakCupboard = r.createCustom('handcrafted:pale_oak_cupboard', () => new CupboardBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).isRedstoneConductor(() => false)))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:cupboards');
	r.create('pale_oak_cupboard')
		.property(BlockProperties.HORIZONTAL_FACING)
		.placementState(p => p.setValue(BlockProperties.HORIZONTAL_FACING, reverseDirection[p.nearestLookingDirections[1]]));*/

	/*paleOakDrawer = r.createCustom('handcrafted:pale_oak_drawer', () => new DrawerBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).isRedstoneConductor(() => false)))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:drawers');
	r.create('pale_oak_drawer')
		.property(BlockProperties.HORIZONTAL_FACING)
		.placementState(p => p.setValue(BlockProperties.HORIZONTAL_FACING, reverseDirection[p.nearestLookingDirections[1]]));*/

	/*paleOakShelf = r.createCustom('handcrafted:pale_oak_shelf', () => new ShelfBlock(BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).isRedstoneConductor(() => false)))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:shelves');
	r.create('pale_oak_shelf')
		.property(BlockProperties.HORIZONTAL_FACING)
		.placementState(p => p.setValue(BlockProperties.HORIZONTAL_FACING, reverseDirection[p.nearestLookingDirections[1]]));*/

	paleOakPillarTrim = r.createCustom('handcrafted:pale_oak_pillar_trim', () => new PillarTrimBlock(true, BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion()))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:trims')
		.tag('handcrafted:pillar_trims');
	r.create('pale_oak_pillar_trim')
		.box(8, 8, 8, 8, 8, 8, true)
		.property(BlockProperties.ATTACH_FACE)
		.property(BlockProperties.HORIZONTAL_FACING)
		.property(BlockProperties.WATERLOGGED)
		.placementState(p => {
			p.setValue(BlockProperties.ATTACH_FACE, attachFaces[p.clickedFace]);
			p.setValue(BlockProperties.HORIZONTAL_FACING, (attachFaces[p.clickedFace] == AttachFace.WALL) ? p.clickedFace : p.nearestLookingDirections[1]);
		});

	paleOakCornerTrim = r.createCustom('handcrafted:pale_oak_corner_trim', () => new CornerTrimBlock(true, BlockBehaviour.ofFullCopy(Blocks.OAK_PLANKS).noOcclusion()))
		.tag('minecraft:mineable/axe')
		.tag('handcrafted:trims')
		.tag('handcrafted:corner_trims');
	r.create('pale_oak_corner_trim', 'stairs');
});

/*StartupEvents.registry('item', e => {
	r.createCustom('handcrafted:pale_oak_bench', () => new BlockItem(paleOakBench.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_couch', () => new BlockItem(paleOakCouch.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_chair', () => new BlockItem(paleOakChair.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_dining_bench', () => new BlockItem(paleOakDiningBench.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_side_table', () => new BlockItem(paleOakSideTable.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_desk', () => new BlockItem(paleOakDesk.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_nightstand', () => new BlockItem(paleOakNightstand.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_table', () => new BlockItem(paleOakTable.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_fancybed', () => new BlockItem(paleOakFancyBed.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_counter', () => new BlockItem(paleOakCounter.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_cupboard', () => new BlockItem(paleOakCupboard.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_drawer', () => new BlockItem(paleOakDrawer.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_shelf', () => new BlockItem(paleOakShelf.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_pillar_trim', () => new BlockItem(paleOakPillarTrim.get(), new ItemProperties()));
	r.createCustom('handcrafted:pale_oak_corner_trim', () => new BlockItem(paleOakCornerTrim.get(), new ItemProperties()));
});*/
