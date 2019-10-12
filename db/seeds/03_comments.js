exports.seed = function(knex) {
  return knex("comments")
    .del()
    .then(function() {
      return knex("comments").insert([
        {
          body:
            "Lorem ut ut ex cupidatat commodo occaecat minim tempor ad irure cupidatat non qui officia commodo adipisicing aliquip culpa quis",
          post_id: 6,
          user_id: 7
        },
        {
          body:
            "cillum officia pariatur quis incididunt esse elit veniam in proident in nisi veniam consequat ut voluptate non fugiat consequat in",
          post_id: 7,
          user_id: 5
        },
        {
          body:
            "minim aliquip irure non eu consequat sit reprehenderit cupidatat sint sint non ex cupidatat voluptate et exercitation duis sint id",
          post_id: 13,
          user_id: 4
        },
        {
          body:
            "elit in nostrud velit minim fugiat adipisicing dolor in ullamco Lorem culpa magna incididunt velit id dolor ipsum mollit sunt",
          post_id: 18,
          user_id: 10
        },
        {
          body:
            "adipisicing laborum aute deserunt ex id Lorem aliquip esse deserunt consequat magna ut veniam occaecat sint officia deserunt ut aute",
          post_id: 19,
          user_id: 7
        },
        {
          body:
            "do eiusmod nulla eu ad enim cillum dolor reprehenderit et voluptate occaecat cillum laboris qui fugiat et amet occaecat do",
          post_id: 6,
          user_id: 2
        },
        {
          body:
            "anim cupidatat commodo anim sit ipsum enim elit adipisicing eu exercitation amet aliquip aliqua fugiat exercitation irure consequat id aliquip",
          post_id: 15,
          user_id: 7
        },
        {
          body:
            "consectetur non duis voluptate aliqua aliquip reprehenderit est non adipisicing et voluptate tempor non et est deserunt sunt culpa exercitation",
          post_id: 2,
          user_id: 1
        },
        {
          body:
            "enim occaecat enim commodo irure consequat elit pariatur amet voluptate elit laboris irure mollit eu tempor sint commodo proident mollit",
          post_id: 7,
          user_id: 8
        },
        {
          body:
            "laboris labore tempor ex dolor laboris mollit culpa aliqua velit in minim ullamco est reprehenderit aliqua cillum aute duis commodo",
          post_id: 19,
          user_id: 7
        },
        {
          body:
            "anim ad nisi officia est non qui pariatur tempor nisi mollit dolor officia velit aliqua adipisicing qui id exercitation ut",
          post_id: 9,
          user_id: 3
        },
        {
          body:
            "culpa anim deserunt sit quis fugiat nostrud ad pariatur aliqua mollit consequat reprehenderit minim qui esse elit esse ipsum adipisicing",
          post_id: 13,
          user_id: 10
        },
        {
          body:
            "enim laboris exercitation duis dolore ad eiusmod ea occaecat aliqua quis voluptate amet culpa fugiat occaecat sint ea amet excepteur",
          post_id: 8,
          user_id: 10
        },
        {
          body:
            "consectetur esse fugiat ut et reprehenderit proident voluptate ipsum commodo do tempor eiusmod ipsum minim cillum elit fugiat nostrud enim",
          post_id: 10,
          user_id: 6
        },
        {
          body:
            "est nulla do amet qui officia eiusmod consectetur cupidatat ut consectetur deserunt est tempor est sint culpa deserunt enim quis",
          post_id: 14,
          user_id: 3
        },
        {
          body:
            "commodo ea cillum minim aliqua laboris voluptate non deserunt magna id ipsum occaecat sint deserunt sunt ut voluptate ea occaecat",
          post_id: 11,
          user_id: 10
        },
        {
          body:
            "voluptate fugiat deserunt id cillum dolore proident et irure est nostrud exercitation sunt aliqua et deserunt magna irure aliqua tempor",
          post_id: 15,
          user_id: 2
        },
        {
          body:
            "pariatur in elit consectetur sint enim est exercitation culpa consequat ex reprehenderit proident ex culpa et dolore pariatur pariatur fugiat",
          post_id: 14,
          user_id: 5
        },
        {
          body:
            "aliqua aute veniam aliquip est velit magna dolore est velit anim laborum sint esse consequat in ipsum velit quis mollit",
          post_id: 20,
          user_id: 8
        },
        {
          body:
            "ullamco aliqua et laboris mollit consequat amet nulla eiusmod do ad irure reprehenderit eiusmod nulla ad sit qui consequat ex",
          post_id: 10,
          user_id: 1
        },
        {
          body:
            "commodo amet laborum nisi minim eu consequat irure ea enim in qui sunt do fugiat deserunt eiusmod enim non cupidatat",
          post_id: 5,
          user_id: 9
        },
        {
          body:
            "magna nulla quis dolore consequat Lorem sit sint ad duis mollit est reprehenderit sit non eiusmod sit adipisicing Lorem commodo",
          post_id: 1,
          user_id: 1
        },
        {
          body:
            "ad qui labore irure ex ad non aliqua Lorem aute sit cillum sit in commodo minim irure officia voluptate magna",
          post_id: 10,
          user_id: 6
        },
        {
          body:
            "voluptate eu in dolore voluptate eu proident fugiat est ipsum ea officia minim reprehenderit quis quis consequat voluptate ullamco ut",
          post_id: 6,
          user_id: 10
        },
        {
          body:
            "qui sunt reprehenderit consequat ullamco quis deserunt elit fugiat occaecat laborum laborum mollit velit Lorem consectetur ipsum do adipisicing dolore",
          post_id: 16,
          user_id: 9
        },
        {
          body:
            "sit velit qui id reprehenderit officia quis exercitation quis excepteur laborum duis fugiat elit adipisicing sit laborum reprehenderit proident laboris",
          post_id: 9,
          user_id: 2
        },
        {
          body:
            "eu commodo velit ullamco magna consectetur cillum do amet dolore culpa aute culpa sint nulla aliqua labore duis ut adipisicing",
          post_id: 14,
          user_id: 2
        },
        {
          body:
            "ullamco mollit ipsum anim est consequat ea consequat irure ad adipisicing cillum qui officia irure in enim nulla dolore magna",
          post_id: 9,
          user_id: 8
        },
        {
          body:
            "labore duis labore ex aliqua eu id occaecat eu consequat incididunt dolor esse ipsum sint nisi dolor ex ex tempor",
          post_id: 10,
          user_id: 7
        },
        {
          body:
            "veniam cupidatat voluptate cillum in nulla laborum commodo dolore elit enim consequat ea voluptate officia reprehenderit dolore consequat sint laborum",
          post_id: 3,
          user_id: 2
        },
        {
          body:
            "cupidatat voluptate duis consectetur nulla ut fugiat adipisicing ullamco non adipisicing dolor ullamco do sunt aute ex ullamco ullamco anim",
          post_id: 14,
          user_id: 10
        },
        {
          body:
            "ad voluptate sunt sit elit exercitation eiusmod duis id elit ex culpa voluptate eu elit excepteur magna tempor consequat culpa",
          post_id: 18,
          user_id: 2
        },
        {
          body:
            "sit ut anim duis fugiat Lorem quis sit ex cupidatat quis voluptate excepteur laboris velit laborum laborum excepteur velit mollit",
          post_id: 7,
          user_id: 8
        },
        {
          body:
            "culpa culpa quis laboris excepteur nostrud proident exercitation dolor culpa ut labore cillum Lorem ex pariatur in duis consectetur ullamco",
          post_id: 5,
          user_id: 6
        },
        {
          body:
            "eiusmod consectetur id veniam magna veniam cillum magna labore reprehenderit eiusmod laborum ipsum quis enim nulla voluptate dolore laborum et",
          post_id: 8,
          user_id: 7
        },
        {
          body:
            "cupidatat et amet mollit ullamco nisi eiusmod veniam dolor reprehenderit proident veniam nisi mollit commodo culpa veniam non ut labore",
          post_id: 14,
          user_id: 10
        },
        {
          body:
            "anim aliquip nulla et deserunt deserunt reprehenderit do mollit eiusmod qui cupidatat pariatur non ad duis non anim adipisicing mollit",
          post_id: 11,
          user_id: 6
        },
        {
          body:
            "qui quis laborum elit tempor velit non labore nostrud officia est consectetur aute sit nostrud nisi cillum in labore laborum",
          post_id: 12,
          user_id: 4
        },
        {
          body:
            "est reprehenderit proident consequat incididunt ipsum ea nulla mollit quis id dolore in mollit in cillum cupidatat voluptate commodo mollit",
          post_id: 1,
          user_id: 9
        },
        {
          body:
            "sint duis laboris cupidatat minim mollit reprehenderit dolore est ullamco irure irure duis adipisicing consequat elit non nulla labore enim",
          post_id: 3,
          user_id: 3
        },
        {
          body:
            "officia eiusmod ut ad laboris excepteur aute ad ullamco id adipisicing exercitation reprehenderit elit deserunt sit proident enim proident aute",
          post_id: 7,
          user_id: 1
        },
        {
          body:
            "esse est eiusmod exercitation eu proident duis minim officia sunt id cillum amet veniam fugiat sit Lorem ut minim enim",
          post_id: 16,
          user_id: 9
        },
        {
          body:
            "minim qui culpa id ut commodo incididunt duis occaecat est est proident ad aute et do dolor commodo anim magna",
          post_id: 7,
          user_id: 1
        },
        {
          body:
            "do quis culpa Lorem est laborum consectetur tempor qui deserunt ex tempor exercitation laborum fugiat aliquip minim nisi labore quis",
          post_id: 17,
          user_id: 2
        },
        {
          body:
            "eiusmod velit labore voluptate cillum duis dolore reprehenderit ut esse eiusmod fugiat cupidatat consequat incididunt aliquip elit nulla qui ex",
          post_id: 5,
          user_id: 10
        },
        {
          body:
            "voluptate laborum enim aute quis nulla aliquip esse ut anim sit proident quis aliquip amet sint aliqua aliqua dolor sit",
          post_id: 5,
          user_id: 2
        },
        {
          body:
            "voluptate nulla labore adipisicing cupidatat nostrud elit minim reprehenderit aliqua nulla laboris dolor dolore elit deserunt culpa elit voluptate reprehenderit",
          post_id: 1,
          user_id: 7
        },
        {
          body:
            "reprehenderit cupidatat reprehenderit elit tempor in laboris pariatur ex Lorem do veniam eu velit nisi laborum sunt laboris anim duis",
          post_id: 6,
          user_id: 9
        },
        {
          body:
            "aliquip consequat dolore voluptate eu duis nisi laborum magna esse magna ea anim irure quis sunt non magna cupidatat ex",
          post_id: 18,
          user_id: 3
        },
        {
          body:
            "mollit eu elit sit labore aliquip sint nostrud deserunt fugiat occaecat laboris id deserunt dolor aute id nostrud officia Lorem",
          post_id: 15,
          user_id: 9
        }
      ]);
    });
};
