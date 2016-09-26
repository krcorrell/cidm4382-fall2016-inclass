var mongoose = require('mongoose');

var VFRITable = new mongoose.Schema({
	weight: Number,
	vfri5: Number,
	vfri10: Number,
	vfri15: Number,
	vclimb: Number,
});

var Flaps5Table = new mongoose.Schema({
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});

var Flaps5Landing = new mongoose.Schema({
	weight: Number,
	vapp: Number,
	vref: String,
	vga: Number
});

var Flaps10Table = new mongoose.Schema({
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});

var Flaps10Landing = new mongoose.Schema({
	weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number
});

var Flaps15Table = new mongoose.Schema({
	weight: Number,
	altitude: Number,
	temperature: String, //above 20 or below
	vr: Number,
	v2: Number
});

var Flaps15Landing = new mongoose.Schema({
	weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number
});

var Flaps35Landing = new mongoose.Schema({
	weight: Number,
	vapp: Number,
	vref: Number,
	vga: Number
});

