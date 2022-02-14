{
  const person = {
    name: "elliot",
    age: 30,
    hobbies: ["sports", "cooking"],
  };

  let favoriteActivities: string[];
  favoriteActivities = ["Sports"];

  for (const hobby of person.hobbies) {
    console.log(hobby);
  }
}
