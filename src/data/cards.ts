import { GameCard } from '../types';

export const cards: GameCard[] = [
  // ═══════════════════════════════════════════════════════════════
  // DO CARDS — silly dares, physical comedy, performances
  // Designed to be EASY and FUN for close friend groups
  // ═══════════════════════════════════════════════════════════════

  // Intensity 1 — light, instant fun
  { id: 'd001', type: 'do', text: 'Do your best impression of someone in this room. Everyone guesses who it is.', minPlayers: 2, intensity: 1 },
  { id: 'd002', type: 'do', text: 'Speak in a British accent for the next two rounds. Break character and you drink.', minPlayers: 2, intensity: 1 },
  { id: 'd003', type: 'do', text: 'Do your best celebrity impression. If nobody can guess who it is, you drink.', minPlayers: 2, intensity: 1 },
  { id: 'd004', type: 'do', text: 'Sing the chorus of any song right now. Full commitment or you drink double.', minPlayers: 2, intensity: 1 },
  { id: 'd005', type: 'do', text: 'Do 10 pushups right now. Every one you can\'t finish = one sip.', minPlayers: 2, intensity: 1 },
  { id: 'd006', type: 'do', text: 'Make your best animal noise. Group votes if it\'s accurate. Fail = drink.', minPlayers: 2, intensity: 1 },
  { id: 'd007', type: 'do', text: 'Talk in the third person for the next three rounds. Slip up and you drink.', minPlayers: 2, intensity: 1 },
  { id: 'd008', type: 'do', text: 'Do your best TikTok dance right now. No music needed. Just vibes.', minPlayers: 2, intensity: 1 },
  { id: 'd009', type: 'do', text: 'Act out the last thing you ate as a charade. Group guesses.', minPlayers: 2, intensity: 1 },
  { id: 'd010', type: 'do', text: 'Give the person to your left a genuine compliment. Make it real.', minPlayers: 2, intensity: 1 },
  { id: 'd011', type: 'do', text: 'Say the alphabet backwards. You have 20 seconds. Every mistake = one sip.', minPlayers: 2, intensity: 1 },
  { id: 'd012', type: 'do', text: 'Do your best catwalk across the room. Full model energy.', minPlayers: 2, intensity: 1 },
  { id: 'd013', type: 'do', text: 'Try to juggle three random objects for 10 seconds. Anything counts.', minPlayers: 2, intensity: 1 },
  { id: 'd014', type: 'do', text: 'Make direct eye contact with the person across from you. First to laugh drinks.', minPlayers: 2, intensity: 1 },
  { id: 'd015', type: 'do', text: 'Give a 20-second motivational speech about something completely stupid.', minPlayers: 2, intensity: 1 },
  { id: 'd016', type: 'do', text: 'Do your best robot dance for 15 seconds. Group rates your performance.', minPlayers: 2, intensity: 1 },
  { id: 'd017', type: 'do', text: 'Hold a plank for 30 seconds while everyone roasts you. Collapse = drink.', minPlayers: 2, intensity: 1 },
  { id: 'd018', type: 'do', text: 'Say something nice about every person in the room. No repeating compliments.', minPlayers: 2, intensity: 1 },
  { id: 'd019', type: 'do', text: 'Whisper everything you say for the next two rounds. Get caught at normal volume = drink.', minPlayers: 2, intensity: 1 },
  { id: 'd020', type: 'do', text: 'Strike the most dramatic pose you can. Hold it for 10 seconds while everyone takes it in.', minPlayers: 2, intensity: 1 },
  { id: 'd021', type: 'do', text: 'Beatbox for 15 seconds. Doesn\'t matter if you\'re bad. Actually, it\'s funnier if you\'re bad.', minPlayers: 2, intensity: 1 },
  { id: 'd022', type: 'do', text: 'Moonwalk across the room. Style points count.', minPlayers: 2, intensity: 1 },
  { id: 'd023', type: 'do', text: 'Do your best "angry parent" voice and lecture someone in the room about literally anything.', minPlayers: 2, intensity: 1 },
  { id: 'd024', type: 'do', text: 'Narrate everything you do for the next minute like a nature documentary.', minPlayers: 2, intensity: 1 },
  { id: 'd025', type: 'do', text: 'You can only communicate through interpretive dance for the next round.', minPlayers: 2, intensity: 1 },
  { id: 'd026', type: 'do', text: 'Balance a cup on your head for the next player\'s entire turn. It falls = you drink.', minPlayers: 2, intensity: 1 },
  { id: 'd027', type: 'do', text: 'Give a 20-second TED Talk about why the person to your right is a legend.', minPlayers: 2, intensity: 1 },
  { id: 'd028', type: 'do', text: 'Attempt to do the worm. Any attempt counts. Effort is what matters.', minPlayers: 2, intensity: 1 },
  { id: 'd029', type: 'do', text: 'Sell the object closest to you like you\'re on a home shopping network. 20 seconds. Go.', minPlayers: 2, intensity: 1 },
  { id: 'd030', type: 'do', text: 'Do your best slow-motion replay of something dramatic. Sound effects included.', minPlayers: 2, intensity: 1 },

  // Intensity 2 — medium, personal but fun
  { id: 'd031', type: 'do', text: 'Give a 30-second roast of the person to your right. Make it funny, not mean.', minPlayers: 2, intensity: 2 },
  { id: 'd032', type: 'do', text: 'Admit the most childish thing you still do. No judgment zone (kind of).', minPlayers: 2, intensity: 2 },
  { id: 'd033', type: 'do', text: 'Tell the group about your most embarrassing moment. Don\'t hold back.', minPlayers: 2, intensity: 2 },
  { id: 'd034', type: 'do', text: 'Freestyle rap for 20 seconds about the person to your left.', minPlayers: 2, intensity: 2 },
  { id: 'd035', type: 'do', text: 'Give a dramatic movie trailer narration about someone in this room\'s life. Use your deepest voice.', minPlayers: 2, intensity: 2 },
  { id: 'd036', type: 'do', text: 'Recreate a viral TikTok or meme right now. Group judges your performance.', minPlayers: 2, intensity: 2 },
  { id: 'd037', type: 'do', text: 'Tell the group about the worst date you\'ve ever been on. Spare no details.', minPlayers: 2, intensity: 2 },
  { id: 'd038', type: 'do', text: 'Do an impression of your boss or professor. Make it good.', minPlayers: 2, intensity: 2 },
  { id: 'd039', type: 'do', text: 'Admit the last time you lied to get out of plans. Who was it and what was the excuse?', minPlayers: 2, intensity: 2 },
  { id: 'd040', type: 'do', text: 'Let the group pick a song. You have to slow dance with the person to your right for the chorus.', minPlayers: 2, intensity: 2 },
  { id: 'd041', type: 'do', text: 'Share a hot take that might make someone in this room mad. If no one reacts, you drink.', minPlayers: 2, intensity: 2 },
  { id: 'd042', type: 'do', text: 'Describe your type in three words. Group decides if it\'s delusional.', minPlayers: 2, intensity: 2 },
  { id: 'd043', type: 'do', text: 'Rate everyone in the room from funniest to least funny. Out loud. Own it.', minPlayers: 2, intensity: 2 },
  { id: 'd044', type: 'do', text: 'Admit something you\'ve been overthinking lately. If the group thinks you\'re right to worry, you drink.', minPlayers: 2, intensity: 2 },
  { id: 'd045', type: 'do', text: 'Let the person across from you draw something on your arm with a pen. It stays for the night.', minPlayers: 2, intensity: 2 },
  { id: 'd046', type: 'do', text: 'Give a dramatic reading of your last sent text like it\'s an Oscar acceptance speech.', minPlayers: 2, intensity: 2 },
  { id: 'd047', type: 'do', text: 'The group gives you three random words. Tell a story using all three in 30 seconds.', minPlayers: 2, intensity: 2 },
  { id: 'd048', type: 'do', text: 'Say "I love you" to the person on your left without breaking eye contact for 10 seconds.', minPlayers: 2, intensity: 2 },
  { id: 'd049', type: 'do', text: 'You\'re a news anchor. Give a 20-second breaking news report about something that happened tonight.', minPlayers: 2, intensity: 2 },
  { id: 'd050', type: 'do', text: 'Reveal the last lie you told someone in this room. Face the consequences.', minPlayers: 2, intensity: 2 },
  { id: 'd051', type: 'do', text: 'Act out a scene from a movie. Everyone has to guess what movie it is.', minPlayers: 2, intensity: 2 },
  { id: 'd052', type: 'do', text: 'Take a bite of the weirdest food combination the group comes up with (from what\'s available).', minPlayers: 2, intensity: 2 },
  { id: 'd053', type: 'do', text: 'The group picks a genre (horror, romance, comedy). Narrate the next 30 seconds of everyone\'s life in that style.', minPlayers: 2, intensity: 2 },
  { id: 'd054', type: 'do', text: 'Admit the most embarrassing song on your playlist. Then play it. Own it.', minPlayers: 2, intensity: 2 },
  { id: 'd055', type: 'do', text: 'Tell the group about the last time you cried and why. No shame.', minPlayers: 2, intensity: 2 },

  // Intensity 3 — bold, no holding back
  { id: 'd056', type: 'do', text: 'Rank everyone in the room from best to worst dressed. Out loud. Defend your choices.', minPlayers: 2, intensity: 3 },
  { id: 'd057', type: 'do', text: 'Tell the group a secret you\'ve never told anyone in this room. For real.', minPlayers: 2, intensity: 3 },
  { id: 'd058', type: 'do', text: 'Admit your biggest insecurity. The group has to hype you up after.', minPlayers: 2, intensity: 3 },
  { id: 'd059', type: 'do', text: 'The group asks you three rapid-fire personal questions. Answer honestly or drink for each skip.', minPlayers: 2, intensity: 3 },
  { id: 'd060', type: 'do', text: 'Describe everyone in this room\'s dating life using only one word each. Explain yourself.', minPlayers: 2, intensity: 3 },
  { id: 'd061', type: 'do', text: 'Tell the group the most embarrassing thing someone in this room has done that they think nobody remembers.', minPlayers: 2, intensity: 3 },
  { id: 'd062', type: 'do', text: 'Who in this room would you trust with your deepest secret? And who would you NOT? Say it.', minPlayers: 2, intensity: 3 },
  { id: 'd063', type: 'do', text: 'Go around the room and say one thing you\'d change about each person if you could. Be honest but not cruel.', minPlayers: 2, intensity: 3 },
  { id: 'd064', type: 'do', text: 'Confess something you did that you got away with. The group is your jury now.', minPlayers: 2, intensity: 3 },
  { id: 'd065', type: 'do', text: 'Admit the pettiest thing you\'ve done recently. We want details.', minPlayers: 2, intensity: 3 },

  // ═══════════════════════════════════════════════════════════════
  // GROUP CARDS — everyone participates, instant energy
  // ═══════════════════════════════════════════════════════════════

  // Intensity 1
  { id: 'g001', type: 'group', text: 'Categories: name fast food restaurants. Go around. First to repeat or hesitate drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g002', type: 'group', text: 'Rock-paper-scissors tournament. Everyone pairs up. Losers drink each round until one champion remains.', minPlayers: 2, intensity: 1 },
  { id: 'g003', type: 'group', text: 'Everyone say one word to build a sentence. Go clockwise. Whoever says something that doesn\'t make sense drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g004', type: 'group', text: 'Staring contest. Everyone pairs up. Losers drink.', minPlayers: 2, intensity: 1 },
  { id: 'g005', type: 'group', text: 'Categories: dating app red flags. Go around. First to hesitate or repeat drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g006', type: 'group', text: 'Everyone say the first word that comes to mind on the count of three. Anyone who says the same word as someone else — both drink.', minPlayers: 2, intensity: 1 },
  { id: 'g007', type: 'group', text: 'Tongue twister challenge. The current player picks one. Go around. Mess it up and drink.', minPlayers: 2, intensity: 1 },
  { id: 'g008', type: 'group', text: 'Floor is lava! Last person to get their feet off the ground drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g009', type: 'group', text: 'Categories: things you\'d find in a college dorm. Hesitate or repeat = drink.', minPlayers: 2, intensity: 1 },
  { id: 'g010', type: 'group', text: 'Rhyme time: the current player says a word. Go clockwise rhyming. Break the chain and drink.', minPlayers: 2, intensity: 1 },
  { id: 'g011', type: 'group', text: 'Everyone puts a thumb on the table. Last person to notice and do it drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g012', type: 'group', text: 'Lightning round: go clockwise. Everyone has 3 seconds to name a celebrity. Repeat or hesitate = drink.', minPlayers: 2, intensity: 1 },
  { id: 'g013', type: 'group', text: 'Speed round: name song lyrics from any song. Can\'t think of one in 3 seconds? Drink.', minPlayers: 2, intensity: 1 },
  { id: 'g014', type: 'group', text: 'Categories: things you\'d say to your ex. Go around. Hesitate = drink. Repeat = double drink.', minPlayers: 2, intensity: 1 },
  { id: 'g015', type: 'group', text: 'Everyone close your eyes. Point to the person you think is most likely to become famous. Most votes gives out drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g016', type: 'group', text: 'Story chain: current player says one sentence of a story. Go clockwise. Each person adds one sentence. Whoever ruins the story drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g017', type: 'group', text: 'Everyone share their go-to karaoke song. Group votes on worst taste. That person drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g018', type: 'group', text: 'Categories: excuses for being late. Best excuse gives out drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g019', type: 'group', text: 'Fake fact challenge: everyone states something that sounds true but might be made up. Go around calling "real" or "fake." Wrong call = drink.', minPlayers: 2, intensity: 1 },
  { id: 'g020', type: 'group', text: 'Everyone share one unpopular opinion. Group votes on the worst take. That person drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g021', type: 'group', text: 'Everyone share one irrational fear. Group votes on the most ridiculous. That person drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g022', type: 'group', text: 'Categories: things your parents would be disappointed to find out. Can\'t think of one = drink.', minPlayers: 2, intensity: 1 },
  { id: 'g023', type: 'group', text: 'Emoji storytelling: current player picks 5 emojis. Everyone else guesses the story. Worst guess drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g024', type: 'group', text: 'Everyone share the most random skill they have. Best demonstration wins. Everyone else drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g025', type: 'group', text: 'Categories: things you\'d bring to a desert island. First to hesitate or repeat drinks.', minPlayers: 2, intensity: 1 },

  // Intensity 2
  { id: 'g026', type: 'group', text: 'Two truths and a lie. Current player goes. Anyone who guesses wrong drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g027', type: 'group', text: 'Everyone share their most embarrassing autocorrect fail. Group votes — best story gives out drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g028', type: 'group', text: 'Everyone name their celebrity hall pass. Anyone who picks the same person — both drink.', minPlayers: 2, intensity: 2 },
  { id: 'g029', type: 'group', text: 'Waterfall. Everyone starts drinking at the same time. You can only stop when the person before you stops. Current player controls the flow.', minPlayers: 2, intensity: 2 },
  { id: 'g030', type: 'group', text: 'Everyone share one thing on their bucket list. Group votes on the most boring one. That person drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g031', type: 'group', text: 'Truth or drink: everyone in the circle asks the current player one question. Skip = drink.', minPlayers: 2, intensity: 2 },
  { id: 'g032', type: 'group', text: 'Everyone describe their "type" in three words. Group votes on whose is most unrealistic. That person drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g033', type: 'group', text: 'Trivia about the current player: they ask a question about themselves. Everyone guesses. Wrong answers drink.', minPlayers: 2, intensity: 2 },
  { id: 'g034', type: 'group', text: 'Never have I ever — with fingers. Start with 5. Go around. First to put all fingers down finishes their drink.', minPlayers: 2, intensity: 2 },
  { id: 'g035', type: 'group', text: 'Everyone share the most embarrassing thing they\'ve done while drunk. Group votes on the worst. That person drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g036', type: 'group', text: 'Reverse hot seat: the current player asks everyone ELSE a question. Anyone who refuses to answer drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g037', type: 'group', text: 'Everyone simultaneously point to who in the room has the best style. Person with the fewest votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g038', type: 'group', text: 'Everyone share the weirdest thing about themselves that nobody here would guess. Most surprising one gives out drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g039', type: 'group', text: 'Everyone rate the current player\'s outfit on a scale of 1-10. Average under 7 = current player drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g040', type: 'group', text: 'Everyone write down who in this room they\'d want on their team in a zombie apocalypse. Anyone not chosen drinks.', minPlayers: 2, intensity: 2 },

  // Intensity 3
  { id: 'g041', type: 'group', text: 'Confessional round. Go clockwise. Everyone shares something nobody else in the room knows about them. Pass = drink double.', minPlayers: 2, intensity: 3 },
  { id: 'g042', type: 'group', text: 'Everyone type a confession into their notes app. Pass phones to the left. That person reads it out loud. Guess who wrote each one.', minPlayers: 2, intensity: 3 },
  { id: 'g043', type: 'group', text: 'Everyone anonymously vote on who in this room has the most drama in their life. Reveal at the same time. Most votes has to explain or drink double.', minPlayers: 2, intensity: 3 },
  { id: 'g044', type: 'group', text: 'Everyone share one thing they wish they could say to someone in this room but haven\'t. No names required... unless you want to.', minPlayers: 2, intensity: 3 },
  { id: 'g045', type: 'group', text: 'Everyone shares their honest first impression of the current player. Current player can\'t react until everyone is done.', minPlayers: 2, intensity: 3 },

  // ═══════════════════════════════════════════════════════════════
  // VOTE CARDS — "Most Likely To" and pointing games
  // ═══════════════════════════════════════════════════════════════

  // Intensity 1
  { id: 'v001', type: 'vote', text: 'Everyone points to the person most likely to end up on a reality TV show. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v002', type: 'vote', text: 'Everyone points to who would survive longest on a deserted island. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v003', type: 'vote', text: 'Everyone points to the person most likely to accidentally send a text to the wrong person. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v004', type: 'vote', text: 'Everyone points to the best liar in the room. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v005', type: 'vote', text: 'Everyone points to who would survive a horror movie the longest. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v006', type: 'vote', text: 'Everyone points to who would be the worst roommate. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v007', type: 'vote', text: 'Everyone points to who takes the longest to get ready. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v008', type: 'vote', text: 'Everyone points to who is the pickiest eater. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v009', type: 'vote', text: 'Everyone points to who has the most questionable taste in music. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v010', type: 'vote', text: 'Everyone points to who would be most likely to become president. Most votes gives out drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v011', type: 'vote', text: 'Everyone points to who is most likely to sleep through something important. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v012', type: 'vote', text: 'Everyone points to who has the most main-character energy. Most votes can assign 3 sips to anyone.', minPlayers: 2, intensity: 1 },
  { id: 'v013', type: 'vote', text: 'Everyone points to who would be the best on a cooking show. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v014', type: 'vote', text: 'Everyone points to who is most likely to forget everyone\'s birthday. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v015', type: 'vote', text: 'Everyone points to who is the most dramatic. Most votes has to prove it or drink.', minPlayers: 2, intensity: 1 },
  { id: 'v016', type: 'vote', text: 'Everyone points to the smartest person in the room. Most votes picks who drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v017', type: 'vote', text: 'Everyone points to who has the best laugh. Most votes picks who drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v018', type: 'vote', text: 'Everyone points to who would last the longest without their phone. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v019', type: 'vote', text: 'Everyone points to who talks the most trash. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v020', type: 'vote', text: 'Everyone points to who would accidentally join a cult. Most votes drinks.', minPlayers: 2, intensity: 1 },

  // Intensity 2
  { id: 'v021', type: 'vote', text: 'Everyone points to the biggest flirt in the room. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v022', type: 'vote', text: 'Everyone points to who is most likely to ghost someone. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v023', type: 'vote', text: 'Everyone points to who tells the most exaggerated stories. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v024', type: 'vote', text: 'Everyone points to who has the most chaotic energy. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v025', type: 'vote', text: 'Everyone points to who is most likely to get arrested for something stupid. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v026', type: 'vote', text: 'Everyone points to who would be the worst on a first date. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v027', type: 'vote', text: 'Everyone points to who has the weirdest "type." Most votes has to explain or drink double.', minPlayers: 2, intensity: 2 },
  { id: 'v028', type: 'vote', text: 'Everyone points to who is most likely to say something they regret tonight. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v029', type: 'vote', text: 'Everyone points to who would give the worst wedding toast. Most votes has to give a 15-second mock toast or drink.', minPlayers: 2, intensity: 2 },
  { id: 'v030', type: 'vote', text: 'Everyone points to the person most likely to leave the group chat. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v031', type: 'vote', text: 'Everyone points to who is the worst influence in the group. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v032', type: 'vote', text: 'Everyone points to who would have the most chaotic YouTube channel. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v033', type: 'vote', text: 'Everyone points to who they think secretly judges everyone the most. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v034', type: 'vote', text: 'Everyone points to who has the biggest ego. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v035', type: 'vote', text: 'Everyone points to who would be the worst at keeping a secret. Most votes drinks.', minPlayers: 2, intensity: 2 },

  // Intensity 3
  { id: 'v036', type: 'vote', text: 'Everyone points to who they\'d least want to be stuck in an elevator with. Most votes drinks.', minPlayers: 2, intensity: 3 },
  { id: 'v037', type: 'vote', text: 'Everyone points to who has the most skeletons in their closet. Most votes can share one or drink double.', minPlayers: 2, intensity: 3 },
  { id: 'v038', type: 'vote', text: 'Everyone points to who here has definitely lied about something tonight. Most votes has to confess or drink double.', minPlayers: 2, intensity: 3 },
  { id: 'v039', type: 'vote', text: 'Everyone points to who they think peaked in high school. Most votes drinks. If they agree, everyone else also drinks.', minPlayers: 2, intensity: 3 },
  { id: 'v040', type: 'vote', text: 'Everyone points to who they\'d trust least to hold their phone for a day. Most votes drinks.', minPlayers: 2, intensity: 3 },

  // ═══════════════════════════════════════════════════════════════
  // SOCIAL CARDS — 1v1 challenges, rapid-fire, head-to-head
  // ═══════════════════════════════════════════════════════════════

  // Intensity 1
  { id: 's001', type: 'social', text: 'Pick someone. Staring contest. First to blink or laugh drinks.', minPlayers: 2, intensity: 1 },
  { id: 's002', type: 'social', text: 'Pick someone. Both of you do your best impression of each other. Group votes on the winner. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 's003', type: 'social', text: 'Choose someone. Alternate naming songs by the same artist. First to hesitate drinks.', minPlayers: 2, intensity: 1 },
  { id: 's004', type: 'social', text: 'Pick someone. Thumb war. Loser drinks. Best of one. No rematches.', minPlayers: 2, intensity: 1 },
  { id: 's005', type: 'social', text: 'Choose someone. Both try to make the other laugh. 15 seconds each. Whoever laughs first drinks.', minPlayers: 2, intensity: 1 },
  { id: 's006', type: 'social', text: 'Pick someone. Both close your eyes and guess what color shirt the other is wearing. Wrong = drink.', minPlayers: 2, intensity: 1 },
  { id: 's007', type: 'social', text: 'Choose someone. Alternate naming pizza toppings. Repeat or hesitate = drink.', minPlayers: 2, intensity: 1 },
  { id: 's008', type: 'social', text: 'Pick someone. Both hold an ice cube (or cold drink). First to flinch or put it down drinks.', minPlayers: 2, intensity: 1 },
  { id: 's009', type: 'social', text: 'Choose someone. Arm wrestle. Loser drinks. No excuses.', minPlayers: 2, intensity: 1 },
  { id: 's010', type: 'social', text: 'Pick someone. Both describe each other in three words. Group votes on accuracy. Less accurate one drinks.', minPlayers: 2, intensity: 1 },
  { id: 's011', type: 'social', text: 'Choose someone. Play "finish my sentence." You start, they finish. If it doesn\'t make sense, they drink.', minPlayers: 2, intensity: 1 },
  { id: 's012', type: 'social', text: 'Pick someone. Name as many Marvel or DC characters as you can in 15 seconds each. Fewer = drink.', minPlayers: 2, intensity: 1 },
  { id: 's013', type: 'social', text: 'Choose someone. Both guess each other\'s middle name. Wrong = drink.', minPlayers: 2, intensity: 1 },
  { id: 's014', type: 'social', text: 'Pick someone. Race to see who can find the weirdest Wikipedia article in 20 seconds. Group judges. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 's015', type: 'social', text: 'Choose someone. Compliment duel: alternate genuine compliments about each other. First to hesitate or get awkward drinks.', minPlayers: 2, intensity: 1 },
  { id: 's016', type: 'social', text: 'Pick someone. Both do a TikTok dance. Group judges. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 's017', type: 'social', text: 'Choose someone. Name as many U.S. states as you can in 10 seconds each. Fewer states = drink.', minPlayers: 2, intensity: 1 },
  { id: 's018', type: 'social', text: 'Pick someone. Both of you have 10 seconds to draw a portrait of the other on your phone. Group votes on best likeness. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 's019', type: 'social', text: 'Choose someone. Alternate naming movies the other person has definitely seen. First wrong guess drinks.', minPlayers: 2, intensity: 1 },
  { id: 's020', type: 'social', text: 'Pick someone. Speed round: alternate naming things in each other\'s fridge. First to hesitate drinks.', minPlayers: 2, intensity: 1 },

  // Intensity 2
  { id: 's021', type: 'social', text: 'Pick someone. Roast battle. 15 seconds each. Group votes on the winner. Loser drinks.', minPlayers: 2, intensity: 2 },
  { id: 's022', type: 'social', text: 'Choose someone. Both say one thing you\'ve always wanted to say to the other. If you can\'t think of anything, drink.', minPlayers: 2, intensity: 2 },
  { id: 's023', type: 'social', text: 'Pick someone. Both name one thing that annoys you about the other. If you can\'t, drink.', minPlayers: 2, intensity: 2 },
  { id: 's024', type: 'social', text: 'Choose someone. Both name one thing you admire about the other and one thing that drives you crazy. No sugarcoating.', minPlayers: 2, intensity: 2 },
  { id: 's025', type: 'social', text: 'Pick someone. Both rank how close you are on a scale of 1-10 at the same time. If the numbers don\'t match, lower number drinks.', minPlayers: 2, intensity: 2 },
  { id: 's026', type: 'social', text: 'Choose someone. 60-second debate on a topic the group chooses. Group picks the winner. Loser drinks.', minPlayers: 2, intensity: 2 },
  { id: 's027', type: 'social', text: 'Pick someone. Both guess when the other last cried. Closest guess wins. Loser drinks.', minPlayers: 2, intensity: 2 },
  { id: 's028', type: 'social', text: 'Choose someone. Both share the last lie you told. Group votes on the bigger lie. That person drinks.', minPlayers: 2, intensity: 2 },
  { id: 's029', type: 'social', text: 'Pick someone. Say three things about them — two truths and one lie. If they guess the lie, you drink. If they\'re wrong, they drink.', minPlayers: 2, intensity: 2 },
  { id: 's030', type: 'social', text: 'Choose someone. Both try to name the other\'s top 3 closest friends. Each wrong answer = one sip.', minPlayers: 2, intensity: 2 },
  { id: 's031', type: 'social', text: 'Pick someone. You\'re now lawyers. The group presents a fake crime. The other defends them for 30 seconds. Group jury votes.', minPlayers: 2, intensity: 2 },
  { id: 's032', type: 'social', text: 'Choose someone. Both describe each other\'s "vibe" as if writing a Yelp review. Group rates the accuracy.', minPlayers: 2, intensity: 2 },
  { id: 's033', type: 'social', text: 'Pick someone. Speed round: alternate naming things in each other\'s bedroom. Can\'t think of one? Drink.', minPlayers: 2, intensity: 2 },
  { id: 's034', type: 'social', text: 'Choose someone. Both of you say one word that describes the other\'s dating life. Group judges accuracy. Less accurate drinks.', minPlayers: 2, intensity: 2 },
  { id: 's035', type: 'social', text: 'Pick someone. Both predict what the other will be doing in 5 years. Group decides which prediction is more believable. Loser drinks.', minPlayers: 2, intensity: 2 },

  // Intensity 3
  { id: 's036', type: 'social', text: 'Pick someone. Both share one secret about yourselves the other doesn\'t know. Can\'t think of one? Finish your drink.', minPlayers: 2, intensity: 3 },
  { id: 's037', type: 'social', text: 'Choose someone. Both answer: what\'s one thing you\'d change about the other? Dodging = drink.', minPlayers: 2, intensity: 3 },
  { id: 's038', type: 'social', text: 'Pick someone. Both say what you think the other\'s biggest insecurity is. If you match, both drink.', minPlayers: 2, intensity: 3 },
  { id: 's039', type: 'social', text: 'Choose someone. Both reveal: what\'s something nobody in this room knows about your friendship? If there\'s nothing, both drink.', minPlayers: 2, intensity: 3 },
  { id: 's040', type: 'social', text: 'Pick someone. Honest round: both say one thing you wish the other would stop doing. No hard feelings... hopefully.', minPlayers: 2, intensity: 3 },

  // ═══════════════════════════════════════════════════════════════
  // BONUS CARDS — creative, chaotic, unexpected
  // ═══════════════════════════════════════════════════════════════

  // Performance & improv
  { id: 'x001', type: 'do', text: 'Wikipedia roulette: hit "Random Article." Give a passionate 30-second TED Talk about whatever comes up.', minPlayers: 2, intensity: 1 },
  { id: 'x002', type: 'do', text: 'Type your name into Urban Dictionary. Read the top definition out loud. If it\'s accurate, drink double.', minPlayers: 2, intensity: 1 },
  { id: 'x003', type: 'do', text: 'Ask ChatGPT to roast you based on your first name alone. Read the roast out loud.', minPlayers: 2, intensity: 1 },
  { id: 'x004', type: 'do', text: 'The group picks a word. You can\'t say it for the next 3 rounds. Every time you do, drink.', minPlayers: 2, intensity: 1 },
  { id: 'x005', type: 'do', text: 'Your playlist is on trial. The group picks 3 songs at random. Defend each one or drink for each guilty verdict.', minPlayers: 2, intensity: 1 },
  { id: 'x006', type: 'do', text: 'Use only your non-dominant hand for the next 3 rounds. Spill anything and drink double.', minPlayers: 2, intensity: 1 },
  { id: 'x007', type: 'do', text: 'Set a 2-minute timer. You can\'t speak until it goes off. Communicate only through gestures. Break the rule = drink.', minPlayers: 2, intensity: 1 },
  { id: 'x008', type: 'do', text: 'You have 15 seconds to make everyone in the room laugh. No touching anyone. Fail = drink.', minPlayers: 2, intensity: 1 },
  { id: 'x009', type: 'do', text: 'The group gives you a topic. Rant passionately about it for 20 seconds like it\'s the most important issue of our generation.', minPlayers: 2, intensity: 1 },
  { id: 'x010', type: 'do', text: 'Switch seats with the person who has the closest birthday to yours. Both of you drink.', minPlayers: 2, intensity: 1 },

  // Deep friend energy
  { id: 'x011', type: 'do', text: 'Rank everyone in the room by who you\'d call first in an emergency. Explain your reasoning.', minPlayers: 2, intensity: 2 },
  { id: 'x012', type: 'do', text: 'Tell the group about a time someone in this room really came through for you. Get sentimental.', minPlayers: 2, intensity: 2 },
  { id: 'x013', type: 'do', text: 'What\'s the most unhinged group chat message you\'ve ever sent? Paraphrase it for the group.', minPlayers: 2, intensity: 2 },
  { id: 'x014', type: 'do', text: 'Describe everyone in this room using only a movie character. Defend your casting choices.', minPlayers: 2, intensity: 2 },
  { id: 'x015', type: 'do', text: 'What\'s the funniest thing someone in this room has ever done? Tell the story. They can\'t stop you.', minPlayers: 2, intensity: 2 },
  { id: 'x016', type: 'do', text: 'Give each person in this room a superlative like it\'s yearbook season. "Most likely to..." for everyone.', minPlayers: 2, intensity: 2 },
  { id: 'x017', type: 'do', text: 'Tell the group about the dumbest argument you\'ve had with someone in this room. Bonus if they disagree about how it went.', minPlayers: 2, intensity: 2 },
  { id: 'x018', type: 'do', text: 'If you could only hang out with one person in this room for a week straight, who? And who would you NOT pick? Say it.', minPlayers: 2, intensity: 2 },
  { id: 'x019', type: 'do', text: 'What\'s your honest first impression of someone in this room when you first met them? How wrong were you?', minPlayers: 2, intensity: 2 },
  { id: 'x020', type: 'do', text: 'Admit something petty you\'ve done to someone in this room. Clear the air. Or create new drama.', minPlayers: 2, intensity: 2 },

  // Group chaos
  { id: 'x021', type: 'group', text: 'Everyone Google "Florida man" + their birthday. Read the headline out loud. Best headline assigns drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x022', type: 'group', text: 'Everyone open their keyboard and type "I want" — then tap the middle predictive suggestion 5 times. Read the full sentence. Most unhinged one picks who drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x023', type: 'group', text: 'Musical chairs but with cups. When the music stops, whoever doesn\'t have a cup in hand drinks.', minPlayers: 3, intensity: 1 },
  { id: 'x024', type: 'group', text: 'Speed Wikipedia: everyone picks a random article. 30 seconds to become an expert. Present your topic for 15 seconds. Least convincing expert drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x025', type: 'group', text: 'Everyone type "honestly" into their search bar and show the first autocomplete suggestion. Most concerning one drinks.', minPlayers: 2, intensity: 2 },

  // Wild vote cards
  { id: 'x026', type: 'vote', text: 'Everyone points to who here thinks they\'re funnier than they actually are. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x027', type: 'vote', text: 'Everyone points to who would last longest on a reality dating show. Fewest votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x028', type: 'vote', text: 'Everyone points to who has the most chaotic Notes app. Most votes has to show ONE random note or drink.', minPlayers: 2, intensity: 2 },
  { id: 'x029', type: 'vote', text: 'Everyone points to who would be the best and worst best man/maid of honor. Best = gives out drinks. Worst = drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x030', type: 'vote', text: 'Everyone points to who would survive longest in a horror movie. Person with zero votes finishes their drink.', minPlayers: 2, intensity: 1 },

  // Rapid-fire fun
  { id: 'x031', type: 'social', text: 'Pick someone. Both of you have to answer: if the other person were a dog breed, what would they be? Explain why.', minPlayers: 2, intensity: 1 },
  { id: 'x032', type: 'social', text: 'Choose someone. Both predict what the other\'s most-used emoji is. Check and see. Wrong = drink.', minPlayers: 2, intensity: 1 },
  { id: 'x033', type: 'social', text: 'Pick someone. Both guess each other\'s zodiac sign. Wrong = drink. If you already know, guess their rising sign instead.', minPlayers: 2, intensity: 1 },
  { id: 'x034', type: 'social', text: 'Choose someone. Both of you pick: what Disney character is the other person? Explain. Group votes on best pick. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x035', type: 'social', text: 'Pick someone. Both name the other\'s most annoying habit. If you agree with what they said about you, drink.', minPlayers: 2, intensity: 2 },

  // Party mode
  { id: 'x036', type: 'do', text: 'Challenge anyone in the room to a dance-off. 15 seconds each. Group picks the winner. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x037', type: 'do', text: 'Tell the group your most controversial food opinion. If anyone agrees with you, THEY drink. If nobody agrees, you drink.', minPlayers: 2, intensity: 1 },
  { id: 'x038', type: 'do', text: 'Pick a person. Give them a compliment that\'s so specific and detailed it gets a little weird. Commit to it.', minPlayers: 2, intensity: 1 },
  { id: 'x039', type: 'do', text: 'Speak only in questions for the next two rounds. Any statement = drink.', minPlayers: 2, intensity: 1 },
  { id: 'x040', type: 'do', text: 'Put your music on shuffle. Whatever plays first, you MUST sing along with full energy for 15 seconds.', minPlayers: 2, intensity: 1 },
  { id: 'x041', type: 'do', text: 'Tell the group about the dumbest thing you\'ve ever spent money on. Was it worth it?', minPlayers: 2, intensity: 1 },
  { id: 'x042', type: 'do', text: 'Close your eyes. Describe the outfit of the person across from you in detail. Every wrong detail = one sip.', minPlayers: 2, intensity: 1 },
  { id: 'x043', type: 'do', text: 'What\'s your toxic trait? Admit it. If the group already knew, you drink double.', minPlayers: 2, intensity: 2 },
  { id: 'x044', type: 'do', text: 'Admit something you pretend to like but secretly can\'t stand. If someone in this room likes that thing, they also drink.', minPlayers: 2, intensity: 2 },
  { id: 'x045', type: 'do', text: 'Who in this room would you NOT want as your roommate? Say it. Explain. Accept the consequences.', minPlayers: 2, intensity: 2 },
  { id: 'x046', type: 'group', text: 'Everyone take turns doing their best impression of the current player. Current player picks the winner. Winner gives out drinks.', minPlayers: 3, intensity: 1 },
  { id: 'x047', type: 'group', text: 'Hot take lightning round: go clockwise. Everyone drops a hot take. Group votes thumbs up or down. Every thumbs down = drink.', minPlayers: 2, intensity: 1 },
  { id: 'x048', type: 'group', text: 'Everyone share the weirdest dream they\'ve had recently. Group votes on the wildest one. That person gives out drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x049', type: 'vote', text: 'Everyone points to who in this room gives the best advice. Person with the most votes picks who drinks. Person with zero votes needs better advice.', minPlayers: 2, intensity: 1 },
  { id: 'x050', type: 'vote', text: 'Everyone points to who would be the funniest stand-up comedian. Most votes does a 15-second set or drinks.', minPlayers: 2, intensity: 1 },
];
