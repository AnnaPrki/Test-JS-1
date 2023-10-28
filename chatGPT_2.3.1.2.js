const users=[
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com",
      "age": 28
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@example.com",
      "age": 35
    },
    {
      "id": 3,
      "name": "Charlie",
      "email": "charlie@example.com",
      "age": 42
    },
    {
      "id": 4,
      "name": "David",
      "email": "david@example.com",
      "age": 31
    },
    {
      "id": 5,
      "name": "Eve",
      "email": "eve@example.com",
      "age": 24
    }
  ]

  const agesArr = [];
    console.log(users[0].age)

    for (let i=0; i<users.length; i++) {
        console.log(users[i].age)

    }
    
    for (user in users) {
        agesArr.push(users[user].age);
    }

    const maxAge = Math.max(...agesArr);

    console.log("Максимальный возраст:", maxAge);
  