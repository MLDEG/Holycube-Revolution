//Code by AHL
[
	'bench',
	'chair',
	'couch',
	'corner_trim',
	//'counter',
	//'cupboard',
	//'desk',
	'dining_bench',
	//'drawer',
	//'nightstand',
	'pillar_trim',
	//'shelf',
	//'side_table',
	'table'
].forEach(x => BlockEvents.placed(`kubejs:pale_oak_${x}`, p => p.block.set(`handcrafted:pale_oak_${x}`, p.block.properties)));

BlockEvents.placed('kubejs:pale_oak_fancy_bed', p => {
	if (p.block[p.block.properties.facing].tags.toArray().indexOf('minecraft:replaceable') < 0) {
		p.block.set('minecraft:air');
		return p.block.popItem(p.block.drops[0]);
	}

	const properties = p.block.properties;
	p.block.set('handcrafted:pale_oak_fancy_bed', properties);
	properties.part = 'head';
	p.block[p.block.properties.facing].set('handcrafted:pale_oak_fancy_bed', properties);
});