// Complete Movie Database with MP4 Links
const movieDatabase = {
    // ======== MOVIES ========
    'Guardians of the Galaxy': {
        title: 'Guardians of the Galaxy',
        genre: 'Action • Adventure',
        year: '2024',
        rating: '8.4',
        description: 'An epic Marvel space adventure where a group of misfits must save the galaxy. Packed with action, humor, and amazing visuals.',
        videoUrl: 'https://www.youtube.com/embed/u3V5KDHRQvk?t=5',
        image:'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg/250px-Guardians_of_the_Galaxy_%28film%29_poster.jpg'
    },
    'Spider-Man': {
        title: 'Spider-Man: Brand New Day',
        genre: 'Action • Superhero',
        year: '2024',
        rating: '8.6',
        description: 'A new Spider-Man adventure with thrilling action sequences and emotional depth. Experience the life of your friendly neighborhood hero.',
        videoUrl: 'https://www.youtube.com/embed/aBlsrtxuwss',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioFLm4hfWkUEO0q_OvuruhEVcWwom1QBaqQ&s'
    },
    'Avengers': {
        title: 'Avengers: Doomsday',
        genre: 'Action • Superhero',
        year: '2024',
        rating: '8.8',
        description: 'The ultimate Marvel thriller bringing together the mightiest heroes. An epic battle between light and darkness.',
        videoUrl: 'https://www.youtube.com/embed/-8hwRjBHscM?t=10',
        image:'https://preview.redd.it/what-do-you-want-to-see-most-in-avengers-doomsday-v0-flc2pue4pdqf1.jpeg?auto=webp&s=c9530c15562750a2f856744afa5f92a88c89a5f5"'
    },
    'Project Hailmary': {
        title: 'Project Hailmary',
        genre: 'Sci-Fi • Adventure',
        year: '2024',
        rating: '8.5',
        description: 'An amazing sci-fi adventure about a space mission to save humanity. A thrilling journey across the cosmos.',
        videoUrl: 'https://www.youtube.com/embed/m08TxIsFTRI?t=15',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcioW2vsIKd-ZIs477imI2_GEKXqJrVHQrg&s'
    },
    'Paradise': {
        title: 'Paradise',
        genre: 'Action • Adventure',
        year: '2024',
        rating: '8.3',
        description: 'An action-packed adventure in a tropical paradise. Danger lurks at every corner in this thrilling film.',
        videoUrl: 'https://www.youtube.com/embed//Rcvre4NPMxQ?t=3',
        image:'https://cdn.district.in/movies-assets/images/cinema/The-Paradise_Poster-2c67d280-75d9-11f0-8df3-db01d1baa444.jpg'
    },
    'Terror': {
        title: 'Terror',
        genre: 'Thriller • Mystery',
        year: '2024',
        rating: '8.7',
        description: 'A psychological thriller that will keep you on the edge of your seat. Uncover the dark secrets hidden in the shadows.',
        videoUrl: 'https://www.youtube.com/embed/89C_B5mUIzk?t=194',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAkRx8SAqqfTHfLy3w0Ti-vhT5By474fc2Q&s'
    },
    'Hai Jawani': {
        title: 'Hai Jawani',
        genre: 'Romance • Drama',
        year: '2024',
        rating: '8.1',
        description: 'A beautiful romance story about young love and dreams. Experience the magic of first love.',
        videoUrl: 'https://www.youtube.com/embed/rFOdIv1jwhc',
        image:'https://cdn.district.in/movies-assets/images/cinema/Hai-Jawani-Toh-Ishq-Hona-Hai_Cover-ea143d50-4d0b-11f1-ab00-2bad8ba2a996.jpg'
    },
    'Athma': {
        title: 'Athma',
        genre: 'Horror • Supernatural',
        year: '2024',
        rating: '8.4',
        description: 'A spine-chilling horror film that will terrify you. Experience supernatural terror at its finest.',
        videoUrl: 'https://www.youtube.com/embed/b4sACvxFHK4?t=8',
        img:'https://i.ytimg.com/vi/vEbxDNum6qU/maxresdefault.jpg'
    },
    'Swapped': {
        title: 'Swapped',
        genre: 'Adventure • Comedy',
        year: '2024',
        rating: '8.6',
        description: 'A hilarious adventure where two people swap lives. Chaos and laughter ensue in this entertaining film.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'The Bluff': {
        title: 'The Bluff',
        genre: 'Drama • Adventure',
        year: '2024',
        rating: '8.8',
        description: 'A powerful drama about a pirate captain seeking redemption. A gripping tale of adventure and honor.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Street Fighter': {
        title: 'Street Fighter',
        genre: 'Action • Sci-Fi',
        year: '2024',
        rating: '8.2',
        description: 'Epic martial arts action in a futuristic world. Battle with incredible fight choreography.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Anaconda': {
        title: 'Anaconda',
        genre: 'Adventure • Thriller',
        year: '2024',
        rating: '8.0',
        description: 'A thrilling adventure in the jungle. Face the dangers of nature in this exciting expedition.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Karuppu': {
        title: 'Karuppu',
        genre: 'Action • Crime',
        year: '2024',
        rating: '7.9',
        description: 'An action-packed crime thriller. Watch as heroes take on powerful enemies.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Rahu Kethu': {
        title: 'Rahu Kethu',
        genre: 'Comedy • Fantasy',
        year: '2024',
        rating: '7.7',
        description: 'A hilarious comedy with fantastical elements. Laugh out loud with this entertaining film.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Cocktail 2': {
        title: 'Cocktail 2',
        genre: 'Romance • Drama',
        year: '2024',
        rating: '8.5',
        description: 'A romantic sequel bringing back the magic. Experience love, betrayal, and redemption.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Dhurandhar 2': {
        title: 'Dhurandhar 2',
        genre: 'Action • Thriller',
        year: '2024',
        rating: '8.3',
        description: 'An intense action-thriller with explosive sequences. The revenge saga continues.',
        videoUrl: "https://www.youtube.com/embed/rZ_e-s6VvR4"
    },
    'KD The Devil': {
        title: 'KD The Devil',
        genre: 'Thriller • Horror',
        year: '2024',
        rating: '8.7',
        description: 'A dark psychological thriller about a mysterious figure. Suspense and terror await.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Youth': {
        title: 'Youth',
        genre: 'Comedy • Drama',
        year: '2024',
        rating: '8.4',
        description: 'A touching story about youth, dreams, and growing up. Heartfelt and humorous.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'AthiReady': {
        title: 'AthiReady',
        genre: 'Drama • Action',
        year: '2024',
        rating: '8.8',
        description: 'A powerful drama about determination and resilience. An inspiring journey.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Mercy': {
        title: 'Mercy',
        genre: 'Sci-Fi • Drama',
        year: '2024',
        rating: '8.2',
        description: 'A sci-fi drama exploring themes of compassion and survival. Thought-provoking.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Booth Bangla': {
        title: 'Booth Bangla',
        genre: 'Horror • Comedy',
        year: '2024',
        rating: '7.9',
        description: 'A horror-comedy with local flavor. Spooky and hilarious at the same time.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Copy Patil': {
        title: 'Copy Patil',
        genre: 'Comedy • Crime',
        year: '2024',
        rating: '7.7',
        description: 'A hilarious comedy about a con artist. Laughter and mishaps galore.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },

    // ======== TV SHOWS ========
    'The Kapil Sharma Show': {
        title: 'The Kapil Sharma Show',
        genre: 'Comedy • Entertainment',
        year: '2024',
        rating: '8.9',
        description: 'The most entertaining talk show with hilarious sketches and celebrity guests. Laugh with India\'s biggest comedy star.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Breaking Bad': {
        title: 'Breaking Bad',
        genre: 'Thriller • Crime',
        year: '2024',
        rating: '9.2',
        description: 'One of the greatest TV series ever made. Follow a chemistry teacher turned drug manufacturer in this gripping thriller.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'The Haunting': {
        title: 'The Haunting',
        genre: 'Horror • Supernatural',
        year: '2024',
        rating: '8.5',
        description: 'A spine-chilling horror series that combines psychological terror with supernatural elements.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Stranger Things': {
        title: 'Stranger Things',
        genre: 'Sci-Fi • Mystery',
        year: '2024',
        rating: '8.7',
        description: 'A sci-fi series set in the 1980s where strange events occur in a small town. Mystery and adventure await.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'The Office': {
        title: 'The Office',
        genre: 'Comedy • Mockumentary',
        year: '2024',
        rating: '9.0',
        description: 'A mockumentary comedy about office workers. Hilarious and heartwarming episodes.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Game of Thrones': {
        title: 'Game of Thrones',
        genre: 'Fantasy • Drama',
        year: '2024',
        rating: '9.1',
        description: 'An epic fantasy series with dragons, knights, and political intrigue. A cultural phenomenon!',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Narcos': {
        title: 'Narcos',
        genre: 'Crime • Thriller',
        year: '2024',
        rating: '8.8',
        description: 'A crime thriller series about the rise and fall of a drug empire. Intense and compelling!',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Westworld': {
        title: 'Westworld',
        genre: 'Sci-Fi • Thriller',
        year: '2024',
        rating: '8.3',
        description: 'A sci-fi series set in a theme park populated by android hosts. Reality and consciousness questioned!',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'The Mandalorian': {
        title: 'The Mandalorian',
        genre: 'Sci-Fi • Action',
        year: '2024',
        rating: '8.6',
        description: 'A space adventure series following a bounty hunter in the Star Wars universe. Action-packed!',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'The Witcher': {
        title: 'The Witcher',
        genre: 'Fantasy • Adventure',
        year: '2024',
        rating: '8.2',
        description: 'A fantasy series about a monster hunter navigating a world of magic and danger. Epic!',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Friends': {
        title: 'Friends',
        genre: 'Comedy • Sitcom',
        year: '2024',
        rating: '8.9',
        description: 'A comedy series about six friends living in New York City. A timeless classic!',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Modern Family': {
        title: 'Modern Family',
        genre: 'Comedy • Drama',
        year: '2024',
        rating: '9.5',
        description: 'A hilarious and touching series about a modern family. Heartwarming and funny!',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },

    // ======== ANIME ========
    'Attack on Titan': {
        title: 'Attack on Titan',
        genre: 'Action • Adventure • Dark Fantasy',
        year: '2024',
        rating: '9.1',
        description: 'Humanity fights for survival against giant humanoid creatures known as Titans. An intense action-packed anime with stunning animation and compelling storytelling.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Death Note': {
        title: 'Death Note',
        genre: 'Psychological • Thriller',
        year: '2024',
        rating: '9.0',
        description: 'A psychological thriller about a high school student who finds a mysterious notebook that allows him to kill anyone by writing their name.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Demon Slayer': {
        title: 'Demon Slayer',
        genre: 'Action • Supernatural',
        year: '2024',
        rating: '8.8',
        description: 'A young man whose family was slaughtered by demons becomes a demon slayer to save his sister. Stunning animation and incredible action sequences.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'My Hero Academia': {
        title: 'My Hero Academia',
        genre: 'Action • School',
        year: '2024',
        rating: '8.7',
        description: 'In a world where superpowers are common, a powerless teenager enrolls in a hero academy to become the greatest hero.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Tokyo Ghoul': {
        title: 'Tokyo Ghoul',
        genre: 'Dark • Fantasy',
        year: '2024',
        rating: '8.5',
        description: 'A dark fantasy anime about a world where flesh-eating ghouls live in hiding among human society.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Naruto': {
        title: 'Naruto',
        genre: 'Action • Adventure',
        year: '2024',
        rating: '8.9',
        description: 'Follow Naruto as he trains to become the strongest ninja and protect his village. An epic adventure spanning years.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Steins;Gate': {
        title: 'Steins;Gate',
        genre: 'Sci-Fi • Thriller',
        year: '2024',
        rating: '9.2',
        description: 'A brilliant time-travel anime about a group of friends who accidentally invent a microwave that sends messages to the past.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'One Punch Man': {
        title: 'One Punch Man',
        genre: 'Action • Comedy',
        year: '2024',
        rating: '8.7',
        description: 'A hilarious action anime about a superhero who became too strong and now finds every fight boring.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Fullmetal Alchemist': {
        title: 'Fullmetal Alchemist',
        genre: 'Adventure • Fantasy',
        year: '2024',
        rating: '9.1',
        description: 'Two brothers seek to restore their bodies after a failed alchemical experiment. An epic tale of redemption and sacrifice.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Jujutsu Kaisen': {
        title: 'Jujutsu Kaisen',
        genre: 'Action • Dark',
        year: '2024',
        rating: '8.9',
        description: 'A powerful anime about sorcerers fighting curses in a hidden world alongside normal society.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Hunter x Hunter': {
        title: 'Hunter x Hunter',
        genre: 'Action • Adventure',
        year: '2024',
        rating: '8.9',
        description: 'A boy embarks on an adventure to become a Hunter and find his father in a world of magical beasts.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Cowboy Bebop': {
        title: 'Cowboy Bebop',
        genre: 'Sci-Fi • Neo-Noir',
        year: '2024',
        rating: '8.8',
        description: 'A classic neo-noir space western about bounty hunters on a spaceship called the Bebop.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Mob Psycho 100': {
        title: 'Mob Psycho 100',
        genre: 'Comedy • School',
        year: '2024',
        rating: '8.7',
        description: 'A hilarious anime about a middle school boy with psychic powers trying to live a normal life.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Code Geass': {
        title: 'Code Geass',
        genre: 'Mecha • Psychological',
        year: '2024',
        rating: '8.7',
        description: 'A psychological mecha anime about a student who gains the power to command anyone to obey him.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Vinland Saga': {
        title: 'Vinland Saga',
        genre: 'Action • Drama',
        year: '2024',
        rating: '9.0',
        description: 'An epic historical anime about Vikings seeking revenge and redemption in a brutal world.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Sword Art Online': {
        title: 'Sword Art Online',
        genre: 'Action • Romance',
        year: '2024',
        rating: '8.4',
        description: 'Players become trapped in a virtual reality MMO where death in the game means death in real life.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Ergo Proxy': {
        title: 'Ergo Proxy',
        genre: 'Sci-Fi • Philosophical',
        year: '2024',
        rating: '8.5',
        description: 'A philosophical sci-fi anime about androids and humans in a post-apocalyptic world.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Blue Lock': {
        title: 'Blue Lock',
        genre: 'Sports • Action',
        year: '2024',
        rating: '8.3',
        description: 'An intense sports anime about young strikers competing to become the perfect soccer player.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Spy x Family': {
        title: 'Spy x Family',
        genre: 'Comedy • Action',
        year: '2024',
        rating: '8.6',
        description: 'A hilarious anime about a spy, an assassin, and a psychic forming a fake family.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Chainsaw Man': {
        title: 'Chainsaw Man',
        genre: 'Action • Dark',
        year: '2024',
        rating: '8.7',
        description: 'A dark action anime about a boy who becomes a chainsaw-wielding demon hunter.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Trigun': {
        title: 'Trigun',
        genre: 'Action • Comedy',
        year: '2024',
        rating: '8.4',
        description: 'A classic western anime about a legendary gunslinger with a $60 billion bounty on his head.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Wind Breaker': {
        title: 'Wind Breaker',
        genre: 'Action • School',
        year: '2024',
        rating: '8.2',
        description: 'An action anime about a street fighter who transfers to high school to pursue a different path.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Kaiju No. 8': {
        title: 'Kaiju No. 8',
        genre: 'Action • Sci-Fi',
        year: '2024',
        rating: '8.5',
        description: 'An action-packed anime about a man fighting giant monsters known as Kaiju.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Frieren': {
        title: 'Frieren: Beyond Journey\'s End',
        genre: 'Fantasy • Adventure',
        year: '2024',
        rating: '9.3',
        description: 'A beautiful fantasy anime about an elf\'s 50-year journey after her adventuring days end.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Solo Leveling': {
        title: 'Solo Leveling',
        genre: 'Action • Fantasy',
        year: '2024',
        rating: '8.8',
        description: 'A Korean anime about the weakest hunter gaining mysterious powers to become the strongest.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Bleach': {
        title: 'Bleach',
        genre: 'Action • Supernatural',
        year: '2024',
        rating: '7.9',
        description: 'A long-running action anime about a soul reaper protecting the living world from evil spirits.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Fairy Tail': {
        title: 'Fairy Tail',
        genre: 'Action • Fantasy',
        year: '2024',
        rating: '8.2',
        description: 'An adventurous anime about a guild of powerful mages going on epic quests.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'One Piece': {
        title: 'One Piece',
        genre: 'Action • Adventure',
        year: '2024',
        rating: '8.8',
        description: 'A legendary anime following a pirate crew searching for treasure and adventure on the high seas.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Dragon Ball Z': {
        title: 'Dragon Ball Z',
        genre: 'Action • Adventure',
        year: '2024',
        rating: '8.7',
        description: 'A classic action anime with epic battles and powerful transformations.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Seven Deadly Sins': {
        title: 'Seven Deadly Sins',
        genre: 'Action • Fantasy',
        year: '2024',
        rating: '8.3',
        description: 'An epic fantasy anime about legendary knights fighting for justice and redemption.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Akame ga Kill': {
        title: 'Akame ga Kill',
        genre: 'Action • Dark Fantasy',
        year: '2024',
        rating: '8.1',
        description: 'A dark action anime about assassins fighting against a corrupt empire.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Kill la Kill': {
        title: 'Kill la Kill',
        genre: 'Action • School',
        year: '2024',
        rating: '8.4',
        description: 'An over-the-top action anime with incredible fight scenes and humor.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Nichijou': {
        title: 'Nichijou',
        genre: 'Comedy • School',
        year: '2024',
        rating: '8.2',
        description: 'A hilarious comedy anime about the everyday lives of high school friends.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Kaguya-sama': {
        title: 'Kaguya-sama: Love is War',
        genre: 'Comedy • Romance',
        year: '2024',
        rating: '8.6',
        description: 'A clever romantic comedy about two genius students playing mind games over love.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Konosuba': {
        title: 'Konosuba',
        genre: 'Comedy • Fantasy',
        year: '2024',
        rating: '8.3',
        description: 'A hilarious parody fantasy anime about a party of misfit adventurers.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Yuru Camp': {
        title: 'Yuru Camp',
        genre: 'Comedy • Slice of Life',
        year: '2024',
        rating: '8.2',
        description: 'A cozy anime about girls going on camping adventures.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    },
    'Silver Spoon': {
        title: 'Silver Spoon',
        genre: 'Comedy • School',
        year: '2024',
        rating: '8.1',
        description: 'A slice-of-life anime about students at an agricultural school.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4'
    },
    'Grand Blue': {
        title: 'Grand Blue',
        genre: 'Comedy • Adventure',
        year: '2024',
        rating: '8.6',
        description: 'A hilarious anime about college students and diving adventures.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4'
    },
    'Shouwa Genroku': {
        title: 'Shouwa Genroku Rakugo Shinjuu',
        genre: 'Drama • Slice of Life',
        year: '2024',
        rating: '8.7',
        description: 'A beautiful drama about the traditional art of rakugo storytelling.',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/ForBiggerBlazes.mp4'
    }
};

// Get movie from URL parameter
function getMovieFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('movie');
}

// Initialize player
function initializePlayer() {
    const movieTitle = getMovieFromURL();
    const movieData = movieDatabase[movieTitle];

    if (!movieData) {
        document.getElementById('movieTitle').textContent = 'Movie Not Found';
        return;
    }

    // Update page title
    document.title = movieData.title + ' - StreamFlix';

    // Update video player
    const video = document.getElementById('mainPlayer');
    video.src = movieData.videoUrl;

    // Update movie details
    document.getElementById('movieTitle').textContent = movieData.title;
    document.getElementById('movieGenre').textContent = movieData.genre;
    document.getElementById('movieYear').textContent = movieData.year;
    document.getElementById('movieRating').textContent = '⭐ ' + movieData.rating;
    document.getElementById('movieDescription').textContent = movieData.description;

    // Load related videos
    loadRelatedVideos(movieTitle);
}



// Load related videos with images
function loadRelatedVideos(currentMovie) {
    const relatedContainer = document.getElementById('relatedVideos');
    relatedContainer.innerHTML = '';

    // Get 5 random movies (excluding current)
    const movies = Object.keys(movieDatabase).filter(m => m !== currentMovie);
    const shuffled = movies.sort(() => 0.5 - Math.random()).slice(0, 5);

    shuffled.forEach(title => {
        const movie = movieDatabase[title];
        const relatedItem = document.createElement('a');
        relatedItem.href = 'player.html?movie=' + encodeURIComponent(title);
        relatedItem.className = 'related-item';
        
        // Use fallback image if movie image is missing
        const imageUrl = movie.image || 'https://via.placeholder.com/70x105?text=' + encodeURIComponent(title.substring(0, 15));
        
        relatedItem.innerHTML = `
            <img src="${imageUrl}" alt="${title}" loading="lazy">
            <div class="related-info">
                <h4>${title}</h4>
                <p>${movie.genre} • <strong>⭐${movie.rating}</strong></p>
            </div>
        `;
        relatedContainer.appendChild(relatedItem);
    });
}

// Add comment
function addComment() {
    const input = document.getElementById('commentInput');
    const text = input.value.trim();

    if (!text) {
        alert('Please write a comment!');
        return;
    }

    const commentsList = document.getElementById('commentsList');
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = `
        <strong>You</strong>
        <p>${text}</p>
    `;

    commentsList.insertBefore(newComment, commentsList.firstChild);
    input.value = '';
}

// Play button handler
document.addEventListener('DOMContentLoaded', function() {
    initializePlayer();

    const playBtn = document.getElementById('playBtn');
    const video = document.getElementById('mainPlayer');

    if (playBtn) {
        playBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playBtn.textContent = '⏸ Pause';
            } else {
                video.pause();
                playBtn.textContent = '▶ Play';
            }
        });

        // Update button text when video plays/pauses
        video.addEventListener('play', function() {
            playBtn.textContent = '⏸ Pause';
        });

        video.addEventListener('pause', function() {
            playBtn.textContent = '▶ Play';
        });
    }

    // Allow Ctrl+Enter to submit comments
    const commentInput = document.getElementById('commentInput');
    if (commentInput) {
        commentInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                addComment();
            }
        });
    }
});
