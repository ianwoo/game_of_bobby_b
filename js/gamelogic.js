$(document).ready(start);

var northGoTo = 0;
var southGoTo = 0;
var westGoTo = 0;
var eastGoTo = 0;
var currentNode = 0;

var sceneNodeData;
var characterData;

//var inventory = [];
//add this functionality later

//var party = [];
//add this functionality later

//function gameover() {}

//function battle() {}

//function cleganebowl() {}

function start() {
    $.get('backend/character.php').done(createCharacters).fail(fail);
    $.get('backend/scene.php').done(firstStaging).fail(fail);
}

function createCharacters(chardata){
    characterData = JSON.parse(chardata);
}

function firstStaging(data) {
    sceneNodeData = JSON.parse(data);
    staging();
    $('#north').click(goNorth);
    $('#south').click(goSouth);
    $('#east').click(goEast);
    $('#west').click(goWest);
}

function staging() {

    for (var counter = 0; counter < sceneNodeData.length; counter++) {

        if (currentNode == counter) {

            $('#stage').html(sceneNodeData[counter].sceneStaging);
            $('#north').html(sceneNodeData[counter].sceneNorth);
            $('#south').html(sceneNodeData[counter].sceneSouth);
            $('#east').html(sceneNodeData[counter].sceneEast);
            $('#west').html(sceneNodeData[counter].sceneWest);
            northGoTo = sceneNodeData[counter].northGoTo;
            southGoTo = sceneNodeData[counter].southGoTo;
            eastGoTo = sceneNodeData[counter].eastGoTo;
            westGoTo = sceneNodeData[counter].westGoTo;
        }
    }
    for (var counter2 = 0; counter2 < characterData.length; counter2++){
        if (currentNode == characterData[counter2].fightScene && characterData[counter2].hitPoints > 0) {
            battle(characterData[counter2]);
        }
    }
    //this is the old javascript code (pre-PHP) for reference:
    //if (currentNode === 13 && oberyn.alive) {
    //     battle(oberyn);
    // }
    // if (currentNode === 18 && jaime.alive) {
    //     battle(jaime);
    // }
    // if (currentNode === 19 && ned.alive) {
    //     battle(ned);
    // }
    // if (currentNode === 20 && dothraki.alive) {
    //     battle(dothraki);
    // }
}

function goNorth() {
    currentNode = northGoTo;
    staging();
    if (currentNode == 22) {
        drinkingGame(characterData[5]);
    }
}

//characterData[5] is Tyrion Lannister

function goSouth() {
    currentNode = southGoTo;
    staging();
}

function goWest() {
    currentNode = westGoTo;
    staging();
}

function goEast() {
    currentNode = eastGoTo;
    staging();
}

//note for battle function: characterData[1] is Bobby B

function battle(character) {
    while (character.hitPoints > 0 && characterData[1].hitPoints > 0) {
        if (Math.random() <= character.hitChance) {
            character.hitPoints -= characterData[1].damage;
            $('<p class="battlelog">you strike ' + character.name + ' with ' + characterData[1].weapon + ' for ' + characterData[1].damage + ' leaving ' + character.hitPoints + ' HP remaining<p>').insertAfter('#stage');
        } else {
            $('<p class="battlelog">you missed ' + character.name + '<p>').insertAfter('#stage');
        }
        if (Math.random() <= characterData[1].hitChance) {
            characterData[1].hitPoints -= character.damage;
            $('<p class="battlelog">' + character.name + ' strikes you with ' + character.weapon + ' for ' + character.damage + ' leaving ' + characterData[1].hitPoints + ' HP remaining<p>').insertAfter('#stage');
        } else {
            $('<p class="battlelog">' + character.name + ' missed you<p>').insertAfter('#stage');
        }
        if (character.hitPoints <= 0) {
            $('#stage').html(character.name + ' lays dead in front of you.');
            $('#north').html('Continue');
            northGoTo = currentNode;
            $('#north').click(clearBattleLogs);
        }
        if (characterData[1].hitPoints <= 0) {
            gameover();
        }
    }
}

function clearBattleLogs() {
    $(".battlelog").remove();
    for (var counter = 0; counter < characterData.length; counter++){
        if (characterData[counter].hitPoints <= 0){
            homeNode = characterData[counter].homeNode;
            if (characterData[counter].fightDirection == 'northGoTo') {
                sceneNodeData[homeNode].northGoTo = characterData[counter].fightScene;
            }
            if (characterData[counter].fightDirection == 'southGoTo') {
                sceneNodeData[homeNode].southGoTo = characterData[counter].fightScene;
            }
            if (characterData[counter].fightDirection == 'eastGoTo') {
                sceneNodeData[homeNode].eastGoTo = characterData[counter].fightScene;
            }
            if (characterData[counter].fightDirection == 'westGoTo') {
                sceneNodeData[homeNode].westGoTo = characterData[counter].fightScene;
            }
        }
    }
//this is the old javascript code (pre-PHP) for reference:
//     if (oberyn.alive === false) {
//         sceneNode0.southGoTo = 13;
//     }
//     if (ned.alive === false) {
//         sceneNode0.northGoTo = 19;
//     }
//     if (jaime.alive === false) {
//         sceneNode2.westGoTo = 18;
//     }
}

function drinkingGame(character) {
    console.log('inside drinkingGame');

    var bobbyDrinks = 0;
    var rivalDrinks = 0;

    function breathalyzer(){
        console.log(characterData[1].drunkenness);
        $('#drinkingGame').html('You are ' + characterData[1].drunkenness + '/100 drunk, and ' + character.name + ' is ' + character.drunkenness + '/100 drunk.');
        if (characterData[1].drunkenness > 100) {
            $('#drinkingGame').html('You start vomiting blood, the world goes fuzzy, and you pass out from alcohol poisoning. Then you start choking in your own vomit. GAME OVER.');
            $('.drink').remove();
            gameover();
        }
        if (character.drunkenness > 100) {
            $('#drinkingGame').html(character.name + ' starts vomiting blood, and passes out from alcohol poisoning, before choking on vomit and dying.');
            character.hitPoints = 0;
        }
    }

    function rivalsTurn(){
        character.drunkenness -= 0;
        var rivalRoll = Math.random();
        if (rivalRoll <= .33){
            rivalDrinks += 1;
            character.drunkenness += 10;
        }
        if (rivalRoll >= .66){
            rivalDrinks += 2;
            character.drunkenness += 25;
        }
        else {
            rivalDrinks += 3;
            character.drunkenness += 45;
        }
    }

    breathalyzer();
    $('<button id="vomit" class="drink">Force yourself to vomit.</button>').insertAfter('#drinkingGame');
    $('<button id="drinkThree" class="drink">Drink three glasses of wine.</button>').insertAfter('#drinkingGame');
    $('<button id="drinkTwo" class="drink">Drink two glasses of wine.</button>').insertAfter('#drinkingGame');
    $('<button id="drinkOne" class="drink">Drink one glass of wine.</button>').insertAfter('#drinkingGame');

    characterData[1].drunkenness -= 0;
    //^hasty bug patchup - for some reason, before a -= operation is performed, .drunkenness is treated as a string?

    $('#drinkOne').click(function() {
        bobbyDrinks += 1;
        characterData[1].drunkenness += 10;
        rivalsTurn();
        breathalyzer();
    });
    $('#drinkTwo').click(function() {
        bobbyDrinks += 2;
        characterData[1].drunkenness += 25;
        rivalsTurn();
        breathalyzer();
    });
    $('#drinkThree').click(function() {
        bobbyDrinks += 3;
        characterData[1].drunkenness += 45;
        rivalsTurn();
        breathalyzer();
    });
    $('#vomit').click(function() {
        characterData[1].drunkenness -= 10;
        rivalsTurn();
        breathalyzer();
    });
}

function gameover(){
    $('#stage').html('GAME OVER');
    $('#north').html(null);
    $('#south').html(null);
    $('#east').html(null);
    $('#west').html(null);
    northGoTo = null;
    southGoTo = null;
    eastGoTo = null;
    westGoTo = null;
}

function fail(data) {
    console.log('failed.');
    console.log(data);
}