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
      console.log(`${g} is attending ${this.event}`)
    );
  },
};

event.printGuestList();
