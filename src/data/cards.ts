import { GameCard } from '../types';

export const cards: GameCard[] = [
  // ═══════════════════════════════════════════════════════════════
  // DO CARDS — personal dares, phone challenges, social risks
  // ═══════════════════════════════════════════════════════════════

  // Intensity 1 — light, easy
  { id: 'd001', type: 'do', text: 'Show everyone the last photo you took.', minPlayers: 2, intensity: 1 },
  { id: 'd002', type: 'do', text: 'Let the group read your three most recent text messages out loud.', minPlayers: 2, intensity: 1 },
  { id: 'd003', type: 'do', text: 'Do your best impression of the person to your left.', minPlayers: 2, intensity: 1 },
  { id: 'd004', type: 'do', text: 'Speak in an accent of the group\'s choice for the next three rounds.', minPlayers: 2, intensity: 1 },
  { id: 'd005', type: 'do', text: 'Show everyone your Screen Time from yesterday.', minPlayers: 2, intensity: 1 },
  { id: 'd006', type: 'do', text: 'Let someone in the group post one emoji as your Instagram story.', minPlayers: 2, intensity: 1 },
  { id: 'd007', type: 'do', text: 'Show the group the last thing you Googled.', minPlayers: 2, intensity: 1 },
  { id: 'd008', type: 'do', text: 'Do 15 jumping jacks right now. No half-reps.', minPlayers: 2, intensity: 1 },
  { id: 'd009', type: 'do', text: 'Let the group look at your most-used emojis.', minPlayers: 2, intensity: 1 },
  { id: 'd010', type: 'do', text: 'Say the alphabet backwards. You have 30 seconds.', minPlayers: 2, intensity: 1 },
  { id: 'd011', type: 'do', text: 'Show everyone your phone wallpaper and explain why you chose it.', minPlayers: 2, intensity: 1 },
  { id: 'd012', type: 'do', text: 'Let the person across from you go through your camera roll for 10 seconds.', minPlayers: 2, intensity: 1 },
  { id: 'd013', type: 'do', text: 'Stand up and do your best catwalk across the room.', minPlayers: 2, intensity: 1 },
  { id: 'd014', type: 'do', text: 'Show the group the last YouTube video you watched.', minPlayers: 2, intensity: 1 },
  { id: 'd015', type: 'do', text: 'Let the group scroll through your Spotify recently played for 15 seconds.', minPlayers: 2, intensity: 1 },
  { id: 'd016', type: 'do', text: 'Call the last person you texted and tell them you love them.', minPlayers: 2, intensity: 1 },
  { id: 'd017', type: 'do', text: 'Show the group the oldest photo in your camera roll.', minPlayers: 2, intensity: 1 },
  { id: 'd018', type: 'do', text: 'Let someone pick any app on your phone and open it.', minPlayers: 2, intensity: 1 },
  { id: 'd019', type: 'do', text: 'Hold a plank for 30 seconds while the next person takes their turn.', minPlayers: 2, intensity: 1 },
  { id: 'd020', type: 'do', text: 'Show the group the last five people you followed on social media.', minPlayers: 2, intensity: 1 },
  { id: 'd021', type: 'do', text: 'Try to juggle three objects for 10 seconds. Anything counts.', minPlayers: 2, intensity: 1 },
  { id: 'd022', type: 'do', text: 'Sing the chorus of the last song you listened to.', minPlayers: 2, intensity: 1 },
  { id: 'd023', type: 'do', text: 'Let the group pick a filter. Take a selfie with it and keep it as your profile pic for an hour.', minPlayers: 2, intensity: 1 },
  { id: 'd024', type: 'do', text: 'Show everyone your most recent Amazon or online shopping order.', minPlayers: 2, intensity: 1 },
  { id: 'd025', type: 'do', text: 'Do your best dance move. You have exactly 10 seconds.', minPlayers: 2, intensity: 1 },

  // Intensity 2 — medium, socially risky
  { id: 'd026', type: 'do', text: 'Give your phone to the person on your left. They can send one emoji to anyone in your recent messages.', minPlayers: 2, intensity: 2 },
  { id: 'd027', type: 'do', text: 'Read the last DM you sent out loud to the group.', minPlayers: 2, intensity: 2 },
  { id: 'd028', type: 'do', text: 'Show the group your last five Google searches.', minPlayers: 2, intensity: 2 },
  { id: 'd029', type: 'do', text: 'Let the person across from you choose any photo from your camera roll from the last seven days for you to explain.', minPlayers: 2, intensity: 2 },
  { id: 'd030', type: 'do', text: 'Pick someone here and swap phones for 60 seconds. No deleting or posting anything.', minPlayers: 2, intensity: 2 },
  { id: 'd031', type: 'do', text: 'The group chooses a celebrity. DM them exactly three words chosen by the group.', minPlayers: 2, intensity: 2 },
  { id: 'd032', type: 'do', text: 'Let the group choose one person in your contacts. Call them and ask what they\'re doing tonight.', minPlayers: 2, intensity: 2 },
  { id: 'd033', type: 'do', text: 'Show the group your Notes app. They get 15 seconds to scroll.', minPlayers: 2, intensity: 2 },
  { id: 'd034', type: 'do', text: 'Let the group compose a text. You have to send it to whoever they choose from your contacts.', minPlayers: 2, intensity: 2 },
  { id: 'd035', type: 'do', text: 'Call a random contact and sing "Happy Birthday" to them.', minPlayers: 2, intensity: 2 },
  { id: 'd036', type: 'do', text: 'Show the group your saved posts on Instagram.', minPlayers: 2, intensity: 2 },
  { id: 'd037', type: 'do', text: 'Let the group choose someone from your contacts. FaceTime them right now.', minPlayers: 2, intensity: 2 },
  { id: 'd038', type: 'do', text: 'Read the last email you received out loud.', minPlayers: 2, intensity: 2 },
  { id: 'd039', type: 'do', text: 'Show the group the last person you stalked on social media.', minPlayers: 2, intensity: 2 },
  { id: 'd040', type: 'do', text: 'Record yourself saying something embarrassing and send it to the fifth contact in your phone.', minPlayers: 2, intensity: 2 },
  { id: 'd041', type: 'do', text: 'Let someone in the group type a status update on your social media. You have to post it for one hour.', minPlayers: 2, intensity: 2 },
  { id: 'd042', type: 'do', text: 'Show the group your search history from the past 24 hours.', minPlayers: 2, intensity: 2 },
  { id: 'd043', type: 'do', text: 'Call your mom and tell her you just got a tattoo.', minPlayers: 2, intensity: 2 },
  { id: 'd044', type: 'do', text: 'Let the group go through your "liked" tweets or posts for 20 seconds.', minPlayers: 2, intensity: 2 },
  { id: 'd045', type: 'do', text: 'Venmo or send $1 to the person the group chooses with a message the group writes.', minPlayers: 2, intensity: 2 },
  { id: 'd046', type: 'do', text: 'Show the group your Uber/Lyft rating.', minPlayers: 2, intensity: 2 },
  { id: 'd047', type: 'do', text: 'Text your ex "hey" and show the group what happens.', minPlayers: 2, intensity: 2 },
  { id: 'd048', type: 'do', text: 'Give a 30-second roast of the person to your right. Make it funny, not mean.', minPlayers: 2, intensity: 2 },
  { id: 'd049', type: 'do', text: 'Reveal the last lie you told someone in this room.', minPlayers: 2, intensity: 2 },
  { id: 'd050', type: 'do', text: 'Show the group the last TikTok or Reel you liked.', minPlayers: 2, intensity: 2 },

  // Intensity 3 — bold, high stakes
  { id: 'd051', type: 'do', text: 'Give your phone to the group. They get 30 seconds to send one text to anyone in your contacts.', minPlayers: 2, intensity: 3 },
  { id: 'd052', type: 'do', text: 'Let the group write your dating app bio. It stays up for 24 hours.', minPlayers: 2, intensity: 3 },
  { id: 'd053', type: 'do', text: 'Post an unedited, no-filter selfie to your Instagram story right now.', minPlayers: 2, intensity: 3 },
  { id: 'd054', type: 'do', text: 'Let the group record a 10-second video of you doing something embarrassing. They choose the platform to post it.', minPlayers: 2, intensity: 3 },
  { id: 'd055', type: 'do', text: 'Show the group your entire conversation with the last person you texted.', minPlayers: 2, intensity: 3 },
  { id: 'd056', type: 'do', text: 'Call the last person you matched with on a dating app and ask them on a date for tomorrow.', minPlayers: 2, intensity: 3 },
  { id: 'd057', type: 'do', text: 'Let the group go through your entire camera roll for 60 seconds.', minPlayers: 2, intensity: 3 },
  { id: 'd058', type: 'do', text: 'Go live on Instagram for 30 seconds doing whatever the group decides.', minPlayers: 2, intensity: 3 },
  { id: 'd059', type: 'do', text: 'Show the group your "hidden" or "recently deleted" photos album.', minPlayers: 2, intensity: 3 },
  { id: 'd060', type: 'do', text: 'Switch profile pictures with the person to your right for the rest of the night.', minPlayers: 2, intensity: 3 },
  { id: 'd061', type: 'do', text: 'Send a voice note to your crush saying exactly what the group tells you to say.', minPlayers: 2, intensity: 3 },
  { id: 'd062', type: 'do', text: 'Let the group pick someone. Slide into their DMs with a pickup line the group writes.', minPlayers: 2, intensity: 3 },
  { id: 'd063', type: 'do', text: 'Post the most unflattering photo on your phone to your story. It stays up for one hour.', minPlayers: 2, intensity: 3 },
  { id: 'd064', type: 'do', text: 'Show the group every app on your phone. All the hidden folders too.', minPlayers: 2, intensity: 3 },
  { id: 'd065', type: 'do', text: 'Let the group choose a contact. Call them and confess a fake secret the group invents.', minPlayers: 2, intensity: 3 },

  // More DO cards across intensities
  { id: 'd066', type: 'do', text: 'Name every person in the room and say one nice thing about each of them. No repeats.', minPlayers: 2, intensity: 1 },
  { id: 'd067', type: 'do', text: 'Let the person to your right draw something on your arm with a pen. It stays there for the night.', minPlayers: 2, intensity: 2 },
  { id: 'd068', type: 'do', text: 'Text the third contact in your phone "I need to tell you something" and show the reply.', minPlayers: 2, intensity: 2 },
  { id: 'd069', type: 'do', text: 'Say "I love you" to the person on your left without breaking eye contact for 10 seconds.', minPlayers: 2, intensity: 1 },
  { id: 'd070', type: 'do', text: 'Show the group your battery percentage. If it\'s under 50%, you drink regardless.', minPlayers: 2, intensity: 1 },
  { id: 'd071', type: 'do', text: 'Act out the last text you sent — no words, just charades.', minPlayers: 2, intensity: 1 },
  { id: 'd072', type: 'do', text: 'Show the group your Spotify Wrapped top artist and defend your choice.', minPlayers: 2, intensity: 1 },
  { id: 'd073', type: 'do', text: 'Take a bite of the weirdest food combination the group comes up with.', minPlayers: 2, intensity: 2 },
  { id: 'd074', type: 'do', text: 'Call a pizza place and order in a foreign accent.', minPlayers: 2, intensity: 2 },
  { id: 'd075', type: 'do', text: 'Go outside and yell the first thing the group tells you to. Neighbors included.', minPlayers: 2, intensity: 3 },
  { id: 'd076', type: 'do', text: 'Let the person across from you unlock your phone and pick any app. Whatever they find, you explain.', minPlayers: 2, intensity: 2 },
  { id: 'd077', type: 'do', text: 'Make direct eye contact with the person to your right. First one to laugh drinks.', minPlayers: 2, intensity: 1 },
  { id: 'd078', type: 'do', text: 'Let the group compose a tweet. You post it.', minPlayers: 2, intensity: 2 },
  { id: 'd079', type: 'do', text: 'Show the group the last person whose profile you viewed on any social platform.', minPlayers: 2, intensity: 2 },
  { id: 'd080', type: 'do', text: 'Talk in the third person for the next three rounds. Break character and you drink.', minPlayers: 2, intensity: 1 },
  { id: 'd081', type: 'do', text: 'Give someone in the room a genuine compliment. Something you actually mean.', minPlayers: 2, intensity: 1 },
  { id: 'd082', type: 'do', text: 'Show the group your alarm settings. All of them.', minPlayers: 2, intensity: 1 },
  { id: 'd083', type: 'do', text: 'Recreate the last TikTok or Reel you watched. The group judges your performance.', minPlayers: 2, intensity: 2 },
  { id: 'd084', type: 'do', text: 'The group picks a word. Use it in every sentence you say for the next two rounds.', minPlayers: 2, intensity: 1 },
  { id: 'd085', type: 'do', text: 'Let the group look at your Venmo or Cash App transaction history for 15 seconds.', minPlayers: 2, intensity: 2 },
  { id: 'd086', type: 'do', text: 'Show the group your subscriptions. All of them.', minPlayers: 2, intensity: 2 },
  { id: 'd087', type: 'do', text: 'Post a story tagging everyone in this room with a message the group chooses.', minPlayers: 2, intensity: 2 },
  { id: 'd088', type: 'do', text: 'Freestyle rap for 20 seconds about the person to your right.', minPlayers: 2, intensity: 2 },
  { id: 'd089', type: 'do', text: 'Describe your most embarrassing moment in 30 seconds or less. No skipping details.', minPlayers: 2, intensity: 2 },
  { id: 'd090', type: 'do', text: 'Show the group the last thing you copied to your clipboard.', minPlayers: 2, intensity: 2 },
  { id: 'd091', type: 'do', text: 'Try to make the person across from you laugh in 15 seconds. If you fail, you drink.', minPlayers: 2, intensity: 1 },
  { id: 'd092', type: 'do', text: 'Show the group your top three most-messaged contacts.', minPlayers: 2, intensity: 1 },
  { id: 'd093', type: 'do', text: 'Put on a song the group chooses and do a dramatic interpretive dance for 20 seconds.', minPlayers: 2, intensity: 2 },
  { id: 'd094', type: 'do', text: 'Send a selfie to the seventh person in your contacts with no context.', minPlayers: 2, intensity: 2 },
  { id: 'd095', type: 'do', text: 'Let the group change your phone wallpaper. It stays for 24 hours.', minPlayers: 2, intensity: 2 },

  // ═══════════════════════════════════════════════════════════════
  // GROUP CARDS — everyone participates
  // ═══════════════════════════════════════════════════════════════

  // Intensity 1
  { id: 'g001', type: 'group', text: 'Everyone show your lock screen. The group votes on the best one. Losers drink.', minPlayers: 2, intensity: 1 },
  { id: 'g002', type: 'group', text: 'Everyone names their most-played song this week. Anyone who can\'t answer in 5 seconds drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g003', type: 'group', text: 'Go around the circle. Everyone says one thing they\'re grateful for. Anyone who repeats an answer drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g004', type: 'group', text: 'Everyone puts a thumb on the table. Last person to notice and put theirs down drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g005', type: 'group', text: 'Everyone holds up fingers for how many people in this room they\'ve texted today. Lowest number drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g006', type: 'group', text: 'Categories: name luxury car brands. Go around the circle. First person who hesitates or repeats drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g007', type: 'group', text: 'Everyone close your eyes. Point to the person you think is most likely to become famous. Person with the most votes gives out drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g008', type: 'group', text: 'Everyone show your battery percentage. Lowest battery drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g009', type: 'group', text: 'Categories: fast food restaurants. Go around. First to repeat or hesitate drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g010', type: 'group', text: 'Everyone name a country. Go clockwise. If you repeat one or take more than 3 seconds, drink.', minPlayers: 2, intensity: 1 },
  { id: 'g011', type: 'group', text: 'Staring contest. Everyone pairs up. Losers drink.', minPlayers: 2, intensity: 1 },
  { id: 'g012', type: 'group', text: 'Everyone shows their Screen Time. Person with the highest daily average drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g013', type: 'group', text: 'Categories: things you find in a college dorm. Hesitate or repeat = drink.', minPlayers: 2, intensity: 1 },
  { id: 'g014', type: 'group', text: 'Rock-paper-scissors tournament. Everyone pairs up. Losers drink each round until one champion remains.', minPlayers: 2, intensity: 1 },
  { id: 'g015', type: 'group', text: 'Everyone say one word to build a sentence. Go clockwise. Whoever says something that doesn\'t make sense drinks.', minPlayers: 2, intensity: 1 },

  // Intensity 2
  { id: 'g016', type: 'group', text: 'Everyone show the group the last photo in your camera roll at the same time. Group votes on the most embarrassing. That person drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g017', type: 'group', text: 'Everyone simultaneously text the word "hey" to the last person they texted. First person to get a response makes everyone else drink.', minPlayers: 2, intensity: 2 },
  { id: 'g018', type: 'group', text: 'Everyone put your phones in the middle. They get shuffled. Whatever phone you get, you have 15 seconds to look at whatever you want on it.', minPlayers: 2, intensity: 2 },
  { id: 'g019', type: 'group', text: 'Everyone show how many unread emails you have. Highest number drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g020', type: 'group', text: 'Everyone take a selfie right now. Post it to your story. Last person to do it drinks double.', minPlayers: 2, intensity: 2 },
  { id: 'g021', type: 'group', text: 'Everyone reveal their most recent Uber or Lyft rating. Lowest rating drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g022', type: 'group', text: 'Everyone show how many unread texts they have. Highest number gives out that many sips.', minPlayers: 2, intensity: 2 },
  { id: 'g023', type: 'group', text: 'Trivia: the current player asks a question about themselves. Everyone guesses the answer. Wrong answers drink.', minPlayers: 2, intensity: 2 },
  { id: 'g024', type: 'group', text: 'Everyone share the most recent compliment they received via text. If you can\'t find one, drink.', minPlayers: 2, intensity: 2 },
  { id: 'g025', type: 'group', text: 'Everyone describe their type in three words. Group votes on whose is the most unrealistic. That person drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g026', type: 'group', text: 'Everyone show the last thing they ordered online. Most expensive item drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g027', type: 'group', text: 'Two truths and a lie. The current player goes. Anyone who guesses wrong drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g028', type: 'group', text: 'Everyone share their most embarrassing autocorrect fail. Group votes — best story gives out drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g029', type: 'group', text: 'Everyone name their celebrity hall pass. Anyone who picks the same person as someone else — both drink.', minPlayers: 2, intensity: 2 },
  { id: 'g030', type: 'group', text: 'Everyone share one thing on their bucket list. Group votes on the most boring one. That person drinks.', minPlayers: 2, intensity: 2 },

  // Intensity 3
  { id: 'g031', type: 'group', text: 'Everyone open their phone to their most-used app. Show it at the same time. Most embarrassing app = drink.', minPlayers: 2, intensity: 3 },
  { id: 'g032', type: 'group', text: 'Everyone show the group their "For You" page on TikTok or Instagram. Group votes on the most questionable. That person finishes their drink.', minPlayers: 2, intensity: 3 },
  { id: 'g033', type: 'group', text: 'Confessional round. Go clockwise. Everyone shares something nobody else in the room knows about them. You can pass, but you drink double.', minPlayers: 2, intensity: 3 },
  { id: 'g034', type: 'group', text: 'Everyone write down who in this room they\'d want on their team in a zombie apocalypse. Reveal at the same time. Anyone not chosen by anyone drinks.', minPlayers: 2, intensity: 3 },
  { id: 'g035', type: 'group', text: 'Everyone simultaneously show the group the last person they searched on Instagram. Most surprising search drinks.', minPlayers: 2, intensity: 3 },

  // More group cards
  { id: 'g036', type: 'group', text: 'Categories: dating app red flags. First to hesitate or repeat drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g037', type: 'group', text: 'Everyone say the first word that comes to mind. Anyone who says the same word as another person — both drink.', minPlayers: 2, intensity: 1 },
  { id: 'g038', type: 'group', text: 'Everyone hold up 1-5 fingers for how good of a driver they think they are. Lowest self-rating drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g039', type: 'group', text: 'Speed round: go around naming a song lyric from any song. Can\'t think of one in 3 seconds? Drink.', minPlayers: 2, intensity: 1 },
  { id: 'g040', type: 'group', text: 'Everyone shares their go-to karaoke song. Group votes. Worst taste drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g041', type: 'group', text: 'Everyone show your most recently used GIF. Most unhinged one drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g042', type: 'group', text: 'Everyone simultaneously point to who in the room has the best style. Person with the fewest votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g043', type: 'group', text: 'Everyone share the last song they added to a playlist. Group votes on worst taste. That person drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g044', type: 'group', text: 'Everyone reveal how many alarms they have set. Most alarms drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g045', type: 'group', text: 'Tongue twister challenge. The current player picks one. Go around. Mess it up and drink.', minPlayers: 2, intensity: 1 },

  // ═══════════════════════════════════════════════════════════════
  // VOTE CARDS — "Most Likely To" and opinion-based
  // ═══════════════════════════════════════════════════════════════

  // Intensity 1
  { id: 'v001', type: 'vote', text: 'Everyone points to the person most likely to end up on a reality TV show. Person with the most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v002', type: 'vote', text: 'Everyone points to the person most likely to survive on a deserted island. Person with the fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v003', type: 'vote', text: 'Everyone points to the person most likely to go viral on TikTok. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v004', type: 'vote', text: 'Everyone points to the person most likely to accidentally send a text to the wrong person. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v005', type: 'vote', text: 'Everyone points to the person most likely to cry during a movie. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v006', type: 'vote', text: 'Everyone points to the person most likely to become a millionaire. Most votes gives out drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v007', type: 'vote', text: 'Everyone points to the best liar in the room. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v008', type: 'vote', text: 'Everyone points to who would survive a horror movie the longest. Person with the fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v009', type: 'vote', text: 'Everyone points to who has the most questionable taste in music. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v010', type: 'vote', text: 'Everyone points to who would be the worst roommate. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v011', type: 'vote', text: 'Everyone points to who gives the best advice. Person with the fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v012', type: 'vote', text: 'Everyone points to who is most likely to forget everyone\'s birthday. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v013', type: 'vote', text: 'Everyone points to who takes the longest to get ready. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v014', type: 'vote', text: 'Everyone points to who would be the most famous in another life. Most votes gives out drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v015', type: 'vote', text: 'Everyone points to who is the pickiest eater. Most votes drinks.', minPlayers: 2, intensity: 1 },

  // Intensity 2
  { id: 'v016', type: 'vote', text: 'Everyone points to the person they\'d trust least with their phone. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v017', type: 'vote', text: 'Everyone points to who is most likely to ghost someone. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v018', type: 'vote', text: 'Everyone points to who is most likely to double-text. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v019', type: 'vote', text: 'Everyone points to who is the biggest flirt in the room. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v020', type: 'vote', text: 'Everyone points to the person most likely to get arrested first. Person with the most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v021', type: 'vote', text: 'Everyone points to who would be the worst on a first date. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v022', type: 'vote', text: 'Everyone points to who has the most embarrassing hidden talent. Most votes has to demonstrate it or drink.', minPlayers: 2, intensity: 2 },
  { id: 'v023', type: 'vote', text: 'Everyone points to who is most likely to say something they regret tonight. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v024', type: 'vote', text: 'Everyone points to who is the worst texter. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v025', type: 'vote', text: 'Everyone points to who stalks people the most on social media. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v026', type: 'vote', text: 'Everyone points to who has the most chaotic energy. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v027', type: 'vote', text: 'Everyone points to who has the weirdest "type." Most votes has to explain their type or drink double.', minPlayers: 2, intensity: 2 },
  { id: 'v028', type: 'vote', text: 'Everyone points to who is most likely to move across the country for someone they just started dating. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v029', type: 'vote', text: 'Everyone points to who tells the most exaggerated stories. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v030', type: 'vote', text: 'Everyone points to the person most likely to leave the group chat. Most votes drinks.', minPlayers: 2, intensity: 2 },

  // Intensity 3
  { id: 'v031', type: 'vote', text: 'Everyone points to who they\'d least want to be stuck in an elevator with. Most votes drinks.', minPlayers: 2, intensity: 3 },
  { id: 'v032', type: 'vote', text: 'Everyone points to who is most likely to have a secret social media account. Most votes has to confirm or deny — or drink double.', minPlayers: 2, intensity: 3 },
  { id: 'v033', type: 'vote', text: 'Everyone points to who is the worst influence in the group. Most votes drinks.', minPlayers: 2, intensity: 3 },
  { id: 'v034', type: 'vote', text: 'Everyone points to who has the most skeletons in their closet. Most votes can share one or drink double.', minPlayers: 2, intensity: 3 },
  { id: 'v035', type: 'vote', text: 'Everyone points to who they think has the most screenshots of other people\'s conversations. Most votes drinks.', minPlayers: 2, intensity: 3 },

  // More vote cards
  { id: 'v036', type: 'vote', text: 'Everyone points to who is most likely to sleep through an important meeting. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v037', type: 'vote', text: 'Everyone points to who would win in an argument against their mom. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v038', type: 'vote', text: 'Everyone points to who has the best laugh. Person with the most votes picks who drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v039', type: 'vote', text: 'Everyone points to who is most likely to still be partying at 40. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v040', type: 'vote', text: 'Everyone points to who would be the worst at keeping a secret. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v041', type: 'vote', text: 'Everyone points to the person most likely to write a best-selling book. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v042', type: 'vote', text: 'Everyone points to who they\'d call first in an emergency. Person with no votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v043', type: 'vote', text: 'Everyone points to who is most likely to embarrass themselves at a work event. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v044', type: 'vote', text: 'Everyone points to who would last the longest without their phone. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v045', type: 'vote', text: 'Everyone points to who is the most dramatic. Most votes has to prove it or drink.', minPlayers: 2, intensity: 1 },

  // ═══════════════════════════════════════════════════════════════
  // SOCIAL CARDS — 1v1 challenges, rapid-fire, hot seat
  // ═══════════════════════════════════════════════════════════════

  // Intensity 1
  { id: 's001', type: 'social', text: 'Choose another player. You both have 20 seconds to name as many fast-food restaurants as possible. First person who gets stuck drinks.', minPlayers: 2, intensity: 1 },
  { id: 's002', type: 'social', text: 'Pick someone. Staring contest. First to blink drinks.', minPlayers: 2, intensity: 1 },
  { id: 's003', type: 'social', text: 'Choose someone in the room. Both of you reveal your Screen Time from yesterday. Higher number drinks.', minPlayers: 2, intensity: 1 },
  { id: 's004', type: 'social', text: 'Pick another player. Both of you show your lock screen. Group votes on whose is worse. That person drinks.', minPlayers: 2, intensity: 1 },
  { id: 's005', type: 'social', text: 'Choose someone. You each have 10 seconds to list as many U.S. states as you can. Fewer states = drink.', minPlayers: 2, intensity: 1 },
  { id: 's006', type: 'social', text: 'Pick someone. Both guess how many unread emails the other has. Closest guess wins. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 's007', type: 'social', text: 'Choose another player. Each of you has one chance to make the other laugh. Whoever laughs first drinks.', minPlayers: 2, intensity: 1 },
  { id: 's008', type: 'social', text: 'Pick someone. Thumb war. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 's009', type: 'social', text: 'Choose another player. Alternate naming songs by the same artist. First to hesitate drinks.', minPlayers: 2, intensity: 1 },
  { id: 's010', type: 'social', text: 'Pick someone. Both do your best impression of each other. Group votes on the winner. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 's011', type: 'social', text: 'Choose someone. Both of you guess what the other\'s most-used app is. Wrong guess = drink.', minPlayers: 2, intensity: 1 },
  { id: 's012', type: 'social', text: 'Pick someone. Both of you name as many capitals of countries as you can in 15 seconds. Fewer = drink.', minPlayers: 2, intensity: 1 },
  { id: 's013', type: 'social', text: 'Choose another player. Alternate naming Marvel or DC characters. First to hesitate drinks.', minPlayers: 2, intensity: 1 },
  { id: 's014', type: 'social', text: 'Pick someone. Both whisper your biggest fear to the person to your right. They decide who has the more embarrassing fear. That person drinks.', minPlayers: 2, intensity: 1 },
  { id: 's015', type: 'social', text: 'Choose someone. Alternate naming pizza toppings. Repeat or hesitate = drink.', minPlayers: 2, intensity: 1 },

  // Intensity 2
  { id: 's016', type: 'social', text: 'Hot seat: the group asks you three rapid-fire questions. You have to answer honestly or drink for each one you skip.', minPlayers: 2, intensity: 2 },
  { id: 's017', type: 'social', text: 'Pick someone. You both unlock your phones and hand them to each other. 15 seconds to look at anything. Both must answer one question about what you found.', minPlayers: 2, intensity: 2 },
  { id: 's018', type: 'social', text: 'Choose someone. Both open your last text conversation. Read the last sent message out loud. Group decides whose is more embarrassing. That person drinks.', minPlayers: 2, intensity: 2 },
  { id: 's019', type: 'social', text: 'Pick another player. Both of you share the last lie you told. Group votes on the bigger lie. That person drinks.', minPlayers: 2, intensity: 2 },
  { id: 's020', type: 'social', text: 'Choose someone. Both show your most recent selfie to the group. Group votes on who looks worse. That person drinks.', minPlayers: 2, intensity: 2 },
  { id: 's021', type: 'social', text: 'Pick someone. Each of you says one thing you\'ve always wanted to say to the other. If you can\'t think of anything, drink.', minPlayers: 2, intensity: 2 },
  { id: 's022', type: 'social', text: 'Choose another player. Both guess when the other last cried. Closest guess wins. Loser drinks.', minPlayers: 2, intensity: 2 },
  { id: 's023', type: 'social', text: 'Pick someone. Both of you reveal the last person you stalked on social media. More embarrassing stalker drinks.', minPlayers: 2, intensity: 2 },
  { id: 's024', type: 'social', text: 'Choose someone. Roast battle. 15 seconds each. Group votes on the winner. Loser drinks.', minPlayers: 2, intensity: 2 },
  { id: 's025', type: 'social', text: 'Pick another player. Both of you name one thing the other does that annoys you. If you can\'t, drink.', minPlayers: 2, intensity: 2 },
  { id: 's026', type: 'social', text: 'Choose someone. Each write down what you think the other person\'s love language is. If you\'re wrong, drink.', minPlayers: 2, intensity: 2 },
  { id: 's027', type: 'social', text: 'Pick someone. Both name one thing you admire about the other and one thing that drives you crazy. No sugarcoating.', minPlayers: 2, intensity: 2 },
  { id: 's028', type: 'social', text: 'Choose another player. Both of you rank how close you are on a scale of 1-10 at the same time. If the numbers don\'t match, lower number drinks.', minPlayers: 2, intensity: 2 },
  { id: 's029', type: 'social', text: 'Pick someone. Compliment battle. Alternate genuine compliments. First to repeat or hesitate drinks.', minPlayers: 2, intensity: 2 },
  { id: 's030', type: 'social', text: 'Choose someone. You both have to reveal your most recent Spotify or YouTube search. More embarrassing one drinks.', minPlayers: 2, intensity: 2 },

  // Intensity 3
  { id: 's031', type: 'social', text: 'Pick someone. Both open your dating apps and show your profiles. Group rates them 1-10. Lower score drinks.', minPlayers: 2, intensity: 3 },
  { id: 's032', type: 'social', text: 'Choose someone. Both share one secret about yourselves that the other person doesn\'t know. Can\'t think of one? Finish your drink.', minPlayers: 2, intensity: 3 },
  { id: 's033', type: 'social', text: 'Pick someone. Both of you reveal the last person you thought about before falling asleep. If it\'s someone in this room, both drink.', minPlayers: 2, intensity: 3 },
  { id: 's034', type: 'social', text: 'Choose someone. You both have to read your last DM exchange with someone of the group\'s choice out loud. Group picks whose is juicier.', minPlayers: 2, intensity: 3 },
  { id: 's035', type: 'social', text: 'Pick another player. Both of you show the last photo you saved from someone else\'s social media. More suspicious one drinks.', minPlayers: 2, intensity: 3 },

  // More social cards
  { id: 's036', type: 'social', text: 'Choose someone. Both name as many Taylor Swift songs as you can in 15 seconds. Fewer songs = drink.', minPlayers: 2, intensity: 1 },
  { id: 's037', type: 'social', text: 'Pick someone. Both show the last notification on your phone. More embarrassing notification drinks.', minPlayers: 2, intensity: 2 },
  { id: 's038', type: 'social', text: 'Choose another player. Both imitate a TikTok dance. Group judges. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 's039', type: 'social', text: 'Pick someone. Both close your eyes and guess what color shirt the other is wearing. Wrong = drink.', minPlayers: 2, intensity: 1 },
  { id: 's040', type: 'social', text: 'Choose someone. Say three things about them — two truths and one lie. If they guess the lie, you drink. If they\'re wrong, they drink.', minPlayers: 2, intensity: 2 },
  { id: 's041', type: 'social', text: 'Pick someone. Both of you show your Spotify Wrapped top 5 artists. Group votes on whose music taste is worse. That person drinks.', minPlayers: 2, intensity: 1 },
  { id: 's042', type: 'social', text: 'Choose someone. Speed round: alternate naming things in each other\'s fridge. First to hesitate drinks.', minPlayers: 2, intensity: 1 },
  { id: 's043', type: 'social', text: 'Pick someone. Both text "thinking of you" to the last person you texted. First reply means the other person drinks.', minPlayers: 2, intensity: 2 },
  { id: 's044', type: 'social', text: 'Choose someone. Both of you have 10 seconds to write down what you think the other\'s biggest insecurity is. If you match, both drink.', minPlayers: 2, intensity: 3 },
  { id: 's045', type: 'social', text: 'Pick someone. Both hold an ice cube. First to drop it drinks.', minPlayers: 2, intensity: 1 },

  // ═══════════════════════════════════════════════════════════════
  // EXTRA DO CARDS to reach 350+
  // ═══════════════════════════════════════════════════════════════

  { id: 'd096', type: 'do', text: 'Let the group add one person to your close friends list on Instagram.', minPlayers: 2, intensity: 2 },
  { id: 'd097', type: 'do', text: 'Show the group the last voice memo you recorded.', minPlayers: 2, intensity: 2 },
  { id: 'd098', type: 'do', text: 'Tell the group a secret you\'ve never told anyone in this room.', minPlayers: 2, intensity: 3 },
  { id: 'd099', type: 'do', text: 'Speak only in questions for the next two rounds. Any statement = drink.', minPlayers: 2, intensity: 1 },
  { id: 'd100', type: 'do', text: 'Let the group decide on a new contact name for someone in your phone. It stays for 48 hours.', minPlayers: 2, intensity: 2 },
  { id: 'd101', type: 'do', text: 'Share the most expensive thing you\'ve ever bought on impulse.', minPlayers: 2, intensity: 1 },
  { id: 'd102', type: 'do', text: 'Let the person to your right type a reply to the last message you received. You have to send it.', minPlayers: 2, intensity: 2 },
  { id: 'd103', type: 'do', text: 'Whisper something to the person to your left. They decide if it\'s worth sharing. If they share it, you drink. If they don\'t, they drink.', minPlayers: 2, intensity: 2 },
  { id: 'd104', type: 'do', text: 'Show the group your most embarrassing saved meme.', minPlayers: 2, intensity: 1 },
  { id: 'd105', type: 'do', text: 'Do an impression of your boss or professor. Group rates it.', minPlayers: 2, intensity: 1 },
  { id: 'd106', type: 'do', text: 'Close your eyes and describe the outfit of the person across from you in detail. Wrong = drink.', minPlayers: 2, intensity: 1 },
  { id: 'd107', type: 'do', text: 'Let the group pick three contacts. You have to rank them from "would call at 3 AM" to "would never." Explain why.', minPlayers: 2, intensity: 2 },
  { id: 'd108', type: 'do', text: 'Tell the group the worst date you\'ve ever been on. Spare no details.', minPlayers: 2, intensity: 2 },
  { id: 'd109', type: 'do', text: 'Put your playlist on shuffle. Whatever plays, you have to dance to it for 15 seconds.', minPlayers: 2, intensity: 1 },
  { id: 'd110', type: 'do', text: 'Let the group pick an Instagram story from someone you follow. React to it with a fire emoji right now.', minPlayers: 2, intensity: 2 },
  { id: 'd111', type: 'do', text: 'Show the group what your screen looks like when your phone is unlocked. Home screen, dock, everything.', minPlayers: 2, intensity: 1 },
  { id: 'd112', type: 'do', text: 'Rate everyone in the room from best to worst dressed. Out loud.', minPlayers: 2, intensity: 2 },
  { id: 'd113', type: 'do', text: 'Play the last song you listened to out loud. Defend it.', minPlayers: 2, intensity: 1 },
  { id: 'd114', type: 'do', text: 'Let the group compose a reply to your most recent DM. You have to send it.', minPlayers: 2, intensity: 3 },
  { id: 'd115', type: 'do', text: 'Admit the last time you cried and why.', minPlayers: 2, intensity: 2 },
  { id: 'd116', type: 'do', text: 'Show the group your notes app. They get 20 seconds.', minPlayers: 2, intensity: 2 },
  { id: 'd117', type: 'do', text: 'Text someone "we need to talk" and show the group their response.', minPlayers: 2, intensity: 3 },
  { id: 'd118', type: 'do', text: 'Without looking, guess how many apps are on your phone. Check. If you\'re off by more than 10, drink.', minPlayers: 2, intensity: 1 },
  { id: 'd119', type: 'do', text: 'Give the person to your left a genuine compliment. Something you really mean.', minPlayers: 2, intensity: 1 },
  { id: 'd120', type: 'do', text: 'Show the group your calculator history. If it\'s empty, that\'s suspicious — drink anyway.', minPlayers: 2, intensity: 1 },

  // Extra group cards
  { id: 'g046', type: 'group', text: 'Waterfall. Everyone starts drinking at the same time. You can only stop when the person before you stops. The current player starts and stops whenever they want.', minPlayers: 2, intensity: 2 },
  { id: 'g047', type: 'group', text: 'Categories: things that are better cold. Hesitate or repeat = drink.', minPlayers: 2, intensity: 1 },
  { id: 'g048', type: 'group', text: 'Everyone look at the person to their left. Say the first word that comes to mind. Most offensive one drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g049', type: 'group', text: 'Everyone hold up fingers for how many people you\'ve kissed. Highest number drinks. Ties both drink.', minPlayers: 2, intensity: 2 },
  { id: 'g050', type: 'group', text: 'Never have I ever — but with fingers. Start with 5. Go around. First to put all fingers down finishes their drink.', minPlayers: 2, intensity: 2 },
  { id: 'g051', type: 'group', text: 'Everyone text "what do you think of me honestly" to the last person they texted. Read the responses out loud as they come in.', minPlayers: 2, intensity: 3 },
  { id: 'g052', type: 'group', text: 'Everyone show the last thing they searched on Amazon or any shopping app. Most embarrassing purchase drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g053', type: 'group', text: 'Categories: excuses for being late. Best one gives out drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g054', type: 'group', text: 'Truth or drink: everyone in the circle asks the current player one question. Skip = drink.', minPlayers: 2, intensity: 2 },
  { id: 'g055', type: 'group', text: 'Everyone share one unpopular opinion. Group votes on the worst take. That person drinks.', minPlayers: 2, intensity: 1 },

  // Extra vote cards
  { id: 'v046', type: 'vote', text: 'Everyone points to who would be the best wingman/wingwoman. Person with the most votes picks who drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v047', type: 'vote', text: 'Everyone points to who is most likely to date someone their friends don\'t approve of. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v048', type: 'vote', text: 'Everyone points to who they think secretly judges everyone the most. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v049', type: 'vote', text: 'Everyone points to who is most likely to become president. Most votes gives out drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v050', type: 'vote', text: 'Everyone points to who has the most toxic trait. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v051', type: 'vote', text: 'Everyone points to who is most likely to drunk-text their ex tonight. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'v052', type: 'vote', text: 'Everyone points to the smartest person in the room. Person with the most votes picks who drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v053', type: 'vote', text: 'Everyone points to who would make the best teacher. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v054', type: 'vote', text: 'Everyone points to who would be the hardest person to prank. Most votes has to attempt a prank call now or drink.', minPlayers: 2, intensity: 2 },
  { id: 'v055', type: 'vote', text: 'Everyone points to who has the most main-character energy. Most votes can assign 3 sips to anyone.', minPlayers: 2, intensity: 1 },

  // Extra social cards
  { id: 's046', type: 'social', text: 'Pick someone. Both describe each other in three words. Group votes on accuracy. Less accurate one drinks.', minPlayers: 2, intensity: 1 },
  { id: 's047', type: 'social', text: 'Choose someone. Both of you guess each other\'s middle name. Wrong = drink.', minPlayers: 2, intensity: 1 },
  { id: 's048', type: 'social', text: 'Pick someone. Both try to name the other\'s top 3 closest friends. Each wrong answer = one sip.', minPlayers: 2, intensity: 2 },
  { id: 's049', type: 'social', text: 'Choose someone. Trade phones for 30 seconds. You can look at anything but can\'t send messages or delete anything.', minPlayers: 2, intensity: 3 },
  { id: 's050', type: 'social', text: 'Pick someone. Play "finish my sentence." You start a sentence, they finish it. If it doesn\'t make sense, they drink.', minPlayers: 2, intensity: 1 },
  { id: 's051', type: 'social', text: 'Choose someone. Arm wrestle. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 's052', type: 'social', text: 'Pick someone. Both share the most embarrassing song on your playlist. Group votes. More embarrassing taste drinks.', minPlayers: 2, intensity: 1 },
  { id: 's053', type: 'social', text: 'Choose someone. Both reveal when you last cried. More recent crier drinks.', minPlayers: 2, intensity: 2 },
  { id: 's054', type: 'social', text: 'Pick someone. Both of you have to answer: what\'s one thing you\'d change about the other? Dodging = drink.', minPlayers: 2, intensity: 3 },
  { id: 's055', type: 'social', text: 'Choose another player. Both of you open your photo albums and show each other the 50th photo. More embarrassing one drinks.', minPlayers: 2, intensity: 2 },

  // ═══════════════════════════════════════════════════════════════
  // FINAL BATCH to push past 350
  // ═══════════════════════════════════════════════════════════════

  { id: 'd121', type: 'do', text: 'Siri or Google Assistant: ask it "What do my friends think of me?" and show the result.', minPlayers: 2, intensity: 1 },
  { id: 'd122', type: 'do', text: 'Show the group the last meme you sent to someone.', minPlayers: 2, intensity: 1 },
  { id: 'd123', type: 'do', text: 'Let the group pick a song. You have to slow dance with the person to your right for the chorus.', minPlayers: 2, intensity: 2 },
  { id: 'd124', type: 'do', text: 'Show the group your Safari or Chrome tabs. All of them.', minPlayers: 2, intensity: 2 },
  { id: 'd125', type: 'do', text: 'Admit the most childish thing you still do.', minPlayers: 2, intensity: 1 },
  { id: 'd126', type: 'do', text: 'Call a friend not in this room. Tell them you love them and hang up without explanation.', minPlayers: 2, intensity: 2 },
  { id: 'd127', type: 'do', text: 'Share a hot take that might make someone in this room mad. If no one reacts, you drink.', minPlayers: 2, intensity: 2 },
  { id: 'd128', type: 'do', text: 'Put your music on shuffle. The group gets to skip your first three songs. Fourth one plays and you explain why it\'s there.', minPlayers: 2, intensity: 1 },
  { id: 'd129', type: 'do', text: 'Tell the group about the last time you lied to get out of plans.', minPlayers: 2, intensity: 2 },
  { id: 'd130', type: 'do', text: 'Show the group the weirdest conversation in your DMs right now.', minPlayers: 2, intensity: 3 },

  { id: 'g056', type: 'group', text: 'Floor is lava! Last person standing on furniture drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g057', type: 'group', text: 'Everyone rate the current player\'s outfit on a scale of 1-10. Average under 7 = current player drinks.', minPlayers: 2, intensity: 2 },
  { id: 'g058', type: 'group', text: 'Categories: things your parents would be disappointed to find out about you. Whoever can\'t think of one drinks.', minPlayers: 2, intensity: 3 },
  { id: 'g059', type: 'group', text: 'Everyone share one irrational fear. Group votes on the most ridiculous. That person drinks.', minPlayers: 2, intensity: 1 },
  { id: 'g060', type: 'group', text: 'Rhyme time: the current player says a word. Go clockwise rhyming. Break the chain and drink.', minPlayers: 2, intensity: 1 },

  { id: 'v056', type: 'vote', text: 'Everyone points to who is most likely to win a Grammy. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v057', type: 'vote', text: 'Everyone points to who talks the most trash. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v058', type: 'vote', text: 'Everyone points to who would survive longest without internet. Fewest votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'v059', type: 'vote', text: 'Everyone points to who would make the worst chef. Most votes has to eat whatever the group concocts or drink.', minPlayers: 2, intensity: 2 },
  { id: 'v060', type: 'vote', text: 'Everyone points to who has the biggest ego. Most votes drinks.', minPlayers: 2, intensity: 2 },

  { id: 's056', type: 'social', text: 'Pick someone. 60-second debate on a topic the group chooses. Group picks the winner. Loser drinks.', minPlayers: 2, intensity: 2 },
  { id: 's057', type: 'social', text: 'Choose someone. Both of you have to say one thing you\'ve never told the other person. No cop-outs.', minPlayers: 2, intensity: 2 },
  { id: 's058', type: 'social', text: 'Pick someone. Both guess each other\'s zodiac sign. Wrong = drink.', minPlayers: 2, intensity: 1 },
  { id: 's059', type: 'social', text: 'Choose someone. Alternate naming movies the other person has definitely seen. First wrong guess drinks.', minPlayers: 2, intensity: 1 },
  { id: 's060', type: 'social', text: 'Pick someone. Both say one word that describes the other\'s dating life. Group judges accuracy. Less accurate drinks.', minPlayers: 2, intensity: 2 },

  // ═══════════════════════════════════════════════════════════════
  // PREMIUM CARDS — creative, unexpected, you won't find these
  // in any store-bought deck
  // ═══════════════════════════════════════════════════════════════

  // --- CHAOS & IMPROV ---
  { id: 'x001', type: 'do', text: 'Open your front camera right now. The group screenshots your face in 3... 2... 1. That\'s your new contact photo in everyone\'s phone.', minPlayers: 2, intensity: 2 },
  { id: 'x002', type: 'do', text: 'Wikipedia roulette: hit "Random Article." You have 60 seconds to give a passionate TED Talk about whatever comes up.', minPlayers: 2, intensity: 1 },
  { id: 'x003', type: 'do', text: 'Open your Maps app timeline. Show the group the last place you went that you probably shouldn\'t have.', minPlayers: 2, intensity: 3 },
  { id: 'x004', type: 'do', text: 'Airdrop or text the person to your right the 37th photo in your camera roll. No peeking first.', minPlayers: 2, intensity: 2 },
  { id: 'x005', type: 'do', text: 'The group picks a subreddit. Open it. Your phone wallpaper is now the first image post you see for the next 24 hours.', minPlayers: 2, intensity: 2 },
  { id: 'x006', type: 'do', text: 'Type your name into Urban Dictionary. Read the top definition out loud. If it\'s accurate, you drink double.', minPlayers: 2, intensity: 1 },
  { id: 'x007', type: 'do', text: 'Voice-to-text a message to a friend while everyone in the room tries to make you laugh. You must send whatever comes out.', minPlayers: 2, intensity: 2 },
  { id: 'x008', type: 'do', text: 'Go to your Spotify and play the song you\'ve listened to the most this month. If anyone in the room judges you, they drink too.', minPlayers: 2, intensity: 1 },
  { id: 'x009', type: 'do', text: 'Open your calculator app. Whatever number is still there, that\'s how many seconds you have to explain why it was there.', minPlayers: 2, intensity: 1 },
  { id: 'x010', type: 'do', text: 'Record a 10-second motivational speech. Post it to your close friends story with zero context.', minPlayers: 2, intensity: 2 },

  // --- MIND GAMES & PSYCHOLOGICAL ---
  { id: 'x011', type: 'do', text: 'Without looking at anyone, describe what the person directly across from you is wearing. Every wrong detail = one sip.', minPlayers: 2, intensity: 1 },
  { id: 'x012', type: 'social', text: 'Pick someone. Both write down what you think the other person\'s love language is, their biggest pet peeve, and their guilty pleasure. Most matches wins. Loser drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x013', type: 'vote', text: 'Everyone close your eyes. Point to who you think secretly thinks they\'re the smartest person in the room. Open eyes. Most votes drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x014', type: 'social', text: 'Pick someone. Both of you scroll to photo #100 in your camera roll. Show them simultaneously. Whoever has the more questionable photo drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x015', type: 'group', text: 'Everyone type a confession into their Notes app. Pass phones to the left. That person reads it out loud. Group guesses who wrote each one. Wrong guesses drink.', minPlayers: 2, intensity: 3 },
  { id: 'x016', type: 'do', text: 'Tell the group something you\'ve been overthinking lately. If they think you\'re overthinking it, they drink in solidarity. If they think it\'s valid, you drink.', minPlayers: 2, intensity: 2 },
  { id: 'x017', type: 'vote', text: 'Everyone points to who in this room has the most unresolved situationship energy right now. Most votes has to explain or drink.', minPlayers: 2, intensity: 2 },
  { id: 'x018', type: 'social', text: 'Pick someone. Both of you have 10 seconds to draw a portrait of the other on your phone. Group votes on the best likeness. Loser drinks.', minPlayers: 2, intensity: 1 },

  // --- TECH & MODERN LIFE ---
  { id: 'x019', type: 'do', text: 'Ask Siri or Google Assistant "What song is this?" while the room is silent. Whatever it picks up, that\'s the group\'s anthem for the night.', minPlayers: 2, intensity: 1 },
  { id: 'x020', type: 'do', text: 'Let the group see your keyboard predictions. Type "I secretly" and tap the middle suggestion 8 times. Read the result.', minPlayers: 2, intensity: 2 },
  { id: 'x021', type: 'do', text: 'Show the group your average daily screen time. For every hour over 4, take a sip.', minPlayers: 2, intensity: 1 },
  { id: 'x022', type: 'do', text: 'Open your email. Show the group the oldest unread email in your inbox. If it\'s over 30 days old, drink.', minPlayers: 2, intensity: 1 },
  { id: 'x023', type: 'do', text: 'Let the group pick any emoji. You have to use only that emoji to respond to the next 5 texts you get tonight.', minPlayers: 2, intensity: 2 },
  { id: 'x024', type: 'do', text: 'Open your "On This Day" or photo memories. Show whatever comes up. If there\'s nothing, drink for being boring.', minPlayers: 2, intensity: 2 },
  { id: 'x025', type: 'group', text: 'Everyone open their keyboard and type "I want" — then tap the middle predictive suggestion 5 times. Read the full sentence. Most unhinged one picks who drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x026', type: 'do', text: 'Show the group your Apple/Google Pay transaction history. Most embarrassing purchase = you drink. Group decides.', minPlayers: 2, intensity: 2 },

  // --- STORYTELLING & PERFORMANCE ---
  { id: 'x027', type: 'do', text: 'The group gives you three random words. You have 30 seconds to tell a story using all three. If the group isn\'t entertained, drink.', minPlayers: 2, intensity: 1 },
  { id: 'x028', type: 'do', text: 'Sell the object closest to your right hand like it\'s a product on Shark Tank. You have 20 seconds. Group decides if they\'d invest or not.', minPlayers: 2, intensity: 1 },
  { id: 'x029', type: 'do', text: 'Give a 15-second dramatic movie trailer narration about the person to your left\'s life. Use your deepest voice.', minPlayers: 2, intensity: 1 },
  { id: 'x030', type: 'social', text: 'Pick someone. You\'re now lawyers. The group presents a fake crime one of you committed. The other defends them for 30 seconds. Group jury votes guilty or not guilty.', minPlayers: 2, intensity: 2 },
  { id: 'x031', type: 'do', text: 'The group picks a genre (horror, romance, comedy). Narrate the next 30 seconds of everyone\'s life in real-time in that genre.', minPlayers: 2, intensity: 1 },
  { id: 'x032', type: 'group', text: 'Story chain: starting player says one sentence of a story. Go clockwise. Each person adds one sentence. Whoever makes the story make no sense drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x033', type: 'do', text: 'Do a dramatic reading of the last text you sent as if you\'re accepting an Oscar and that text is your acceptance speech.', minPlayers: 2, intensity: 1 },
  { id: 'x034', type: 'do', text: 'You\'re a news anchor. Give a 20-second breaking news report about something that happened in this room tonight.', minPlayers: 2, intensity: 1 },

  // --- RISKY PHONE CHALLENGES ---
  { id: 'x035', type: 'do', text: 'Let the group pick a contact. Send them "I know what you did" with no follow-up for at least 10 minutes.', minPlayers: 2, intensity: 3 },
  { id: 'x036', type: 'do', text: 'Open your Spotify. The group picks any playlist. You have to play the first song and sing along with full commitment for the chorus.', minPlayers: 2, intensity: 1 },
  { id: 'x037', type: 'do', text: 'Let the group go through your "Saved" or "Bookmarked" posts on any platform for 20 seconds. You can veto ONE post.', minPlayers: 2, intensity: 2 },
  { id: 'x038', type: 'do', text: 'Call a food delivery place and ask if they deliver happiness. Stay in character for at least 15 seconds.', minPlayers: 2, intensity: 2 },
  { id: 'x039', type: 'do', text: 'Go to your YouTube watch history. The group picks one video you have to explain why you watched.', minPlayers: 2, intensity: 2 },
  { id: 'x040', type: 'do', text: 'Use your phone\'s voice changer or pitch shift on a voice note. Send it to the fifth person in your contacts saying "we need to talk soon."', minPlayers: 2, intensity: 2 },

  // --- CREATIVE GROUP GAMES ---
  { id: 'x041', type: 'group', text: 'Speed Wikipedia: everyone picks a random article. You have 30 seconds to become an expert. Then present your topic for 15 seconds. Least convincing expert drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x042', type: 'group', text: 'Everyone texts the word "thoughts?" to the last person they texted. First person whose contact responds picks who drinks. Last response drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x043', type: 'group', text: 'Reverse hot seat: the current player asks everyone ELSE a question. Anyone who refuses to answer drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x044', type: 'group', text: 'Everyone share the most niche interest or hobby they have that nobody here knows about. Group votes on most surprising. That person picks who drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x045', type: 'group', text: 'Fake fact challenge: everyone states something that sounds true but might be fake. Go clockwise calling "real" or "fake." Wrong call = drink.', minPlayers: 2, intensity: 1 },
  { id: 'x046', type: 'group', text: 'Everyone Google "Florida man" + their birthday. Read the headline. Best headline assigns drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x047', type: 'group', text: 'Emoji storytelling: the current player sends a sequence of 5 emojis. Everyone else has to guess what story they\'re telling. Worst guess drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x048', type: 'group', text: 'Everyone simultaneously Google themselves. Read the first result. If nothing comes up, drink for being a nobody (kidding, but you still drink).', minPlayers: 2, intensity: 1 },

  // --- BOLD SOCIAL EXPERIMENTS ---
  { id: 'x049', type: 'social', text: 'Pick someone. Swap lock screens for 24 hours. If either of you chickens out, that person drinks double.', minPlayers: 2, intensity: 2 },
  { id: 'x050', type: 'social', text: 'Pick someone. Race to see who can find the weirdest Wikipedia article in 20 seconds. Group judges. Loser drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x051', type: 'social', text: 'Choose someone. Both of you FaceTime someone at the same time. First person whose call gets answered wins. The other drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x052', type: 'do', text: 'Google your name in quotes. Show the group the results. If the first result is actually you, everyone else drinks. If it\'s not, you drink.', minPlayers: 2, intensity: 1 },
  { id: 'x053', type: 'do', text: 'Open the dating app of the group\'s choice. They swipe for you 5 times. Whatever happens, happens.', minPlayers: 2, intensity: 3 },
  { id: 'x054', type: 'social', text: 'Pick someone. Both of you describe each other\'s "vibe" as if you\'re writing a Yelp review of a restaurant. Group rates the accuracy.', minPlayers: 2, intensity: 2 },
  { id: 'x055', type: 'do', text: 'Let the group write your Twitter/X bio. It stays up for the rest of the night.', minPlayers: 2, intensity: 2 },

  // --- UNPREDICTABLE VOTE CARDS ---
  { id: 'x056', type: 'vote', text: 'Everyone points to who would be most likely to accidentally join a cult. Most votes drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x057', type: 'vote', text: 'Everyone points to who here has definitely lied about something tonight. Most votes has to confess or drink double.', minPlayers: 2, intensity: 2 },
  { id: 'x058', type: 'vote', text: 'Everyone points to who would have the most chaotic YouTube channel. Most votes has to record a 10-second "intro" right now or drink.', minPlayers: 2, intensity: 2 },
  { id: 'x059', type: 'vote', text: 'Everyone close your eyes. Point to who you think has the most screenshots of other people\'s conversations on their phone. Open eyes. Most votes can deny it, but we all know.', minPlayers: 2, intensity: 2 },
  { id: 'x060', type: 'vote', text: 'Everyone points to who would last the longest on a reality dating show. Fewest votes drinks for being "undateable" (their words, not ours).', minPlayers: 2, intensity: 2 },
  { id: 'x061', type: 'vote', text: 'Everyone points to who has the most chaotic Notes app. Most votes has to show ONE random note or drink.', minPlayers: 2, intensity: 2 },
  { id: 'x062', type: 'vote', text: 'Everyone points to who would give the worst wedding toast. Most votes has to give a 15-second mock toast for the person to their right. Or drink.', minPlayers: 2, intensity: 2 },

  // --- PHYSICAL & SILLY ---
  { id: 'x063', type: 'do', text: 'Balance your phone on your head for the next person\'s entire turn. If it falls, you drink.', minPlayers: 2, intensity: 1 },
  { id: 'x064', type: 'do', text: 'The group picks a word. You can\'t say it for the next 3 rounds. Every time you do, drink.', minPlayers: 2, intensity: 1 },
  { id: 'x065', type: 'do', text: 'Switch seats with the person who has the closest birthday to yours. Both of you drink.', minPlayers: 2, intensity: 1 },
  { id: 'x066', type: 'group', text: 'Musical phones: everyone passes their phone one person to the right. Open any app. You have 10 seconds to find something interesting. Report back.', minPlayers: 2, intensity: 2 },
  { id: 'x067', type: 'do', text: 'Use only your non-dominant hand for the next 3 rounds. Spill anything and drink double.', minPlayers: 2, intensity: 1 },
  { id: 'x068', type: 'do', text: 'Leave a 5-star Google review for wherever you are right now. Include a fake dramatic story. Read it to the group before posting.', minPlayers: 2, intensity: 2 },

  // --- DEEP CUTS & CURVEBALLS ---
  { id: 'x069', type: 'do', text: 'The person to your right picks any app on your phone. Open it. Whatever\'s on the screen, explain it to the group.', minPlayers: 2, intensity: 2 },
  { id: 'x070', type: 'do', text: 'Set a timer for 2 minutes. You can\'t speak until it goes off. Communicate only through gestures. Break the rule = drink.', minPlayers: 2, intensity: 1 },
  { id: 'x071', type: 'social', text: 'Pick someone. You both have to answer: what\'s one thing the group doesn\'t know about your friendship? If there\'s nothing, both drink.', minPlayers: 2, intensity: 2 },
  { id: 'x072', type: 'do', text: 'Open your photo editor and draw something on a selfie using only your pinky. Post it to your story with zero context.', minPlayers: 2, intensity: 2 },
  { id: 'x073', type: 'group', text: 'Everyone share the most random skill they have. Best demonstration wins. Everyone else drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x074', type: 'do', text: 'Ask ChatGPT or any AI to roast you based on your first name alone. Read the roast out loud.', minPlayers: 2, intensity: 1 },
  { id: 'x075', type: 'social', text: 'Pick someone. Both of you open your camera rolls to the 25th photo. Trade phones. You have to make up a story about the other person\'s photo. Most believable story wins.', minPlayers: 2, intensity: 2 },
  { id: 'x076', type: 'do', text: 'The group picks a random number between 1 and your total photo count. You show that exact photo. No skipping.', minPlayers: 2, intensity: 3 },
  { id: 'x077', type: 'group', text: 'Everyone type "honestly" into their search bar and show the first autocomplete suggestion. Most concerning one drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x078', type: 'do', text: 'Show the group the contact name you have saved for your mom or dad. If it\'s just "Mom" or "Dad," drink for being basic.', minPlayers: 2, intensity: 1 },
  { id: 'x079', type: 'vote', text: 'Everyone points to who here peaked in high school. Most votes drinks. If they agree, everyone else also drinks.', minPlayers: 2, intensity: 2 },
  { id: 'x080', type: 'do', text: 'Your playlist is now on trial. The group picks 3 songs at random. Defend each one in court or drink for each guilty verdict.', minPlayers: 2, intensity: 1 },

  // --- TIMER PRESSURE CARDS ---
  { id: 'x081', type: 'social', text: 'Pick someone. 10-second speed round: alternate naming things in each other\'s bedroom. Can\'t think of one? Drink.', minPlayers: 2, intensity: 2 },
  { id: 'x082', type: 'do', text: 'You have 15 seconds to make everyone in the room laugh. No touching anyone. Fail = drink.', minPlayers: 2, intensity: 1 },
  { id: 'x083', type: 'group', text: 'Lightning round: go clockwise. Everyone has 3 seconds to name a celebrity. Repeat one that\'s been said or hesitate = drink immediately.', minPlayers: 2, intensity: 1 },
  { id: 'x084', type: 'do', text: 'The group gives you a topic. Rant passionately about it for 20 seconds as if it\'s the most important issue of our generation.', minPlayers: 2, intensity: 1 },
  { id: 'x085', type: 'social', text: 'Pick someone. Compliment duel: alternate genuine compliments about each other. First to hesitate, repeat, or get awkward drinks.', minPlayers: 2, intensity: 1 },

  // --- SOCIAL MEDIA ROULETTE ---
  { id: 'x086', type: 'do', text: 'Open Instagram. The group picks a random follower of yours. You have to reply to their most recent story right now.', minPlayers: 2, intensity: 2 },
  { id: 'x087', type: 'do', text: 'Show the group the first DM in your message requests folder. If it\'s empty, the group writes one for you to send.', minPlayers: 2, intensity: 3 },
  { id: 'x088', type: 'do', text: 'The group picks three random followers from your profile. You rank them best to worst vibes and explain why.', minPlayers: 2, intensity: 2 },
  { id: 'x089', type: 'group', text: 'Everyone go to the same celebrity\'s Instagram. Each person picks one post they think is the worst. Majority rules. Minority drinks.', minPlayers: 2, intensity: 1 },
  { id: 'x090', type: 'do', text: 'Show the group your screen time breakdown by app. For each social media app over 1 hour, take a sip.', minPlayers: 2, intensity: 1 },
];
