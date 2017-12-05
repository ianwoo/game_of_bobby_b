$(document).ready(start);
//navigation variables
var northGoTo = 0;
var southGoTo = 0;
var westGoTo = 0;
var eastGoTo = 0;
var currentNode = 0;
//scoring variables
var score = 0;
var cleganebowl = false;
var whorepregnant = false;
var nedishand = false;
var awkwardconvo = false;
var renouncethrone = false;

function start() {
    staging();
    hideDrinks();
    $('#north').click(goNorth);
    $('#south').click(goSouth);
    $('#east').click(goEast);
    $('#west').click(goWest);
}

function hideDrinks(){
    $('#vomit').hide();
    $('#drinkOne').hide();
    $('#drinkTwo').hide();
    $('#drinkThree').hide();
}

function staging() {

    //cleganebowl flag for scoring() we have checked that this works
    if (currentNode == 16) {
        cleganebowl = true;
        if (characterData[5].hitPoints > 0) {
            sceneNodeData[16].northGoTo = 41;
        }
    }

    //whore is pregnant flag for scoring()
    if (currentNode == 15) {
        console.log('whore is pregnant flagged on');
        whorepregnant = true;
    }

    //renounce the throne to aegon flag for scoring()
    if (currentNode == 39) {
        renouncethrone = true;
    }

    //joffrey dies
    if (currentNode == 35 || currentNode == 36) {
        !characterData[10].alive;
    }

    //awkward conversation with jon
    if (currentNode == 40) {
        awkwardconvo = true;
    }

    //ned is hand flag for scoring(), and to set up the 2nd ned fight
    if (currentNode == 2) {
        var nedishand = true;
        characterData[1].name = 'Lord Eddard Stark, Hand of the King';
        characterData[1].fightScene = 34;
        //no need to change homeNode or fightDirection because you cannot return to fight homeNode for 2nd Ned encounter
    }

    $('#stage').html(sceneNodeData[currentNode].sceneStaging);

    if (sceneNodeData[currentNode].sceneNorth) {
        $('#north').html(sceneNodeData[currentNode].sceneNorth);
        northGoTo = sceneNodeData[currentNode].northGoTo;
        $('#north').show();
    }
    if (!sceneNodeData[currentNode].sceneNorth) {
        $('#north').hide();
    }
    if (sceneNodeData[currentNode].sceneSouth) {
        $('#south').html(sceneNodeData[currentNode].sceneSouth);
        southGoTo = sceneNodeData[currentNode].southGoTo;
        $('#south').show();
    }
    if (!sceneNodeData[currentNode].sceneSouth) {
        $('#south').hide();
    }
    if (sceneNodeData[currentNode].sceneEast) {
        $('#east').html(sceneNodeData[currentNode].sceneEast);
        eastGoTo = sceneNodeData[currentNode].eastGoTo;
        $('#east').show();
    }
    if (!sceneNodeData[currentNode].sceneEast) {
        $('#east').hide();
    }
    if (sceneNodeData[currentNode].sceneWest) {
        $('#west').html(sceneNodeData[currentNode].sceneWest);
        westGoTo = sceneNodeData[currentNode].westGoTo;
        $('#west').show();
    }
    if (!sceneNodeData[currentNode].sceneWest) {
        $('#west').hide();
    }

    //cycle through all characters to find fight scenes
    for (var counter2 = 0; counter2 < characterData.length; counter2++){
        if (currentNode == characterData[counter2].fightScene && characterData[counter2].hitPoints > 0) {
            battle(characterData[counter2]);
        }
        //and drinking scenes
        if (currentNode == characterData[counter2].drinkScene && characterData[counter2].alive) {
            drinkingGame(characterData[counter2]);
        }
    }
    
    //ending (good and bad, trigger scoreboard)
    if (currentNode == 48) {
        console.log('beat the game!');
        scoring();
    }
}

function goNorth() {
    //reset to navigation after 'continue' at end of drinking game
    $('#drinkingGame').html('');
    currentNode = northGoTo;
    staging();
}

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

function battle(character) {
    //characterData[0] is bobby aka the player
    while (character.hitPoints > 0 && characterData[0].hitPoints > 0) {
        if (Math.random() <= character.hitChance) {
            $('<p class="battlelog">you strike ' + character.name + ' with ' + characterData[0].weapon + ' for ' + characterData[0].damage + ' leaving ' + character.hitPoints + ' HP remaining<p>').insertAfter('#stage');
            character.hitPoints -= characterData[0].damage;
        } else {
            $('<p class="battlelog">you missed ' + character.name + '<p>').insertAfter('#stage');
        }
        if (Math.random() <= characterData[0].hitChance) {
            $('<p class="battlelog">' + character.name + ' strikes you with ' + character.weapon + ' for ' + character.damage + ' leaving ' + characterData[0].hitPoints + ' HP remaining<p>').insertAfter('#stage');
            characterData[0].hitPoints -= character.damage;
        } else {
            $('<p class="battlelog">' + character.name + ' missed you<p>').insertAfter('#stage');
        }
        if (character.hitPoints <= 0) {
            $('#stage').html(character.name + ' lays dead in front of you.');
            $('#north').html('Continue');
            northGoTo = currentNode;
            $('#north').click(clearBattleLogs);
        }
        if (characterData[0].hitPoints <= 0) {
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
}

function drinkingGame(character) {
    console.log('inside drinkingGame');

    $('#stage').hide();
    $('#north').hide();
    $('#south').hide();
    $('#east').hide();
    $('#west').hide();

    var bobbyDrinks = 0;
    var rivalDrinks = 0;

    function breathalyzer(){
        console.log(characterData[0].drunkenness);
        $('#drinkingGame').html('You are ' + characterData[0].drunkenness + '/100 drunk, and ' + character.name + ' is ' + character.drunkenness + '/100 drunk.');
        if (characterData[0].drunkenness > 100) {
            $('#drinkingGame').html('You start vomiting blood, the world goes fuzzy, and you pass out from alcohol poisoning. Then you start choking in your own vomit. GAME OVER.');
            hideDrinks();
            gameover();
        }
        if (character.drunkenness > 100) {
            $('#drinkingGame').html(character.name + ' starts vomiting blood, and passes out from alcohol poisoning, before choking on vomit and dying.');
            hideDrinks();
            character.alive = false;
            $('#north').html('Continue');
            northGoTo = currentNode;
            $('#north').show();
            $('#stage').show();
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

    $('#vomit').show();
    $('#drinkOne').show();
    $('#drinkTwo').show();
    $('#drinkThree').show();

    breathalyzer();

    characterData[0].drunkenness -= 0;
    //^hasty bug patchup - for some reason, before a -= operation is performed, .drunkenness is treated as a string?

    $('#drinkOne').click(function() {
        bobbyDrinks += 1;
        characterData[0].drunkenness += 10;
        rivalsTurn();
        breathalyzer();
    });
    $('#drinkTwo').click(function() {
        bobbyDrinks += 2;
        characterData[0].drunkenness += 25;
        rivalsTurn();
        breathalyzer();
    });
    $('#drinkThree').click(function() {
        bobbyDrinks += 3;
        characterData[0].drunkenness += 45;
        rivalsTurn();
        breathalyzer();
    });
    $('#vomit').click(function() {
        characterData[0].drunkenness -= 10;
        rivalsTurn();
        breathalyzer();
    });
}

function gameover(){
    $('#stage').html('GAME OVER');
    $('#north').hide();
    $('#south').hide();
    $('#east').hide();
    $('#west').hide();
    scoring();
}

function fail(data) {
    console.log('failed.');
    console.log(data);
}

function scoring(){
    //trigger cleganebowl
    if (cleganebowl) {
        score += 10000;
        $('<p>you organized the Cleganebowl! +10,000 points</p>').insertBefore('#stage');
    }
    //trigger whore is pregnant convo
    if (whorepregnant) {
        score += 5000;
        $('<p>you successfully roleplayed the most famous Bobby B meme. Good job. +5,000 points</p>').insertBefore('#stage');
    }
    //make ned the hand
    if (nedishand) {
        score += 3000;
        $('<p>you made Ned the Hand of the King! +3,000 points</p>').insertBefore('#stage');
    }
    //renounce throne to aegon
    if (renouncethrone) {
        score -= 10000;
        $('<p>you renounced the iron throne to Aegon / Jon. -10,000 points</p>').insertBefore('#stage');
    }
    //awkward conversation with jon
    if (awkwardconvo) {
        score -= 1;
        $('<p>you made Jon Snow feel bad about himself. -1 point</p>').insertBefore('#stage');
    }    
    //ned dies
    if (characterData[1].hitPoints <= 0) {
        score -= 1000;
        $('<p>you killed Ned! -1,000 points</p>').insertBefore('#stage');
    }
    //jaime dies
    if (characterData[2].hitPoints <= 0) {
        $('<p>you killed Jaime Lannister! He was an asshole. +1,000 points</p>').insertBefore('#stage');
        $('<p>...you killed Jaime Lannister. He *WAS* an asshole. -1,000 points</p>').insertBefore('#stage');
    }
    //dothraki
    if (characterData[3].hitPoints <= 0) {
        score -= 100000;
        $('<p>you typed characterData[0].hitPoints = whatever the fuck you wanted into the JavaScript Console, cheater. -100,000 points</p>').insertBefore('#stage');
    }
    if (!characterData[4].alive) {
        $('<p>you beat Tyrion at drinking!! impressive! +10,000 points</p>').insertBefore('#stage');
        $('<p>you let Tyrion, probably everyones favorite character, die! -10,000 points</p>').insertBefore('#stage');
    }
    //oberyn
    if (characterData[5].hitPoints <= 0) {
        score -= 5000;
        $('<p>you killed Oberyn! -5,000 points</p>').insertBefore('#stage');
    }    
    //gendry
    if (characterData[6].hitPoints <= 0) {
        score -= 500;
        $('<p>you killed Gendry! -500 points</p>').insertBefore('#stage');
    }
    //olly
    if (characterData[7].hitPoints <= 0) {
        score += 2000;
        $('<p>you killed Olly! SWEET! fuck olly. +2,000 points</p>').insertBefore('#stage');
    }
    //nymeria
    if (characterData[8].hitPoints <= 0) {
        score -= 1000;
        $('<p>you killed Nymeria! You probably had to cheat to do it too. -1,000 points</p>').insertBefore('#stage');
    }
    //arya
    if (characterData[9].hitPoints <= 0) {
        score -= 2000;
        $('<p>you killed Arya! -2,000 points</p>').insertBefore('#stage');
    }
    //joffrey
    if (!characterData[10].alive) {
        score += 10000;
        $('<p>you let that miserable little cunt Joffrey die. Good job! +10,000 points</p>').insertBefore('#stage');
    }
    //jon
    if (characterData[11].hitPoints <= 0) {
        score -= 10000;
        $('<p>you killed Jon! -10,000 points</p>').insertBefore('#stage');
    }
    //aegon
    if (characterData[12].hitPoints <= 0) {
        score -= 1000000;
        $('<p>you killed Aegon Targaryen! cheater. -1,000,000 points</p>').insertBefore('#stage');
    }
    //the mountain in his prime
    if (characterData[13].hitPoints <= 0) {
        score -= 10000000;
        $('<p>you killed The Mountain in his prime?! you cheater! -1,000,000 points</p>').insertBefore('#stage');
    }
    //the zombie mountain
    if (characterData[14].hitPoints <= 0) {
        score += 10000000;
        $('<p>YOU BEAT THE GAME! CONGRATULATIONS! You are a winrar. +1,000,000 points</p>').insertBefore('#stage');
    }
    //jquery to format scoreboard, convert the jquery version into angular version for final project
    console.log(score);
    $('<p>your final score is: ' + score + ' points.</p>').insertBefore('#stage');
    $.post('/game',{"highscore": score});
}

