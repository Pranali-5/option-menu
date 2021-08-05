const readline = require("readline");
const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var books = "\nHarry Potter\nWings of Fire\n";
function que() {
  readline1.question(
    "Enter 1,2 or 3: \n1 - Show all books \n2 - Add a new book \n3 - Quit\n",
    function (no) {
      if (no == "1") {
        console.log(books);
        que();
      }
      if (no == "2") {
        readline1.question("Add the name of the book\n", function (book) {
          books += book + "\n";
          console.log("book added successfully message");
          que();
        });
      }
      if (no == "3") {
        readline1.question(
          "Are you sure you want to quit - press Y to quit\n",
          function (s) {
            if (s == "Y") {
              readline1.close();
            } else {
              console.log(
                "You have selected an invalid entry so please press 1, 2 or 3"
              );
              que();
            }
          }
        );
      }
      if (no != "1" && no != "2" && no != "3") {
        console.log(
          "You have selected an invalid entry so please press 1, 2 or 3"
        );
        que();
      }
    }
  );
}
readline1.on("close", function () {
  console.log("Bye Bye!");
});
que();
