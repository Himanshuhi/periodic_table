const elements = [
	{
		symbol: 'H',
		name: 'Hydrogen',
		atomicNumber: 1,
		atomicWeight: 1.008
	},
	{
		symbol: 'He',
		name: 'Helium',
		atomicNumber: 2,
		atomicWeight: 4.003
	},
	{
		symbol: 'Li',
		name: 'Lithium',
		atomicNumber: 3,
		atomicWeight: 6.941
	},
	{
		symbol: 'Be',
		name: 'Beryllium',
		atomicNumber: 4,
		atomicWeight: 9.012
	},
	{
		symbol: 'B',
		name: 'Boron',
		atomicNumber: 5,
		atomicWeight: 10.81
	},
	{
		symbol: 'C',
		name: 'Carbon',
		atomicNumber: 6,
		atomicWeight: 12.01
	},
	{
		symbol: 'N',
		name: 'Nitrogen',
		atomicNumber: 7,
		atomicWeight: 14.01
	},
	{
		symbol: 'O',
		name: 'Oxygen',
		atomicNumber: 8,
		atomicWeight: 16.00
	},
	{
		symbol: 'F',
		name: 'Fluorine',
		atomicNumber: 9,
		atomicWeight: 19.00
	},
	{
		symbol: 'Ne',
		name: 'Neon',
		atomicNumber: 10,
		atomicWeight: 20.18
	},
	{
		symbol: 'Na',
		name: 'Sodium',
		atomicNumber: 11,
		atomicWeight: 22.99
	},
	{
		symbol: 'Mg',
		name: 'Magnesium',
		atomicNumber: 12,
		atomicWeight: 24.31
	},
	{
		symbol: 'Al',
		name: 'Aluminum',
		atomicNumber: 13,
		atomicWeight: 26.98
	},
	{
		symbol: 'Si',
		name: 'Silicon',
		atomicNumber: 14,
		atomicWeight: 28.09
	},
	{
		symbol: 'P',
		name: 'Phosphorus',
		atomicNumber: 15,
		atomicWeight: 30.97
	},
	{
		symbol: 'S',
		name: 'Sulfur',
		atomicNumber: 16,
		atomicWeight: 32.07
	},
	{
		symbol: 'Cl',
		name: 'Chlorine',
		atomicNumber: 17,
		atomicWeight: 35.45
	},
	{
		symbol: 'Ar',
		name: 'Argon',
		atomicNumber: 18,
		atomicWeight: 39.95
	},
	{
		symbol: 'K',
		name: 'Potassium',
		atomicNumber: 19,
		atomicWeight: 39.10
	},
	{
		symbol: 'Ca',
		name: 'Calcium',
		atomicNumber: 20,
		atomicWeight: 40.08
	},
	{
		symbol: 'Sc',
		name: 'Scandium',
		atomicNumber: 21,
		atomicWeight: 44.96
	},
	{
		symbol: 'Ti',
		name: 'Titanium',
		atomicNumber: 22,
		atomicWeight: 47.87
	},
	{
		symbol: 'V',
		name: 'Vanadium',
		atomicNumber: 23,
		atomicWeight: 50.94
	},
	{
		symbol: 'Cr',
		name: 'Chromium',
		atomicNumber: 24,
		atomicWeight: 52.00
	},
	{
		symbol: 'Mn',
		name: 'Manganese',
		atomicNumber: 25,
		atomicWeight: 54.94
	},
	{
		symbol: 'Fe',
		name: 'Iron',
		atomicNumber: 26,
		atomicWeight: 55.85
	},
	{
		symbol: 'Co',
		name: 'Cobalt',
		atomicNumber: 27,
		atomicWeight: 58.93
	},
	{
		symbol: 'Ni',
		name: 'Nickel',
		atomicNumber: 28,
		atomicWeight: 58.69
	},
	{
		symbol: 'Cu',
		name: 'Copper',
		atomicNumber: 29,
		atomicWeight: 63.55
	},
	{
		symbol: 'Zn',
		name: 'Zinc',
		atomicNumber: 30,
		atomicWeight: 65.38
	},
	{
		symbol: 'Ga',
		name: 'Gallium',
		atomicNumber: 31,
		atomicWeight: 69.72
	},
	{
		symbol: 'Ge',
		name: 'Germanium',
		atomicNumber: 32,
		atomicWeight: 72.63
	},
	{
		symbol: 'As',
		name: 'Arsenic',
		atomicNumber: 33,
		atomicWeight: 74.92
	},
	{
		symbol: 'Se',
		name: 'Selenium',
		atomicNumber: 34,
		atomicWeight: 78.96
	},
	{
		symbol: 'Br',
		name: 'Bromine',
		atomicNumber: 35,
		atomicWeight: 79.90
	},
	{
		symbol: 'Kr',
		name: 'Krypton',
		atomicNumber: 36,
		atomicWeight: 83.80
	},
	{
		symbol: 'Rb',
		name: 'Rubidium',
		atomicNumber: 37,
		atomicWeight: 85.47
	},
	{
		symbol: 'Sr',
		name: 'Strontium',
		atomicNumber: 38,
		atomicWeight: 87.62
	},
	{
		symbol: 'Y',
		name: 'Yttrium',
		atomicNumber: 39,
		atomicWeight: 88.91
	},
	{
		symbol: 'Zr',
		name: 'Zirconium',
		atomicNumber: 40,
		atomicWeight: 91.22
	},
	{
		symbol: 'Nb',
		name: 'Niobium',
		atomicNumber: 41,
		atomicWeight: 92.91
	},
	{
		symbol: 'Mo',
		name: 'Molybdenum',
		atomicNumber: 42,
		atomicWeight: 95.94
	},
	{
		symbol: 'Tc',
		name: 'Technetium',
		atomicNumber: 43,
		atomicWeight: 98.00
	},
	{
		symbol: 'Ru',
		name: 'Ruthenium',
		atomicNumber: 44,
		atomicWeight: 101.07
	},
	{
		symbol: 'Rh',
		name: 'Rhodium',
		atomicNumber: 45,
		atomicWeight: 102.91
	},
	{
		symbol: 'Pd',
		name: 'Palladium',
		atomicNumber: 46,
		atomicWeight: 106.42
	},
	{
		symbol: 'Ag',
		name: 'Silver',
		atomicNumber: 47,
		atomicWeight: 107.87
	},
	{
		symbol: 'Cd',
		name: 'Cadmium',
		atomicNumber: 48,
		atomicWeight: 112.41
	},
	{
		symbol: 'In',
		name: 'Indium',
		atomicNumber: 49,
		atomicWeight: 114.82
	},
	{
		symbol: 'Sn',
		name: 'Tin',
		atomicNumber: 50,
		atomicWeight: 118.71
	},
	{
		symbol: 'Sb',
		name: 'Antimony',
		atomicNumber: 51,
		atomicWeight: 121.76
	},
	{
		symbol: 'Te',
		name: 'Tellurium',
		atomicNumber: 52,
		atomicWeight: 127.60
	},
	{
		symbol: 'I',
		name: 'Iodine',
		atomicNumber: 53,
		atomicWeight: 126.90
	},
	{
		symbol: 'Xe',
		name: 'Xenon',
		atomicNumber: 54,
		atomicWeight: 131.29
	},
	{
		symbol: 'Cs',
		name: 'Cesium',
		atomicNumber: 55,
		atomicWeight: 132.91
	},
	{
		symbol: 'Ba',
		name: 'Barium',
		atomicNumber: 56,
		atomicWeight: 137.33
	},
	{
		symbol: 'La',
		name: 'Lanthanum',
		atomicNumber: 57,
		atomicWeight: 138.91
	},
	{
		symbol: 'Ce',
		name: 'Cerium',
		atomicNumber: 58,
		atomicWeight: 140.12
	},
	{
		symbol: 'Pr',
		name: 'Praseodymium',
		atomicNumber: 59,
		atomicWeight: 140.91
	},
	{
		symbol: 'Nd',
		name: 'Neodymium',
		atomicNumber: 60,
		atomicWeight: 144.24
	},
	{
		symbol: 'Pm',
		name: 'Promethium',
		atomicNumber: 61,
		atomicWeight: 145.00
	},
	{
		symbol: 'Sm',
		name: 'Samarium',
		atomicNumber: 62,
		atomicWeight: 150.36
	},
	{
		symbol: 'Eu',
		name: 'Europium',
		atomicNumber: 63,
		atomicWeight: 151.96
	},
	{
		symbol: 'Gd',
		name: 'Gadolinium',
		atomicNumber: 64,
		atomicWeight: 157.25
	},
	{
		symbol: 'Tb',
		name: 'Terbium',
		atomicNumber: 65,
		atomicWeight: 158.93
	},
	{
		symbol: 'Dy',
		name: 'Dysprosium',
		atomicNumber: 66,
		atomicWeight: 162.50
	},
	{
		symbol: 'Ho',
		name: 'Holmium',
		atomicNumber: 67,
		atomicWeight: 164.93
	},
	{
		symbol: 'Er',
		name: 'Erbium',
		atomicNumber: 68,
		atomicWeight: 167.26
	},
	{
		symbol: 'Tm',
		name: 'Thulium',
		atomicNumber: 69,
		atomicWeight: 168.93
	},
	{
		symbol: 'Yb',
		name: 'Ytterbium',
		atomicNumber: 70,
		atomicWeight: 173.05
	},
	{
		symbol: 'Lu',
		name: 'Lutetium',
		atomicNumber: 71,
		atomicWeight: 174.97
	},
	{
		symbol: 'Hf',
		name: 'Hafnium',
		atomicNumber: 72,
		atomicWeight: 178.49
	},
	{
		symbol: 'Ta',
		name: 'Tantalum',
		atomicNumber: 73,
		atomicWeight: 180.95
	},
	{
		symbol: 'W',
		name: 'Tungsten',
		atomicNumber: 74,
		atomicWeight: 183.84
	},
	{
		symbol: 'Re',
		name: 'Rhenium',
		atomicNumber: 75,
		atomicWeight: 186.21
	},
	{
		symbol: 'Os',
		name: 'Osmium',
		atomicNumber: 76,
		atomicWeight: 190.23
	},
	{
		symbol: 'Ir',
		name: 'Iridium',
		atomicNumber: 77,
		atomicWeight: 192.22
	},
	{
		symbol: 'Pt',
		name: 'Platinum',
		atomicNumber: 78,
		atomicWeight: 195.08
	},
	{
		symbol: 'Au',
		name: 'Gold',
		atomicNumber: 79,
		atomicWeight: 196.97
	},
	{
		symbol: 'Hg',
		name: 'Mercury',
		atomicNumber: 80,
		atomicWeight: 200.59
	},
	{
		symbol: 'Tl',
		name: 'Thallium',
		atomicNumber: 81,
		atomicWeight: 204.38
	},
	{
		symbol: 'Pb',
		name: 'Lead',
		atomicNumber: 82,
		atomicWeight: 207.2
	},
	{
		symbol: 'Bi',
		name: 'Bismuth',
		atomicNumber: 83,
		atomicWeight: 208.98
	},
	{
		symbol: 'Th',
		name: 'Thorium',
		atomicNumber: 90,
		atomicWeight: 232.04
	},
	{
		symbol: 'Pa',
		name: 'Protactinium',
		atomicNumber: 91,
		atomicWeight: 231.04
	},
	{
		symbol: 'U',
		name: 'Uranium',
		atomicNumber: 92,
		atomicWeight: 238.03
	},
	{
		symbol: 'Np',
		name: 'Neptunium',
		atomicNumber: 93,
		atomicWeight: 237.05
	},
	{
		symbol: 'Pu',
		name: 'Plutonium',
		atomicNumber: 94,
		atomicWeight: 244.06
	},
	{
		symbol: 'Am',
		name: 'Americium',
		atomicNumber: 95,
		atomicWeight: 243.06
	},
	{
		symbol: 'Cm',
		name: 'Curium',
		atomicNumber: 96,
		atomicWeight: 247.07
	},
	{
		symbol: 'Bk',
		name: 'Berkelium',
		atomicNumber: 97,
		atomicWeight: 247.07
	},
	{
		symbol: 'Cf',
		name: 'Californium',
		atomicNumber: 98,
		atomicWeight: 251.08
	},
	{
		symbol: 'Es',
		name: 'Einsteinium',
		atomicNumber: 99,
		atomicWeight: 252.08
	},
	{
		symbol: 'Fm',
		name: 'Fermium',
		atomicNumber: 100,
		atomicWeight: 257.1
	},
	{
		symbol: 'Md',
		name: 'Mendelevium',
		atomicNumber: 101,
		atomicWeight: 258.1
	},
	{
		symbol: 'No',
		name: 'Nobelium',
		atomicNumber: 102,
		atomicWeight: 259.1
	},
	{
		symbol: 'Lr',
		name: 'Lawrencium',
		atomicNumber: 103,
		atomicWeight: 262.11
	},
	{
		symbol: 'Rf',
		name: 'Rutherfordium',
		atomicNumber: 104,
		atomicWeight: 261.11
	},
	{
		symbol: 'Db',
		name: 'Dubnium',
		atomicNumber: 105,
		atomicWeight: 262.11
	},
	{
		symbol: 'Sg',
		name: 'Seaborgium',
		atomicNumber: 106,
		atomicWeight: 266.12
	},
	{
		symbol: 'Bh',
		name: 'Bohrium',
		atomicNumber: 107,
		atomicWeight: 264.12
	},
	{
		symbol: 'Hs',
		name: 'Hassium',
		atomicNumber: 108,
		atomicWeight: 267.13
	},
	{
		symbol: 'Mt',
		name: 'Meitnerium',
		atomicNumber: 109,
		atomicWeight: 268.14
	},
	{
		symbol: 'Ds',
		name: 'Darmstadtium',
		atomicNumber: 110,
		atomicWeight: 271.15
	},
	{
		symbol: 'Rg',
		name: 'Roentgenium',
		atomicNumber: 111,
		atomicWeight: 272.15
	},
	{
		symbol: 'Cn',
		name: 'Copernicium',
		atomicNumber: 112,
		atomicWeight: 277.16
	},
	{
		symbol: 'Nh',
		name: 'Nihonium',
		atomicNumber: 113,
		atomicWeight: 284.18
	},
	{
		symbol: 'Fl',
		name: 'Flerovium',
		atomicNumber: 114,
		atomicWeight: 289.19
	},
	{
		symbol: 'Mc',
		name: 'Moscovium',
		atomicNumber: 115,
		atomicWeight: 288.19
	},
	{
		symbol: 'Mc',
		name: 'Moscovium',
		atomicNumber: 115,
		atomicWeight: 289
	},
	{
		symbol: 'Lv',
		name: 'Livermorium',
		atomicNumber: 116,
		atomicWeight: 293
	},
	{
		symbol: 'Ts',
		name: 'Tennessine',
		atomicNumber: 117,
		atomicWeight: 294
	},
	{
		symbol: 'Og',
		name: 'Oganesson',
		atomicNumber: 118,
		atomicWeight: 294
	},		
	// himanshu
];

const table = document.createElement('table');
const headerRow = document.createElement('tr');
const symbolHeader = document.createElement('th');
const nameHeader = document.createElement('th');
const atomicNumberHeader = document.createElement('th');
const atomicWeightHeader = document.createElement('th');

symbolHeader.textContent = 'Symbol';
nameHeader.textContent = 'Name';
atomicNumberHeader.textContent = 'Atomic Number';
atomicWeightHeader.textContent = 'Atomic Weight';

headerRow.appendChild(symbolHeader);
headerRow.appendChild(nameHeader);
headerRow.appendChild(atomicNumberHeader);
headerRow.appendChild(atomicWeightHeader);

table.appendChild(headerRow);

for (const element of elements) {
	const row = document.createElement('tr');
	const symbolCell = document.createElement('td');
	const nameCell = document.createElement('td');
	const atomicNumberCell = document.createElement('td');
	const atomicWeightCell = document.createElement('td');

	symbolCell.textContent = element.symbol;
	nameCell.textContent = element.name;
	atomicNumberCell.textContent = element.atomicNumber;
	atomicWeightCell.textContent = element.atomicWeight;

	row.appendChild(symbolCell);
	row.appendChild(nameCell);
	row.appendChild(atomicNumberCell);
	row.appendChild(atomicWeightCell);

	table.appendChild(row);
}

document.body.appendChild(table);

