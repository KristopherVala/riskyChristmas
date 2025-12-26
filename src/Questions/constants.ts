import { time } from "console";

export const christmasTrivia = [
  {
    question: "Which country is most commonly credited with starting the tradition of the Christmas tree?",
    answer: "Germany",
    multiChoice: ["Norway", "England", "Germany", "Sweden"],
  },
  {
    question: "In the song 'The Twelve Days of Christmas', how many presents are given in total?",
    answer: "364",
    multiChoice: ["78", "256", "144", "364"],
  },
  {
    question: "Which famous scientist was born on Christmas Day in 1642?",
    answer: "Isaac Newton",
    multiChoice: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Charles Darwin"],
  },

  {
    question: "Which country has sent a Christmas tree to London England every year since 1947 as a gift?",
    answer: "Norway",
    multiChoice: ["Canada", "Norway", "France", "Poland"],
  },

  {
    question: "What are two things you better not do because Santa Clause is coming to town?",
    answer: "cry, pout",
    multiChoice: ["shout, cry", "yell, cry", "cry, pout", "shout, pout"],
  },
  {
    question: "In 'Jingle Bells', bells on _______ ring, making spirits bright?",
    answer: "bobtails",
  },
  {
    question: "What language was 'Silent Night' composed in?",
    answer: "German",
    multiChoice: ["English", "German", "Latin", "French"],
  },
  {
    question:
      "True or False: The song 'Rudolph the Red Nose Reindeer' is a musical adaptation of a 1939 poem by W. H. Auden",
    answer: "False (The poet is Robert L. May)",
  },
  {
    question: "According to one website, what was the most popular type of Christmas tree in Canada in 2024?",
    answer: "Fraser Fir",
    multiChoice: ["Balsam Fir", "Scotch Pine", "Blue Spruce", "Fraser Fir"],
  },
  {
    question: "What year did 'All I Want for Christmas Is You' come out?",
    answer: "1994",
    multiChoice: ["2001", "2000", "1997", "1994"],
  },
  {
    question: "What was the name of Justin Bieber's 2011 Christmas album, certified 5x platinum?",
    answer: "Under the Mistletoe",
    multiChoice: ["Under the Mistletoe", "Believe", "Swag II", "Santa Tell Me"],
  },
  {
    question: "What is the name of Jack Black's character in the movie 'The Holiday'?",
    answer: "Miles",
    multiChoice: ["Miles", "Tim", "Abraham", "Klause"],
  },
  {
    question:
      "True or False: The film Holiday Inn won two academy awards: Best Original Song (White Christmas) and Best Actor (Bing Crosby)",
    answer: "False (Best Original Song only)",
  },
  {
    question: "True or False: Bing Crosby's version of White Christmas is the world's best selling single.",
    answer: "True",
  },
  {
    question:
      "Which famous literary peer gave this review of A Christmas Carol: 'There is no heart. No feeling – is nothing but glittering frostwork.'",
    answer: "Mark Twain",
    multiChoice: ["Mark Twain", "Louisa May Alcott", "Alfred Lord Tennyson", "Leo Tolstoy"],
  },
  {
    question: "How many shillings did copies of 'A Christmas Carol' originally cost?",
    answer: "5",
    multiChoice: ["0", "2", "5", "7"],
  },

  // Round2
  {
    question: "The Night Before Christmas, not even which creature wasn't stirring?",
    answer: "A mouse",
  },
  {
    question: "How many ghosts appear in A Christmas Carol?",
    answer: "4",
  },
  {
    question: "Who is Santa's fourth reindeer?",
    answer: "Vixen",
  },
  {
    question: "According to the song, what type of pipe does Frosty the Snowman have?",
    answer: "Corn cob pipe",
  },
  {
    question:
      "Which popular Christmas song became the first song ever broadcast from space when it was played by astronauts aboard the Gemini 6A in 1975 as a festive prank, using a harmonica and bells smuggled aboard?",
    answer: "Jingle Bells",
  },
  {
    question: "What other food does Buddy put chocolate syrup on in Elf?",
    answer: "Spaghetti",
  },
  {
    question: "In The Twelve Days of Christmas, how many ladies dancing did my true love give to me?",
    answer: "9",
  },
  {
    question: "What is the name of the Grinch's trusted dog?",
    answer: "Max",
  },
  {
    question: "Where does the Grinch live?",
    answer: "Mount Crumpit (just north of Whoville)",
  },

  {
    question:
      "In the Rudolph the Red Nosed Reindeer cartoon, what does the misfit elf dream of being instead of a toy maker?",
    answer: "A dentist",
  },
  {
    question: "What is Charlie Brown's role in the Christmas pageant?",
    answer: "Director",
  },
  {
    question: "What is Snoopy's role?",
    answer: "All the animals",
  },
  {
    question:
      "What was the name of the Cormack cousins' Christmas enterprise of singing Christmas carols to their parents for money?",
    answer: "The Kids Club",
  },
];

export const quizData = [
  {
    option: "Caroling Chaos",
    style: { backgroundColor: "#ef4444", textColor: "white" },
  },
  {
    option: "Act A Fool",
    style: { backgroundColor: "#3b82f6", textColor: "white" },
  },
  {
    option: "Tax Break", // this is charity
    style: { backgroundColor: "#f59e0b", textColor: "white" },
  },
  {
    option: "Dance Monkey",
    style: { backgroundColor: "#8b5cf6", textColor: "white" },
  },
  {
    option: "Pillage Pennys",
    style: { backgroundColor: "#9790a6", textColor: "white" },
  },
];

export const WheelResults = [
  {
    key: 0,
    game: "Caroling Chaos",
    instructions:
      "Sing it Out! Pick a card, and using the one festive word indicated, get your team to name that tune before the time runs out.",
    time: 20,
    options: [
      'Mama Mia ("snowman")',
      'Somewhere Over The Rainbow ("Santa")',
      'My Favourite Things ("gingerbread")',
      'Happy Birthday ("reindeer")',
      'Singing in the Rain ("frosty")',
    ],
  },
  {
    key: 1,
    game: "Dance Monkey",
    instructions: "",
    options: [
      "Eating Christmas dinner",
      "Shoveling snow",
      "Decorating the tree",
      "Christmas Shopping",
      "Wrapping gifts",
      "Baking cookies",
      "Pillaging",
    ],
  },
  {
    key: 2,
    game: "Musical Charades",
    instructions: "",
    options: [
      "A book, a pair of glasses",
      "A board game, a pillow",
      "A tissue, a glove",
      "A boot, a small orange",
      "A candy cane, a scarf",
      "A mug, a candle",
    ],
  },
  {
    key: 3,
    game: "Act a Fool",
    instructions: "",
    options: [
      "Silent Night",
      "Joy to the World",
      "You're a Mean One Mr. Grinch",
      "Rockin Around the Christmas Tree",
      "I Want a Hippopotamus for Christmas",
      "Jingle Bell Rock",
    ],
  },
];
