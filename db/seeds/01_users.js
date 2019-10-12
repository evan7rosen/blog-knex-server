exports.seed = function(knex) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          name: "Leanne Graham",
          email: "Sincere@april.biz",
          website: "hildegard.org"
        },
        {
          name: "Ervin Howell",
          email: "Shanna@melissa.tv",
          website: "anastasia.net"
        },
        {
          name: "Clementine Bauch",
          email: "Nathan@yesenia.net",
          website: "ramiro.info"
        },
        {
          name: "Patricia Lebsack",
          email: "Julianne.OConner@kory.org",
          website: "kale.biz"
        },
        {
          name: "Chelsey Dietrich",
          email: "Lucio_Hettinger@annie.ca",
          website: "demarco.info"
        },
        {
          name: "Mrs. Dennis Schulist",
          email: "Karley_Dach@jasper.info",
          website: "ola.org"
        },
        {
          name: "Kurtis Weissnat",
          email: "Telly.Hoeger@billy.biz",
          website: "elvis.io"
        },
        {
          name: "Nicholas Runolfsdottir V",
          email: "Sherwood@rosamond.me",
          website: "jacynthe.com"
        },
        {
          name: "Glenna Reichert",
          email: "Chaim_McDermott@dana.io",
          website: "conrad.com"
        },
        {
          name: "Clementina DuBuque",
          email: "Rey.Padberg@karina.biz",
          website: "ambrose.net"
        }
      ]);
    });
};
