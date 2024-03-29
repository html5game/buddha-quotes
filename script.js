var quotes = [
'Radiate boundless love towards the entire world.', 
'If with a pure mind a person speaks or acts, happiness follows them like a never-departing shadow.', 
'Speak only endearing speech, speech that is welcomed. Speech, when it brings no evil to others, is a pleasant thing.', 
'To support mother and father, to cherish partner and children, and to be engaged in peaceful occupation — this is the greatest blessing.',
'Whatever is not yours: let go of it. Your letting go of it will be for your long-term happiness and benefit.',
'Whatever has the nature of arising has the nature of ceasing.',
'Understanding is the heartwood of well-spoken words.',
'It is in the nature of things that joy arises in a person free from remorse.',
'Ardently do today what must be done. Who knows? Tomorrow, death comes.',
'Give, even if you only have a little.',
'Should you find a wise critic to point out your faults, follow him as you would a guide to hidden treasure.',
'Meditate … do not delay, lest you later regret it.',
'Should a seeker not find a companion who is better or equal, let them resolutely pursue a solitary course.',
'One is not called noble who harms living beings. By not harming living beings one is called noble.',
'There is no fear for one whose mind is not filled with desires.',
'A disciplined mind brings happiness.',
'Ceasing to do evil, Cultivating the good, Purifying the heart: This is the teaching of the Buddhas.',
'The one in whom no longer exist the craving and thirst that perpetuate becoming; how could you track that Awakened one, trackless, and of limitless range?',
'Purity and impurity depend on oneself; no one can purify another.',
'They blame those who remain silent, they blame those who speak much, they blame those who speak in moderation. There is none in the world who is not blamed.',
'Conquer anger with non-anger. Conquer badness with goodness. Conquer meanness with generosity. Conquer dishonesty with truth.',
'Know from the rivers in clefts and in crevices: those in small channels flow noisily, the great flow silent. Whatever’s not full makes noise. Whatever is full is quiet.',
'See them, floundering in their sense of mine, like fish in the puddles of a dried-up stream — and, seeing this, live with no mine, not forming attachment to experiences.',
'Delight in heedfulness! Guard well your thoughts!',
'Whatever precious jewel there is in the heavenly worlds, there is nothing comparable to one who is Awakened.',
'May all beings have happy minds.',
'In whom there is no sympathy for living beings: know him as an outcast.',
'Just as the great ocean has one taste, the taste of salt, so also this teaching and discipline has one taste, the taste of liberation.',
'Both formerly and now, it is only suffering that I describe, and the cessation of suffering.',
'Radiate boundless love towards the entire world — above, below, and across — unhindered, without ill will, without enmity.',
'The world is afflicted by death and decay. But the wise do not grieve, having realized the nature of the world.',
'When watching after yourself, you watch after others. When watching after others, you watch after yourself.',
'He who can curb his wrath as soon as it arises, as a timely antidote will check snake’s venom that so quickly spreads — such a monk gives up the here and the beyond, just as a serpent sheds its worn-out skin.',
'Resolutely train yourself to attain peace.',
'"As I am, so are these. As are these, so am I." Drawing the parallel to yourself, neither kill nor get others to kill.',
'The root of suffering is attachment.',
'Therefore, bhikkhus, you should train yourselves thus: ‘We will develop and cultivate the liberation of mind by lovingkindness, make it our vehicle, make it our basis, stabilize it, exercise ourselves in it, and fully perfect it.’ Thus should you train yourselves.',
'As a water bead on a lotus leaf, as water on a red lily, does not adhere, so the sage does not adhere to the seen, the heard, or the sensed.',
'Those attached to perception and views roam the world offending people.',
'All conditioned things are impermanent’ — when one sees this with wisdom, one turns away from suffering.',
'All tremble at violence; all fear death. Putting oneself in the place of another, one should not kill nor cause another to kill.',
'Let all-embracing thoughts for all beings be yours.',
'Irrigators channel waters; fletchers straighten arrows; carpenters bend wood; the wise master themselves.',
'“Some do not understand that we must die, but those who do realize this settle their quarrels.',
'You yourself must strive. The Buddhas only point the way.',
'Whoever doesn’t flare up at someone who’s angry wins a battle hard to win.',
'Just as a solid rock is not shaken by the storm, even so the wise are not affected by praise or blame.',
'“Hatred is never appeased by hatred in this world. By non-hatred alone is hatred appeased. This is a law eternal.',
'Let none find fault with others; let none see the omissions and commissions of others. But let one see one’s own acts, done and undone.',
'Better it is to live one day seeing the rise and fall of things than to live a hundred years without ever seeing the rise and fall of things.',
'A mind unruffled by the vagaries of fortune, from sorrow freed, from defilements cleansed, from fear liberated — this is the greatest blessing.',
'I will not look at another’s bowl intent on finding fault: a training to be observed.',
'Drop by drop is the water pot filled. Likewise, the wise man, gathering it little by little, fills himself with good.',
'Should a person do good, let him do it again and again. Let him find pleasure therein, for blissful is the accumulation of good.'
]

var sources = ['Karaniya Metta Sutta',
               'Dhammapada',
               'Sutta Nipata',
               'Mangala Sutta',
               'Na Tumhaka Sutta',
               'Kimsuka Sutta',
               'Kimsila Sutta',
               'Cetana Sutta',
               'Bhaddekaratta Sutta',
               'Dhammapada, verse 224',
               'Dhammapada, verse 76',
               'Sallekha Sutta',
               'Dhammapada, verse 61',
               'Dhammapada, verse 270',
               'Dhammapada, verse 39',
               'Dhammapada, verse 35',
               'Dhammapada, verse 183',
               'Dhammapada, verse 180',
               'Dhammapada',
               'Dhammapada, verse 227',
               'Dhammapada, verse 223',
               'Sutta Nipata',
               'Sutta Nipata',
               'Dhammapada',
               'Sutta Nipata',
               'Karaniya Metta Sutta',
               'Sutta Nipata',
               'Udana',
               'Sutta Nipata',
               'Metta Sutta',
               'Sutta Nipata',
               'Samyutta Nikaya',
               'Sutta Nipata',
               'Utthana Sutta of the Sutta Nipata',
               'Nalaka Sutta',
               'Sunakkhatta Sutta',
               'Samyutta Nikaya',
               'Sutta Nipata',
               'Sutta Nipata',
               'Dhammapada, verse 277',
               'Dhammapada, verse 129',
               'Metta Sutta',
               'Dhammapada, verse 80',
               'Dhammapada, verse 6',
               'Dhammapada',
               'Samyutta Nikaya',
               'Dhammapada',
               'Dhammapada',
               'Dhammapada, verse 50',
               'Dhammapada',
               'Mangala Sutta',
               'Vinaya',
               'Dhammapada',
               'Dhammapada, verse 118'
              ]

window.onload = changeQuote();
var n;

function changeQuote(){
  n = Math.floor(Math.random() * (quotes.length - 1));
  document.getElementById("quote").innerHTML = quotes[n];
  document.getElementById("author").innerHTML = '(source: ' + sources[n] + ')';
  return n;
}
function tweetQuote() {
  window.open('https://twitter.com/intent/tweet?text="' + quotes[n] + '" -The Buddha (from the ' + sources[n] + ')' );
}