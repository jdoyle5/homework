// # Javascript Tutorial
//
//   - Writing classes
//     * ex:
      function NBAPlayer(name, team, pos) {
        this.name = name;
        this.team = team;
        this.pos = pos;
      }

    const Curry = new NBAPlayer("Seth Curry", "Warriors", "Guard")

  // - Adding prototype functions
  //   * ex:
      NBAPlayer.prototype.dunk = function(){}

      curry.dunk();

      curry__proto__ == NBAPlayer.prototype

    // so the javascript is going to look for the dunk method on curry first, not find it (because the only things that we have defined for curry are the name, team, and pos), and then it will go to curry's proto and see it points to NBAPlayer and then it will check the NBAPlayer.

    // * ex:
      curry.__proto__ => //NBAPlayer.prototype

      NBAPlayer.prototype => //NBAPlayer

      NBAPlayer.prototype.dunk = function () {
        console.log('$(this.name} dunks!');
      }

      curry.dunk(); => //Steph Curry dunks!

      NBAPlayer.prototype => //NBAPlayer {}

      curry.__proto__ => //NBAPlayer {dunk: [Function]}

  // - Closures/Callbacks
  //   * Closure: When a function inside of another function uses a variable that is defined in the outer function
  //   * ex:
      function summation(arr) {
        let sum = 1;
        function summer() {
          for(let i = 0; i < arr.length; i++) {
            sum *= arr[i];
          }
        }
        summer();
        return sum;
      }

  //   In this case, we can change the value of the variable outside of the original scope
  //
  // * Callback: a function that is passed to another function that is intended to be called at a later time. When the result is not immediately available, so once we get it, we will input it once we get it.
  //
  // * ex:
    let callback = functin() {
      console.log("It has been 5 seconds!");
    }
    let timeToWait = 5000;
    global.setTimeout(callback, timeToWait);

  // * Another way to do this:
    global.setTimeout(functin() {
      console.log("It has been 5 seconds!");
    }, 5000);

  // * Another way to do this:
    global.setTimeout(() => {
      console.log("It has been 5 seconds!")
      }, 5000);
