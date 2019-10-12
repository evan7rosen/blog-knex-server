exports.seed = function(knex) {
  return knex("posts")
    .del()
    .then(function() {
      return knex("posts").insert([
        {
          title: "exercitation fugiat aliquip",
          body: "velit cupidatat ea dolore do labore Lorem aute in occaecat",
          user_id: 9
        },
        {
          title: "sint sunt ut",
          body:
            "nisi mollit commodo quis minim excepteur Lorem pariatur esse anim",
          user_id: 2
        },
        {
          title: "laboris nostrud occaecat",
          body: "veniam in labore qui esse elit veniam eiusmod consequat id",
          user_id: 7
        },
        {
          title: "aliquip exercitation voluptate",
          body: "ipsum amet qui sint laborum enim nostrud et qui tempor",
          user_id: 8
        },
        {
          title: "tempor incididunt exercitation",
          body: "ea do fugiat id Lorem Lorem sint labore duis incididunt",
          user_id: 5
        },
        {
          title: "nostrud laborum sit",
          body:
            "eiusmod do velit exercitation ea minim consequat aliqua reprehenderit irure",
          user_id: 7
        },
        {
          title: "reprehenderit cupidatat sunt",
          body:
            "excepteur ullamco commodo non aliqua nostrud incididunt nulla duis officia",
          user_id: 5
        },
        {
          title: "ut nostrud consectetur",
          body:
            "aute enim anim consectetur cupidatat cupidatat aliqua magna officia sunt",
          user_id: 7
        },
        {
          title: "magna incididunt fugiat",
          body:
            "consectetur occaecat cillum do excepteur laboris cillum qui in cupidatat",
          user_id: 9
        },
        {
          title: "deserunt laborum proident",
          body:
            "aliqua anim proident dolor duis ea adipisicing non velit dolor",
          user_id: 7
        },
        {
          title: "est est excepteur",
          body:
            "dolor veniam incididunt reprehenderit enim laboris quis incididunt commodo occaecat",
          user_id: 8
        },
        {
          title: "sunt laboris ex",
          body: "deserunt do esse excepteur aliquip ut et qui velit veniam",
          user_id: 1
        },
        {
          title: "quis exercitation elit",
          body:
            "ex reprehenderit dolore ipsum nulla consequat velit ipsum consectetur magna",
          user_id: 4
        },
        {
          title: "nulla mollit exercitation",
          body:
            "proident magna commodo incididunt laborum occaecat commodo fugiat laborum ullamco",
          user_id: 6
        },
        {
          title: "in consectetur reprehenderit",
          body:
            "consequat veniam cillum ullamco nostrud tempor commodo velit ipsum irure",
          user_id: 6
        },
        {
          title: "esse occaecat do",
          body:
            "deserunt officia labore non mollit Lorem esse ut ullamco aliquip",
          user_id: 9
        },
        {
          title: "qui aute cupidatat",
          body: "ut enim deserunt ad ut eu est dolore cillum fugiat",
          user_id: 3
        },
        {
          title: "commodo ea et",
          body:
            "est est laboris occaecat dolore id ipsum pariatur labore minim",
          user_id: 9
        },
        {
          title: "esse sunt exercitation",
          body:
            "veniam consectetur sunt minim ut irure laboris officia reprehenderit excepteur",
          user_id: 6
        },
        {
          title: "incididunt fugiat ut",
          body:
            "reprehenderit veniam culpa occaecat eiusmod pariatur consectetur voluptate nisi pariatur",
          user_id: 8
        }
      ]);
    });
};
