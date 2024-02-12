async function catchPoke() {
    try{

    const responsePoke = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=9');
    const data = await responsePoke.json();

    const bulbasaurData = data.results.find(pokemon => pokemon.name === 'bulbasaur').url;
    const ivysaurData = data.results.find(pokemon => pokemon.name === 'ivysaur').url;
    const venusaurData = data.results.find(pokemon => pokemon.name === 'venusaur').url;
    const charmanderData = data.results.find(pokemon => pokemon.name === 'charmander').url;
    const charmeleonData = data.results.find(pokemon => pokemon.name === 'charmeleon').url;
    const charizardData = data.results.find(pokemon => pokemon.name === 'charizard').url;
    const squirtleData = data.results.find(pokemon => pokemon.name === 'squirtle').url;
    const wartortleData = data.results.find(pokemon => pokemon.name === 'wartortle').url;
    const blastoiseData = data.results.find(pokemon => pokemon.name === 'blastoise').url;

    const bulbasaurResponse = await fetch(bulbasaurData);
    const bulbasaurInfo = await bulbasaurResponse.json();

    const bulbasaurSprite = bulbasaurInfo.sprites.front_default;
    const bulbaSpriteCont = document.getElementById("bulbasaurSprite");
    const bulbasaurName = bulbasaurInfo.name;
    const bulbasaurAbilities = bulbasaurInfo.abilities;
    const bulbasaurTypes = bulbasaurInfo.types;

    document.getElementById("bulbasaurName").innerText = bulbasaurName;
    document.getElementById("bulbasaurAbilities").innerText = getBulbaAbi(bulbasaurAbilities);
    document.getElementById("bulbasaurTypes").innerText = getBulbaTypes(bulbasaurTypes);
    bulbaSpriteCont.src = bulbasaurSprite;

    const ivysaurResponse = await fetch(ivysaurData);
    const ivysaurInfo = await ivysaurResponse.json();

    const ivysaurSprite = ivysaurInfo.sprites.front_default;
    const ivySpriteCont = document.getElementById("ivysaurSprite");
    const ivysaurName = ivysaurInfo.name;
    const ivysaurTypes = ivysaurInfo.types;
    const ivysaurAbilities = ivysaurInfo.abilities;

    document.getElementById("ivysaurName").innerText = ivysaurName;
    document.getElementById("ivysaurAbilities").innerText = getIvyAbi(ivysaurAbilities);
    document.getElementById("ivysaurTypes").innerText = getIvyTypes(ivysaurTypes);
    ivySpriteCont.src = ivysaurSprite;
    const ivysaurDiv = document.getElementById('ivysaurDiv');

    const venusaurResponse = await fetch(venusaurData);
    const venusaurInfo = await venusaurResponse.json();

    const venusaurSprite = venusaurInfo.sprites.front_default;
    const venuSpriteCont = document.getElementById("venusaurSprite");
    const venusaurName = venusaurInfo.name;
    const venusaurTypes = venusaurInfo.types;
    const venusaurAbilities = venusaurInfo.abilities;

    document.getElementById("venusaurName").innerText = venusaurName;
    document.getElementById("venusaurAbilities").innerText = getVenuAbi(venusaurAbilities);
    document.getElementById("venusaurTypes").innerText = getVenuTypes(venusaurTypes);
    venuSpriteCont.src = venusaurSprite;
    const venusaurDiv = document.getElementById('venusaurDiv');
    const showingBttn1 = document.getElementById('showingBttn1');

    showingBttn1.addEventListener('click', function() {
        if (ivysaurDiv.style.display === 'none') {
            ivysaurDiv.style.display = 'block';
        } else {
            venusaurDiv.style.display = 'block';
        }
    });

    const charmanderResponse = await fetch(charmanderData);
    const charmanderInfo = await charmanderResponse.json();

    const charmanderSprite = charmanderInfo.sprites.front_default;
    const charmaSpriteCont = document.getElementById("charmanderSprite");
    const charmanderName = charmanderInfo.name;
    const charmanderTypes = charmanderInfo.types;
    const charmanderAbilities = charmanderInfo.abilities;

    document.getElementById("charmanderName").innerText = charmanderName;
    document.getElementById("charmanderAbilities").innerText = getCharmaAbi(charmanderAbilities);
    document.getElementById("charmanderTypes").innerText = getCharmaTypes(charmanderTypes);
    charmaSpriteCont.src = charmanderSprite;

    const charmeleonResponse = await fetch(charmeleonData);
    const charmeleonInfo = await charmeleonResponse.json();

    const charmeleonSprite = charmeleonInfo.sprites.front_default;
    const leonSpriteCont = document.getElementById("charmeleonSprite");
    const charmeleonName = charmeleonInfo.name;
    const charmeleonTypes = charmeleonInfo.types;
    const charmeleonAbilities = charmeleonInfo.abilities;

    document.getElementById("charmeleonName").innerText = charmeleonName;
    document.getElementById("charmeleonAbilities").innerText = getLeonAbi(charmeleonAbilities);
    document.getElementById("charmeleonTypes").innerText = getLeonTypes(charmeleonTypes);
    leonSpriteCont.src = charmeleonSprite;
    const charmeleonDiv = document.getElementById('charmeleonDiv');

    const charizardResponse = await fetch(charizardData);
    const charizardInfo = await charizardResponse.json();

    const charizardSprite = charizardInfo.sprites.front_default;
    const zardSpriteCont = document.getElementById("charizardSprite");
    const charizardName = charizardInfo.name;
    const charizardTypes = charizardInfo.types;
    const charizardAbilities = charizardInfo.abilities;

    document.getElementById("charizardName").innerText = charizardName;
    document.getElementById("charizardAbilities").innerText = getZardAbi(charizardAbilities);
    document.getElementById("charizardTypes").innerText = getZardTypes(charizardTypes);
    zardSpriteCont.src = charizardSprite;
    const charizardDiv = document.getElementById('charizardDiv');
    const showingBttn2 = document.getElementById('showingBttn2');

    showingBttn2.addEventListener('click', function() {
        if (charmeleonDiv.style.display === 'none') {
            charmeleonDiv.style.display = 'block';
        } else {
            charizardDiv.style.display = 'block';
        }
    });

    const squirtleResponse = await fetch(squirtleData);
    const squirtleInfo = await squirtleResponse.json();

    const squirtleSprite = squirtleInfo.sprites.front_default;
    const squiSpriteCont = document.getElementById("squirtleSprite");
    const squirtleName = squirtleInfo.name;
    const squirtleTypes = squirtleInfo.types;
    const squirtleAbilities = squirtleInfo.abilities;

    document.getElementById("squirtleName").innerText = squirtleName;
    document.getElementById("squirtleAbilities").innerText = getSquiAbi(squirtleAbilities);
    document.getElementById("squirtleTypes").innerText = getSquiTypes(squirtleTypes);
    squiSpriteCont.src = squirtleSprite;

    const wartortleResponse = await fetch(wartortleData);
    const wartortleInfo = await wartortleResponse.json();

    const wartortleSprite = wartortleInfo.sprites.front_default;
    const warSpriteCont = document.getElementById("wartortleSprite");
    const wartortleName = wartortleInfo.name;
    const wartortleTypes = wartortleInfo.types;
    const wartortleAbilities = wartortleInfo.abilities;

    document.getElementById("wartortleName").innerText = wartortleName;
    document.getElementById("wartortleAbilities").innerText = getWarAbi(wartortleAbilities);
    document.getElementById("wartortleTypes").innerText = getWarTypes(wartortleTypes);
    warSpriteCont.src = wartortleSprite;
    const wartortleDiv = document.getElementById('wartortleDiv');

    const blastoiseResponse = await fetch(blastoiseData);
    const blastoiseInfo = await blastoiseResponse.json();

    const blastoiseSprite = blastoiseInfo.sprites.front_default;
    const blasSpriteCont = document.getElementById("blastoiseSprite");
    const blastoiseName = blastoiseInfo.name;
    const blastoiseTypes = blastoiseInfo.types;
    const blastoiseAbilities = blastoiseInfo.abilities;

    document.getElementById("blastoiseName").innerText = blastoiseName;
    document.getElementById("blastoiseAbilities").innerText = getBlasAbi(blastoiseAbilities);
    document.getElementById("blastoiseTypes").innerText = getBlasTypes(blastoiseTypes);
    blasSpriteCont.src = blastoiseSprite;
    const blastoiseDiv = document.getElementById('blastoiseDiv');
    const showingBttn3 = document.getElementById('showingBttn3');

    showingBttn3.addEventListener('click', function() {
        if (wartortleDiv.style.display === 'none') {
            wartortleDiv.style.display = 'block';
        } else {
            blastoiseDiv.style.display = 'block';
        }
    });

    }
    catch (error){
        console.log("error")
    }
}

function getBulbaAbi(abilities) {
    return abilities.map(ability => ability.ability.name).join(', ');
}
function getBulbaTypes(types) {
    return types.map(type => type.type.name).join(', ');
}

function getIvyAbi(abilities) {
    return abilities.map(ability => ability.ability.name).join(', ');
}
function getIvyTypes(types) {
    return types.map(type => type.type.name).join(', ');
}

function getVenuAbi(abilities) {
    return abilities.map(ability => ability.ability.name).join(', ');
}
function getVenuTypes(types) {
    return types.map(type => type.type.name).join(', ');
}

function getCharmaAbi(abilities) {
    return abilities.map(ability => ability.ability.name).join(', ');
}
function getCharmaTypes(types) {
    return types.map(type => type.type.name).join(', ');
}

function getLeonAbi(abilities) {
    return abilities.map(ability => ability.ability.name).join(', ');
}
function getLeonTypes(types) {
    return types.map(type => type.type.name).join(', ');
}

function getZardAbi(abilities) {
    return abilities.map(ability => ability.ability.name).join(', ');
}
function getZardTypes(types) {
    return types.map(type => type.type.name).join(', ');
}

function getSquiAbi(abilities) {
    return abilities.map(ability => ability.ability.name).join(', ');
}
function getSquiTypes(types) {
    return types.map(type => type.type.name).join(', ');
}

function getWarAbi(abilities) {
    return abilities.map(ability => ability.ability.name).join(', ');
}
function getWarTypes(types) {
    return types.map(type => type.type.name).join(', ');
}

function getBlasAbi(abilities) {
    return abilities.map(ability => ability.ability.name).join(', ');
}
function getBlasTypes(types) {
    return types.map(type => type.type.name).join(', ');
}
catchPoke();