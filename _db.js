let games = [
  {
    id: '1',
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch","PlayStation 4"],
  },
  {
    id: '2',
    title: "God of War",
    platform: ["PlayStation 4"],
  },
  {
    id: '3',
    title: "Minecraft",
    platform: ["Multi-platform"],
  },
];

let authors = [
  {
    id: '1',
    name: "John Doe",
    verified: true,
  },
  {
    id: '2',
    name: "Jane Smith",
    verified: false,
  },
  {
    id: '3',
    name: "Chris Johnson",
    verified: true,
  },
];

let reviews = [
  {
    id: '1',
    rating: 4,
    content: "Amazing game with stunning graphics and gameplay.",
    author_id:'1',
    game_id:'2'
  },
  {
    id: '2',
    rating: 4,
    content: "Great story and mechanics, but some minor bugs.",
    author_id:'2',
    game_id:'1'
  },
  {
    id: '3',
    rating: 5,
    content: "An absolute masterpiece in every sense.",
    author_id:'3',
    game_id:'3'
  },
];

export default {games,authors,reviews}