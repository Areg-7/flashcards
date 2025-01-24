// data/flashcards.ts
import { FlashcardData } from '@/types/flashcard'

// export const flashcardsDataAlex: FlashcardData[] = [
// 	{ word: 'dare', translation: 'համարձակվել' },
// 	{ word: 'segregate', translation: 'առանձնացնել' },
// 	{ word: 'curricular', translation: 'ուսումնական պլան' },
// 	{ word: 'equipped', translation: 'հագեցած' },
// 	{ word: 'freckle', translation: 'веснушка' },
// 	{ word: 'pigtails', translation: 'косички' },
// 	{ word: 'sophisticate', translation: 'բարդ' },
// 	{ word: 'suffocate', translation: 'խեղդել' },
// 	{ word: 'dispel', translation: 'ցրել' },
// 	{ word: 'insulated', translation: 'մեկուսացված' },
// 	{ word: 'elaborate', translation: 'մշակել' },
// 	{ word: 'resisted', translation: 'դիմադրել' },
// 	{ word: 'decree', translation: 'հրաման' },
// 	{ word: 'squander', translation: 'վատնել' },
// 	{ word: 'durability', translation: 'դիմացկունություն' },
// 	{ word: 'deliberate', translation: 'դիտավորյալ' },
// 	{ word: 'fickle', translation: 'անկայուն' },
// 	{ word: 'protruding', translation: 'դուրս ցցված' },
// 	{ word: 'malnutrition', translation: 'недоедание' },
// 	{ word: 'dissatisfied', translation: 'դժգոհ' },
// 	{ word: 'lash out', translation: 'наброситься' },
// 	{ word: 'temptation', translation: 'գայթակղություն' },
// 	{ word: 'slimming courses', translation: 'նիհարելու դասընթացներ' },
// 	{ word: 'complacency', translation: 'ինքնագոհություն' },
// 	{ word: 'assumption', translation: 'ենթադրություն' },
// 	{ word: 'conformity', translation: 'համապատասխանություն' },
// 	{ word: 'drab', translation: 'անպիտան' },
// 	{ word: 'guilt-ridden', translation: 'մեղավորության մեջ ընկած' },
// 	{ word: 'obsessed', translation: 'տարված' },
// 	{ word: 'amass', translation: 'կուտակել' },
// 	{ word: 'material possessions', translation: 'նյութական ունեցվածք' },
// 	{ word: 'shrug off', translation: 'пожимать плечами' },
// 	{ word: 'spotless', translation: 'անբիծ' },
// 	{ word: 'guidance', translation: 'ուղղորդում' },
// 	{ word: 'restriction', translation: 'սահմանափակում' },
// 	{ word: 'inhibition', translation: 'արգելակում' },
// 	{ word: 'annihilation', translation: 'ոչնչացում' },
// 	{ word: 'heritage', translation: 'ժառանգություն' },
// 	{ word: 'fatal illnesses', translation: 'մահացու հիվանդություններ' },
// 	{ word: 'remedies', translation: 'դեղամիջոցները' },
// 	{ word: 'expectation of life', translation: 'կյանքի ակնկալիք' },
// 	{ word: 'steering wheel', translation: 'ղեկ' },
// 	{ word: 'frustration', translation: 'հիասթափություն' },
// 	{ word: 'benignly', translation: 'բարեխիղճ' },
// 	{ word: 'condone', translation: 'ներել' },
// 	{ word: 'desecrated', translation: 'պղծված' },
// 	{ word: 'statistics', translation: 'վիճակագրություն' },
// 	{ word: 'lax', translation: 'թույլ' },
// 	{ word: 'stringent', translation: 'խիստ' },
// 	{ word: 'impair', translation: 'խաթարել' },
// 	{ word: 'inordinately hard', translation: 'чрезвычайно жесткий' },
// 	{ word: 'severe', translation: 'խիստ' },
// 	{ word: 'marvellous', translation: 'հրաշալի' },
// 	{ word: 'severe', translation: 'խիստ' },
// ]

// export const flashcardsDataAlex: FlashcardData[] = [
// 	{ word: 'unconscious', translation: 'անգիտակից' },
// 	{ word: 'rely', translation: 'վստահել' },
// 	{ word: 'hemisphere', translation: 'կիսագունդ' },
// 	{ word: 'although', translation: 'թեև' },
// 	{ word: 'wave', translation: 'ալիք' },
// 	{ word: 'beware', translation: 'զգուշանալ' },
// 	{ word: 'involving', translation: 'ներառող' },
// 	{ word: 'cane', translation: 'ձեռնափայտ' },
// 	{ word: 'beet', translation: 'բազուկ' },
// 	{ word: 'widespread', translation: 'տարածված' },
// 	{ word: 'skull', translation: 'գանգ' },
// 	{ word: 'cranial', translation: 'գանգային' },
// 	{ word: 'ancestor', translation: 'նախնին' },
// 	{ word: 'laid', translation: 'դրված' },
// 	{ word: 'staple', translation: 'բարաք' },
// 	{ word: 'starvation', translation: 'սովածություն' },
// 	{ word: 'considerably', translation: 'հիմնականում' },
// 	{ word: 'refine', translation: 'մաքրել' },
// 	{ word: 'pure', translation: 'մաքուր' },
// 	{ word: 'streaks', translation: 'ծառայություն' },
// 	{ word: 'outer', translation: 'արտաքին' },
// 	{ word: 'friction', translation: 'տհաճություն' },
// 	{ word: 'glow', translation: 'լույս' },
// 	{ word: 'desertlike', translation: 'անապատի նման' },
// 	{ word: 'particular', translation: 'հատուկ' },
// 	{ word: 'received', translation: 'ընդունված' },
// 	{ word: 'nomadic', translation: 'մայկայություն' },
// 	{ word: 'perhaps', translation: 'հնարավոր է' },
// 	{ word: 'laborer', translation: 'աշխատող' },
// 	{ word: 'impressed', translation: 'հիացած' },
// 	{ word: 'aptitude', translation: 'հաղթանակ' },
// 	{ word: 'composed', translation: 'կազմված' },
// 	{ word: 'reform', translation: 'պատրաստականություն' },
// 	{ word: 'superintendent', translation: 'գործավար' },
// 	{ word: 'plead', translation: 'խնդրել' },
// 	{ word: 'effort', translation: 'փորձ' },
// 	{ word: 'term', translation: 'ժամանակահատված' },
// 	{ word: 'attend', translation: 'մասնակցել' },
// 	{ word: 'arrangement', translation: 'համաձայնություն' },
// ]



export const flashcardsDataAlex: FlashcardData[] = [
	{ word: 'abandon, renounce, relinquish', translation: 'հրաժարվել' },
	{ word: 'access, entrance', translation: 'մուտք' },
	{ word: 'accommodate, put up', translation: 'հարմարեցնել' },
	{ word: 'acquire, obtain, come by', translation: 'ձեռք բերել' },
	{ word: 'adjustment, adaptation', translation: 'հարմարեցում' },
	{ word: 'allocate, assign', translation: 'հատկացնել' },
	{ word: 'alternate', translation: 'հաջորդել' },
	{ word: 'amendment', translation: 'ուղղում' },
	{ word: 'analogy, resemblance, kinship', translation: 'նմանություն' },
	{ word: 'analysis', translation: 'վերլուծություն' },
	{ word: 'apparent, conspicuous, obvious', translation: 'ակներեվ' },
	{ word: 'append', translation: 'կցել' },
	{ word: 'arbitrate, adjudicate, judge', translation: 'դատել' },
	{ word: 'attainable', translation: 'հասանելի' },
	{ word: 'capacity', translation: 'կարողություն, ընդունակություն' },
	{ word: 'cite, quote', translation: 'վկայակոչել' },
	{ word: 'coherent, logical', translation: 'հաջորդական' },
	{ word: 'refine', translation: 'համընկնել' },
	{ word: 'coincide, occur simultaneously', translation: 'մաքուր' },
	{ word: 'collapse', translation: 'փլուզում, ձախողվել' },
	{ word: 'commence, launch', translation: 'սկսվել' },
	{ word: 'compatible', translation: 'համատեղելի' },
	{ word: 'compile, assemble', translation: 'կուտակել' },
	{ word: 'complement', translation: 'լրացում' },
	{ word: 'comprise, consist of', translation: 'պարունակել' },
	{ word: 'compute, work out, reckon', translation: 'հաշվել' },
	{ word: 'conceive', translation: 'հասկանալ' },
	{ word: 'confine', translation: 'սահման(ել)' },
	{ word: 'confirm, establish', translation: 'հաստատել' },
	{ word: 'conform, comply with, abide by', translation: 'հարմարեցնել' },
	{ word: 'conscious, alert', translation: 'գիտակից' },
	{ word: 'consequently, hence, therefore', translation: 'ուստի' },
	{ word: 'considerable, substantial', translation: 'զգալի' },
	{ word: 'constitute, amount to', translation: 'կազմել' },
	{ word: 'contradict, rebut', translation: 'հակասել' },
	{ word: 'controversy, disagreement', translation: 'բանավեճ' },
	{ word: 'conventional', translation: 'պահպանողական' },
	{ word: 'converse', translation: 'հակառակ' },
	{ word: 'correspond', translation: 'համապատասխանել' },
	{ word: 'crucial, pivotal', translation: 'վճռական' },
	{ word: 'deduce, conclude', translation: 'եզրակացնել' },
	{ word: 'detect', translation: 'հայտնաբերել' },
	{ word: 'deviate, diverge from', translation: 'շեղվել' },
	{ word: 'diminish, lessen', translation: 'նվազել' },
	{ word: 'discrete', translation: 'վերացական' },
	{ word: 'dispute', translation: 'վեճ' },
	{ word: 'distort', translation: 'աղավաղել' },
]