{
  // const person: {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string];
  // } = {
  //   name: "elliot",
  //   age: 30,
  //   hobbies: ["sports", "cooking"],
  //   role: [2, "author"],
  // };

  // let favoriteActivities: string[];
  // favoriteActivities = ["Sports"];

  // for (const hobby of person.hobbies) {
  //   console.log(hobby);
  // }
  enum Role {
    ADMIN='ADMIN',
    READ_ONLY= 100,
    AUTHOR,
  }

  const person = {
    name: "elliot",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
  };

  if(person.role === Role.AUTHOR) {
    console.log('is author')
  }
}
