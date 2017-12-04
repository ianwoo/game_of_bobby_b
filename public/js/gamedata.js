var characterData = [
//0
    {
    name: 'King Robert Baratheon',
    hitPoints: 1000,
    hitChance: .75,
    weapon: 'warhammer',
    damage: 10,
    drunkenness: 50,
    fightScene: NaN,
    drinkScene: NaN
    },

//1
    {
    name: 'Lord Eddard Stark, Warden of the North',
    hitPoints: 100,
    hitChance: .3,
    weapon: 'the Valyrian greatsword Ice',
    damage: 50,
    homeNode: 0,
    fightScene: 19,
    fightDirection: 'northGoTo',
    drinkScene: NaN
    },
//2
    {
    name: 'Ser Jaime Lannister the Kingslayer',
    alive: true,
    hitPoints: 150,
    hitChance: .2,
    weapon: 'the Valyrian longsword Oathkeeper',
    damage: 35,
    homeNode: 2,
    fightScene:18,
    fightDirection: 'westGoTo',
    drinkScene: NaN
    },
//3
    {
    name: 'A DOTHRAKI HORDE, ON AN OPEN FIELD',
    hitPoints: 10000,
    hitChance: 1,
    weapon: 'spear',
    damage: 15,
    homeNode: 0,
    fightScene: 20,
    fightDirection: 'eastGoTo',
    drinkScene: NaN
    },
//4
    {
    name: 'Tyrion Lannister',
    alive: true,
    drunkenness: 25,
    homeNode: 0,
    fightScene: NaN,
    drinkScene: 22
    },
//5
    {
    name: 'Oberyn Martell, the Red Viper',
    hitPoints: 100,
    hitChance: .75,
    weapon: 'poisoned spear',
    damage: 20,
    homeNode: 0,
    fightScene: 13,
    fightDirection: 'southGoTo',
    drinkScene: NaN
    },
//6
    {
    name: 'Gendry the Apprentice Smith',
    hitPoints: 75,
    hitChance: .9,
    weapon: 'finely crafted warhammer',
    damage: 35,
    homeNode: NaN,
    fightScene: 26,
    fightDirection: NaN,
    drinkScene: NaN
    },
//7
    {
    name: 'fucking Olly.',
    hitPoints: 13,
    hitChance: 1,
    weapon: 'bow',
    damage: 5,
    homeNode: NaN,
    fightScene: 37,
    fightDirection: NaN,
    drinkScene: NaN
    },
//8
    {
    name: 'Nymeria the Direwolf',
    hitPoints: 2000,
    hitChance: .2,
    weapon: 'fangs',
    damage: 20,
    homeNode: NaN,
    fightScene: 32,
    fightDirection: NaN,
    drinkScene: NaN
    },
//9
    {
    name: 'Arya Stark',
    hitPoints: 10,
    hitChance: .01,
    weapon: 'needle',
    damage: 5,
    homeNode: NaN,
    fightScene: 33,
    fightDirection: NaN,
    drinkScene: NaN
    },
//10
    {
    name: 'Prince Joffrey Baratheon',
    alive: true,
    homeNode: NaN,
    fightScene: NaN,
    drinkScene: NaN
    },
//11
    {
    name: 'Jon Snow',
    hitPoints: 20,
    hitChance: .05,
    weapon: 'Longclaw',
    damage: 50,
    homeNode: NaN,
    fightScene: 31,
    fightDirection: NaN,
    drinkScene: NaN
    },
//12
    {
    name: 'AEGON TARGARYEN, AZOR AHAI, THE PRINCE WHO WAS PROMISED',
    hitPoints: 100000,
    hitChance: 0,
    weapon: 'Flaming Longsword +5',
    damage: 5000,
    homeNode: NaN,
    fightScene: 38,
    fightDirection: NaN,
    drinkScene: NaN    
    },
//13
    {
    name: 'The Mountain',
    hitPoints: 100000,
    hitChance: 1,
    weapon: 'Giant Greatsword',
    damage: 5000,
    homeNode: NaN,
    fightScene: 46,
    fightDirection: NaN,
    drinkScene: NaN
    },
//14
    {
    name: 'The Zombie Mountain',
    hitPoints: 100,
    hitChance: 1,
    weapon: 'Giant Greatsword',
    damage: 5,
    homeNode: NaN,
    fightScene: 47,
    fightDirection: NaN,
    drinkScene: NaN
    }
];

var sceneNodeData = [
    {
    sceneId: 0,
    sceneStaging: 'You are standing in an open field, about to meet the Dothraki in battle.',
    sceneNorth: 'Go North',
    northGoTo: 1,
    sceneSouth: 'Go South',
    southGoTo: 3,
    sceneEast: 'Go East',
    eastGoTo: 7,
    sceneWest: 'Go West',
    westGoTo: 8
    },

    {
    sceneId: 1,
    sceneStaging: 'You head north, and you see Ned.',
    sceneNorth: 'Ask Ned to be your Hand',
    northGoTo: 2,
    sceneSouth: 'Forget the poor Stark, who has suffered enough. Return South.',
    southGoTo: 0,
    sceneEast: 'Keep heading North! Time to check out the Wall with your brother-in-law, Tyrion Lannister',
    eastGoTo: 9,
    sceneWest: 'Attack Ned!',
    westGoTo: 10
    },

    {
    sceneId: 2,
    sceneStaging: 'Ned accepts, but begrudgingly. He has now joined your party, along with his two young daughters Arya and Sansa, as well as his loyal captain Jory Cassel, and is returning with you to the Red Keep. You are on the Kingsroad.',
    sceneNorth: 'Discuss Daenarys Targaryen',
    northGoTo: 4,
    sceneSouth: 'Check up on your... er... son. Joffrey Baratheon.',
    southGoTo: 11,
    sceneEast: 'Realistic travel times?? That is so five seasons ago. Time to get drunk, pass out, and GET ON WITH IT!! Before you piss yeself.',
    eastGoTo: 14,
    sceneWest: 'Confront Jaime Lannister and ask if he is banging your wife who is also his sister.',
    westGoTo: 12
    },

    {
    sceneId: 3,
    sceneStaging: 'You head South to Dorne. Oberyn is here. He brandishes his spear and yells "YOU RAPED HER, YOU KILLED HER, YOU MURDERED HER CHILDREN." Ready yourself for battle!',
    sceneNorth: 'Brandish your battlehammer and don your great antlered helm, because it is time to kick some ass.',
    northGoTo: 13,
    sceneSouth: 'Flee, like the coward you are!',
    southGoTo: 0,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 4,
    sceneStaging: 'As your party travels down the Kingsroad, you tell Ned that you are concerned about the stories of the Targaryen girl being married off to Khal Drogo, King of the Dothraki. He is mortified, and he protests that Daenaerys is just a little girl.',
    sceneNorth: 'THE WHOOOOOOORE IS PREGNANT!!',
    northGoTo: 5,
    sceneSouth: 'I agree, Ned. Let us not task Varys with arranging an assassination attempt, and therefore waste two seasons worth of time on irrelevant B-plots.',
    southGoTo: 6,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 5,
    sceneStaging: '"THE WHOOOOOOORE IS PREGNANT!!" Ned furrows his brow and retorts, "You are speaking of murdering a CHILD!"',
    sceneNorth: 'I warned you this would happen, back in the North. I warned you, but you dinnae care to hear. Well hear it now. I want them both DEAD! Mother and child both, and that fool Viserys as well. Is that plain enough for you? I want them both dead.',
    northGoTo: 15,
    sceneSouth: 'Yer... yer right. Murdering a child, especially a little girl, would be beneath the honor of a Baratheon, especially my brother Stannis, and especially if it is for some strange and completely unjustifiable religious ritual involving the sacrifice of his own daughter, no less.',
    southGoTo: 6,
    sceneEast: 'Pah! I would kill any descendant of Rhaegar Targaryen! He took my Lyanna from me!! Oh, and how is that bastard of yours anyway?',
    eastGoTo: 9,
    sceneWest: 'We shall continue this discussion later, let us cool our heads with wine so that we may speak with reason. LET US GET DRUNK!!',
    westGoTo: 8
    },

    {
    sceneId: 6,
    sceneStaging: '"I agree, Ned" you say, "Let us not task Varys with arranging an assassination attempt, and therefore waste two seasons worth of time on irrelevant B-plots." Ned nods, "Okay... so then what?"',
    sceneNorth: 'Let us host a tournament! For some strange reason I feel very hyped about a duel between the Mountain and the Hound.',
    northGoTo: 16,
    sceneSouth: 'I am going to legitimize all my bastards fathered from the whores I visited, and then this story will REALLY get messy!',
    southGoTo: 17,
    sceneEast: 'Let us travel with my brother-in-law Tyrion up to Castle Black, so that I may meet the bastard Jon Snow and discover his true heritage, whaddaya say, Ned?',
    eastGoTo: 9,
    sceneWest: 'LET US GET DRUNK!!',
    westGoTo: 8
    },

    {
    sceneId: 7,
    sceneStaging: 'You head east, to meet the Dothraki on an open field. PREPARE FOR BATTLE!',
    sceneNorth: 'Even your drunk ass noted that it would be stupid to meet the Dothraki on an open field. FLEE!',
    northGoTo: 0,
    sceneSouth: 'So what if these horsefuckers were inspired by the greatest horde known to mankind who managed to conquer practically the entirety of the Eurasian megacontinent? Your obese ass could take them.',
    southGoTo: 20,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 8,
    sceneStaging: 'You head west, to the Westerlands, and now you are standing outside of Casterly Rock. Tyrion is here. Time to get DRUNK!',
    sceneNorth: 'Ask Tyrion to drink with you.',
    northGoTo: 21,
    sceneSouth: 'Ask Tyrion to get hammered with you.',
    southGoTo: 21,
    sceneEast: 'Ask Tyrion to get as blitzed as a Westerosi Winter with you.',
    eastGoTo: 21,
    sceneWest: 'You have an ominous feeling that somehow your alcoholism will be the end of you, and decide to back off.',
    westGoTo: 0
    },

    {
    sceneId: 9,
    sceneStaging: 'Ned tells you that Jon Snow is doing well and that he has Taken the Black. You cannot see how a vow of celibacy could ever be considered "doing well". Nonetheless you decide to join your brother-in-law, the dwarf Tyrion, to visit the Wall and talk to Jon Snow. The trek up is treacherous, and when you reach the great icy monolith you can hardly believe your eyes. The colossal wall stretches so far high up that it could not have been created without aid of magic. The elevator creaks and grinds as you make your way up to the frozen battlements, where a lone solitary figure stands, brooding. Yes, this is definitely the Stark Bastard.',
    sceneNorth: 'Ask Jon Snow about how he enjoys being a part of the Watch',
    northGoTo: 27,
    sceneSouth: '"YOU KNOW NOTHING, JON SNOW"',
    southGoTo: 28,
    sceneEast: 'Say Jon, you look an awful like my dearest love Lyanna, except if I were to do some back of the napkin calculations, you would have been born around the same time Ned killed Rhaegar Targaryen in the Tower of Joy... Gods, I was young then.',
    eastGoTo: 30,
    sceneWest: 'Attack Jon Snow',
    westGoTo: 29
    },

    {
    sceneId: 10,
    sceneStaging: '"You were never my brother!" You spit at Ned. "Prepare to die!" Ned shakes his head "After all we have been through together, Robert..."',
    sceneNorth: 'Maybe you ought to reconsider this course of action. It makes zero narrative sense, and also Ned has kept significantly more fit than you into his middle age, and he also wields the Valyrian greatsword Ice...',
    northGoTo: 1,
    sceneSouth: 'Time to show House Stark who their Daddy is. What time is it? It is HAMMER TIME.',
    southGoTo: 19,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 11,
    sceneStaging: 'You head back towards the tail end of the royal entourage and you notice that your er... "son" Joffrey is bullying the Stark girl, Arya! He is waving his sword around threatening her. Do you...',
    sceneNorth: 'Intervene',
    northGoTo: 23,
    sceneSouth: 'Sit back and watch',
    southGoTo: 24,
    sceneEast: 'Ignore the both of them and return to your carriage',
    eastGoTo: 2,
    sceneWest: 'Encourage them to fight, clearly the best decision a parent could be making right now',
    westGoTo: 25
    },

    {
    sceneId: 12,
    sceneStaging: 'You confront Ser Jaime. You ask him "Ser Jaime, have you been fucking my wife, the Queen?" Jaime looks at you squarely in the eyes and responds with a simple "Nope."',
    sceneNorth: '"Come on, cut the bullshit, those who have not read the first book have at least seen the first episode and know that you pushed Bran out the window to preserve the secret of your Wincest!"',
    northGoTo: 18,
    sceneSouth: '"Alright then, I totally believe you, despite the fact that none of my supposed biological children resemble me, as well as my unfortunate penchant for hiring sex workers instead of making love to my scheming bitch of a wife.',
    southGoTo: 2,
    sceneEast: 'Attack Ser Jaime',
    eastGoTo: 18,
    sceneWest: false
    },

    {
    sceneId: 13,
    sceneStaging: 'Oberyn Martell lays dead in front of you, his head crushed into bloody pulp. Fragments of brain and skull still stain your battlehammer.',
    sceneNorth: 'Nothing left to do here in Dorne, return to the crossroads.',
    northGoTo: 0,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 14,
    sceneStaging: 'You reach Kings Landing. After laying with a few whores from a few brothels along the way, you finally reach the Red Keep. Ahhh, home sweet home, after a long journey. Your entourage enters into the throne room and you hoist your fat ass up the steps and drop yourself onto the Iron Throne with a sigh. You think you poked your butt. Reclining uncomfortably against the heap of melted swords, you ponder your next move.',
    sceneNorth: 'Valor Dohaeris, Valor Morghulis. What is HYPE may never die. There is only one thing left to do and that is.. CLEEEEGAAANNEEEBOOOWWWLLLL <airhorn sounds>',
    northGoTo: 16,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 15,
    sceneStaging: '"I warned you this would happen, back in the North. I warned you, but you dinnae care to hear. Well hear it now. I want them both DEAD! Mother and child both, and that fool Viserys as well. Is that plain enough for you? I want them both dead." Ned scowls, "You will dishonor yourself forever if you do this." Upon his utterance a rage fills your chest and you cannot help but howl "Honor? I have got seven kingdoms to rule! One King, Seven Kingdoms! Do you think honor keeps them in line? Do you think it is keeping the peace? It is FEAR! Fear, and blood!" Ned looks stunned, "Then we are no better than the Mad King!" "Careful, Ned", you growl, "careful now!" For some odd reason you feel a sensation of wellbeing, like you have done something right.',
    sceneNorth: 'Refuse to speak to Ned in sullen silence until the two of you reach the South.',
    northGoTo: 14,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false,
    },

    {
    sceneId: 16,
    sceneStaging: '<airhorn sounds> "Everybody GET HYPE. Because it is time for CLEGANEBOWL!" you roar. From the Mud Gate to the Old, the entirety of the city leaps with jubilation. Among blasts of anachronical airhorns, every Lord, Lady, and peasant gathers onto the great Dragon Pit to watch. A tingle of frisson shoots up your spine, and you feel like you have done something right by organizing this event.',
    sceneNorth: 'Watch with rapt attention as the Hound and the Mountain get into position in the arena.',
    northGoTo: 42,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false,
    },

    {
    sceneId: 17,
    sceneStaging: 'You decide to legimitize all your bastards. You are not sure exactly WHO you have fathered, so you consult with Varys. Varys tells you that you should probably start with the Blacksmith. You go to the Street of Steel and talk to Tohbo Mott the Blacksmith, and ask for Gendry. "Oi, Gendry!" He yells. A sullen looking youth emerges from the backroom, looking at you with stern eyes. "I know who you are" he said, "And I have no desire to be your heir."',
    sceneNorth: 'The impudence! You are the damn King, will you allow that kind of sass from a bastard? Hammer time baby.',
    northGoTo: 26,
    sceneSouth: 'Well, you are already back home in the capital, might as well find some whores to lay with. Maybe the next bastard will not be so damn pissy!',
    southGoTo: 14,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 18,
    sceneStaging: 'Well this is fucked. You have slain your own Kingsguard and brother-in-law. The body of Jaime Lannister lays broken at your feet, shattered from the trauma of repeated heavy blunt force. You will be sleeping in the doghouse tonight...',
    sceneNorth: 'Return to your entourage and continue travelling on the Kingsroad',
    northGoTo: 2,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 19,
    sceneStaging: 'Good job slaying your best friend and only ally, you psychotic fuck. Ned lays dead at your feet, his body crushed and mangled by repeated warhammer strikes.',
    sceneNorth: 'Return to the crossroads. You get the feeling that you now have severely limited options for the rest of this playthrough.',
    northGoTo: 0,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 20,
    sceneStaging: 'You have miraculously slaughtered every last one of the Dothraki. On an open field, no less. Limbs, both human and equine, lay strewn everywhere. You are either supremely lucky, or you cheated by altering variables using the javascript console.',
    sceneNorth: 'Return to the crossroads... but despite your blood slicked armor and the battle rage still pulsing through your veins, you cannot help but shake a dreadful knot at the pit of your stomach, as if you had cheated the Seven Gods themselves, and that you will be punished for it.',
    northGoTo: 0,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 21,
    sceneStaging: 'Your Grace, and my dear brother-in-law, by the Gods would I be happy to drink with you. Or with anyone for that matter, including myself. Say, would you like to partake in a drinking game?',
    sceneNorth: 'Why, yes indeed I do my good dwarf.',
    northGoTo: 22,
    sceneSouth: 'Despite the fact that both my stature and body mass index are both many times greater than yours, I have the feeling that this will somehow be lethal. I shall pass.',
    southGoTo: 8,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 22,
    sceneStaging: 'You are in some dingy pub deep within the hearth of Casterly Rock. Poor Tyrion lays on the cobblestone floor of the tavern, his clothes soaked with blood and vomit. Well, it could be worse, Cersei will not be upset about this, at least.',
    sceneNorth: 'Return to the crossroads.',
    northGoTo: 0,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 23,
    sceneStaging: '"Oi!", you yell, "stop that, boy!" But before Joffrey can react, the Stark girl has sicced her young direwolf on your er... son! You push the direwolf off of Joffrey, and now she has turned her attention to you...',
    sceneNorth: 'Time for a hunt! Show this wolf the horns, baby, because OURS IS THE FURY!!!',
    northGoTo: 32,
    sceneSouth: 'Run like the coward, and idiot (you really think you can outrun her??) you are!',
    southGoTo: 32,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 24,
    sceneStaging: 'Remembering that the Stark girl has a fucking DIREWOLF protecting her, you find a good stump to sit on and bellow with laughter as Nymeria leaps out of some hidden niche of the woods, delivering a nasty bite to Joffs sword hand. Shrieking like the little bitch that he is, Joffrey squeals "Help, me Father!" but you just cannot stop laughing as Nymeria proceeds to maul Joffrey. Before you know it the wolf has torn through the throat of the heir apparent to the Iron Throne. Oh well, no loss. Joffrey was always a bit of a cunt. Arya stands there shocked and trembling, soaked in blood. You throw an arm over the poor girl to comfort her. For some reason a warm, kingly glow fills your heart, like this was a tremendously beneficial turn of events for the Realm.',
    sceneNorth: 'Comfort Arya.',
    northGoTo: 35,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 25,
    sceneStaging: '"Come on, boy! Make yer Daddy proud!" you yell, "Show this whelp what yer MADE OF!" Your encouragement seems to ignite a fire within the boy, craven for attention, validation, and acknowledgement from his father. With a yell he cries "Hear Me Roar!" ...which is weird because that is the Lannister motto and not the Baratheon "Ours is the Fury"... before he lunges and stabs Arya right through the chest. The girl goes white, a trickle of blood escapes the corner of her lips indicating her lungs must have been pierced and are now filling up with blood, and she promptly collapses. But before you can admonish your idiot child for going too far, a direwolf leaps out of the woods and mauls him to death.',
    sceneNorth: 'Oh shit. It seems as if both children are dead now. Best not tell anyone...',
    northGoTo: 36,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 26,
    sceneStaging: 'The shattered and broken body of your blood and flesh lies ruined at your feet. Gendry Baratheon, rightful heir to the Iron Throne, is dead (you legitimized him remember). Gods damn it, Bobby.',
    sceneNorth: 'Whoops! Well, might as well get out of the Street of Steel and return to the Red Keep.',
    northGoTo: 14,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 27,
    sceneStaging: '"So, lad, how would you rate the experience of being a member of the Watch?" Jon demurs, "Well, we are not allowed to have sex..." The awkward silence that follows says everything.',
    sceneNorth: 'Boy it really makes me count my blessings. Of course I just happen to be the King, the most powerful man in all of Westeros, so...',
    northGoTo: 40,
    sceneSouth: 'Ask Jon something else...',
    southGoTo: 9,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 28,
    sceneStaging: '"Oi!" a voice cries out from the wilderness, "Only I get to say that!" And before you know it, a foxy, redheaded Wilding Lass pops out with an arrow strung in her bow, levelled right at you. You close your eyes and say your final prayers to the Seven, but all of a sudden you hear a heavy THUNK, and when you open your eyes an arrow is sticking out of the left breast of the Wilding! You turn to look for your savior and see a 13 year old boy still holding the bow from which he loosed the killing arrow, and he nods at you.',
    sceneNorth: 'FUCK YOU OLLY, DIE!!!',
    northGoTo: 37,
    sceneSouth: 'Thank the young steward of the watch, and go on your merry way back to the South',
    southGoTo: 14,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 29,
    sceneStaging: 'Woah woah woah woah woah!! Are you sure about this?? Jon is a lot younger than you and likely more physically capable.',
    sceneNorth: 'That Crow training is nothing but shit. Experience will win out any day. STOP. Hammer time!',
    northGoTo: 31,
    sceneSouth: 'Hmm... maybe just ask Jon something else instead...',
    southGoTo: 9,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 30,
    sceneStaging: 'You unconsciously utter "Say Jon, you look an awful like my dearest love Lyanna, except if I were to do some back of the napkin calculations, you would have been born around the same time Ned killed Rhaegar Targaryen in the Tower of Joy... Gods, I was young then.", but before you can even comprehend the spoiler it is too late. The eyes of Jon Snow widen, as the question of his parentage that he has struggled with his whole life suddenly becomes clear. R+L=J. HE is the son of Rhaegar Targaryen, the true King of Westeros, not you, the Usurper King Robert Baratheon! His body explodes into brilliant flame, melting a crater around the ice where he stood, and out from the flame emerges... AEGON TARGARYEN, AZOR AHAI, THE PRINCE WHO WAS PROMISED. This godly being turns his eyes upon you, lit by some magical glow that sears into your soul like hot coals, and says simply "PREPARE FOR GREAT JUSTICE, USURPER."',
    sceneNorth: 'Oh, fuck.',
    northGoTo: 38,
    sceneSouth: 'W- wait... you mean to say... you mean to say my dear Lyanna... she *loved* Rhaegar?! And... and this is their CHILD?! O.I.T.F HAMMER TIME, BITCH!!! KILL THIS FUCKER!!',
    southGoTo: 38,
    sceneEast: 'Tell Azor Ahai that you yield. Kneel and relinquish the Iron Throne, then return to Kings Landing.',
    eastGoTo: 39,
    sceneWest: false
    },

    {
    sceneId: 31,
    sceneStaging: 'Despite a valiant struggle, Jon Snow is dead. His fractured bones, broken jaw, and battered flesh lay in a crumpled heap. Well, at least Ned did not see. Time to get the fuck out of here.',
    sceneNorth: 'No one is going to miss a member of the Watch. But hurry back South, just in case.',
    northGoTo: 14,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false,
    },

    {
    sceneId: 32,
    sceneStaging: '"OURS IS THE FURY!!" you roar as you continue to bludgeon the corpse of the beast, long after its skull has been crushed to pulp. Joffrey already fled to cry to his mother, but Arya stands there sobbing "No!!! No!! Stop!!" but the thrill of fighting a bloody DIREWOLF has gotten you into a berserker frenzy so you keep hammering away. "STOP!!" You turn and realise that the young girl now has a thin sword levelled directly at you.',
    sceneNorth: 'OURS IS THE FURY!!! <berserker rage intensifies>',
    northGoTo: 33,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 33,
    sceneStaging: 'Now you are flailing away with your hammer on the smashed up remains of a young girl. Great job, Bobby B, doing real kingly work here. As your berserker trance fades your eyes focus to reveal the visage of a furious Ned, "WHAT HAVE YOU DONE TO MY DAUGHTER?!" he cries, before drawing his Valyrian Greatsword and charging right at you!!',
    sceneNorth: '"BRING IT ON, NED!! BRING IT ON!!" <continue berserking>',
    northGoTo: 34,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 34,
    sceneStaging: 'Good job slaying your best friend and only ally, you psychotic fuck. Ned lays dead at your feet, his body crushed and mangled by repeated warhammer strikes.',
    sceneNorth: 'Get on it with it before I piss meself, I just bloody killed his little girl, you think this is going to faze me?',
    northGoTo: 14,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 35,
    sceneStaging: '"Aye, there, there, girl. Calm yeself." you speak, softly, to Arya. Your great big bear hug slowly eases her trembles and you gently place her back down on the ground. "You are not upset that Nymeria killed Joffrey?" Arya asks you, puzzled. "Nah, he was always a bit of a cunt." you say. She chortles and says, "Yeah! You are right about that." And with a whistle, the both of you rejoin the caravan, making sure to claim that neither of you had seen Joffrey since he wandered off for a piss.',
    sceneNorth: 'Onwards! Back to the Kingsroad! Many important things to discuss with your Hand, specifically Daenarys Targaryen.',
    northGoTo: 4,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 36,
    sceneStaging: 'Well this is pretty awful. Both children are dead and Nymeria is still here gnawing on the mutilated and eviscerated corpse of Joffrey.',
    sceneNorth: 'Whistle and walk away slowly...',
    northGoTo: 4,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 37,
    sceneStaging: 'Well, you killed that traitorous little shit Olly, except... before he actually betrayed anyone. So. Uh. Good job? Good job. Fuck Olly.',
    sceneNorth: 'I think our work here up North is done, time to go home and take a well needed break, perhaps entertain myself with some much hyped gladiatorial combat.',
    northGoTo: 14,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 38,
    sceneStaging: 'Tsk. Tsk. There is simply no way you got here without cheating. Just to make this playthrough extra painful for you I will have you know that I just massively deducted your score.',
    sceneNorth: 'Go to Kings Landing. No fanciful choice descriptions for you, cheater.',
    northGoTo: 14,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 39,
    sceneStaging: '"I yield! I yield!" you cry out, and drop to your knees. "I kneel to you, Your Grace! King Aegon Targaryen, the True King of the Andals and the First Realm, Lord Protector of the Realm!" As suddenly as he transformed, the godlike avatar of Azor Ahai himself suddenly reverts to his good old Kit Harington looking self, and says simply "Oh, chill! Yo we better roll over to the Landing and get dis CLEGANEBOWL STARTED! HAAAIIIIYYYYPE" The two of you high five.',
    sceneNorth: 'BACK TO KINGS LANDING!! FOR CLEGANEBOWL!! FOR THE HYPE!!',
    northGoTo: 14,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 40,
    sceneStaging: '"Boy it really makes me count my blessings. Of course I just happen to be the King, the most powerful man in all of Westeros, so..." Jon just furrows his brow and turns away from you. You insensitive dick.',
    sceneNorth: 'Fuck this place, return South, where it is nice and warm and full of women, not this horrible sausagefest.',
    northGoTo: 14,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 41,
    sceneStaging: 'The Hound and the Mountain square off at the center of the Dragon Pit. They raise their swords, but before they can clash a yell erupts from the audience! "YOU RAPED HER, YOU KILLED HER, YOU MURDERED HER CHILDREN!" Prince Oberyn Martell leaps out from among the audience! With panache, I might add. He flourishes his spear, takes a swig from his flask, points his finger at Lord Tywin Lannister, and screams "WHO GAVE THE ORDER?!" He turns towards the Mountain, flourishes his spear yet again, and screams once more "WHO GAVE THE ORDER?!" This is going to be spicy. The first few rounds are quick, a few parries, a few swings. "YOU RAPED HER, YOU KILLED HER, YOU MURDERED HER CHILDREN!" The Mountain knocks Oberyn back but with a quick roll he is able to land a slicing attack on the right leg of the Mountain. The Mountain buckles, his hamstring sliced apart, and Oberyn dives in for the kill. "CONFESS!! YOU RAPED HER, YOU KILLED HER, YOU MURDERED HER CHILDREN!" He plunges the tip of his spear into the chest of the Mountain, and then circles him, demanding that he "CONFESS! WHO GAVE YOU THE ORDER!!" But just as Oberyn glances away, the Mountain snaps to action and throws him to the ground! With both hands clasped on his face, the Mountain growls "ELIA MARTELL, I RAPED HER, I KILLED HER CHILDREN, AND THEN... I CRUSHED HER HEAD IN LIKE THIS!!" He shoves both thumbs through the eye sockets as Oberyn shrieks in pain, and then crushes his skull like a peach, before collapsing himself. The crowd erupts in jubiliation at the carnage. Qyburn jumps into the stage with a few of his servants and speaks to the crowd "CLEGANEBOWL WILL BE RIGHT BACK!" They cart off the Mountain and fifteen minutes later he is back in the arena, helmet over his face, standing there... kind of dazed and almost... zombie-like. The Hound, who has been sitting on the sidelines watching this spectacle, stands up and snarls "Well its about fooking time", before striding up to square off against his now undead brother.',
    sceneNorth: 'Well that ended... exactly the way we expected it to. ON WITH CLEGANEBOWL!',
    northGoTo: 43,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 42,
    sceneStaging: 'The Hound and the Mountain. The most epic fight of all time. CLEGANEBOWL. You tremble with excitement, almost in disbelief that this is actually happening.',
    sceneNorth: 'HYPE.',
    northGoTo: 44,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 43,
    sceneStaging: 'The crowd is going wild. This is CLEGANEBOWL PRIME!!! MAXIMUM HYPE!! Not only is this conflict - the Hound vs. the Zombie Mountain - the only possible remaining CLEGANEBOWL that could happen in the Westeros Prime Dimension, but it is actually much more evenly matched than vanilla Cleganebowl!',
    sceneNorth: 'HYYYYYYYYYYYYYYYYYYY- (deep breath) -YYYYYPE!!!!',
    northGoTo: 45,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 44,
    sceneStaging: 'Sandor Clegane lies dead on the arena, and the Mountain has not even taken a scratch!! It is time to step up, Bobby! FINISH HIM!',
    sceneNorth: 'Bring me my mail-stretcher, because it is HAMMER TIME, BIIIIIIIITCH!!!',
    northGoTo: 46,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 45,
    sceneStaging: 'Sandor Clegane lies dead on the arena, but the Zombie Mountain has been grievously injured!! It is time to step up, Bobby! FINISH HIM!',
    sceneNorth: 'Bring me my mail-stretcher, because it is HAMMER TIME, BIIIIIIIITCH!!!',
    northGoTo: 47,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 46,
    sceneStaging: 'Exhausted, you drop your hammer after you fell the monstrous man, and collapse. The world fades and shrinks, as you pass out amidst the cheers and whoops from the people of Your Landing. When you awake, you are in the master bedroom of the Red Keep, and you sigh heavily. The Realm will be alright. Your squire, Lancel Lannister, enters your room and then asks you "Some wine before your hunt?" You are about to accept when suddenly a giant boar the size of a direwolf (a direboar?) bursts through the walls of your bedchambers and impales you painfully on its tusk, and you bleed to death with the dry thirst for wine still on your lips, unslaked.',
    sceneNorth: 'Gods damn it, this is the bad ending because I cheated, innit?',
    northGoTo: 48,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 47,
    sceneStaging: 'Exhausted, you drop your hammer after you fell the undead beast, and collapse. The world fades and shrinks, as you pass out amidst the cheers and whoops from the people of Your Landing. When you awake, you are in the master bedroom of the Red Keep, and you sigh heavily. The Realm will be alright. Your squire, Lancel Lannister, enters your room and then asks you "Some wine before your hunt?"',
    sceneNorth: 'Well that sounds like a damn good idea if you have ever heard one.',
    northGoTo: 48,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    },

    {
    sceneId: 48,
    sceneStaging: 'Congratulations! You are a winrar. You have beaten the game and reached the final ending. Thank you for playing Adventures of Bobby B, designed and developed by Ian Woo.',
    sceneNorth: false,
    sceneSouth: false,
    sceneEast: false,
    sceneWest: false
    }
]