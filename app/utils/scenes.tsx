const scenes = [
  {
    id: 0,
    image: "/cave.png",
    description:
      "Like any poorly prepared adventurer, it seems you've woken up in a dark cave. A single torch is lodged carelessly into a crag in the wall. To the north, you see the light pouring in from the outside. To the south, you hear the echoing drips of condensation falling from stalactites.",
    options: ["NORTH", "SOUTH"],
    interactions: ["TAKE TORCH", "TORCH", "PICK UP TORCH"],
    adjacentScenes: [3, 1, -1, -1],
  },
  {
    id: 1,
    image: "/deep-cave.png",
    description:
      "The depths of the cave open up to a large sanctum. Your surroundings are eerily still, lit up only by a stream of light pouring in from the ceiling. Not a single creature is stirring within these walls. Seems something much larger lurks within, preying on whatever comes by. To the south, you see a path leading deeper into the cave. To the north, you see the cave entrance. An old ladder left behind by other adventurers sits between you and the ceiling.",
    options: ["NORTH", "SOUTH"],
    interactions: ["USE LADDER", "LADDER", "CLIMB LADDER"],
    adjacentScenes: [0, 2, -1, -1],
  },
  {
    id: 2,
    image: "/matriarchs-lair.png",
    description:
      "You follow the southern path to a sinister maw covered in cobwebs. You spot the eyes of a large spider hanging above you, lit up only by the flame of your torch. It is not aware of your presence—thank the Gods. Without a weapon, it would be unwise to approach it.",
    options: ["NORTH"],
    interactions: ["FIGHT"],
    adjacentScenes: [1, -1, -1, -1],
  },
  {
    id: 3,
    image: "/field.png",
    description:
      "As you exit the cave, your eyes slowly adjust to the sunlight. Blurry white turns to vibrant greens as you happen upon a lush field. To the north, you see a large estate just over the hills. To the east, a dense forest. Towards the south, lies the cave that began your journey.",
    options: ["NORTH", "SOUTH", "EAST"],
    interactions: [],
    adjacentScenes: [4, 0, 6, -1],
  },
  {
    id: 4,
    image: "/abandoned-monastery.png",
    description:
      "As you climb the hills, the large estate turns dusty and grey, its weathered facade pointing to years of neglect. You can continue moving north towards the entrance. Or perhaps its best to return to the fields to the south.",
    options: ["NORTH", "SOUTH"],
    interactions: [],
    adjacentScenes: [21, 3, -1, -1],
  },
  {
    id: 5,
    image: "/decrepit-belfry.png",
    description:
      'At the top of the monastery, you find a panoramic view looking back over the fields. The grey rain clouds move further out, the rain settling. A single skeleton sits perched against the wall. You see something held tightly in its clutches. On the table you see a book titled "Dracomancy: The History of Dragon Magic"',
    options: ["SOUTH"],
    interactions: ["SEARCH SKELETON", "SKELETON"],
    adjacentScenes: [-1, 21, -1, -1],
  },
  {
    id: 6,
    image: "/forest.png",
    description:
      "The harsh sunlight of the fields recedes as you walk further beneath the dense canopy of the forest. Several minutes into your travels, find a clearing. Worn paths and crushed underbrush indicate that this is a well-traveled location. To the north, you hear the trickling sounds of running water. To the east, the light recedes further as the greenery thickens. To the south, you see a bright light and a fence.",
    options: ["NORTH", "SOUTH", "EAST", "WEST"],
    interactions: [],
    adjacentScenes: [7, 10, 8, 3],
  },
  {
    id: 7,
    image: "/pond.png",
    description:
      "You happen upon a small pond, its surface shimmering with the incoming light from the canopy above. A frog sits on a lilypad at the edge of the pond, noting your presence.",
    options: ["SOUTH"],
    interactions: ["TAKE FROG", "PICK UP FROG", "FROG"],
    adjacentScenes: [-1, 6, -1, -1],
  },
  {
    id: 8,
    image: "/deep-forest.png",
    description:
      "As you travel deeper into the forest, a shiver runs down your spine. There is danger here, but you do not know where. Without a weapon, you decide it is best to turn back.",
    options: ["NORTH", "WEST"],
    interactions: ["CUT BRANCHES"],
    adjacentScenes: [9, -1, -1, 6],
  },
  {
    id: 9,
    image: "/dragons-nest.png",
    description:
      "The deep forest reveals a large tree. At its base, a sleeping dragon is curled up in its nest. The dragon is beautiful, yet menacing. It's green scales shine vibrantly, it's presence surging with the soul energy of the forest.",
    options: ["SOUTH"],
    interactions: ["FIGHT", "SPEAK TO DRAGON", "SPEAK", "RUN"],
    adjacentScenes: [-1, 8, -1, -1],
  },
  {
    id: 10,
    image: "/village-outskirts.png",
    description:
      "You happen upon a patch of farm land sitting just outside of a bustling village. Tradesman pass you by in their carts, acknowleding your presence but not engaging for fear that you may steal their wares. Perhaps you should follow them south into the village. A well stands next to one of the farms, seemingly as the water source for the surrounding families.",
    options: ["NORTH", "SOUTH"],
    interactions: ["WELL", "DESCEND WELL"],
    adjacentScenes: [6, 11, -1, -1],
  },
  {
    id: 11,
    image: "/village.png",
    description:
      "You enter the center of a populous village. In front of you is the entrance to the most popular tavern in town. You notice a boy crying in the alleyway.",
    options: ["NORTH"],
    interactions: [
      "ENTER",
      "ENTER TAVERN",
      "APPROACH CRYING BOY",
      "APPROACH BOY",
      "TALK TO BOY",
      "TALK TO CRYING BOY",
      "SPEAK TO BOY",
      "SPEAK TO CRYING BOY",
      "TALK",
      "SPEAK",
    ],
    adjacentScenes: [10, 14, -1, -1],
  },
  {
    id: 12,
    image: "/tavern.png",
    description:
      "The tavern is lively. People are singing and enjoying themselves, except for one man who seems to be sitting with his sword at the bar, ignoring the pomp and circumstance of the venue.",
    interactions: [
      "LEAVE TAVERN",
      "EXIT TAVERN",
      "SPEAK",
      "SPEAK TO MAN",
      "SPEAK TO ADVENTURER",
      "APPROACH",
      "APPROACH MAN",
      "APPROACH ADVENTURER",
      "TALK",
      "TALK TO MAN",
      "TALK TO ADVENTURER",
    ],
    adjacentScenes: [10, 14, -1, -1],
  },
  {
    id: 13,
    image: "/adventurer.png",
    description:
      "The adventurer looks at you with a skeptical glance. Perhaps not the friendliest man, but the sword sitting next to him could be of use to you.",
    interactions: ["SAY GOODBYE", "LEAVE", "INQUIRE", "YES", "NO", "GIVE WEB"],
    adjacentScenes: [10, 14, -1, -1],
  },
  {
    id: 14,
    image: "/crying-boy.png",
    description:
      'Through his tears, the boy looks up at you. "Sir, could you help me? I lost my pet frog. I don\'t know where it went. I lost him while I was running out in the fields."',
    interactions: [
      "INQUIRE",
      "INQUIRE ABOUT FROG",
      "ASK ABOUT FROG",
      "GIVE FROG",
      "LEAVE",
      "YES",
      "NO",
    ],
    adjacentScenes: [-1, -1, -1, -1],
  },
  {
    id: 15,
    image: "/matriarch-fight.png",
    description: "TBD",
    interactions: ["USE SWORD", "SWORD", "SWING SWORD"],
    adjacentScenes: [1, -1, -1, -1],
  },
  {
    id: 16,
    image: "/dragon-fight.png",
    description: "TBD",
    interactions: [
      "USE SWORD",
      "SWORD",
      "SWING SWORD",
      "USE SCROLL",
      "RUN",
      "TALK",
      "SPEAK",
      "TALK TO DRAGON",
      "TALK TO VERDOTH",
      "SPEAK TO DRAGON",
      "SPEAK TO VERDOTH",
    ],
    adjacentScenes: [-1, 8, -1, -1],
  },
  {
    id: 17,
    image: "/dragon-talk.png",
    description: "TBD",
    interactions: [
      "ASK FOR SCALE",
      "INQUIRE",
      "INQUIRE ABOUT SCALE",
      "KISS",
      "RUN",
      "LEAVE",
    ],
    adjacentScenes: [-1, 8, -1, -1],
  },
  {
    id: 18,
    image: "/matriarch-death.png", // DNE
    description: "TBD",
    interactions: ["TAKE WEB", "LEAVE"],
    adjacentScenes: [1, -1, -1, -1],
  },
  {
    id: 19,
    image: "/dragon-death.png",
    description: "TBD",
    interactions: ["TAKE SCALE", "PICK UP SCALE", "LEAVE"],
    adjacentScenes: [-1, 8, -1, -1],
  },
  {
    id: 20,
    image: "/boy-and-frog.png",
    description:
      'The boy grabs the frog from you excitedly. A smile sweeps acrsoss his face. "YOU FOUND HIM!" The boy reaches into this pocket. "Here, sir, I found this thing when I was playing in the fields. You should have it."',
    interactions: ["GOODBYE", "SAY GOODBYE", "LEAVE"],
    adjacentScenes: [-1, -1, -1, -1],
  },
  {
    id: 21,
    image: "/monastery-entrance.png",
    description:
      "You approach a heavy, ornate door. As you approach, it begins to rain. Upon close inspection it was clear this large estate was once a thriving monastery. The windows are too high to see in.",
    options: ["NORTH", "SOUTH"],
    interactions: [],
    adjacentScenes: [5, 4, -1, -1],
  },
];

export default scenes;
