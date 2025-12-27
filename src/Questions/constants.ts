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
    question:
      "Which Christmas song became the first song ever broadcast from space when it was played by astronauts aboard the Gemini 6A in 1975 as a festive prank, using a harmonica and bells smuggled aboard?",
    answer: "Jingle Bells",
    multiChoice: ["The First Noel", "Hark the Herald! Angels Sing", "Jingle Bells", "Santa Claus is Coming to Town"],
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
    question: "What year did the holiday anthem 'All I Want for Christmas Is You' come out?",
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
      "Which famous literary peer of Charles Dickens gave this review of A Christmas Carol: 'There is no heart. No feeling – is nothing but glittering frostwork.'",
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
    question: "In 'Jingle Bells', bells on _______ ring, making spirits bright?",
    answer: "bobtails",
  },
  {
    question: "What food does Buddy put chocolate syrup on in Elf?",
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
    question: "Where does the Grinch live? (Be specific)",
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
    option: "Dance Monkey",
    style: { backgroundColor: "teal", textColor: "white" },
  },

  {
    option: "Act A Fool",
    style: { backgroundColor: "#699c36", textColor: "white" },
  },
  {
    option: "Scrooges Score",
    style: { backgroundColor: "#a628a6", textColor: "gold" },
  },
  {
    option: "Tax Break",
    style: { backgroundColor: "#0131f2", textColor: "white" },
  },
];

export const WheelResults = [
  {
    key: 0,
    game: "Caroling Chaos",
    instructions:
      "Sing it Out! Pick a card, and using the one festive word indicated as your only lyric, get your team to name that tune before the time runs out.",
    time: 30,
  },
  {
    key: 1,
    game: "Dance Monkey",
    instructions:
      "Dance monkey! Without using the secret word/action indicated on the card, your whole team calls out commands to have you act out a seasonal activity! Like a good monkey, guess what you're being forced to do before the time runs out!",
    time: 450,
  },

  {
    key: 2,
    game: "Act a Fool",
    instructions:
      "Musical Cherades! Using gestures only, get your team to guess the festive song title on the back of your card. The normal rules of Cormack Cherades apply.",
    time: 50,
  },
  { key: 3, game: "Scrooges Score", instructions: "100 Bonus points. That's it. Take them, you Scrooge." },
  {
    key: 4,
    game: "Tax Break",
    instructions:
      "Tax break! You've been making too much income in Whoville. The taxman is coming for you! Donate 100 points to the starving orphans whos to get him off your back!",
  },
];

export const wrongSayings = [
  "Nice Try Guy",
  "Are you even trying?",
  "Not quite, champ",
  "Swing and a miss!",
  "Better luck next time",
  "Ooof, that's not it",
  "Reading is fundamental",
  "Did you even listen?",
  "Back to the drawing board",
  "That's a no from me",
  "Not even close",
  "Bless your heart",
  "Think harder next time",
  "Maybe pay attention?",
  "Comprehension skills needed",
  "Try reading it again",
  "Focus up next time",
  "Were you guessing?",
  "Education is key",
  "Might want to study more",
];

export const correctSayings = [
  "Wahoo!",
  "Very Smart",
  "Nailed it!",
  "Look at you go!",
  "Smarty pants!",
  "You're on fire!",
  "Impressive!",
  "Well done!",
  "Christmas genius!",
  "Crushing it!",
  "Correct! Nice work",
  "You got it!",
  "That's right!",
  "Brilliant!",
  "Spot on!",
  "You're too good!",
  "Show off!",
  "Knew you had it in you",
  "Finally, someone who reads",
  "Look who's been paying attention",
];
