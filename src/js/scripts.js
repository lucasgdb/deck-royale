let currentDeck = [0, 0, 0, 0, 0, 0, 0, 0],
	contentToCopy,
	selectedContainer = 0,
	id = -1,
	cardName = '',
	btn, img, playerInfo,
	maxDown = 0,
	response = null,
	userName = null,
	html = '<button title="Remove all" class="btnRemoveAll" onclick="deleteAllBest()">Remove all Decks</button><h2 class="elixir"></h2>';

const cardsName = [
		'no-card',
		'witch', 'skeleton-army', 'baby-dragon', 'prince', 'giant', 'musketeer', 'mini-pekka', 'fireball', 'knight', 'archers', 'minions', 'arrows',
		'hunter', 'goblin-barrel', 'hog-rider', 'goblin-hut', 'goblins', 'spear-goblins',
		'balloon', 'giant-skeleton', 'valkyrie', 'tombstone', 'skeletons', 'bomber',
		'golem', 'barbarian-barrel', 'battle-ram', 'barbarian-hut', 'barbarians', 'cannon',
		'lava-hound', 'miner', 'pekka', 'lightning', 'mega-minion', 'inferno-tower', 'minion-horde', 'zap',
		'night-witch', 'graveyard', 'freeze', 'poison', 'wizard', 'furnace', 'fire-spirits', 'bats',
		'inferno-dragon', 'the-log', 'cannon-cart', 'x-bow', 'flying-machine', 'rocket', 'skeleton-barrel', 'mortar',
		'princess', 'royal-ghost', 'guards', 'dark-prince', 'three-musketeers', 'heal', 'royal-giant', 'royal-recruits',
		'ice-wizard', 'lumberjack', 'bowler', 'tornado', 'ice-golem', 'elixir-collector', 'ice-spirit', 'giant-snowball',
		'bandit', 'executioner', 'goblin-giant', 'dart-goblin', 'goblin-gang', 'rascals',
		'ram-rider', 'mega-knight', 'magic-archer', 'rage', 'royal-hogs', 'bomb-tower', 'elite-barbarians',
		'sparky', 'electro-wizard', 'electro-dragon', 'mirror', 'clone', 'zappies', 'tesla'
	],
	cardsInformation = [
		'There isn\'t Card selected',
		'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Spell', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Spell',
		'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Spell', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Construction', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Construction', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Troop',
		'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Spell', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Construction', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Construction',
		'Rarity: Legendary<br />Type: Troop', 'Rarity: Legendary<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Spell', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Construction', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Spell',
		'Rarity: Legendary<br />Type: Troop', 'Rarity: Legendary<br />Type: Spell', 'Rarity: Epic<br />Type: Spell', 'Rarity: Epic<br />Type: Spell', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Construction', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop', 'Rarity: Legendary<br />Type: Spell', 'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Construction', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Spell', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Construction',
		'Rarity: Legendary<br />Type: Troop', 'Rarity: Legendary<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Spell', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop', 'Rarity: Legendary<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Spell', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Construction', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Spell',
		'Rarity: Legendary<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Rare<br />Type: Troop', 'Rarity: Common<br />Type: Troop', 'Rarity: Common<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop', 'Rarity: Legendary<br />Type: Troop', 'Rarity: Legendary<br />Type: Troop', 'Rarity: Epic<br />Type: Spell', 'Rarity: Rare<br />Type: Troop', 'Rarity: Rare<br />Type: Construction', 'Rarity: Common<br />Type: Troop',
		'Rarity: Legendary<br />Type: Troop', 'Rarity: Legendary<br />Type: Troop', 'Rarity: Epic<br />Type: Troop', 'Rarity: Epic<br />Type: Spell', 'Rarity: Epic<br />Type: Spell', 'Rarity: Rare<br />Type: Troop', 'Rarity: Common<br />Type: Construction'
	],
	cardsElixir = [
		0,
		5, 3, 4, 5, 5, 4, 4, 4, 3, 3, 3, 3,
		4, 3, 4, 5, 2, 2,
		5, 6, 4, 3, 1, 3,
		8, 2, 4, 7, 5, 3,
		7, 3, 7, 6, 3, 5, 5, 2,
		4, 5, 4, 4, 5, 4, 2, 2,
		4, 2, 5, 6, 4, 6, 3, 4,
		3, 3, 3, 4, 9, 1, 6, 7,
		3, 4, 5, 3, 2, 6, 1, 2,
		3, 5, 6, 3, 3, 5,
		5, 7, 4, 2, 5, 4, 6,
		6, 4, 5, 1.6, 3, 4, 4
	],
	cardsCode = [
		0,
		26000007, 26000012, 26000015, 26000016, 26000003, 26000014, 26000018, 28000000, 26000000, 26000001, 26000005, 28000001,
		26000044, 28000004, 26000021, 27000001, 26000002, 26000019,
		26000006, 26000020, 26000011, 27000009, 26000010, 26000013,
		26000009, 28000015, 26000036, 27000005, 26000008, 27000000,
		26000029, 26000032, 26000004, 28000007, 26000039, 27000003, 26000022, 28000008,
		26000048, 28000010, 28000005, 28000009, 26000017, 27000010, 26000031, 26000049,
		26000037, 28000011, 26000054, 27000008, 26000057, 28000003, 26000056, 27000002,
		26000026, 26000050, 26000025, 26000027, 26000028, 28000016, 26000024, 26000047,
		26000023, 26000035, 26000034, 28000012, 26000038, 27000007, 26000030, 28000017,
		26000046, 26000045, 26000060, 26000040, 26000041, 26000053,
		26000051, 26000055, 26000062, 28000002, 26000059, 27000004, 26000043,
		26000033, 26000042, 26000063, 28000006, 28000013, 26000052, 27000006
	],
	cardPtName = ['', 'Bruxa', 'Exército de Esqueletos', 'Bebê Dragão', 'Príncipe', 'Gigante', 'Mosqueteira', 'Mini P.E.K.K.A', 'Bola de Fogo', 'Cavaleiro', 'Arqueiras', 'Servos', 'Flechas', 'Caçador', 'Barril de Goblins', 'Corredor', 'Cabana de Goblins', 'Goblins', 'Goblins Lanceiros', 'Balão', 'Esqueleto Gigante', 'Valquíria', 'Lápide', 'Esqueletos', 'Bombardeiro', 'Golem', 'Barril de Bárbaro', 'Ariete de Batalha', 'Cabana de Bárbaros', 'Bárbaros', 'Canhão', 'Lava Hound', 'Mineiro', 'P.E.K.K.A', 'Relâmpago', 'Megasservo', 'Torre Inferno', 'Horda de Servos', 'Zap', 'Bruxa Sombria', 'Cemitério', 'Gelo', 'Veneno', 'Mago', 'Fornalha', 'Espíritos de Fogo', 'Morcegos', 'Dragão Infernal', 'Tronco', 'Carrinho de Canhão', 'X-Besta', 'Máquina Voadora', 'Foguete', 'Barril de Esqueletos', 'Morteiro', 'Princesa', 'Fantasma Real', 'Guardas', 'Príncipe das Trevas', 'Três Mosqueteiras', 'Cura', 'Gigante Real', 'Recrutas Reais', 'Mago de Gelo', 'Lenhador', 'Lançador', 'Tornado', 'Golem de Gelo', 'Coletor de Elixir', 'Espírito de Gelo', 'Bola de Neve', 'Bandida', 'Executor', 'Goblin Gigante', 'Goblin com Dardo', 'Gangue de Goblins', 'Patifes', 'Domadora de Cordeiro', 'Megacavaleiro', 'Arqueiro Mágico', 'Fúria', 'Porcos Reais', 'Torre de Bombas', 'Bárbaros de Elite', 'Sparky', 'Mago Elétrico', 'Dragão Elétrico', 'Espelho', 'Clone', 'Eletrocutadores', 'Tesla'],
	defesa = ['Giant', 'Golem', 'Royal Giant', 'Goblin Giant'],
	towerAttack = ['Hog Rider', 'Battle Ram', 'Royal Giant', 'Royal Hogs', 'Ram Rider'],
	mainAttack = ['Elite Barbarians', 'Royal Giant', 'Pekka'],
	C = ['Tombstone', 'Cannon'],
	CV3 = ['Barbarians Hut', 'Goblin Hut', 'Furnace'],
	CA = ['Sparky', 'Giant Skeleton', 'Mega Knight'],
	Si = ['Mortar', 'X Bow'],
	F = ['Arrows', 'Fireball', 'Poison', 'Giant Snowball'],
	FV2 = ['Lightning', 'Rocket'],
	FV3 = ['Zap', 'The Log'],
	FV4 = ['Rage', 'Tornado'],
	Surp = ['Miner', 'Goblin Barrel'],
	Ciclar = ['Skeletons', 'Goblins', 'Spear Goblins', 'Ice Spirit', 'Fire Spirits', 'Bats', 'Ice Golem'],
	Sup = ['Witch', 'Prince', 'Mega Knight', 'Musketeer', 'Three Musketeers', 'Night Witch', 'Bowler', 'Hunter', 'Executioner', 'Cannon Cart', 'Rascals'],
	SV2 = ['Baby Dragon', 'Mini Pekka', 'Valkyrie', 'Inferno Dragon', 'Electro Wizard', 'Dark Prince', 'Lumberjack', 'Zappies', 'Flying Machine'],
	SV3 = ['Royal Ghost', 'Magic Archer', 'Bandit', 'Princess', 'Ice Wizard', 'Skeleton Barrel', 'Skeleton Army', 'Knight', 'Goblin Gang', 'Guards', 'Archers'],
	M = ['Minions', 'Minion Horde', 'Mega Minion'],
	tipos = [
		'Three Musketeers|Rascals|Miner|SV3|SV3|Ciclar|FV3|Elixir Collector',
		'Rascals|Pekka|Miner|Poison|Ciclar|FV3|SV3|SV3',
		'Rascals|Goblin Hut|Graveyard|Poison|Ciclar|M|FV3|SV3',
		'Rascals|Prince|Goblin Hut|SV3|SV3|F|FV3|Ciclar',
		'Rascals|Lava Hound|Balloon|M|F|FV3|M|C',
		'Rascals|Miner|Goblin Hut|M|SV3|FV3|SV2|SV3',
		'Three Musketeers|Hog Rider|Royal Ghost|Ciclar|SV2|M|FV3|C',
		'Golem|Prince|Magic Archer|M|SV3|Ciclar|F|FV3',
		'Giant|Magic Archer|Prince|M|SV3|F|SV3|FV3',
		'Magic Archer|Miner|Balloon|Ciclar|Ciclar|FV4|FV3|SV3',
		'Mega Knight|Skeleton Barrel|Ciclar|SV3|SV2|Surp|F|FV3',
		'Mega Knight|Balloon|Miner|Ciclar|Ciclar|M|M|FV3',
		'Mega Knight|Flying Machine|Graveyard|Poison|Ciclar|Ciclar|FV3|SV2',
		'Mega Knight|Giant|F|M|SV3|SV2|FV3|Elixir Collector',
		'Miner|Hunter|Prince|Dark Prince|Ciclar|Ciclar|F|FV3',
		'Miner|Hunter|Ciclar|Ciclar|Ciclar|FV3|SV3|F',
		'Si|Hunter|Ciclar|SV3|FV3|Ciclar|M|F',
		'Golem|Hunter|Night Witch|Ciclar|FV4|F|FV3|SV3',
		'Golem|Zappies|Night Witch|FV3|F|FV3|M|Ciclar',
		'Miner|F|Hunter|Zappies|SV3|FV3|Surp|SV2',
		'Goblin Gang|Zappies|SV3|SV3|FV3|FV2|FV4|SV3',
		'Three Musketeers|Zappies|Ice Wizard|Ciclar|FV4|SV2|FV3|Elixir Collector',
		'D|S|SV2|SV3|Ciclar|Ciclar|FV3|F',
		'Si|Ciclar|Ciclar|SV3|SV2|FV2|FV3|M',
		'Ciclar|AP|FV3|F|S|SV3|FV3|Surp',
		'Battle Ram|Ice Golem|SV2|SV3|F|FV3|Ciclar|Surp',
		'Hog Rider|Mega Knight|Ice Golem|SV2|Ciclar|Ciclar|FV3|F',
		'Inferno Tower|SV3|SV3|Ciclar|SV3|FV2|Surp|FV3',
		'Mega Knight|Ciclar|Surp|SV3|SV2|Ciclar|SV3|FV3',
		'D|Minions|S|SV2|Ciclar|FV3|F|FV3',
		'Pekka|Prince|Dark Prince|Tornado|Ciclar|FV3|F|SV3',
		'Sparky|D|SV2|SV3|Ciclar|F|FV3|Surp',
		'Lava Hound|Balloon|M|M|SV3|Tombstone|F|FV3',
		'SV3|SV3|Ciclar|Hog Rider|Ciclar|C|F|FV3',
		'SV3|SV3|Ciclar|Ciclar|Si|Arrows|FV2|FV3',
		'SV3|SV2|Ciclar|SV3|Mega Knight|SV3|Goblin Hut|FV3',
		'AT|S|SV3|Ciclar|F|FV3|Ciclar|M',
		'D|Elixir Collector|SV2|SV2|SV3|S|FV3|Tornado',
		'Hog Rider|Freeze|S|SV2|SV3|Ciclar|F|FV3',
		'Balloon|FV4|Surp|SV2|SV2|FV3|Ciclar|Ciclar',
		'FV3|D|M|F|SV2|S|Ciclar|SV3',
		'C|SV2|SV3|Surp|Ciclar|F|FV3|AP',
		'D|Sparky|Tornado|SV2|SV3|FV3|Ciclar|FV3',
		'Ice Golem|Graveyard|F|FV3|M|Tombstone|SV3|FV3',
		'Mega Knight|Miner|SV2|Ciclar|SV3|Ciclar|SV3|FV3',
		'Royal Ghost|Mega Knight|SV3|SV2|SV3|Surp|SV3|FV3',
		'Three Musketeers|Elixir Collector|SV3|Ciclar|S|FV3|Surp|SV2',
		'Three Musketeers|Elixir Collector|SV3|Ciclar|S|FV3|Surp|Pekka',
		'CA|Surp|FV3|FV3|FV2|Ciclar|S|SV3',
		'Hog Rider|Inferno Dragon|FV2|FV3|FV4|Ciclar|SV2|Ciclar',
		'Giant|F|SV2|Ciclar|S|FV3|C|Ciclar',
		'Battle Ram|F|FV3|Ciclar|SV2|SV3|SV3|SV2',
		'Balloon|Miner|FV3|SV2|F|Ciclar|M|Tombstone',
		'Si|Ciclar|Ciclar|FV3|FV3|M|SV3|Hog Rider',
		'Miner|Minion Horde|FV3|F|SV3|SV3|Surp|Inferno Tower',
		'Goblin Hut|Surp|SV3|F|SV2|M|FV3|Graveyard',
		'Si|FV3|M|Surp|Ciclar|Ciclar|SV3|SV3'
	],
	allowedCards = [],
	prevDeck = [],
	createDecks = new Worker('./src/js/render.js'),
	saveDecks = new Worker('./src/js/save.js'),
	deleteDecks = new Worker('./src/js/delete.js'),
	cards = document.querySelectorAll('.cardsContainer img'),
	info = document.querySelector('.infoContainer h2'),
	dbSection = document.querySelector('.builderSection'),
	aboutSection = document.querySelector('.aboutSection'),
	savedSection = document.querySelector('.savedSection'),
	savedDecks = document.querySelector('.savedSection section'),
	selectSection = document.querySelector('.selectSection'),
	configSection = document.querySelector('.configSection'),
	bestSection = document.querySelector('.bestSection'),
	playerSection = document.querySelector('.playerSection'),
	chestSection = document.querySelector('.chestSection'),
	bestDecks = document.querySelector('.bestSection section'),
	mediaComponent = document.querySelector('#elixirMedio'),
	ddArena = document.querySelector('#ddArena'),
	ddRarity = document.querySelector('#ddRarity'),
	ddType = document.querySelector('#ddType'),
	btnCopy = document.querySelector('#copy'),
	changeContainers = document.querySelectorAll('.navSection button'),
	chestContainer = document.querySelector('.chestContainer'),
	navSection = document.querySelector('.navSection'),
	cbConfigs = document.querySelectorAll('.configSection input'),
	cbDeckInteligente = document.querySelector('#smartDeck'),
	btnVoltar = document.querySelector('.btnVoltar'),
	chkConfig = document.querySelectorAll('.config input'),
	chkConfigText = document.querySelectorAll('.config label'),
	playerRing = document.querySelector('.player-ring'),
	chestRing = document.querySelector('.chest-ring'),
	bestRing = document.querySelector('.best-ring'),
	idUser = document.querySelector('#idUser'),
	idPlayer = document.querySelector('#idPlayer'),
	cntConfig = document.querySelector('.containerConfig'),
	btnMore = document.querySelector('.btnCenter'),
	arenas = [91, 91, 84, 77, 71, 63, 55, 47, 39, 31, 25, 19, 13],
	root = document.querySelector(':root'),
	minWidth = matchMedia('(min-width: 768px)'),
	maxWidth = matchMedia('(max-width: 767px)'),
	cont = [dbSection, playerSection, selectSection, savedSection, bestSection, chestSection, configSection, aboutSection],
	apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTk3MiwiaWRlbiI6IjMxOTkwNTQwNjg4NzY1NzQ4MiIsIm1kIjp7InVzZXJuYW1lIjoiTHVjYXMgTmFqYSIsImtleVZlcnNpb24iOjMsImRpc2NyaW1pbmF0b3IiOiI4MDE0In0sInRzIjoxNTQ1ODY3Mjg5ODIyfQ.NCSnyJtAk6kcZMpXxtLGfiSuii5NpVm43ls9QGxG0mc';

if (localStorage.getItem('ddArena') !== null)
	ddArena.selectedIndex = localStorage.getItem('ddArena');
if (localStorage.getItem('ddRarity') !== null)
	ddRarity.selectedIndex = localStorage.getItem('ddRarity');
if (localStorage.getItem('ddType') !== null)
	ddType.selectedIndex = localStorage.getItem('ddType');

chkConfig[0].onchange = () => {
	if (chkConfig[0].checked)
		for (let i = 1; i < cardsName.length; i++) {
			img[i - 1].removeAttribute('class');
			localStorage.setItem(cardsName[i], 'e')
		}
	else
		for (let i = 1; i < cardsName.length; i++) {
			img[i - 1].setAttribute('class', 'notAllowed');
			localStorage.setItem(cardsName[i], 'd')
		}
	changeDeck()
}

function changeAble(index, number, first, second) {
	if (chkConfig[index].checked)
		for (let i = 1; i < cardsName.length; i++) {
			if (cardsInformation[i].split('<br />')[number] === `${first}: ${second}`) {
				img[i - 1].removeAttribute('class');
				localStorage.setItem(cardsName[i], 'e')
			}
		}
	else
		for (let i = 1; i < cardsName.length; i++)
			if (cardsInformation[i].split('<br />')[number] === `${first}: ${second}`) {
				img[i - 1].setAttribute('class', 'notAllowed');
				localStorage.setItem(cardsName[i], 'd')
			}
	changeDeck()
}

const rarity = ['Common', 'Rare', 'Epic', 'Legendary', 'Troop', 'Spell', 'Construction'];
for (let i = 1; i < chkConfig.length; i++)
	chkConfig[i].onchange = () => {
		changeAble(i, i - 1 < 4 ? 0 : 1, i - 1 < 4 ? 'Rarity' : 'Type', rarity[i - 1]);
	}

function changeDeck() {
	const selectedArena = arenas[ddArena.selectedIndex];
	let all = 0,
		common = 0,
		rare = 0,
		epic = 0,
		legendary = 0,
		troop = 0,
		spell = 0,
		construction = 0,
		qtdAll = 0,
		qtdCommon = 0,
		qtdRare = 0,
		qtdEpic = 0,
		qtdLegendary = 0,
		qtdTroop = 0,
		qtdSpell = 0,
		qtdConstruction = 0;

	allowedCards.splice(0, allowedCards.length);
	for (let i = 1; i < selectedArena; i++) {
		if (ddRarity.selectedIndex === 0)
			allowedCards.push(i)
		else if (ddRarity.selectedIndex === 1 && cardsInformation[i].split('<br />')[0] === 'Rarity: Common')
			allowedCards.push(i)
		else if (ddRarity.selectedIndex === 2 && cardsInformation[i].split('<br />')[0] === 'Rarity: Rare')
			allowedCards.push(i)
		else if (ddRarity.selectedIndex === 3 && cardsInformation[i].split('<br />')[0] === 'Rarity: Epic')
			allowedCards.push(i)
		else if (ddRarity.selectedIndex === 4 && cardsInformation[i].split('<br />')[0] === 'Rarity: Legendary')
			allowedCards.push(i)
	}

	for (let i = 0; i < allowedCards.length; i++) {
		if (ddType.selectedIndex === 1 && cardsInformation[allowedCards[i]].split('<br />')[1] !== 'Type: Troop')
			allowedCards[i] = 0
		else if (ddType.selectedIndex === 2 && cardsInformation[allowedCards[i]].split('<br />')[1] !== 'Type: Construction')
			allowedCards[i] = 0
		else if (ddType.selectedIndex === 3 && cardsInformation[allowedCards[i]].split('<br />')[1] !== 'Type: Spell')
			allowedCards[i] = 0
	}

	for (let i = 0; i < allowedCards.length; i++)
		if (allowedCards[i] !== 0 && localStorage.getItem(cardsName[allowedCards[i]]) !== 'e')
			allowedCards[i] = 0

	for (let i = 1; i < cardsName.length; i++) {
		qtdAll++;
		if (cardsInformation[i].split('<br />')[0] === 'Rarity: Common')
			qtdCommon++
		if (cardsInformation[i].split('<br />')[0] === 'Rarity: Rare')
			qtdRare++
		if (cardsInformation[i].split('<br />')[0] === 'Rarity: Epic')
			qtdEpic++
		if (cardsInformation[i].split('<br />')[0] === 'Rarity: Legendary')
			qtdLegendary++
		if (cardsInformation[i].split('<br />')[1] === 'Type: Troop')
			qtdTroop++
		if (cardsInformation[i].split('<br />')[1] === 'Type: Spell')
			qtdSpell++
		if (cardsInformation[i].split('<br />')[1] === 'Type: Construction')
			qtdConstruction++
		if (localStorage.getItem(cardsName[i]) === 'e') {
			all++;
			if (cardsInformation[i].split('<br />')[0] === 'Rarity: Common')
				common++
			if (cardsInformation[i].split('<br />')[0] === 'Rarity: Rare')
				rare++
			if (cardsInformation[i].split('<br />')[0] === 'Rarity: Epic')
				epic++
			if (cardsInformation[i].split('<br />')[0] === 'Rarity: Legendary')
				legendary++
			if (cardsInformation[i].split('<br />')[1] === 'Type: Troop')
				troop++
			if (cardsInformation[i].split('<br />')[1] === 'Type: Spell')
				spell++
			if (cardsInformation[i].split('<br />')[1] === 'Type: Construction')
				construction++
		}
	}

	chkConfigText[0].textContent = `All Cards => ${all}`;
	chkConfigText[1].textContent = `All Common Cards => ${common}`;
	chkConfigText[2].textContent = `All Rare Cards => ${rare}`;
	chkConfigText[3].textContent = `All Epic Cards => ${epic}`;
	chkConfigText[4].textContent = `All Legendary Cards => ${legendary}`;
	chkConfigText[5].textContent = `All Troop Cards => ${troop}`;
	chkConfigText[6].textContent = `All Spell Cards => ${spell}`;
	chkConfigText[7].textContent = `All Construction Cards => ${construction}`;

	if (all === qtdAll)
		chkConfig[0].checked = true;
	else chkConfig[0].checked = false;
	if (common === qtdCommon)
		chkConfig[1].checked = true;
	else chkConfig[1].checked = false;
	if (rare === qtdRare)
		chkConfig[2].checked = true;
	else chkConfig[2].checked = false;
	if (epic === qtdEpic)
		chkConfig[3].checked = true;
	else chkConfig[3].checked = false;
	if (legendary === qtdLegendary)
		chkConfig[4].checked = true;
	else chkConfig[4].checked = false;
	if (troop === qtdTroop)
		chkConfig[5].checked = true;
	else chkConfig[5].checked = false;
	if (spell === qtdSpell)
		chkConfig[6].checked = true;
	else chkConfig[6].checked = false;
	if (construction === qtdConstruction)
		chkConfig[7].checked = true;
	else chkConfig[7].checked = false;

	document.querySelector('.selectSection h2').textContent = `Amount of allowed Cards: ${all}`;

	while (allowedCards.indexOf(0) !== -1)
		for (let i = 0; i < allowedCards.length; i++)
			if (allowedCards[i] === 0)
				allowedCards.splice(i, 1)
}

ddArena.onchange = () => {
	changeDeck();
	localStorage.setItem('ddArena', ddArena.selectedIndex)
}
ddRarity.onchange = () => {
	changeDeck();
	localStorage.setItem('ddRarity', ddRarity.selectedIndex)
}
ddType.onchange = () => {
	changeDeck();
	localStorage.setItem('ddType', ddType.selectedIndex)
}

cbDeckInteligente.onchange = () => {
	if (cbDeckInteligente.checked === true) {
		ddArena.disabled = true;
		ddRarity.disabled = true;
		ddType.disabled = true;
		if (prevDeck.length > 1) btnVoltar.hidden = false
	} else {
		ddArena.disabled = false;
		ddRarity.disabled = false;
		ddType.disabled = false;
		if (prevDeck.length > 1) btnVoltar.hidden = true
	}
}

function allowDrag(event) {
	event.preventDefault()
}

function getId(event) {
	event.stopPropagation();
	id = parseInt(event.target.id)
}

function pasteCard(event) {
	event.preventDefault();
	if (id !== -1) {
		let temp = currentDeck[id];
		currentDeck[id] = currentDeck[parseInt(event.target.id)];
		currentDeck[parseInt(event.target.id)] = temp;
		setDeck(currentDeck);
		id = -1
	}
}

function capitalize(string) {
	return string.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

function setDeck(deck = Array) {
	let media = 0.0;
	contentToCopy = 'deck=';
	for (let i = 0; i < deck.length; i++) {
		contentToCopy += cardsCode[deck[i]] + (i === deck.length - 1 ? '' : ';');
		cards[i].src = `./images/cards/${cardsName[deck[i]]}_opt-min.png`;
		cards[i].alt = cardsName[deck[i]];
		cards[i].title = capitalize(cardsName[deck[i]]);
		media += cardsElixir[deck[i]] / 8
	}

	mediaComponent.textContent = `Elixir average: ${media.toFixed(1)}`;

	for (let i = deck.length; i < 8; i++) {
		currentDeck.push(0);
		cards[i].src = './images/cards/no-card_opt-min.png';
		cards[i].alt = 'No Card';
		cards[i].title = 'No Card'
	}
}

function buildDeck() {
	currentDeck.splice(0, currentDeck.length);

	if (cbDeckInteligente.checked) {
		const typeSelected = tipos[parseInt(Math.random() * tipos.length)],
			group = [defesa, Sup, mainAttack, FV3, Si, F, FV2, C, SV2, SV3, M, towerAttack, Surp, Ciclar, CV3, FV4, CA],
			troop = ['D', 'S', 'AP', 'FV3', 'Si', 'F', 'FV2', 'C', 'SV2', 'SV3', 'M', 'AT', 'Surp', 'Ciclar', 'CV3', 'FV4', 'CA'];

		for (let i = 0; i < typeSelected.split('|').length; i++) {
			for (let j = 0; j < troop.length; j++)
				if (typeSelected.split('|')[i] === troop[j]) {
					let newTroop = group[j][parseInt(Math.random() * group[j].length)];
					while (currentDeck.indexOf(newTroop) !== -1)
						newTroop = group[j][parseInt(Math.random() * group[j].length)]

					currentDeck.push(newTroop);
					break
				} else if (j === troop.length - 1)
				currentDeck.push(typeSelected.split('|')[i])
		}

		for (let i = 0; i < currentDeck.length; i++)
			for (let j = 1; j < cardsInformation.length; j++)
				if (currentDeck[i] === capitalize(cardsName[j]))
					currentDeck[i] = j

		randomizeDeck();

		prevDeck.push(new Array());
		for (let i = 0; i < currentDeck.length; i++)
			prevDeck[prevDeck.length - 1].push(currentDeck[i])

		if (prevDeck.length > 100)
			prevDeck.shift()
		else if (prevDeck.length > 1)
			btnVoltar.hidden = false
	} else {
		if (prevDeck.length === 1) prevDeck.pop()
		let random = allowedCards[parseInt(Math.random() * allowedCards.length)];

		for (let i = 0; i < (allowedCards.length < 8 ? allowedCards.length : cards.length); i++) {
			while (currentDeck.indexOf(random) !== -1)
				random = allowedCards[parseInt(Math.random() * allowedCards.length)];

			currentDeck.push(random)
		}
	}

	setDeck(currentDeck)
}

function switchContainer(container = dbSection) {
	for (let i = 0; i < cont.length; i++)
		if (cont[i] === container) {
			changeContainers[i].setAttribute('id', 'selectedButton');
			changeContainers[i].style.color = 'var(--textColor)';
			cont[i].style.display = 'block';
			selectedContainer = i
		} else {
			changeContainers[i].removeAttribute('id');
			changeContainers[i].style.color = 'var(--buttonTextColor)';
			cont[i].style.display = 'none'
		}
}

function combination() {
	const i = allowedCards.length,
		b = allowedCards.length < 8 ? allowedCards : 8;
	let result = 0,
		iFactorial = 1,
		bFactorial = 1;

	for (let f = i; f > (i - b); f--)
		iFactorial *= f

	for (let k = b; k > 0; k--)
		bFactorial *= k

	result = iFactorial / bFactorial;

	const formatter = Intl.NumberFormat('en-US');
	return allowedCards.length === 0 ? 0 : formatter.format(result)
}

function infoCards() {
	alert(
		(window.innerWidth < 1024 ? 'To change any Card, simply press and hold a Card.\nTo remove the current Deck, simply press and hold the Paste Deck button.\nTo shuffle the current Deck, simply press and hold the Build Deck button.\nThe function Previous Deck is only valid for smart Decks.\nTo make the site link a direct link to Deck, simply press and hold the Open Deck button.' : 'To change any Card, simply press right click on Card.\nTo remove current Deck, simply press right click on Paste Deck button.\nTo shuffle current Deck, simply press right click on Build Deck button.\nTo make the site link to direct Deck link, simply press right click on Build Deck button.') +
		(cbDeckInteligente.checked ? '\nCard selector, dropdowns of arenas, rarities and types only works when smart Deck are deactived.' : `\nAmount of Cards to generate: ${allowedCards.length}\nPossible Deck combinations: ${combination()}`)
	)
}

function copyDeck() {
	if (prevDeck.length > 0)
		prevDeck.pop()
	if (innerWidth < 1024)
		if (!`clashroyale://copyDeck?${contentToCopy}`.split('deck=')[1].split(';').some(item => item === '0')) {
			if (confirm('Do you wanna open this Deck on Clash Royale game?'))
				openDeck(`clashroyale://copyDeck?${contentToCopy}`, '_self')
		} else alert('Open links with missing Cards is not allowed')
	else openDeck(`https://link.clashroyale.com/deck/pt?${contentToCopy}`)
}

function openDeck(link) {
	if (!link.split('deck=')[1].split(';').some(item => item === '0'))
		open(link)
	else alert('Open links with missing Cards is not allowed')
}

function openLink(link) {
	open(link)
}

function copyDeckSec() {
	if (confirm('Do you wanna create a shareable link?'))
		location.search = `deck=${contentToCopy.split('deck=')[1]}`
}

function copyDeckPhone(deck) {
	if (confirm('Do you wanna create a shareable link?'))
		location.search = `deck=${deck}`
}

function copyDeckSaved(deck) {
	if (confirm('Do you wanna open this Deck on Clash Royale game?'))
		openDeck(`clashroyale://copyDeck?deck=${deck}`)
}

function paste(linkDeck = String) {
	const backup = currentDeck.map(card => card);

	if (linkDeck !== null && linkDeck.trim().indexOf(' ') === -1 && linkDeck.indexOf(';') !== -1) {
		try {
			if (linkDeck.match(/&id=/))
				linkDeck = linkDeck.substring(0, linkDeck.lastIndexOf('&'))
			if (linkDeck.match(/\?deck=/)) {
				linkDeck = linkDeck.split('?deck=');
				linkDeck.shift();
				linkDeck = linkDeck.join().split(';')
			} else linkDeck = linkDeck.split(';')

			for (let i = 0; i < linkDeck.length; i++)
				for (let j = 0; j < cardsCode.length; j++)
					if (parseInt(linkDeck[i]) === cardsCode[j])
						linkDeck[i] = j

			for (let i = linkDeck; i < 8; i++)
				linkDeck.push(0);

			currentDeck = linkDeck.map(card => parseInt(card));
			setDeck(currentDeck)
		} catch (err) {
			currentDeck = backup.map(card => card);
			setDeck(currentDeck);
			alert('Invalid Deck link!')
		}
	}
}

function pasteDeck(content = null) {
	if (content === null) {
		let linkDeck = prompt('Paste a Deck link below\nE.g: https://link.clashroyale.com/deck/en?deck=26000018;28000009;26000003;28000008...');
		paste(linkDeck)
	} else paste(content)
}

function formatText(text) {
	const alpha = 'aaaaeeeeiiiioooouuuu',
		accentuation = 'áâàãéêèẽíìîĩóôòõúûùũ';

	text = text.replace(/[!@#$%&*()-=_+'"[\]{},.<>;:/?^~]/g, '');

	for (let i = 0; i < alpha.length; i++)
		while (text.indexOf(accentuation[i]) !== -1)
			text = text.replace(accentuation[i], alpha[i])

	return text.trim().toLowerCase()
}

function previousDeck() {
	for (let i = 0; i < currentDeck.length; i++)
		currentDeck[i] = prevDeck[prevDeck.length - 2][i]

	prevDeck.pop();

	setDeck(currentDeck);
	if (prevDeck.length <= 1)
		btnVoltar.hidden = true
}

function randomizeDeck() {
	if (currentDeck.indexOf(0) === -1) {
		const newDeck = [];
		let num = currentDeck[parseInt(Math.random() * currentDeck.length)]
		for (let i = 0; i < currentDeck.length; i++) {
			while (newDeck.indexOf(num) !== -1)
				num = currentDeck[parseInt(Math.random() * currentDeck.length)]

			newDeck.push(num)
		}

		for (let i = 0; i < newDeck.length; i++)
			currentDeck[i] = newDeck[i]

		setDeck(currentDeck)
	} else alert('Shuffling Deck with missing Cards is not allowed.')
}

function showSections(event) {
	event.stopPropagation();
	if (navSection.style.width !== '100%') {
		navSection.style.overflowY = 'auto';
		navSection.style.width = '100%';
		navSection.style.height = '100%';
		if (selectedContainer === 0)
			dbSection.style.display = 'none'
		else if (selectedContainer === 1)
			playerSection.style.display = 'none'
		else if (selectedContainer === 2)
			selectSection.style.display = 'none'
		else if (selectedContainer === 3)
			savedSection.style.display = 'none'
		else if (selectedContainer === 4)
			bestSection.style.display = 'none'
		else if (selectedContainer === 5)
			chestSection.style.display = 'none'
		else if (selectedContainer === 6)
			configSection.style.display = 'none'
		else
			aboutSection.style.display = 'none'
	} else {
		navSection.style.overflowY = 'hidden';
		navSection.style.width = '40px';
		navSection.style.height = '35px';
		if (selectedContainer === 0)
			dbSection.style.display = 'block'
		else if (selectedContainer === 1)
			playerSection.style.display = 'block'
		else if (selectedContainer === 2)
			selectSection.style.display = 'block'
		else if (selectedContainer === 3)
			savedSection.style.display = 'block'
		else if (selectedContainer === 4)
			bestSection.style.display = 'block'
		else if (selectedContainer === 5)
			chestSection.style.display = 'block'
		else if (selectedContainer === 6)
			configSection.style.display = 'block'
		else
			aboutSection.style.display = 'block'
	}
}

function closeNav(event) {
	event.stopPropagation();
	if (navSection.style.width === '100%') {
		navSection.style.overflowY = 'hidden';
		navSection.style.width = '40px';
		navSection.style.height = '35px'
	}
}

async function downDecks() {
	if (response === null) {
		bestRing.style.display = 'block';
		response = await fetch('https://docs.royaleapi.com/json/popular_decks.json').then(data => data.json()).catch(() => alert('An error occurred, please come back later.'))
	}

	for (let i = maxDown; i < maxDown + (maxDown + 10 > response.length ? response.length - maxDown : 10); i++)
		html += `
				<section class="cardsContainerS">
					<div><img src="./images/cards/${response[i].cards[0].key}_opt-min.png" alt="${response[i].cards[0].key}" title="${capitalize(response[i].cards[0].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[0].id)})"/></div>
					<div><img src="./images/cards/${response[i].cards[1].key}_opt-min.png" alt="${response[i].cards[1].key}" title="${capitalize(response[i].cards[1].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[1].id)})"/></div>
					<div><img src="./images/cards/${response[i].cards[2].key}_opt-min.png" alt="${response[i].cards[2].key}" title="${capitalize(response[i].cards[2].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[2].id)})"/></div>
					<div><img src="./images/cards/${response[i].cards[3].key}_opt-min.png" alt="${response[i].cards[3].key}" title="${capitalize(response[i].cards[3].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[3].id)})"/></div>
					<div><img src="./images/cards/${response[i].cards[4].key}_opt-min.png" alt="${response[i].cards[4].key}" title="${capitalize(response[i].cards[4].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[4].id)})"/></div>
					<div><img src="./images/cards/${response[i].cards[5].key}_opt-min.png" alt="${response[i].cards[5].key}" title="${capitalize(response[i].cards[5].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[5].id)})"/></div>
					<div><img src="./images/cards/${response[i].cards[6].key}_opt-min.png" alt="${response[i].cards[6].key}" title="${capitalize(response[i].cards[6].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[6].id)})"/></div>
					<div><img src="./images/cards/${response[i].cards[7].key}_opt-min.png" alt="${response[i].cards[7].key}" title="${capitalize(response[i].cards[7].key)}" onclick="showInfo(${cardsCode.indexOf(response[i].cards[7].id)})"/></div>
				</section>

				<h1 class="elixir">Elixir average: ${((response[i].cards[0].elixir + response[i].cards[1].elixir + response[i].cards[2].elixir + response[i].cards[3].elixir + response[i].cards[4].elixir + response[i].cards[5].elixir + response[i].cards[6].elixir + response[i].cards[7].elixir) / 8).toFixed(1)}</h1>

				<section class="configContainerS" oncontextmenu="(event => event.preventDefault())(event)">
					<button class="btnCopiarS" title="Open Deck" oncontextmenu="copyDeckPhone('${response[i].cards.map(card => card.id).join(';')}')" ${innerWidth < 1024 ? `onclick="copyDeckSaved('${response[i].decklink.split('?deck=')[1]}')"` : `onclick="openDeck('${response[i].decklink}')"`}>Open Deck</button>
					<button class="btnApagar" title="Save Deck" onclick="saveDeck([${cardsCode.indexOf(response[i].cards[0].id)},${cardsCode.indexOf(response[i].cards[1].id)},${cardsCode.indexOf(response[i].cards[2].id)},${cardsCode.indexOf(response[i].cards[3].id)},${cardsCode.indexOf(response[i].cards[4].id)},${cardsCode.indexOf(response[i].cards[5].id)},${cardsCode.indexOf(response[i].cards[6].id)},${cardsCode.indexOf(response[i].cards[7].id)}])">Save Deck</button>
					<button class="btnColarS" title="Paste Deck" onclick="pasteDeck('${response[i].decklink}')">Paste Deck</button>
				</section>
			`;

	bestDecks.innerHTML = html;
	document.querySelector('.bestSection .upArrow').style.display = 'block';
	maxDown += (maxDown + 10 > response.length ? response.length - maxDown : 10);
	if ((maxDown + 10 > response.length ? response.length - maxDown : 10) === 0)
		btnMore.style.display = 'none'
	else btnMore.textContent = `Show more ${(maxDown + 10 > response.length ? response.length - maxDown : 10)} Decks`;
	document.querySelector('.bestSection h2').innerText = `Amount of best Decks: ${maxDown}`

	bestRing.style.display = 'none'
}

function toTop() {
	let scrollYN = scrollY;
	const interval = setInterval(() => {
		if (scrollYN >= 100)
			scrollTo(0, scrollYN -= (100 * (scrollY / 1000)))
		else {
			scrollTo(0, 0);
			clearInterval(interval)
		}
	}, 1)
}

(function updateCards() {
	let content = '';

	for (let i = 1; i < cardsInformation.length; i++)
		if (localStorage.getItem(cardsName[i]) === null)
			localStorage.setItem(cardsName[i], 'e')

	for (let i = 1; i < cardsInformation.length; i++) {
		content += `
			<section class="cardContainer">
				<img class="${localStorage.getItem(cardsName[i]) === 'e' ? '' : 'notAllowed'}" src="./images/cards/${cardsName[i]}_opt-min.png" alt="${cardsName[i]}" title="${capitalize(cardsName[i])}" />				
			</section>
		`;
	}
	selectSection.innerHTML += `
		${content}
		<img title="To top" onclick="toTop()" src="./images/uparrow.png" class="upArrow"/>
	`;

	btn = document.querySelectorAll('.selectSection div button');
	img = document.querySelectorAll('.selectSection img:not(#configCards):not(.upArrow)');

	btn[0].addEventListener('click', () => {
		for (let i = 1; i < cardsName.length; i++)
			if (localStorage.getItem(cardsName[i]) === 'd') {
				localStorage.setItem(cardsName[i], 'e');
				img[i - 1].removeAttribute('class')
			}
		changeDeck()
	});

	btn[1].addEventListener('click', () => {
		for (let i = 1; i < cardsName.length; i++)
			if (localStorage.getItem(cardsName[i]) === 'e') {
				localStorage.setItem(cardsName[i], 'd');
				img[i - 1].setAttribute('class', 'notAllowed');
			}
		changeDeck()
	});

	for (let i = 0; i < img.length; i++)
		img[i].addEventListener('click', function () {
			if (img[i].className === 'notAllowed') {
				img[i].removeAttribute('class');
				localStorage.setItem(cardsName[i + 1], 'e')
			} else {
				img[i].setAttribute('class', 'notAllowed');
				localStorage.setItem(cardsName[i + 1], 'd')
			}
			changeDeck()
		})
})();

createDecks.onmessage = e => {
	savedDecks.innerHTML = `
		${e.data.html}
		${e.data.amount > 5 ? '<img style="margin-top: 5px" title="To top" onclick="toTop()" src="./images/uparrow.png" class="upArrow"/>' : ''}
	`;
	document.querySelector('.savedSection h2').innerText = `Amount of saved Decks: ${JSON.parse(localStorage.getItem('decks')).deckList.length}`
}

saveDecks.onmessage = e => {
	if (!e.data.exists) {
		localStorage.setItem('decks', e.data.deck);
		render();
	} else alert('Deck is already saved.')
}

deleteDecks.onmessage = e => {
	if (e.data === 'empty') localStorage.removeItem('decks');
	else localStorage.setItem('decks', `{"deckList": ${e.data}}`);
	render()
}

function render() {
	if (localStorage.getItem('decks') !== null && JSON.parse(localStorage.getItem('decks')).deckList.length > 0) {
		createDecks.postMessage({
			'decks': JSON.parse(localStorage.getItem('decks')).deckList,
			'cardsName': cardsName,
			'cardsElixir': cardsElixir,
			'cardsCode': cardsCode,
			'screenSize': innerWidth
		});
	} else savedDecks.innerHTML = '<h2 class="noneDeck">There isn\'t Deck saved</h2><button title="Save Decks now!" onclick="closeNav(event); switchContainer(); if (history.state !== 0 && history.state !== null) history.pushState(0, \'changed\')" class="btnCenter">Save Decks now!</button>'
}

function saveDeck(deck = currentDeck) {
	let empty = deck.indexOf(0) === -1 ? false : true,
		max = (localStorage.getItem('decks') !== null && JSON.parse(localStorage.getItem('decks')).deckList.length > 99) ? true : false

	if (!empty && !max)
		saveDecks.postMessage({
			"decks": JSON.parse(localStorage.getItem('decks')),
			"currentDeck": deck
		})
	else if (empty) alert('Saving Deck with missing cards is not allowed.')
	else alert('Saving more than 100 Decks is not allowed.')
}

function deleteDeck(deck = Array) {
	if (confirm('Do you wanna remove this Deck?'))
		deleteDecks.postMessage({
			"deckList": JSON.parse(localStorage.getItem('decks')).deckList,
			"deck": deck
		})
}

function deleteAll() {
	if (confirm('Do you wanna remove all saved Decks?')) {
		localStorage.removeItem('decks');
		render()
	}
}

function deleteAllBest() {
	if (confirm('Do you wanna remove all best Decks?')) {
		response = null;
		html = '<button title="Remove all" class="btnRemoveAll" onclick="deleteAllBest()">Remove all Decks</button><h2 class="elixir"></h2>';
		bestDecks.innerHTML = '<h2 class="noneDeck">There isn\'t Deck here</h2>';
		document.querySelector('.bestSection .upArrow').style.display = 'none';
		btnMore.style.display = 'block';
		btnMore.textContent = 'Show more 10 Decks';
		maxDown = 0
	}
}

function showInfo(index = Number) {
	const arenaName = ['Training Camp', 'Goblin Stadium', 'Bone Pit', 'Barbarian Bowl', 'P.E.K.K.A\'s Playhouse', 'Spell Valley', 'Builder\'s Workshop', 'Royal Arena', 'Frozen Peak', 'Jungle Arena', 'Hog Mountain', 'Electro Valley'];
	const arena = (() => {
		for (let j = 0; j < arenas.length; j++)
			if (index < (j === 0 ? 13 : arenas[arenas.length - j])) return j
	})();
	info.innerHTML = `<ins>${capitalize(cardsName[index])}</ins><br />${cardsInformation[index]}<br />Elixir cost: ${cardsElixir[index]}<br />Arena: ${arena === 0 ? arenaName[arena] : `${arenaName[arena]} (${arena})`}`
}

function showChests() {
	const button = document.querySelector('#showChests'),
		settings = {
			async: true,
			crossDomain: true,
			method: 'GET',
			headers: {
				auth: apiKey
			}
		};
	chestRing.style.display = 'block';
	button.disabled = true;
	chestContainer.innerHTML = '';

	fetch(`https://api.royaleapi.com/player/${idUser.value.trim().replace('#', '')}/chests`, settings).then(data => data.json()).then(response => {
		if (localStorage.getItem('id') === null)
			localStorage.setItem('id', idUser.value.trim());

		button.textContent = 'Refresh';
		button.setAttribute('title', 'Refresh next Chests');

		let html = `${userName === null ? '' : idUser.value.trim().replace('#', '') === idPlayer.value.trim().replace('#', '') ? `<h2 class="elixir">Next Chests of ${userName}</h2>` : ''}`;
		const chests = [];

		for (let i = 0; i < response.upcoming.length; i++)
			html += `
				<section class="chestInfo">
					<img class="notPointer" title="${capitalize(response.upcoming[i])} Chest" alt="${response.upcoming[i]}" src="../images/chests/${response.upcoming[i]}.png" />
					<p>${i === 0 ? 'Next' : '+' + (i)}</p>
				</section>
			`

		for (let chest in response)
			if (chest !== 'upcoming')
				chests.push([chest, response[chest]])

		chests.sort((a, b) => a[1] - b[1]);

		for (let i = 0; i < chests.length; i++)
			if (!(chests[i][1] < 9))
				html += `
				<div class="chestInfo">
					<img class="notPointer" title="${capitalize(chests[i][0])} Chest" alt="${chests[i][0]}" src="../images/chests/${chests[i][0]}.png" />
					<p>+${chests[i][1]}</p>
				</div>
			`

		chestContainer.innerHTML = html;
		chestRing.style.display = 'none';
		button.disabled = false
	}).catch(error => {
		console.log(error);
		button.disabled = false;
		button.textContent = 'Show';
		button.setAttribute('title', 'Show next Chests');
		chestRing.style.display = 'none'
	});
}

function login(id = idPlayer.value.trim().replace('#', '')) {
	const button = document.querySelector('#showPlayer'),
		settings = {
			async: true,
			crossDomain: true,
			method: 'GET',
			headers: {
				auth: apiKey
			}
		};
	button.disabled = true;
	document.querySelector('.playerContainer').innerHTML = '';
	playerRing.style.display = 'block';

	fetch(`https://api.royaleapi.com/player/${id}`, settings).then(data => data.json()).then(response => {
		playerInfo = response.cards;
		userName = response.name;
		button.textContent = 'Refresh';
		button.setAttribute('title', 'Refresh login');
		const html = `
			<h2 class="elixir">Current Deck</h2>
			<section class="cardsContainerS">
				<div><img src="./images/cards/${response.currentDeck[0].key}_opt-min.png" alt="${response.currentDeck[0].key}" title="${capitalize(response.currentDeck[0].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[0].id)})"/></div>
				<div><img src="./images/cards/${response.currentDeck[1].key}_opt-min.png" alt="${response.currentDeck[1].key}" title="${capitalize(response.currentDeck[1].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[1].id)})"/></div>
				<div><img src="./images/cards/${response.currentDeck[2].key}_opt-min.png" alt="${response.currentDeck[2].key}" title="${capitalize(response.currentDeck[2].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[2].id)})"/></div>
				<div><img src="./images/cards/${response.currentDeck[3].key}_opt-min.png" alt="${response.currentDeck[3].key}" title="${capitalize(response.currentDeck[3].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[3].id)})"/></div>
				<div><img src="./images/cards/${response.currentDeck[4].key}_opt-min.png" alt="${response.currentDeck[4].key}" title="${capitalize(response.currentDeck[4].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[4].id)})"/></div>
				<div><img src="./images/cards/${response.currentDeck[5].key}_opt-min.png" alt="${response.currentDeck[5].key}" title="${capitalize(response.currentDeck[5].key)}" onclick="showInfo(${cardsCode.indexOf(response.currentDeck[5].id)})"/></div>
				<div><img src="./images/cards/${response.currentDeck[6] === undefined ? 'no-card' : response.currentDeck[6].key}_opt-min.png" alt="${response.currentDeck[6] === undefined ? 'No Card' : response.currentDeck[6].key}" title="${response.currentDeck[6] === undefined ? 'No Card' : capitalize(response.currentDeck[6].key)}" onclick="if(${response.currentDeck[6] === undefined}) info.innerText = 'There isn\'t Card selected'; else showInfo(cardsCode.indexOf(${response.currentDeck[6] === undefined ? 0 : response.currentDeck[7].id}))"/></div>
				<div><img src="./images/cards/${response.currentDeck[7] === undefined ? 'no-card' : response.currentDeck[7].key}_opt-min.png" alt="${response.currentDeck[7] === undefined ? 'No Card' : response.currentDeck[7].key}" title="${response.currentDeck[7] === undefined ? 'No Card' : capitalize(response.currentDeck[7].key)}" onclick="if(${response.currentDeck[7] === undefined}) info.innerText = 'There isn\'t Card selected'; else showInfo(cardsCode.indexOf(${response.currentDeck[7] === undefined ? 0 : response.currentDeck[7].id}))"/></div>
			</section>

			<h1 class="elixir">Elixir average: ${((response.currentDeck[0].elixir + response.currentDeck[1].elixir + response.currentDeck[2].elixir + response.currentDeck[3].elixir + response.currentDeck[4].elixir + response.currentDeck[5].elixir + (response.currentDeck[6] === undefined ? 0 : response.currentDeck[6].elixir) + (response.currentDeck[6] === undefined ? 0 : response.currentDeck[7].elixir)) / 8).toFixed(1)}</h1>

			<section class="configContainerS" oncontextmenu="(event => event.preventDefault())(event)">
				<button class="btnCopiarS" title="Open Deck" ${innerWidth < 1024 ? `onclick="copyDeckSaved('${response.deckLink.split('deck=')[1]}')"` : `onclick="openDeck('https://link.clashroyale.com/deck/pt?deck=${response.deckLink.split('deck=')[1]}')"`} oncontextmenu="copyDeckPhone('${response.deckLink.split('deck=')[1]}')">Open Deck</button>
				<button class="btnApagar" title="Save Deck" onclick="saveDeck([${response.deckLink.split('deck=')[1].split(';').map(id => cardsCode.indexOf(parseInt(id))).join(',')}])">Save Deck</button>
				<button class="btnColarS" title="Paste Deck" onclick="pasteDeck('https://link.clashroyale.com/deck/pt?deck=${response.deckLink.split('deck=')[1]}')">Paste Deck</button>
			</section>

			<section class="information">
				<h2 class="elixir">${userName !== '' ? userName[response.name.length - 1] === 's' ? `${capitalize(userName)} i` : `${capitalize(userName)}'s i` : 'I'}nformation</h2>
				<table>
					<tr><th>Trophies</th></tr>
					<tr><td>${response.trophies}</td></tr>
				</table>
				${response.rank === null ? '' : `
					<table>
						<tr><th>World rank</th></tr>
						<tr><td>${response.rank}</td></tr>
					</table>`
				}
				<table>
					<tr><th>Max trophies</th></tr>
					<tr><td>${response.stats.maxTrophies}</td></tr>
				</table>
				<table>
					<tr><th>Arena name</th></tr>
					<tr><td>${response.arena.name}</td></tr>
				</table>
				<table>
					<tr><th>Arena</th></tr>
					<tr><td>${response.arena.arena}</td></tr>
				</table>
				${response.clan === null ? '' : `
					<table>
						<tr><th>Clan</th></tr>
						<tr><td>${capitalize(response.clan.name)}</td></tr>
					</table>
					<table>
						<tr><th>Role</th></tr>
						<tr><td>${capitalize(response.clan.role)}</td></tr>
					</table>
					<table>
						<tr><th>Donation</th></tr>
						<tr><td>${response.clan.donations}</td></tr>
					</table>
					<table>
						<tr><th>Received donations</th></tr>
						<tr><td>${response.clan.donationsReceived}</td></tr>
					</table>
					<table>
						<tr><th>Total donation</th></tr>
						<tr><td>${response.stats.totalDonations}</td></tr>
					</table>
				`
				}	
				${response.stats.favoriteCard === null ? '' : `
					<table>
						<tr><th>Favorite Card</th></tr>
						<tr><td>${response.stats.favoriteCard.name}</td></tr>
					</table>`
				}		
				<table>
					<tr><th>Level</th></tr>
					<tr><td>${response.stats.level}</td></tr>
				</table>
				<table>
					<tr><th>Game matches</th></tr>
					<tr><td>${response.games.total}</td></tr>
				</table>		
			</section>
		`;

		document.querySelector('.playerContainer').innerHTML = html;
		button.disabled = false;
		idUser.value = id;
		playerRing.style.display = 'none';
		localStorage.setItem('id', id);
		showChests()
	}).catch(error => {
		console.log(error);
		button.textContent = 'Show';
		button.setAttribute('title', 'Show');
		button.disabled = false;
		playerRing.style.display = 'none'
	})
}

function basedCards() {
	if (localStorage.getItem('id') !== null) {
		if (playerInfo !== null) {
			try {
				if (playerInfo.length === cardsName.length - 1) {
					for (let i = 0; i < img.length; i++) {
						img[i].removeAttribute('class');
						localStorage.setItem(cardsName[i + 1], 'e')
					}
				} else {
					const cards = [];
					for (let card in playerInfo)
						cards.push(playerInfo[card].key)
					for (let i = 1; i < cardsName.length; i++)
						if (cards.indexOf(cardsName[i]) === -1) {
							img[i - 1].setAttribute('class', 'notAllowed');
							localStorage.setItem(cardsName[i], 'd')
						} else {
							img[i - 1].removeAttribute('class');
							localStorage.setItem(cardsName[i], 'e')
						}
				}
			} catch (err) {
				basedCards()
			}
			changeDeck()
		}
	} else {
		showConfig();
		closeNav(event);
		switchContainer(playerSection);
		idPlayer.select();
		history.pushState(1, 'changed')
	}
}

for (let i = 1; i < cardsName.length; i++)
	cardName += `<option value="${capitalize(cardsName[i])}"></option>`

document.querySelector('#cardsName').innerHTML = cardName;
document.querySelector('#searchCard').setAttribute('list', 'cardsName');

document.querySelector('#searchCard').onkeypress = (e) => {
	if (e.which === 13) {
		const value = formatText(document.querySelector('#searchCard').value.trim().toLowerCase());
		for (let i = 1; i < cardsName.length; i++)
			if (value === cardsName[i].split('-').map(name => name).join(' ').toLowerCase() || value === formatText(cardPtName[i].toLowerCase())) {
				document.querySelector('#searchCard').value = '';
				let currentY = 0;
				const y = img[i - 1].parentElement.offsetTop + (innerWidth < 768 ? 33 : -1),
					interval = setInterval(() => {
						currentY = scrollY;
						if (scrollY < y)
							scrollTo(0, scrollY + 25)
						else {
							scrollTo(0, y);
							clearInterval(interval)
						}
						if (currentY === scrollY)
							clearInterval(interval)
					}, 1);
				break
			}
	}
}

function darkTheme() {
	root.style.setProperty('--backColor', 'rgb(42, 44, 51)');
	root.style.setProperty('--primaryColor', 'rgb(35, 35, 35)');
	root.style.setProperty('--secondaryColor', 'rgb(25, 25, 25)');
	root.style.setProperty('--thidColor', 'rgb(20, 20, 20)');
	root.style.setProperty('--buttonTextColor', 'rgb(237, 237, 237)');
	root.style.setProperty('--borderColor', 'var(--buttonTextColor)');
	root.style.setProperty('--textColor', 'rgb(237, 237, 237)');
	localStorage.setItem('theme', 'dark')
}

function blueTheme() {
	root.style.setProperty('--backColor', '#343e51');
	root.style.setProperty('--primaryColor', '#242b38');
	root.style.setProperty('--secondaryColor', '#1a1f29');
	root.style.setProperty('--thidColor', '#13161d');
	root.style.setProperty('--buttonTextColor', 'white');
	root.style.setProperty('--borderColor', 'white');
	root.style.setProperty('--textColor', 'white');
	localStorage.removeItem('theme')
}

if (localStorage.getItem('theme') === 'dark') {
	darkTheme();
	cbConfigs[0].checked = true
} else {
	cbConfigs[1].checked = true;
	blueTheme()
}

for (let i = 0; i < cards.length; i++) {
	cards[i].addEventListener('contextmenu', () => {
		let name = prompt('Type Card name below\nE.g: Mini P.E.K.K.A, mini p.e.k.k.a or mini pekka');
		if (name !== null && name !== '' && name !== '0') {
			if (!Number.isInteger(parseInt(name))) {
				name = formatText(name);
				for (let j = 1; j < cardsInformation.length; j++)
					if (currentDeck.indexOf(j) === -1 && (name === cardsName[j].replace('-', ' ').toLowerCase() || name === formatText(cardPtName[j]))) {
						currentDeck[i] = j;
						setDeck(currentDeck);
						break
					}
			} else {
				name = parseInt(name);
				if (currentDeck.indexOf(name) === -1 && name > 0 && name < cardsName.length) {
					currentDeck[i] = name
				} else if (currentDeck.indexOf(cardsCode.indexOf(name)) === -1)
					currentDeck[i] = cardsCode.indexOf(name) === -1 ? currentDeck[i] : cardsCode.indexOf(name)

				setDeck(currentDeck)
			}
		}
	});
	cards[i].addEventListener('click', () => {
		if (currentDeck[i] !== 0) showInfo(currentDeck[i])
		else info.innerText = 'There isn\'t Card selected'
	});
}

selectSection.oncontextmenu = event => {
	event.preventDefault();
	showConfig()
}

cbConfigs[0].onchange = darkTheme;
cbConfigs[1].onchange = blueTheme;

idUser.onkeydown = e => {
	if (e.which === 13) showChests()
}
idUser.onkeyup = () => {
	idUser.value = idUser.value.toUpperCase()
}
idPlayer.onkeydown = e => {
	if (e.which === 13) login()
}
idPlayer.onkeyup = () => {
	idPlayer.value = idPlayer.value.toUpperCase()
}

if (localStorage.getItem('id') !== null) {
	login(localStorage.getItem('id').toUpperCase());
	idPlayer.value = localStorage.getItem('id').toUpperCase()
}

document.onkeydown = e => {
	if (dbSection.style.display === 'block') {
		if (e.which === 66)
			buildDeck()
		else if (e.which === 83)
			saveDeck()
		else if (e.ctrlKey && e.which === 86)
			pasteDeck()
	} else if (cntConfig.style.display === 'block' && e.which === 27)
		showConfig()
	else if (navSection.style.width === '100%' && e.which === 27)
		showSections(event)
	else if (selectSection.style.display === 'block' && e.ctrlKey && e.which === 70) {
		e.preventDefault();
		toTop();
		document.querySelector('#searchCard').select()
	}
}

selectSection.onclick = event => {
	if (cntConfig.style.display === 'block')
		showConfig()
}

function matche(xvar = minWidth) {
	if (xvar.matches) {
		if (navSection.style.width === '100%') {
			if (selectedContainer === 0)
				dbSection.style.display = 'block'
			else if (selectedContainer === 1)
				playerSection.style.display = 'block'
			else if (selectedContainer === 2)
				selectSection.style.display = 'block'
			else if (selectedContainer === 3)
				savedSection.style.display = 'block'
			else if (selectedContainer === 4)
				bestSection.style.display = 'block'
			else if (selectedContainer === 5)
				chestSection.style.display = 'block'
			else if (selectedContainer === 6)
				configSection.style.display = 'block'
			else
				aboutSection.style.display = 'block'
		}
		navSection.style.width = '175px';
		navSection.style.transition = 'all 0s';
		navSection.style.height = '100%';
		navSection.style.overflowY = 'auto';
		navSection.style.borderRight = '1px solid var(--borderColor)'
	}
}

function matche2(yvar = maxWidth) {
	if (yvar.matches) {
		navSection.style.width = '40px';
		navSection.style.height = '35px';
		navSection.style.overflowY = 'hidden';
		navSection.style.transition = 'all .2s';
		navSection.style.borderRight = 'none';
	}
}

window.onload = function () {
	matche();
	minWidth.addListener(matche);
	matche2();
	maxWidth.addListener(matche2);
	navSection.style.display = 'block';
	dbSection.style.display = 'block';
	document.querySelector('.lds-ring').style.display = 'none';
	if (location.search.startsWith('?deck='))
		paste(location.search.substring(6, location.search.length))
}

function showConfig(event) {
	if (event !== undefined)
		event.stopPropagation();
	if (cntConfig.style.display === 'block') {
		document.querySelector('body').style.overflowY = 'auto';
		cntConfig.style.display = 'none'
	} else {
		document.querySelector('body').style.overflowY = 'hidden';
		cntConfig.style.display = 'block';
		scrollTo(0, 0)
	}
}

window.onpopstate = function () {
	if (cntConfig.style.display === 'block')
		showConfig()
	if (navSection.style.width === '100%') {
		navSection.style.overflowY = 'hidden';
		navSection.style.width = '40px';
		navSection.style.height = '35px'
	}
	switchContainer(cont[history.state])
}

render();
changeDeck();
setDeck(currentDeck);