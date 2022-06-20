$(document).ready(function () {
    var selectedImg = "";
    $('#full-screen').click(function () {
        $('h1').show();
        $('#full-screen').hide();
        // $('#defaultCanvas0').css('opacity') = '0';
        $('#defaultCanvas0').css('transform','scale(2)');
        $('#canvas-wrapper').css({ 'opacity' : 0 });
        setTimeout(doSomething, 500);
        function doSomething() {
            $('#canvas-wrapper').hide();
            console.log("helloSlow")
        }
    });

    var supports = (function() {
        var d = document.documentElement,
            c = "ontouchstart" in window || navigator.msMaxTouchPoints;
        if (c) {
            d.className += " touch";
            return {
                touch: true
            }
        } else {
            d.className += " no-touch";
            return {
                touch: false
            }
        }
      }
      )();




    // ==========================================================
    // Animation Students
    // ==========================================================

    var studentsBOA = [{
            id: 1,
            class: 'Bachelor of Animation',
            name: 'Bailey Xiong',
            email: 'bailey.xiong@outlook.com',
            photoProfile: 'BXiong.jpg',
            social: 'linkedin.com/in/bailey-xiong/',
            website: '',
            detail: 'I am a 3D artist specialising in comprehensive pre-vis and expressive character animation. I love stories with fantasy elements and working on stylised, comedic animation with exaggerated acting. I am passionate about animation and storytelling, and I always strive to further develop my skills!',
            project01: '01-bailey-01.jpg',
            project02: '01-bailey-02.jpg',
            project03: '01-bailey-03.jpg',
            project04: '01-bailey-04.jpg',
            project05: '01-bailey-05.jpg',
            project06: '01-bailey-06.jpg',
            project07: '01-bailey-07.jpg'
        },
        {
            id: 2,
            class: 'Bachelor of Animation',
            name: 'Caitlin Morris',
            email: 'caitlin.rr.morris@gmail.com',
            photoProfile: 'CMorris.jpg',
            social: '@distorteddaydream',
            website: '',
            detail: 'I am a 2D artist and illustrator with a fondness for traditional media. I enjoy using a mixture of mediums such as watercolour, gouache, ink and even embroidery and origami to create characters and develop visual concepts for animation and film. I am hard-working, reliable and hold myself to a high standard. I’m always willing to learn skills, experiment and push the boundaries of mediums.',
            project01: '01-catlin-01.jpg',
            project02: '01-catlin-02.jpg',
            project03: '01-catlin-03.jpg',
            project04: '01-catlin-04.jpg',
            project05: '01-catlin-05.jpg',
            project06: '01-catlin-06.jpg',
            project07: '01-catlin-07.jpg'
        },
        {
            id: 3,
            class: 'Bachelor of Animation',
            name: 'Cameron Dougal',
            email: 'cameron.m.dougall@gmail.com',
            photoProfile: 'CDougall.jpg',
            social: '',
            website: 'www.artstation.com/camerondougall',
            detail: 'I’m a 2D and 3D artist with a focus on environments who is passionate about both sci-fi and fantasy stories across all media. I enjoy designing and creating props for environments in 2D and 3D, as well as laying out and designing environments that help elevate a story, create a mood, or help contribute to a meaningful experience for the viewer. I am always looking for new ways to learn and for new skills that I can pick up to improve my work.',
            project01: '01-cameron-01.jpg',
            project02: '01-cameron-02.jpg',
            project03: '01-cameron-03.jpg',
            project04: '01-cameron-04.jpg',
            project05: '01-cameron-05.jpg',
            project06: '01-cameron-06.jpg',
            project07: '01-cameron-07.jpg'
        },
        {
            id: 4,
            class: 'Bachelor of Animation',
            name: 'Cosmo Calman',
            email: 'defyfilmnz@gmail.com',
            photoProfile: 'CCalman.jpg',
            social: 'YT: The Redacted Blackbook',
            website: 'artstation.com/heialthea',
            detail: 'I specialize in 2D animation and script-writing. I have a long list of other skills including camera, editing, digital drawing and group & time management. I have several short films under wraps and several feature length scripts at hand. I am currently working on a web comic called ‘Lucky’ and a children’s book focused around Covid and Climate Change. I am also interested in exploring video games as a new medium.',
            project01: '01-cosmo-01.jpg',
            project02: '01-cosmo-02.jpg',
            project03: '01-cosmo-03.jpg',
            project04: '01-cosmo-04.jpg',
            project05: '01-cosmo-05.jpg',
            project06: '01-cosmo-06.jpg',
            project07: '01-cosmo-07.jpg'
        },
        {
            id: 5,
            class: 'Bachelor of Animation',
            name: 'Jefferson Sage',
            email: 'jefferson.e.sage@gmail.com',
            photoProfile: 'JSage.jpg',
            social: 'www.artstation.com/arklyth',
            website: '',
            detail: 'I am a motivated animator with a real interest in most areas of creative production. I have a firm grasp of both 2D & 3D media, aided by my background in Illustration. While my true interest lies with animation, art direction and visual storytelling, I have confidence in surrounding areas such as asset creation and pre-production art. I take pride in my attention to detail and willingness to learn and improve.',
            project01: '01-jefferson-01.jpg',
            project02: '01-jefferson-02.jpg',
            project03: '01-jefferson-03.jpg',
            project04: '01-jefferson-04.jpg',
            project05: '01-jefferson-05.jpg',
            project06: '01-jefferson-06.jpg'
        },
        {
            id: 6,
            class: 'Bachelor of Animation',
            name: 'Kadin Bond',
            email: 'kadin.bond@gmail.com',
            photoProfile: 'KBond.jpg',
            social: '',
            website: '',
            detail: 'Kia Ora! My name is Kadin and I am a game designer. I have led the production of two games and one prototype tutorial. I am a generalist when it comes to all things game and I excel at environment design and code. Below is an example of my current project, Te Haerenga o Tama: The Journey of Tama.',
            project01: '01-kadlin-01.jpg',
            project02: '01-kadlin-02.jpg',
            project03: '01-kadlin-03.jpg',
            project04: '01-kadlin-04.jpg',
            project05: '01-kadlin-05.jpg',
            project06: '01-kadlin-06.jpg',
            project07: '01-kadlin-07.jpg'
        },
        {
            id: 7,
            class: 'Bachelor of Animation',
            name: 'Keir Rasmussen',
            email: 'AvionAxe@gmail.com',
            photoProfile: 'KRasmussen.jpg',
            social: '',
            website: '',
            detail: 'I am a 2D and 3D generalist with a love for Macabre art. I can fill just about any role on a team from character design to animating. My only limitation is what I’m given to work with. While I do have my own aspirations, namely in making comics and game design, I am more than wiling to put my skills to just about any grindstone. While a Jack of all Trades may be a master of none, they’ll never be wanting for work.',
            project01: '01-keir-01.jpg',
            project02: '01-keir-02.jpg',
            project03: '01-keir-03.jpg',
            project04: '01-keir-04.jpg',
            project05: '01-keir-05.jpg',
            project06: '01-keir-06.jpg',
            project07: '01-keir-07.jpg'
        },
        {
            id: 8,
            class: 'Bachelor of Animation',
            name: 'Kelly Oosthuizen',
            email: 'oosthuk@gmail.com',
            photoProfile: 'KOosthuizen.jpg',
            social: '',
            website: '',
            detail: 'Throughout 2021, my role has been Lead Environment Artist, with my focus being on developing my skills in environment creation and asset design. I will be pursuing with Honours in 2022 where we will continue to create and finalize the game we are making, Te Haerenga o Tama. As seen in these environments, I wanted to convey emotion through colour, composition and depth to find creative ways to tell visual stories.',
            project01: '01-kelly-01.jpg',
            project02: '01-kelly-02.jpg',
            project03: '01-kelly-03.jpg',
            project04: '01-kelly-04.jpg',
            project05: '01-kelly-05.jpg',
            project06: '01-kelly-06.jpg',
            project07: '01-kelly-07.jpg'
        },
        {
            id: 9,
            class: 'Bachelor of Animation',
            name: 'Luca Hall',
            email: 'lucahall@outlook.co.nz',
            photoProfile: 'LHall.jpg',
            social: '',
            website: 'artstation.com/brawny',
            detail: 'Character subtext and story are two of my driving motivations for creating 2D/3D animation. I have a strong interest in retro-futurism themes, such as those found in media of the late 90s. I am also interested in doing 2D generalist work in my own time. This work explores psychological themes with my own original characters, such as addiction, repressed memories and anxiety.',
            project01: '01-luca-01.jpg',
            project02: '01-luca-02.jpg',
            project03: '01-luca-03.jpg',
            project04: '01-luca-04.jpg',
            project05: '01-luca-05.jpg',
            project06: '01-luca-06.jpg',
            project07: '01-luca-07.jpg'
        },
        {
            id: 10,
            class: 'Bachelor of Animation',
            name: 'Rusty Cholos',
            email: 'rustycholos@gmail.com',
            photoProfile: 'RKun.jpg',
            social: '',
            website: '',
            detail: 'Yo what’s goodie, my name is Rusty. I‘m an Illustrator and Character Designer. My biggest inspiration in my art style is anime and manga. My dream is to become a Mangaka (Manga Artist) where one day my manga will get published and adapted into an anime. My illustrations are a mix of existing anime characters and pop culture. For example, I enjoy fusing rap albums and anime characters into one art piece and fusing people with games they like to play. Think of it as an artist remixing an original track. That’s me, I remix pop culture in my anime art style.',
            project01: '01-rusty-01.jpg',
            project02: '01-rusty-02.jpg',
            project03: '01-rusty-03.jpg',
            project04: '01-rusty-04.jpg',
            project05: '01-rusty-05.jpg',
            project06: '01-rusty-06.jpg',
            project07: '01-rusty-07.jpg'
        }
    ];

    // console.log(studentsBOA);

    // ==========================================================
    // Web & UX Students
    // ==========================================================

    var studentsWUX = [{
            id: 11,
            class: 'Web & UX Design',
            name: 'Ambar Williams',
            email: 'ambar-rose@hotmail.com',
            photoProfile: 'AWilliams.jpg',
            social: '',
            website: 'github.com/ambarrose',
            website2: 'behance.net/ambar_lavishdesign',
            detail: 'Hi, I’m Ambar Williams & I am a Wellington-based Front-end Web Developer, UX Researcher and Graphic Designer.' + '<br>' +
                ' I have a passion for User Experience design, developing and designing beautiful web apps and getting amoungst the psychology of the internet.',
            project01: '03-ambar-01.jpg',
            project02: '03-ambar-02.jpg',
            project03: '03-ambar-03.jpg',
            project04: '03-ambar-04.jpg',
            project05: '03-ambar-05.jpg',
            project06: '03-ambar-06.jpg',
            project07: '03-ambar-07.jpg',
        },
        {
            id: 12,
            class: 'Web & UX Design',
            name: 'Bee Currie',
            email: 'beejcurrie@gmail.com',
            photoProfile: 'BCurrie.jpg',
            social: '',
            website: 'github.com/beecurrie',
            website2: '',
            detail: 'I am an aspiring Web Designer with a passion for design and watching things come together.' +
                ' Seeing my designs and ideas come to fruition and on display is the most satisfactory part of working in this industry. I love to challenge myself and try new things in coding every chance I get.',
            project01: '03-bee-01.jpg',
            project02: '03-bee-02.jpg',
            project03: '03-bee-03.jpg',
            project04: '03-bee-04.jpg',
            project05: '03-bee-05.jpg',
            project06: '03-bee-06.jpg',
        },
        {
            id: 13,
            class: 'Web & UX Design',
            name: 'Charissa Chhiba',
            email: 'charissa_chhiba@hotmail.com',
            photoProfile: 'CChhiba.png',
            social: '@charissa__char',
            website: 'github.com/cchhiba',
            website2: '',
            detail: 'Coming from a background in Fashion Design, I took the plunge this year and made a passion-based decision to change my career by studying for a Diploma in UX and Web Design.' +
                ' It is the best decision I have made to date!' + ' Throughout my time at Yoobee, I really made sure to put all my effort into each project.' + ' I took a creative mindset on how I approached each brief and iterated my work throughout the development process of each project.' + '<br>' + '<br>' +
                ' I am really enjoying learning new skills in UX and UI design and I continue to do so outside of school.' + ' I am currently learning React, looking deeper into accessibility standards and working towards becoming a Front-end Web Developer.',
            project01: '03-charissa-01.jpg',
            project02: '03-charissa-02.jpg',
            project03: '03-charissa-03.jpg',
            project04: '03-charissa-04.jpg',
            project05: '03-charissa-05.jpg'
        },
        {
            id: 14,
            class: 'Web & UX Design',
            name: 'Ciaran Slow',
            email: 'ciaranslow@outlook.com',
            photoProfile: 'CSlow.jpg',
            social: '@nevohteebdesigns',
            website: 'github.com/Nevohteeb',
            website2: 'nevohteebdesigns.art',
            detail: 'I am a 35yo budding web and software developer interested in web development, UX processes, and graphic design.' +
                ' It is the best decision I have made to date!' + '<br>' + '<br>' +
                ' I love building, modifying, and improving websites.' + '<br>' + '<br>' +
                ' I enjoy a wide range of creative fields including design, art, and music.' + ' I enjoy using this creativity to express myself and communicate with the world around me.',
            project01: '03-ciaran-01.jpg',
            project02: '03-ciaran-02.jpg',
            project03: '03-ciaran-03.jpg',
            project04: '03-ciaran-04.jpg',
            project05: '03-ciaran-05.jpg',
            project06: '03-ciaran-06.jpg'
        },
        {
            id: 15,
            class: 'Web & UX Design',
            name: 'Josh Davey',
            email: 'j9nth@hotmail.com',
            photoProfile: 'JDavey.jpg',
            social: '@9nth',
            website: 'github.com/9th',
            website2: 'joshportfolio.yoobee.site',
            detail: 'Creativity, commitment and passion are three key characteristics that describe me.' + '<br>' + '<br>' +
                ' I enjoy the creative freedom of design and bringing a story to life through creative means.' +
                ' On the technical side, building websites and programs that improve the lives of others is something that I find fascinating.',
            project01: '03-josh-01.jpg',
            project02: '03-josh-02.jpg',
            project03: '03-josh-03.jpg',
            project04: '03-josh-04.jpg',
            project05: '03-josh-05.jpg',
            project06: '03-josh-06.jpg',
            project07: '03-josh-07.jpg'
        },
        {
            id: 16,
            class: 'Web & UX Design',
            name: 'Kris Fruer',
            email: 'krisfurer@gmail.com',
            photoProfile: 'KFurer.jpg',
            social: '',
            website: 'github.com/Kris-Furer',
            website2: '',
            detail: 'I began my time at Yoobee with the level 5 Web and Graphic design course, I had no idea I’d end up coding websites.' +
                ' Coding to me is a bit like a puzzle, and I get a real kick out of solving it.' +
                ' We’ve covered a lot of ground this year from the front-end to the back end, utilizing a range of tools, and I look forward to learning more.',
            project01: '03-kris-01.jpg',
            project02: '03-kris-02.jpg',
            project03: '03-kris-03.jpg',
            project05: '03-kris-05.jpg',
            project06: '03-kris-06.jpg'
        },
        {
            id: 17,
            class: 'Web & UX Design',
            name: 'Lucy Nalder',
            email: 'lalanalder@gmail.com',
            photoProfile: 'LNalder.png',
            social: '',
            website: 'github.com/lanalder',
            website2: '',
            detail: 'I have always loved tech. Code brings together my creative abilities and analyticalthinking, and I find the process of solving problems great fun. I am driven by the urge to understand problems and unknown things, and this industry appeals so much as what I don’t know is only ever an opportunity to learn more. I am apt with languages and quick to pick up their patterns.' +
                '<br>' + '<br>' +
                'Web is where I can work with abstract systems in a practical way, acting as translator between people and computers and pushing what both can do. I am excited by this industry in there always being something further to explore, to create, or to be made better.',
            project01: '03-lucy-01.jpg',
            project02: '03-lucy-02.jpg',
            project03: '03-lucy-03.jpg',
            project04: '03-lucy-04.jpg',
            project05: '03-lucy-05.jpg',
            project06: '03-lucy-06.jpg'
        },
        {
            id: 18,
            class: 'Web & UX Design',
            name: 'Matthew Brown',
            email: 'matthewbrown2237@gmail.com',
            photoProfile: 'MBrown.jpg',
            social: '',
            website: 'github.com/M-Brown23',
            website2: '',
            detail: 'Kia ora ko Matthew Brown toku ingoa. A ka whai mana ahau ki te whakaatu ki a koe i aku mahi.' +
                '<br>' + '<br>' +
                'Hi my name is Matthew Brown. And I have the privilege of showing you my work. I have been at Yoobee for 2 and a half years studying a multitude of subjects, 2021 I studied level 6 Web & UX. Here are some of my favorite projects I’ve had the privelege of doing.',
            project01: '03-matt-01.jpg',
            project02: '03-matt-02.jpg',
            project03: '03-matt-03.jpg',
            project04: '03-matt-04.jpg',
            project05: '03-matt-05.jpg'
        },
        {
            id: 19,
            class: 'Web & UX Design',
            name: 'Mohnish Leuva',
            email: 'leuvamohnish9@gmail.com',
            photoProfile: 'MLeuva.jpg',
            social: 'linkedin/mohnishleuva',
            website: 'github.com/suitless-stark',
            website2: 'www.mohnishleuva.com',
            detail: 'Kia ora, I am a passionate web & graphic designer. The main reason I am passionate about developing is so I can leverage my creativity, because there are so many ways to achieve the same goal when you code websites and I like to find the optimal one for each scenario.' +
                '<br>' + '<br>' +
                'My girlfriend argues that I care more about websites than her. I told her #she !important. No wonder they call me Mr. CSS.',
            project01: '03-mohnish-01.jpg',
            project02: '03-mohnish-02.jpg',
            project03: '03-mohnish-03.jpg',
            project04: '03-mohnish-04.jpg',
            project05: '03-mohnish-05.jpg',
            project06: '03-mohnish-06.jpg',
            project07: '03-mohnish-07.jpg'
        },
        {
            id: 20,
            class: 'Web & UX Design',
            name: 'Rane Magno',
            email: 'ranemagno@gmail.com',
            photoProfile: 'RMagno.jpg',
            social: '@rraneighh',
            website: '',
            website2: '',
            detail: 'Hey there! The name’s pronounced, rraneighh. I’m a designer falling into the rabbit hole of web development. My work focuses on minimalism and functionality but I’ve been experimenting with responsive, out of grid design - blending theeccentricities of graphic design with human centered digital developments.' +
                '<br>' + '<br>' +
                'Find me on instagram and github!',
            project01: '03-rane-01.jpg',
            project02: '03-rane-02.jpg',
            project03: '03-rane-03.jpg',
            project04: '03-rane-04.jpg',
            project05: '03-rane-05.jpg',
            project06: '03-rane-06.jpg',
        },
        {
            id: 21,
            class: 'Web & UX Design',
            name: 'Monique Tickle',
            email: 'tickle.monique@gmail.com',
            photoProfile: 'MTickle.jpg',
            social: '',
            website: 'github.com/mew-mo',
            website2: 'linkedin.com/in/mo-tickle',
            detail: 'Hi there! I’m Monique Tickle, but I’m otherwise known as Mo! I’m an aspiring web dev, graphic designer and digital artist who loves the way the three fields intertwine and become part of each other. Since I’ve gotten into web development, I’ve found that the best part for me is experiencing creations as they go from square zero into reality- the whole process always adds so much value to the final product! Aside from that, I love learning, creating, drinking tea, and cats (not necessarily in that order). Reach me at any of the above links!',
            project01: '03-mo-01.jpg',
            project02: '03-mo-02.jpg',
            project03: '03-mo-03.jpg',
            project04: '03-mo-04.jpg',
            project05: '03-mo-05.jpg',
            project06: '03-mo-06.jpg',
            project07: '03-mo-07.jpg'
        }
    ]

     // ==========================================================
    // Game Design Students
    // ==========================================================

    var studentsGD = [{
        id: 22,
        class: 'Game Art and Development',
        name: 'Sean Gullery',
        email: 'seangullery@gmail.com',
        photoProfile: 'SGullery.jpg',
        social: '',
        website: 'seagull743.itch.io',
        website2: '',
        detail: 'The one thing that summarises my journey with Yoobee: ' +
            'bool LearnGameDev = true; string Outcome; Outcome = LearnGameDev ? “Success!” : “Failure!”; ' +
            'Debug.Log(Outcome); Console result: Success!',
        project01: '04-sean-01.jpg',
        project02: '04-sean-02.jpg',
        project03: '04-sean-03.jpg',
        project04: '04-sean-04.jpg'
    },
    {
        id: 23,
        class: 'Game Art and Development',
        name: 'Peet Khaengkhan',
        email: 'peetthunpisit@gmail.com',
        photoProfile: 'PKhaengkhan.jpg',
        social: '',
        website: 'peetthun.itch.io',
        website2: '',
        detail: 'I am a 2D and 3D artist specialising in UI design and implementation. ' +
            'I like enhancing game visuals with well designed UI elements to create a streamlined experience for players. ' +
            'I always love playing video games and wondered how to make games, so I decided to join Yoobee. ' +
            'Throughout my course I’ve learned a lot about what it takes to develop and produce ready to play games.',
        project01: '04-peet-01.jpg',
        project02: '04-peet-02.jpg',
        project03: '04-peet-03.jpg',
        project04: '04-peet-04.jpg'
    },
    {
        id: 24,
        class: 'Game Art and Development',
        name: 'Ao Jet Young',
        email: 'jetyong0300@gmail.com',
        photoProfile: 'JYoung.jpg',
        social: '',
        website: 'kerbertdafrog.itch.io',
        website2: '',
        detail: 'I’ve always loved playing video games since the first time I used a computer and I got my first taste of game development making level for games like Half-Life and Unreal Tournament when I was younger, but it wasn’t until later in my life that I really started to realize my passion. ' +
            'My time here at Yoobee has definitely helped shape the direction for my future, and I know now that making games is that direction.',
        project01: '04-jet-01.jpg',
        project02: '04-jet-02.jpg',
        project03: '04-jet-03.jpg',
        project04: '04-jet-04.jpg'
    },
    {
        id: 25,
        class: 'Game Art and Development',
        name: 'Filip Olssen',
        email: 'filip.olssen9911@gmail.com',
        photoProfile: 'FOlssen.jpg',
        social: '',
        website: 'jimblob.itch.io',
        website2: '',
        detail: 'Going into this course I had some prior knowledge about 3D modelling and texturing that I learned in Sweden and that is where I really found a passion for modelling. ' +
            'I wanted to broaden my knowledge about game development and 3D modelling and studying abroad seemed like it would be a great and fun experience.' +
            ' During my time at Yoobee I have learned many different disciplines that I will take with me going forward.',
        project01: '04-filip-01.jpg',
        project02: '04-filip-02.jpg',
        project03: '04-filip-03.jpg',
        project04: '04-filip-04.jpg'
    },
    {
        id: 26,
        class: 'Game Art and Development',
        name: 'Dan Anderson',
        email: 'DucatiDan@outlook.com',
        photoProfile: 'DAnderson.jpg',
        social: '',
        website: 'itch.io/profile/ducatidan990',
        website2: '',
        detail: 'Through my pathways in Yoobee I have developed a passion in the construction of 3D model assets for Props and Environments within animations and games. ' +
            'Moving into the Game Art & Development program has strengthened my software skills specialising in Maya to craft these assets and I look forward to progressing my skills in this area as the game industry grows and diversifies globally.',
        project01: '04-daniel-01.jpg',
        project02: '04-daniel-02.jpg',
        project03: '04-daniel-03.jpg',
        project04: '04-daniel-04.jpg'
    },
    {
        id: 27,
        class: 'Game Art and Development',
        name: 'Alex Rundle-Keswick',
        email: 'alex.rundlekeswick@gmail.com',
        photoProfile: 'ARundel-Keswick.jpg',
        social: '',
        website: 'dodecahedron-12.itch.io',
        website2: '',
        detail: 'Hi I’m Alex! ' +
            'I am a 2D & 3D artist and animator with a focus on character development.' +
            ' I’ve always loved telling stories, and working with games offers the ability to tell stories on multiple levels; directly to the player, and with implications through character and environment design choices.' +
            ' I am passionate about making things for people to hopefully gain enjoyment from, because I think there is something so incredible about making something for others to interact with.' +
            ' I strive to improve my skills to create immersive art that provokes emotions.',
        project01: '04-alex-01.jpg',
        project02: '04-alex-02.jpg',
        project03: '04-alex-03.jpg',
        project04: '04-alex-04.jpg'
    },
    {
        id: 28,
        class: 'Game Art and Development',
        name: 'Theodor Englund',
        email: 'Theodorenglund@gmail.com',
        photoProfile: 'TEnglund.jpg',
        social: '',
        website: 'itch.io/profile/oden037',
        website2: '',
        detail:
            'Before coming to Yoobee I studied for 3 years in a Game Graphics course in my home country Sweden.' +
            ' After finishing that course I saw an opportunity to move to New Zealand to start developing skills in Game Development.' +
            ' I prefer to work with 3d assets in Maya 3d and sound design.',
        project01: '04-theodor-01.jpg',
        project02: '04-theodor-02.jpg',
        project03: '04-theodor-03.jpg',
        project04: '04-theodor-04.jpg'
    }
]

    // ==========================================================
    // Creative Digital Design Students
    // ==========================================================

    var studentsCDD = [
        {
            id: 29,
            class: 'Creative Digital Design',
            name: 'Akash Patel',
            email: 'sky.patel111@gmail.com',
            photoProfile: 'APatel.jpg',
            social: 'skydesignhouse',
            website: '',
            detail: 'Delving into the deep world of visual arts, I find my solace in art & creativity through my passion for illustration, branding, concepts, product design and photography. I enjoy expanding my horizons with my personal growth, and materialise it in the world of design. Thanks to Yoobee for helping improve my skills in my journey of art and design.',
            project01: '02-akash-01.jpg',
            project02: '02-akash-02.jpg',
            project03: '02-akash-03.jpg',
            project04: '02-akash-04.jpg',
            project05: '02-akash-05.jpg',
            project06: '02-akash-06.jpg',
            project07: '02-akash-07.jpg'
        },
        {
            id: 30,
            class: 'Creative Digital Design',
            name: 'Aljay Faalelei',
            email: '',
            photoProfile: 'AFealelei.jpg',
            social: 'aljay.creates',
            website: 'aljayfaalelei.com',
            detail: 'Art and design have always been strong passions of mine, especially Pasifika inspired design. I love that traditional Pasifika patterns can be expressed to tell stories – stories of my ancestors and culture. While at Yoobee I developed the skills to create my work through a variety of methods. My future ambitions are to work with branding and information design and one day I hope to open my own printing business.',
            project01: '02-aljay-01.jpg',
            project02: '02-aljay-02.jpg',
            project03: '02-aljay-03.jpg',
            project04: '02-aljay-04.jpg'
        },
        {
            id: 31,
            class: 'Creative Digital Design',
            name: 'Darcy Corrigan',
            email: '',
            photoProfile: 'DCorrigan.jpg',
            social: 'darcycorrigandesign ',
            website: 'darcycorrigan.com',
            detail: 'Getting out of my comfort zone is always where I’ve felt in my element.' +
                    'Art has always been an outlet for me, and when I first discovered graphic design it was like a light bulb switched on – this was something I really loved. I enjoy the narratives that you are able to create in graphic design, and storytelling has been a huge part of my process in the projects I have worked on this year. Moving forward, my focus is on brand and identity, as well as human-centred design.',
            project01: '02-darcy-01.jpg',
            project02: '02-darcy-02.jpg',
            project03: '02-darcy-03.jpg',
            project04: '02-darcy-04.jpg'
        },
        {
            id: 32,
            class: 'Creative Digital Design',
            name: 'Holly Brook',
            email: '',
            photoProfile: 'HBrook.jpg',
            social: 'brook_photography_nz',
            website: 'hollybrook.myportfolio.com',
            detail: 'Coming into this course with an animation background, I took an illustrative approach to many of my projects. I like my designs to feel hand-made, and working with texture roughens up my designs and makes them feel more organic. I have a huge passion for music and nature which is where I find a lot of inspiration for my designs. Moving forward, my focus is on information design and branding and identity.',
            project01: '02-holly-01.jpg',
            project02: '02-holly-02.jpg',
            project03: '02-holly-03.jpg',
            project04: '02-holly-04.jpg',
        },
        {
            id: 33,
            class: 'Creative Digital Design',
            name: 'Megan Koonkaew',
            email: '',
            photoProfile: 'MKoonkaew.jpg',
            social: '',
            website: 'behance.net/megankoonkaew ',
            detail: 'Design for me is expressing ideas and working around constraints and finding a creative way to solve them. I have a strong passion for illustration. I consider myself an innovative, open-minded creative who is always willing to face new challenges. I combine simplicity and beauty and always strive to achieve the best results in all of my projects.',
            project01: '02-megan-01.jpg',
            project02: '02-megan-02.jpg',
            project03: '02-megan-03.jpg',
            project04: '02-megan-04.jpg',
        },
        {
            id: 34,
            class: 'Creative Digital Design',
            name: 'Nicholas King',
            email: 'Nicholas.s.king@Outlook.com',
            photoProfile: 'NKing.jpg',
            social: 'nick.s.king_art',
            website: 'behance.net/nickking5',
            detail: 'Art and Design has been a passion of mine since I was a kid. I have spent the better part of ten years studying graphic design and illustration. I have strived to do my best with any project to learn as much as I can, explore new styles and different ways of designing. I believe with any problem that good design can lead to a better solution. I also love to sow a little nerdy spin with any project. My specialties are packaging, branding and information design.' + '<br><br>' + 'Whatever you do, Do it with passion.',
            project01: '02-nick-01.jpg',
            project02: '02-nick-02.jpg',
            project03: '02-nick-03.jpg',
            project04: '02-nick-04.jpg',
        },
        {
            id: 35,
            class: 'Creative Digital Design',
            name: 'Sam Short',
            email: '',
            photoProfile: 'SShort.jpg',
            social: '',
            website: 'samshortdesign.com',
            detail: 'Design propels those who use it effectively past the point of mediocrity, into compelling solutions for complex problems. My work with brand identity is a passion, and is the foundation for my career ambitions moving forward.',
            project01: '02-samuel-01.jpg',
            project02: '02-samuel-02.jpg',
            project03: '02-samuel-03.jpg',
            project04: '02-samuel-04.jpg',
            project05: '02-samuel-05.jpg'
        }
    ]

var filtered = studentsCDD.filter(function (el) {
    return el != null;
  });

  console.log(filtered);

    // ==========================================================
    // Function call to display all items
    // ==========================================================
    BOAstudents(); // Displays Bachelors of animation students
    WUXstudents(); // Displays Web & UX students
    CDDstudents(); // Displays Creative Digital Design students
    GDstudents(); // Displays Game Design students


    // ==========================================================
    // Function to display all Bachelor of Animation student
    // ==========================================================
    function BOAstudents() {
        // console.log("functions is running");
        var i = 0;
        $('#animationResult').text('');
        for (i = 0; i < studentsBOA.length; i++) {
            displayCards2(i);
        } //end of for loop
    } //end of animationStudents function

    function displayCards2(i) {
        // console.log("loop running");
        $('#animationResult').append(

            '<div class="col" data-bs-toggle="modal" data-bs-target=#' + studentsBOA[i].name.replace(/ /g, "") + ' >' +
            '<a href="" class="student-link"><img src="images/BachelorOfAnimation/BW/' + studentsBOA[i].photoProfile + '"class="card-img-top rounded" alt="' + '"></a>' +
            '<div class="card-body">' +
            '<h5 class="card-title text-center text-light p-2 rounded">' + studentsBOA[i].name + '</h5>' +
            '</div>' +
            '</div>' +

            // Modal
            '<div class="modal fade " id=' + studentsBOA[i].name.replace(/ /g, "") + ' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-xxl-down" style="overflow:auto!important;">' +
                    '<div class="modal-content" style="overflow:auto!important;">' +
                        '<div class="modal-header header-BOA">'+
                            '<h3 class="modal-title " id="staticBackdropLabel">' + studentsBOA[i].name + '</h3>' +
                            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                        '</div>'+

                        // Student Projects 01
                        '<div class="modal-body">'+
                            '<div class="container-portfolio">'+
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project01 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project02 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project03 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project04 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project05 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project06 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/BOA/' + studentsBOA[i].project07 + '" alt="">' +
                                '</div>' +
                            '</div>'+
                        '</div>'+

                        // Fullscreen image preview box
                        '<div class="preview-box" style="display:none">'+
                            '<div class="details">'+
                                '<span class="title">Bachelor of Animation</span>'+
                                '<span class="icon fas fa-times"></span>'+
                            '</div>'+
                            '<div class="image-box">'+
                                '<img class="img-fluid" id="image-b" src=" '+ selectedImg + '" alt="">'+
                            '</div>' +
                        '</div>'+
                        '<div class="shadow" style="display:none"></div>'+



                        // Student Profile
                        '<div class="modal-footer modal-footer-BOA">'+
                            '<div class="row">'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">'+
                                    '<img class="student_image" src="images/BachelorOfAnimation/BW/' + studentsBOA[i].photoProfile + '" alt="">' +
                                '</div>'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 aboutContainer">'+
                                    '<h4>About</h4>'+
                                    '<p>' + studentsBOA[i].detail + '</p><br>' +
                                    '<h4>Email</h4>'+
                                    '<a href="mailto:' + studentsBOA[i].email + '"><p>' + studentsBOA[i].email + '</p></a><br>' +
                                    '<h4>Contact Links</h4>'+
                                    '<ul>'+
                                        '<li><a href="https://www.instagram.com/' + studentsBOA[i].social + '" target="_blank">'+ studentsBOA[i].social +'</li>'+
                                        '<li><a href="http://' + studentsBOA[i].website + '" target="_blank">'+ studentsBOA[i].website +'</li>'+
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' // End Modal

        ); //end of apprend
    }

    // ==========================================================
    // Function to display all Web&UX students
    // ==========================================================
    function WUXstudents() {
        var i = 0;
        $('#webResult').text('');
        for (i = 0; i < studentsWUX.length; i++) {
            displayCards(i);
        } //end of for loop
    } //end of animationStudents function

    function displayCards(j) {

        $('#webResult').append(

            '<div class="col" data-bs-toggle="modal" data-bs-target=#'+ studentsWUX[j].name.replace(/ /g, "") +' >' +
              '<a href="" class="student-link"><img src="images/Web&UxDesign/BW/' + studentsWUX[j].photoProfile + '" class="card-img-top" alt="' + '"></a>' +
              '<div class="card-body " >' +
                '<h5 class="card-title text-center text-light p-2 rounded">'+studentsWUX[j].name+'</h5>' +
              '</div>' +
            '</div>'+

            // Modal
            '<div class="modal fade " id='+studentsWUX[j].name.replace(/ /g, "")+' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                '<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-xxl-down" style="overflow:auto!important;">' +
                    '<div class="modal-content" style="overflow:auto!important;">' +
                        '<div class="modal-header header-WUX">'+
                            '<h3 class="modal-title " id="staticBackdropLabel">'+studentsWUX[j].name+'</h3>'+
                            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                        '</div>'+

                        // Student Projects 01
                        '<div class="modal-body">'+
                            '<div class="container-portfolio">'+
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project01 + '" alt="">'+
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project02 + '" alt="">'+
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project03 + '" alt="">'+
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project04 + '" alt="">'+
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project05 + '" alt="">'+
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project06 + '" alt="">'+
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/WUX/' + studentsWUX[j].project07 + '" alt="">'+
                                '</div>' +
                            '</div>'+
                        '</div>'+

                        // Fullscreen image preview box
                        '<div class="preview-box" style="display:none">'+
                            '<div class="details">'+
                                '<span class="title">UX and Web Design</span>'+
                                '<span class="icon fas fa-times"></span>'+
                            '</div>'+
                            '<div class="image-box">'+
                                '<img class="img-fluid" id="image-b" src=" '+ selectedImg + '" alt="">'+
                            '</div>' +
                        '</div>'+
                        '<div class="shadow" style="display:none"></div>'+

                        // Student Profile
                        '<div class="modal-footer modal-footer-WUX">'+
                            '<div class="row">'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">'+
                                    '<img class="student_image" src="images/Web&UxDesign/BW/' + studentsWUX[j].photoProfile + '" alt="">'+
                                '</div>'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 aboutContainer">'+
                                    '<h4>About</h4>'+
                                    '<p>'+ studentsWUX[j].detail +'</p><br>'+
                                    '<h4>Email</h4>'+
                                    '<a href="mailto:' + studentsWUX[j].email + '"><p>' + studentsWUX[j].email + '</p></a><br>' +
                                    '<h4>Contact Links</h4>'+
                                    '<ul>'+
                                        '<li><a href="https://www.instagram.com/' + studentsWUX[j].social + '" target="_blank">' + studentsWUX[j].social + '</a></li>' +
                                        '<li><a href="http://' + studentsWUX[j].website + '" target="_blank">' + studentsWUX[j].website + '</a></li>' +
                                        '<li><a href="http://' + studentsWUX[j].website2 + '" target="_blank">' + studentsWUX[j].website2 + '</a></li>' +
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' // End Modal
        ); //end of apprend
    }

    // ==========================================================
    // Function to display all Bachelor of Game Design student
    // ==========================================================
    function GDstudents() {
        // console.log("functions is running");
        var i = 0;
        $('#gdResult').text('');
        for (i = 0; i < studentsGD.length; i++) {
            displayCards4(i);
        } //end of for loop
    } //end of animationStudents function

    function displayCards4(i) {
        // console.log("loop running");
        $('#gdResult').append(

            '<div class="col" data-bs-toggle="modal" data-bs-target=#' + studentsGD[i].name.replace(/ /g, "") + ' >' +
            '<a href="" class="student-link"><img src="images/GameArt/' + studentsGD[i].photoProfile + '" class="card-img-top" alt="' + '"></a>' +
            '<div class="card-body " >' +
            '<h5 class="card-title text-center text-white p-2 ">' + studentsGD[i].name + '</h5>' +
            '</div>' +
            '</div>' +

            // Modal
            '<div class="modal fade " id=' + studentsGD[i].name.replace(/ /g, "") + ' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-xxl-down" style="overflow:auto!important;">' +
                    '<div class="modal-content" style="overflow:auto!important;">' +
                        '<div class="modal-header header-GD">'+
                            '<h3 class="modal-title " id="staticBackdropLabel">' + studentsGD[i].name + '</h3>' +
                            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                        '</div>'+

                        // Student Projects 01
                        '<div class="modal-body">'+
                            '<div class="container-portfolio">'+
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/GD/' + studentsGD[i].project01 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/GD/' + studentsGD[i].project02 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/GD/' + studentsGD[i].project03 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/GD/' + studentsGD[i].project04 + '" alt="">' +
                                '</div>' +
                            '</div>'+
                        '</div>'+

                        // Fullscreen image preview box
                        '<div class="preview-box" style="display:none">'+
                            '<div class="details">'+
                                '<span class="title">Diploma of Game Design</span>'+
                                '<span class="icon fas fa-times"></span>'+
                            '</div>'+
                            '<div class="image-box">'+
                                '<img class="img-fluid" id="image-b" src=" '+ selectedImg + '" alt="">'+
                            '</div>' +
                        '</div>'+
                        '<div class="shadow" style="display:none"></div>'+



                        // Student Profile
                        '<div class="modal-footer modal-footer-GD">'+
                            '<div class="row">'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">'+
                                    '<img class="student_image" src="images/GameArt/' + studentsGD[i].photoProfile + '" alt="">' +
                                '</div>'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 aboutContainer">'+
                                    '<h4>About</h4>'+
                                    '<p>' + studentsGD[i].detail + '</p><br>' +
                                    '<h4>Email</h4>'+
                                    '<a href="mailto:' + studentsGD[i].email + '"><p>' + studentsGD[i].email + '</p></a><br>' +
                                    '<h4>Contact Links</h4>'+
                                    '<ul>'+
                                        '<li><a href="https://www.instagram.com/' + studentsGD[i].social + '" target="_blank">'+ studentsGD[i].social +'</li>'+
                                        '<li><a href="http://' + studentsGD[i].website + '" target="_blank">'+ studentsGD[i].website +'</li>'+
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' // End Modal

        ); //end of apprend
    }

    // ==========================================================
    // Function to display all Creative Digital Design students
    // ==========================================================
    function CDDstudents() {
        // console.log("functions is running");
        var i = 0;
        $('#CDDresult').text('');
        for (i = 0; i < studentsCDD.length; i++) {
            displayCards3(i);
        } //end of for loop
    } //end of animationStudents function

    function displayCards3(j) {
        $('#CDDresult').append(

            '<div class="col" data-bs-toggle="modal" data-bs-target=#' + studentsCDD[j].name.replace(/ /g, "") + ' >' +
            '<a href="" class="student-link"><img src="images/CreativeDigitalDesign/BW/' + studentsCDD[j].photoProfile + '" class="card-img-top" alt="' + '"></a>' +
            '<div class="card-body " >' +
            '<h5 class="card-title text-center text-light p-2">' + studentsCDD[j].name + '</h5>' +
            '</div>' +
            '</div>' +

            // Modal
            '<div class="modal fade " id=' + studentsCDD[j].name.replace(/ /g, "") + ' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog modal-dialog-scrollable modal-fullscreen modal-fullscreen-xxl-down" style="overflow:auto!important;">' +
                    '<div class="modal-content" style="overflow:auto!important;">' +
                        '<div class="modal-header header-CDD">'+
                            '<h3 class="modal-title" id="staticBackdropLabel">' + studentsCDD[j].name + '</h3>' +
                            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
                        '</div>'+

                        // Student Projects 01
                        '<div class="modal-body">'+
                            '<div class="container-portfolio">'+
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project01 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project02 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project03 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project04 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project05 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project06 + '" alt="">' +
                                '</div>' +
                                '<div class="image-portfolio">'+
                                    '<img src="images/studentWork/CDD/' + studentsCDD[j].project07 + '" alt="">' +
                                '</div>' +
                            '</div>'+
                        '</div>'+

                        // Fullscreen image preview box
                        '<div class="preview-box" style="display:none">'+
                            '<div class="details">'+
                                '<span class="title">Creative Digital Design</span>'+
                                '<span class="icon fas fa-times"></span>'+
                            '</div>'+
                            '<div class="image-box">'+
                                '<img class="img-fluid" id="image-b" src=" '+ selectedImg + '" alt="">'+
                            '</div>' +
                        '</div>'+
                        '<div class="shadow" style="display:none"></div>'+



                        // Student Profile
                        '<div class="modal-footer modal-footer-CDD">'+
                            '<div class="row">'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">'+
                                    '<img class="student_image" src="images/CreativeDigitalDesign/BW/' + studentsCDD[j].photoProfile + '" alt="">' +
                                '</div>'+
                                '<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 aboutContainer">'+
                                    '<h4>About</h4>'+
                                    '<p>' + studentsCDD[j].detail + '</p><br>' +
                                    '<h4>Email</h4>'+
                                    '<a href="mailto:' + studentsCDD[j].email + '"><p>' + studentsCDD[j].email + '</p></a><br>' +
                                    '<h4>Contact Links</h4>'+
                                    '<ul>'+
                                        '<li><a href="https://www.instagram.com/' + studentsCDD[j].social + '" target="_blank">@' + studentsCDD[j].social + '</a></li>' +
                                        '<li><a href="https://' + studentsCDD[j].website + '" target="_blank">' + studentsCDD[j].website + '</a></li>' +
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>' // End Modal

        ); //end of apprend
    }


    // OPEN PROJECTMODELS
    $('.image-portfolio').click(function () {
        selectedImg = $(this).find('img').attr("src");
        console.log(selectedImg);
        $('.preview-box').show();
        $('.shadow').show();
        $('.image-box').find('img').attr("src", selectedImg);
    });

    $('.fa-times').click(function () {
        $('.preview-box').hide();
        $('.shadow').hide();
    });

    $('.student-link').click(function () {
        event.preventDefault();
    }) // preventing auto refresh

}); //Document Ready Jquery


// ==========================================================
// package for animation
// ==========================================================

const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
            useBuiltIns: "usage",
            corejs: "3.6.4",
        },
    ],
];

/* animation  */
let windowW = window.innerWidth;
let windowH = window.innerHeight;
let isLoaded = false;
let glitch;
let imgSrc = '../images/Prelude_Wordmark_white.png'


function setup() {
    background(0);
    var myCanvas = createCanvas(900, 600);
    myCanvas.parent("canvas-wrapper");
    loadImage(imgSrc, function(img) {
        glitch = new Glitch(img);
        isLoaded = true;
    });
}

function draw() {
    clear();
    // background(0);

    if (isLoaded) {
        glitch.show();
    }

}

class Glitch {
    constructor(img) {
        this.channelLen = 4;
        this.imgOrigin = img;
        this.imgOrigin.loadPixels();
        this.copyData = [];
        this.flowLineImgs = [];
        this.shiftLineImgs = [];
        this.shiftRGBs = [];
        this.scatImgs = [];
        this.throughFlag = true;
        this.copyData = new Uint8ClampedArray(this.imgOrigin.pixels);

        // flow line
        for (let i = 0; i < 1; i++) {
            let o = {
                pixels: null,
                t1: floor(random(0, 1000)),
                speed: floor(random(4, 24)),
                randX: floor(random(24, 80))
            };
            this.flowLineImgs.push(o);
        }

        // shift line
        for (let i = 0; i < 6; i++) {
            let o = null;
            this.shiftLineImgs.push(o);
        }

        // shift RGB
        for (let i = 0; i < 1; i++) {
            let o = null;
            this.shiftRGBs.push(o);
        }

        // scat imgs
        for (let i = 0; i < 3; i++) {
            let scatImg = {
                img: null,
                x: 0,
                y: 0
            };
            this.scatImgs.push(scatImg);
        }
    }

    replaceData(destImg, srcPixels) {
        for (let y = 0; y < destImg.height; y++) {
            for (let x = 0; x < destImg.width; x++) {
                let r, g, b, a;
                let index;
                index = (y * destImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                destImg.pixels[r] = srcPixels[r];
                destImg.pixels[g] = srcPixels[g];
                destImg.pixels[b] = srcPixels[b];
                destImg.pixels[a] = srcPixels[a];
            }
        }
        destImg.updatePixels();
    }

    flowLine(srcImg, obj) {

        let destPixels,
            tempY;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        obj.t1 %= srcImg.height;
        obj.t1 += obj.speed;
        //tempY = floor(noise(obj.t1) * srcImg.height);
        tempY = floor(obj.t1);
        for (let y = 0; y < srcImg.height; y++) {
            if (tempY === y) {
                for (let x = 0; x < srcImg.width; x++) {
                    let r, g, b, a;
                    let index;
                    index = (y * srcImg.width + x) * this.channelLen;
                    r = index;
                    g = index + 1;
                    b = index + 2;
                    a = index + 3;
                    destPixels[r] = srcImg.pixels[r] + obj.randX;
                    destPixels[g] = srcImg.pixels[g] + obj.randX;
                    destPixels[b] = srcImg.pixels[b] + obj.randX;
                    destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftLine(srcImg) {

        let offsetX;
        let rangeMin, rangeMax;
        let destPixels;
        let rangeH;

        destPixels = new Uint8ClampedArray(srcImg.pixels);
        rangeH = srcImg.height;
        rangeMin = floor(random(0, rangeH));
        rangeMax = rangeMin + floor(random(1, rangeH - rangeMin));
        offsetX = this.channelLen * floor(random(-40, 40));

        for (let y = 0; y < srcImg.height; y++) {
            if (y > rangeMin && y < rangeMax) {
                for (let x = 0; x < srcImg.width; x++) {
                    let r, g, b, a;
                    let r2, g2, b2, a2;
                    let index;

                    index = (y * srcImg.width + x) * this.channelLen;
                    r = index;
                    g = index + 1;
                    b = index + 2;
                    a = index + 3;
                    r2 = r + offsetX;
                    g2 = g + offsetX;
                    b2 = b + offsetX;
                    destPixels[r] = srcImg.pixels[r2];
                    destPixels[g] = srcImg.pixels[g2];
                    destPixels[b] = srcImg.pixels[b2];
                    destPixels[a] = srcImg.pixels[a];
                }
            }
        }
        return destPixels;
    }

    shiftRGB(srcImg) {

        let randR, randG, randB;
        let destPixels;
        let range;

        range = 16;
        destPixels = new Uint8ClampedArray(srcImg.pixels);
        randR = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;
        randG = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;
        randB = (floor(random(-range, range)) * srcImg.width + floor(random(-range, range))) * this.channelLen;

        for (let y = 0; y < srcImg.height; y++) {
            for (let x = 0; x < srcImg.width; x++) {
                let r, g, b, a;
                let r2, g2, b2, a2;
                let index;

                index = (y * srcImg.width + x) * this.channelLen;
                r = index;
                g = index + 1;
                b = index + 2;
                a = index + 3;
                r2 = (r + randR) % srcImg.pixels.length;
                g2 = (g + randG) % srcImg.pixels.length;
                b2 = (b + randB) % srcImg.pixels.length;
                destPixels[r] = srcImg.pixels[r2];
                destPixels[g] = srcImg.pixels[g2];
                destPixels[b] = srcImg.pixels[b2];
                destPixels[a] = srcImg.pixels[a];
            }
        }

        return destPixels;
    }

    getRandomRectImg(srcImg) {
        let startX;
        let startY;
        let rectW;
        let rectH;
        let destImg;
        startX = floor(random(0, srcImg.width - 30));
        startY = floor(random(0, srcImg.height - 50));
        rectW = floor(random(30, srcImg.width - startX));
        rectH = floor(random(1, 50));
        destImg = srcImg.get(startX, startY, rectW, rectH);
        destImg.loadPixels();
        return destImg;
    }

    show() {

        // restore the original state
        this.replaceData(this.imgOrigin, this.copyData);

        // sometimes pass without effect processing
        let n = floor(random(100));
        if (n > 75 && this.throughFlag) {
            this.throughFlag = false;
            setTimeout(() => {
                this.throughFlag = true;
            }, floor(random(40, 400)));
        }
        if (!this.throughFlag) {
            push();
            translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
            image(this.imgOrigin, 0, 0);
            pop();
            return;
        }

        // flow line
        this.flowLineImgs.forEach((v, i, arr) => {
            arr[i].pixels = this.flowLine(this.imgOrigin, v);
            if (arr[i].pixels) {
                this.replaceData(this.imgOrigin, arr[i].pixels);
            }
        })

        // shift line
        this.shiftLineImgs.forEach((v, i, arr) => {
            if (floor(random(100)) > 50) {
                arr[i] = this.shiftLine(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            } else {
                if (arr[i]) {
                    this.replaceData(this.imgOrigin, arr[i]);
                }
            }
        })

        // shift rgb
        this.shiftRGBs.forEach((v, i, arr) => {
            if (floor(random(100)) > 65) {
                arr[i] = this.shiftRGB(this.imgOrigin);
                this.replaceData(this.imgOrigin, arr[i]);
            }
        })

        push();
        translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
        image(this.imgOrigin, 0, 0);
        pop();

        // scat image
        this.scatImgs.forEach((obj) => {
            push();
            translate((width - this.imgOrigin.width) / 2, (height - this.imgOrigin.height) / 2);
            if (floor(random(100)) > 80) {
                obj.x = floor(random(-this.imgOrigin.width * 0.3, this.imgOrigin.width * 0.7));
                obj.y = floor(random(-this.imgOrigin.height * 0.1, this.imgOrigin.height));
                obj.img = this.getRandomRectImg(this.imgOrigin);
            }
            if (obj.img) {
                image(obj.img, obj.x, obj.y);
            }
            pop();
        })

    }

}
