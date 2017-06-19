// JS doe nt use classes instead all objects are associated with variables and functions themselves


var batwing = { //object
	status: "Ready",
	rescueBatman: function() {
		document.write("Locating his transponder... initiating launch...")
		
	}
}
/*
if (batwing.status === "Ready") {
	batwing.rescueBatman();
	
}*/

var utilities = {
	printAllMembers: function(targetObject) {
		for (i in targetObject) {
			document.write("<br />" + targetObject[i]);
			
		}
		
	}
	
}
//utilities.printAllMembers(batwing);
/*
var i_am_empty = { };

utilities.printAllMembers(i_am_empty);
*/

var planet = {
	id: 34,
	name: "ven",
	faction: {
		factionId: 2,
		name: "Nex",
		notification: function() {
			document.write("Nex alliance... unite!");
		}
		
	},
	cities: [
		{ locationId: 15, name: "gladius" },
		{ locationId: 16, name: "chalybs" },
		{ locationId: 17, name: "ensius" }
	
	]
};

//planet.faction.notification();
//document.write(planet.cities[1].name);
/*
document.write("<br/>" + planet.name);
planet.name = "Vulttus";
document.write("<br/>" + planet.name);
*/
/*
var z = planet;
document.write(z.name);

*/
/*
if (typeof planet.defense === "undefined") {
	planet.defense = "ion";
	
}

document.write(planet.defense);


for (member in planet)
{
	document.write("<br/>" + member + "==> " + planet[member]);
}
*/

function car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

var myCar = new car("Eagle", "Talon", 1993);
var myOtherCar = new car("Dodge", "Dart", 1971);

alert(myCar.model);
alert(myOtherCar.model);





