// const square = function (x) {
//   return x * x;
// };

const square = (x) => x * x;
console.log(square(3));

console.log(this);

const event = {
  name: "Birthday Party",
  guestList: ["Sarah", "Steve", "Casper"],
  printGuestList() {
    console.log(`Guest list for ${this.name}`);
    this.guestList.forEach((g) =>
      console.log(`${g} is attending ${this.name}`)
    );
  },
};

event.printGuestList();

// ARROW FUNCTION CHALLENGE
//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.tasks.filter((t) => !t.completed);
  },
};

console.log(tasks.getTasksToDo());
