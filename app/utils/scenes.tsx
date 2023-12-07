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
    description: "TBD",
    options: ["NORTH", "SOUTH"],
    interactions: ["USE LADDER", "LADDER", "CLIMB LADDER"],
    adjacentScenes: [0, 2, -1, -1],
  },
  {
    id: 2,
    image: "/matriarchs-lair.png",
    description: "TBD",
    options: ["NORTH"],
    interactions: ["FIGHT"],
    adjacentScenes: [1, -1, -1, -1],
  },
  {
    id: 3,
    image: "/field.png",
    description: "TBD",
    options: ["NORTH", "SOUTH", "EAST"],
    interactions: [],
    adjacentScenes: [4, 0, 6, -1],
  },
  {
    id: 4,
    image: "/abandoned-monastery.png",
    description: "TBD",
    options: ["NORTH", "SOUTH"],
    interactions: [
      "PRESS TOP STONE",
      "PRESS LEFT STONE",
      "PRESS RIGHT STONE",
      "PRESS BOTTOM STONE",
    ],
    adjacentScenes: [5, 3, -1, -1],
  },
  {
    id: 5,
    image: "/decrepit-belfry.png",
    description: "TBD",
    options: ["SOUTH"],
    interactions: ["SEARCH SKELETON", "SKELETON", "TAKE SCROLL"],
    adjacentScenes: [-1, 4, -1, -1],
  },
  {
    id: 6,
    image: "/forest.png", // DNE
    description: "TBD",
    options: ["NORTH", "SOUTH", "EAST", "WEST"],
    interactions: [],
    adjacentScenes: [7, 10, 8, 3],
  },
  {
    id: 7,
    image: "/pond.png", // DNE
    description: "TBD",
    options: ["SOUTH"],
    interactions: ["TAKE FROG", "PICK UP FROG"],
    adjacentScenes: [-1, 6, -1, -1],
  },
  {
    id: 8,
    image: "/deep-forest.png", // DNE
    description: "TBD",
    options: ["NORTH", "WEST"],
    interactions: ["CUT BRANCHES"],
    adjacentScenes: [9, -1, -1, 6],
  },
  {
    id: 9,
    image: "/dragons-nest.png", // DNE
    description: "TBD",
    options: ["SOUTH"],
    interactions: ["FIGHT", "SPEAK TO DRAGON", "SPEAK", "RUN"],
    adjacentScenes: [-1, 8, -1, -1],
  },
  {
    id: 10,
    image: "/village-outskirts.png", // DNE
    description: "TBD",
    options: ["NORTH", "SOUTH"],
    interactions: ["WELL", "DESCEND WELL"],
    adjacentScenes: [6, 11, -1, -1],
  },
  {
    id: 11,
    image: "/village.png", // DNE
    description: "TBD",
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
    image: "/tavern.png", // DNE
    description: "TBD",
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
    image: "/adventurer.png", // DNE
    description: "TBD",
    interactions: ["SAY GOODBYE", "LEAVE", "INQUIRE", "YES", "NO", "GIVE WEB"],
    adjacentScenes: [10, 14, -1, -1],
  },
  {
    id: 14,
    image: "/crying-boy.png", // DNE
    description: "TBD",
    interactions: [
      "INQUIRE",
      "INQUIRE ABOUT FROG",
      "ASK ABOUT FROG",
      "GIVE FROG",
      "LEAVE",
      "YES",
      "NO",
    ],
    adjacentScenes: [10, 14, -1, -1],
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
    image: "/dragon-fight.png", // DNE
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
    id: 16,
    image: "/dragon-talk.png", // DNE
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
    id: 17,
    image: "/matriarch-death.png", // DNE
    description: "TBD",
    interactions: ["TAKE WEB", "LEAVE"],
    adjacentScenes: [1, -1, -1, -1],
  },
  {
    id: 18,
    image: "/dragon-death.png", // DNE
    description: "TBD",
    interactions: ["TAKE SCALE", "PICK UP SCALE", "LEAVE"],
    adjacentScenes: [-1, 8, -1, -1],
  },
];

export default scenes;
