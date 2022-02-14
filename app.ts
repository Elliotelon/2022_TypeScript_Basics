{
  const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
  } = {
    name: "elliot",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"],
  };

  let favoriteActivities: string[];
  favoriteActivities = ["Sports"];

  for (const hobby of person.hobbies) {
    console.log(hobby);
  }
}
