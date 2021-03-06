let acidSpit = {
  mutation: "Acid Spit",
  description: `<p>Glands in your mouth generate a potent acid. You can:</p>
   <li> Spit Acid at a target at up to Near range. Costs 1 MP, deals one point of damage directly and one more each turn until the victim rolls to Move. Armor works against the acid.</li>
   <li> Use your acid to melt a thin rope or bar, or a small object. Costs 1 MP</li>
   <li> Open a simple lock. Costs 1 MP</li>`
};
let amphibian = {
  mutation: "Amphibian",
  description: "Your body has inherited traits from fishes and reptiles, making you equally at home under water as on land. With this mutation, you can: <li> Breathe underwater for a few minutes. Cost: 1 MP. You swim quickly and smoothly like a fish.</li>"
};
let corpseEater = {
  mutation: "Corpse-Eater",
  description: "Your metabolism is abnormally robust, as well as your jaws and teeth. You can<li> Eat raw meat, even several days after the prey’s death, without suffering Rot Points (page 125). Small game counts as one ration of grub each. Bigger creatures – or humanoids – count as two rations.</li><li> Bite a victim at Arm’s Length. The attack inflicts damage equal to the number of MP spent.</li>"
};
let extremeReflexes = {
  mutation: "Extreme Reflexes",
  description: "You have superhuman reflexes, and you can: <li> Add +2 per MP spent to your initiative roll at the beginning of a conflict. You need to spend MP before rolling for initiative. You can even use this effect to increase your initiative score by +2 during combat – but then it will cost you a maneuver.</li><li> Fight or Shoot an enemy a second time in the same turn. The extra attack costs you 1 MP. You don’t get an extra maneuver. (E)</li><li> Dodge when someone Fights you, or Shoots at you. Every MP spent reduces the damage you take by one. You must activate the effect before you roll for armor (page 88). (R)</li>"
};
let flameBreather = {
  mutation: "Flame Breather",
  description: "You can spew out flammable gases and ignite them on the way through your gullet to create a deadly cascade of fire. You can: <li> Set fire to a flammable object. Costs 1 MP.</li><li> Spew fire at an enemy at up to Near range. You inflict damage equal to the number of MP you spend.</li><li> Breath fire at a number of enemies equal to MP spent. Each one takes one point of damage.</li>"
};
let fourArmed = {
  mutation: "Four-Armed",
  description: "You have four arms rather than two. You can: <li> Fight twice in a row, in the same turn. The extra attack costs you 1 MP and your maneuver for the turn. (E)</li><li> Defend yourself against several close combat attacks in the same turn. Every defense after the first one costs you 1 MP. (E)</li><li> Climb with ease. You can spend 1 MP instead of rolling to Move when performing a difficult climb.</li>"
};
let frogLegs = {
  mutation: "Frog Legs",
  description: "With your powerful, frog-like leg muscles you can perform superhuman leaps. You can: <li> Jump about 30' horizontally or 15' vertically. Costs 1 MP.</li><li> Leap on an enemy at up to Short range and immediately Fight them in the same turn. It will cost you 1 MP and your maneuver for the turn. (E)</li><li> Get out of a dangerous situation by jumping to safety. Spend 1 MP instead of rolling to Move when you want to escape from a conflict.</li>"
};
let humanMagnet = {
  mutation: "Human Magnet",
  description: "You have the ability to generate strong magnetic fields at will. You can: <li> Push away or attract metal objects within Short range, weighing no more than yourself. Costs 1 MP.</li><li> Throw metal objects at a target at up to Short range. The damage is equal to the number of MP you spend.</li><li> Shield yourself against bullets and other metal weapons. Every MP spent reduces the damage from such an attack by one. (R)</li>"
};
let humanPlant = {
  mutation: "Human Plant",
  description: "Your body has inherited traits from the plant world. You can: <li> Get nourishment from sunlight. Spend 1 MP instead of eating one ration of grub. Only works outdoors.</li><li> Your body is covered in sharp thorns that you can use in close combat. Inflicts one point of damage for every MP you spend.</li><li> Use your bark-like skin to absorb damage from external attacks. Every MP spent reduces the damage by one. (R)</li>"
};
let insectoid = {
  mutation: "Insectoid",
  description: "Your body has inherited traits from the insect world. You can: <li> Use your hardened skin to reduce damage taken from external attacks. Every MP spent reduces the damage taken by one. (R)</li><li> Climb a completely vertical surface for a few minutes, at the cost of 1 MP.</li><li> Quickly heal light wounds. Every MP spent heals one point of damage – even if you are broken. The mutation can’t heal critical injuries.</li>"
};
let insectWings = {
  mutation: "Insect Wings",
  description: "You have grown fly-like or butterfly-like wings on you back. You can: <li> Fly up to 100' – then you must land. Costs 1 MP.</li><li> Fly up to an enemy at up to Short range and immediately Fight them in the same turn. It costs you 1 MP and your maneuver for the turn. (E)</li><li> Create an intense buzzing noise that drives people up the walls. A number of persons equal to MP spent suffer one point of doubt each.</li>"
};
let luminescence = {
  mutation: "Luminescence",
  description: "Just like fireflies and certain types of fish, your body has a natural ability to emit light. You can: <li> Release a burst of light at a target at up to Near range. For every MP spent, the victim is completely blinded for one turn, and during this time suffers the effects of total darkness (page 93).</li><li> Light up an area around you, up to Short distance (about 100') for a few minutes. Costs 1 MP.</li><li> Briefly bend the light around you, to obscure your presence. You can use this effect to escape from a conflict without rolling to Move (page 81).</li>"
};
let manbeast = {
  mutation: "Manbeast",
  description: "You are half human, half savage beast. You can: <li> Attack one or more enemies at Arm’s Length with your fangs and your claws. They will take a total amount of damage equal to the number of MP spent.</li><li> Let rip a bestial roar. One enemy per MP spent, at up to Near range, suffers one point of doubt.</li><li> Never give up. When you are broken by damage or fatigue you can get up again and recover trauma points equal to MP spent. You will still suffer the effects of any critical injuries (page 90).</li>"
};
let mindTerror = {
  mutation: "Mind Terror",
  description: "Your brain has the ability to affect the minds of others and create vivid hallucinations, at up to Near range. You can: <li> Torment your victim with visions that inflict confusion or doubt (your choice) equal to the number of MP spent.</li><li> Confuse others to make them miss their next action. Only works on humanoids. Costs 1 MP per victim.</li><li> Create an illusion so grand the victim will believe it to be real. Costs 2 MP.</li>"
};
let puppeteer = {
  mutation: "Puppeteer",
  description: "By sheer force of will you can take control of other humanoid creatures and turn them into your puppets. You can: <li> Decide what the victim’s next action is. Cost is 1 MP. You need to look the victim in the eyes, which is only possible at up to Near range. The victim rolls for the action normally. If you want him to use a mutation, you must spend the extra MP yourself. If you force the victim to hurt himself, he suffers weapon damage plus one for every MP spent.</li>"
};
let parasite = {
  mutation: "Parasite",
  description: "You are a human parasite, capable of absorbing the life-force of other living humanoid beings at Arm’s Length. You can: <li> Steal one point of any attribute from the victim for every MP you spend. You cannot exceed your own maximum score. This effect does not heal critical injuries, and has no effect on permanent trauma.</li><li> Steal a mutation from another mutant. Costs 1 MP. You can use the mutation in the next turn – after that, the victim gets it back.</li><li> Heal another humanoid’s trauma. Every point to be healed costs 1 MP, and will inflict the same amount (and type) of trauma on you. You can heal a non-lethal critical injury for 2 MP and a lethal one for 4 MP. This will not damage you.</li>"
};
let pathokinesis = {
  mutation: "Pathokinesis",
  description: "You have the ability to affect the emotional state of others, at up to Near range. You can: <li> Instill fear or anxiety in others. Your victim suffers one point of doubt for every MP you spend.</li><li> Heal one point of doubt per MP spent. This effect requires you to touch your target. You can heal your own doubt.</li><li> Affect the mood of a group. You cannot control specific actions, only spread a general sense of anger, joy, sorrow, love or fear. This effect, which is roleplayed, lasts a few minutes. Costs 1 MP.</li>"
};
let pyrokinesis = {
  mutation: "Pyrokinesis",
  description: "You have the ability to set things on fire with pure force of will. You can: <li> Set fire to a flammable, inanimate object. Costs 1 MP.</li><li> Make a living being burst into flame, at up to Near range. Inflicts one point of damage per MP spent. Armor has no effect.</li><li> Melt ice or heat a cold area, eliminating the effects of severe cold (page 93) for one hour. Costs 1 MP.</li>"
};
let reptilian = {
  mutation: "Reptilian",
  description: "Your body has inherited traits from reptiles. You can: <li> Change the color and pattern of your skin, like a chameleon. You automatically succeed a Sneak roll, and attacks against you are performed as in total darkness (page 93). You need to be mostly naked. The effects last for a few minutes. Costs 1 MP.</li><li> Contort your body to push yourself through a hole or passage only a few inches wide. Costs 1 MP.</li><li> Entrance a humanoid at up to Near range with your reptilian eyes. Your victim suffers one point of confusion per MP spent.</li>"
};
let ratEater = {
  mutation: "Rot-Eater",
  description: "You are totally insensitive to the effects of the Rot. You take Rot Points normally (page 125), but you can: <li> Spend 1 MP to eliminate one point of trauma from the Rot. (R)</li><li> Spend 1 MP to use one of your Rot Points to recover one point of any attribute. You can’t use permanent Rot Points (page 126).</li><li> Emit concentrated Rot at an enemy at Arm’s Length. Inflicts one point of damage for every MP you spend. Each point also requires one point of Rot, which is consumed in the attack. You can’t use permanent Rot.</li>"
};
let sonar = {
  mutation: "Sonar",
  description: "By emitting a high frequency sound and listening to its echoes you can: <li> Sense your surroundings and effectively see in total darkness for a few minutes. Costs 1 MP.</li><li> Stun enemies at up to Short range. A number of victims equal to MP spent suffer one point of fatigue each.</li><li> Disrupt an enemy at up to Short range who is Shooting. Every MP you spend eliminates one success he has rolled. (R)</li>"
};
let spores = {
  mutation: "Spores",
  description: "You have hidden spore sacs on your body, capable of spraying spore clouds against targets at up to Near distance. The spores can: <li> Make your victim’s eyes sting and his skin itch. For every MP spent your victim suffers one point of fatigue.</li><li> Stink so horribly that the victim chokes or suffers severe nausea. For every MP spent your target suffers one point of damage. Armor has no effect.</li><li> Obscure you. Hidden in the cloud, you can escape from a conflict without rolling to Move. Costs 1 MP.</li>"
};
let sprinter = {
  mutation: "Sprinter",
  description: "Your leg muscles are extremely powerful, and you can run extremely fast over a short distance. You can: <li> Double your movement speed during one turn. Every maneuver you spend on movement counts as two (page 80). Costs 1 MP. (E)</li><li> Escape from a conflict without rolling to Move. Costs 1 MP.</li>"
};
let telepathy = {
  mutation: "Telepathy",
  description: "By pure force of will you can read and affect the mind of other humanoid creatures, at up to Near range. You can: <li> For every MP you spend, get the answer to one of these questions: Is he lying? Is he hiding something? What is he thinking right now?</li><li> Plant a simple thought in your subject’s mind. He will think it is true. Costs 1 MP.</li><li> Create a mental short circuit to fry your victim’s brain. You inflict one point of confusion per MP spent.</li>"
};
let tracker = {
  mutation: "Tracker",
  description: "Your sense of smell is extremely well developed. You can: <li> Follow the trail of a person or monster – like a bloodhound. Costs 1 MP per day.</li><li> Sense an enemy Sneaking up on you (page 81). Every MP you use knocks out one / rolled by him. Costs 1 MP.</li><li> Smell grub out in the Zone. Costs 1 MP and gives you D6 rations of Rot-contaminated grub.</li>"
};
let reRoll = {
  mutation: "Re-roll",
  description: ""
};

let mutationData = new Map();
mutationData.set(11, acidSpit);
mutationData.set(12, amphibian);
mutationData.set(13, corpseEater);
mutationData.set(14, extremeReflexes);
mutationData.set(15, flameBreather);
mutationData.set(16, fourArmed);
mutationData.set(21, frogLegs);
mutationData.set(22, humanMagnet);
mutationData.set(23, humanPlant);
mutationData.set(24, insectoid);
mutationData.set(25, insectWings);
mutationData.set(26, luminescence);
mutationData.set(31, manbeast);
mutationData.set(32, mindTerror);
mutationData.set(33, puppeteer);
mutationData.set(34, parasite);
mutationData.set(35, pathokinesis);
mutationData.set(36, pyrokinesis);
mutationData.set(41, reptilian);
mutationData.set(42, ratEater);
mutationData.set(43, sonar);
mutationData.set(44, spores);
mutationData.set(45, sprinter);
mutationData.set(46, telepathy);
mutationData.set(51, tracker);
mutationData.set(52, reRoll);
mutationData.set(53, reRoll);
mutationData.set(54, reRoll);
mutationData.set(55, reRoll);
mutationData.set(56, reRoll);
mutationData.set(61, reRoll);
mutationData.set(62, reRoll);
mutationData.set(63, reRoll);
mutationData.set(64, reRoll);
mutationData.set(65, reRoll);
mutationData.set(66, reRoll);

export {mutationData};
