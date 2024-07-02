// Ranking Poker Hands
// https://www.codewars.com/kata/5739174624fc28e188000465

// A famous casino is suddenly faced with a sharp decline of their revenues. They decide to offer Texas hold'em also online. Can you help them by writing an algorithm that can rank poker hands?

// Task
// Create a poker hand that has a method to compare itself to another poker hand:

// PokerHand.prototype.compareWith = function(hand){...};
// A poker hand has a constructor that accepts a string containing 5 cards:

// var hand = new PokerHand("KS 2H 5C JD TD");
// The characteristics of the string of cards are:

// Each card consists of two characters, where
// The first character is the value of the card: 2, 3, 4, 5, 6, 7, 8, 9, T(en), J(ack), Q(ueen), K(ing), A(ce)
// The second character represents the suit: S(pades), H(earts), D(iamonds), C(lubs)
// A space is used as card separator between cards
// The result of your poker hand compare can be one of these 3 options:

// var Result =
// {
//     "win": 1,
//     "loss": 2,
//     "tie": 3
// }
// Notes
// Apply the Texas Hold'em rules for ranking the cards.
// Low aces are valid in this kata.
// There is no ranking for the suits.
// If you finished this kata, you might want to continue with Sortable Poker Hands

var Result = { win: 1, loss: 2, tie: 3 };

// object constructor
class PokerHand {
  constructor(hand) {
    this.hand = hand
      .split(" ")
      .map((card) => new PokerCard(card))
      .sort(PokerCard.compare)
      .reverse();
  }
  
  toString() {
    return this.hand.join(" ");
  }

  get copy() {
    return new PokerHand(this.toString());
  }

  Rank = {
    "Royal Flush" : 9,
    "Straight Flush": 8,
    "Four of a Kind": 7,
    "Full House": 6,
    "Flush": 5,
    "Straight": 4,
    "Three of a Kind": 3,
    "Two Pair": 2,
    "Pair": 1,
    "High Card": 0,
  };

  get rank() {
    // Filter out pairs and others first
    // Create obj of card value to its count
    let obj = this.hand.reduce((acc, card) => {
        acc[card.value] = card.value in acc ? acc[card.value] + 1 : 1;
        return acc;
    }, {});

    // Four of a Kind or Full House
    let keys = Object.keys(obj);
    if (keys.length === 2) {
      if (keys.some((key) => obj[key] === 4)) return this.Rank["Four of a Kind"];
      else return this.Rank["Full House"];
    }

    // Three of a Kind or Two pair
    if (keys.length === 3) {
      if (keys.some((key) => obj[key] === 3)) return this.Rank["Three of a Kind"];
      else return this.Rank["Two Pair"];
    }

    // Pair
    if (keys.length === 4) return this.Rank["Pair"];


    // Straight
    let straight = true;
    for (let i = 0; i < 4; ++i) {
      if (this.hand[i].value - this.hand[i + 1].value !== 1) {
        straight = false;
        break;
      }
    }

    // Handle low Ace here!!! (e.g. A 2 3 4 5)
    if (this.hand[0].value === 14 && 
        this.hand[1].value === 5 &&
        this.hand[2].value === 4 &&
        this.hand[3].value === 3 &&
        this.hand[4].value === 2) {
            straight = true;
            this.hand[0].card = "1" + this.hand[0].suit;
        }
    
    // Flush
    let flush = this.hand.every((card) => card.suit === this.hand[0].suit);

    // Royal/Straight/Flush
    if (this.hand[0].value === 14 && this.hand[4].value === 10 && straight && flush) return this.Rank["Royal Flush"]; // Highest is Ace and Lowest is 10
    else if (straight && flush) return this.Rank["Straight Flush"];
    else if (straight) return this.Rank["Straight"];
    else if (flush) return this.Rank["Flush"];

    return this.Rank["High Card"];
  }

  /**
   * 
   * @param {PokerHand} hand 
   * @returns Result = { win: 1, loss: 2, tie: 3 };
   */
  static compareHighCard(a, b) {
    
    if (a.hand.length == 0) return 0;

    let aVal = a.hand.shift().value;
    let bVal = b.hand.shift().value;
    if (aVal > bVal) return 1;
    else if (aVal < bVal) return -1;
    else return PokerHand.compareHighCard(a, b);
  }
}

class PokerCard {
  constructor(card) {
    this.card = card;
  }

  toString() { return this.card; }

  get value() {
    let num = this.card.charAt(0);
    if (num === "T") return 10;
    if (num === "J") return 11;
    if (num === "Q") return 12;
    if (num === "K") return 13;
    if (num === "A") return 14;
    return +num;
  }

  get suit() {
    return this.card.charAt(1);
  }

  static compare(a, b) {
    if (a.value > b.value) return 1;
    else if (a.value < b.value) return -1;
    return 0;
  }
}

/**
 * 
 * @param {PokerHand} hand 
 * @returns Result = { win: 1, loss: 2, tie: 3 };
 */
PokerHand.prototype.compareWith = function (hand) {
  if (this.rank > hand.rank) return Result.win; // Win
  else if (this.rank < hand.rank) return Result.loss; // Loss
  else { // Tie Breaker

    // compare high card
    let compareResult = PokerHand.compareHighCard(this.copy, hand.copy);

    if (compareResult === 1) return Result.win;
    else if (compareResult === -1) return Result.loss;
  }
  return Result.tie;
};

console.log(new PokerHand("2H 3H 4H 5H 6H").compareWith(new PokerHand("KS AS TS QS JS"))); // it("Highest straight flush wins", function() { assert(Result.loss, "2H 3H 4H 5H 6H", "KS AS TS QS JS");});
console.log(new PokerHand("2H 3H 4H 5H 6H").compareWith(new PokerHand("AS AD AC AH JD"))); // it("Straight flush wins of 4 of a kind", function() { assert(Result.win, "2H 3H 4H 5H 6H", "AS AD AC AH JD");});
console.log(new PokerHand("AS AH 2H AD AC").compareWith(new PokerHand("JS JD JC JH 3D"))); // it("Highest 4 of a kind wins", function() { assert(Result.win, "AS AH 2H AD AC", "JS JD JC JH 3D");});
console.log(new PokerHand("2S AH 2H AS AC").compareWith(new PokerHand("JS JD JC JH AD"))); // it("4 Of a kind wins of full house", function() { assert(Result.loss, "2S AH 2H AS AC", "JS JD JC JH AD");});
console.log(new PokerHand("2S AH 2H AS AC").compareWith(new PokerHand("2H 3H 5H 6H 7H"))); // it("Full house wins of flush", function() { assert(Result.win,  "2S AH 2H AS AC", "2H 3H 5H 6H 7H");});
console.log(new PokerHand("AS 3S 4S 8S 2S").compareWith(new PokerHand("2H 3H 5H 6H 7H"))); // it("Highest flush wins", function() { assert(Result.win, "AS 3S 4S 8S 2S", "2H 3H 5H 6H 7H");});
console.log(new PokerHand("2H 3H 5H 6H 7H").compareWith(new PokerHand("2S 3H 4H 5S 6C"))); // it("Flush wins of straight", function() { assert(Result.win, "2H 3H 5H 6H 7H", "2S 3H 4H 5S 6C");});
console.log(new PokerHand("2S 3H 4H 5S 6C").compareWith(new PokerHand("3D 4C 5H 6H 2S"))); // it("Equal straight is tie", function() { assert(Result.tie, "2S 3H 4H 5S 6C", "3D 4C 5H 6H 2S");});
console.log(new PokerHand("2S 3H 4H 5S 6C").compareWith(new PokerHand("AH AC 5H 6H AS"))); // it("Straight wins of three of a kind", function() { assert(Result.win, "2S 3H 4H 5S 6C", "AH AC 5H 6H AS");});
console.log(new PokerHand("2S 2H 4H 5S 4C").compareWith(new PokerHand("AH AC 5H 6H AS"))); // it("3 Of a kind wins of two pair", function() { assert(Result.loss, "2S 2H 4H 5S 4C", "AH AC 5H 6H AS");});
console.log(new PokerHand("2S 2H 4H 5S 4C").compareWith(new PokerHand("AH AC 5H 6H 7S"))); // it("2 Pair wins of pair", function() { assert(Result.win, "2S 2H 4H 5S 4C", "AH AC 5H 6H 7S");});
console.log(new PokerHand("6S AD 7H 4S AS").compareWith(new PokerHand("AH AC 5H 6H 7S"))); // it("Highest pair wins", function() { assert(Result.loss, "6S AD 7H 4S AS", "AH AC 5H 6H 7S");});
console.log(new PokerHand("2S AH 4H 5S KC").compareWith(new PokerHand("AH AC 5H 6H 7S"))); // it("Pair wins of nothing", function() { assert(Result.loss, "2S AH 4H 5S KC", "AH AC 5H 6H 7S");});
console.log(new PokerHand("2S 3H 6H 7S 9C").compareWith(new PokerHand("7H 3C TH 6H 9S"))); // it("Highest card loses", function() { assert(Result.loss, "2S 3H 6H 7S 9C", "7H 3C TH 6H 9S");});
console.log(new PokerHand("4S 5H 6H TS AC").compareWith(new PokerHand("3S 5H 6H TS AC"))); // it("Highest card wins", function() { assert(Result.win, "4S 5H 6H TS AC", "3S 5H 6H TS AC");});
console.log(new PokerHand("2S AH 4H 5S 6C").compareWith(new PokerHand("AD 4C 5H 6H 2C"))); // it("Equal cards is tie", function() { assert(Result.tie, "2S AH 4H 5S 6C", "AD 4C 5H 6H 2C");});
console.log(new PokerHand("AS 2H 3H 4S 5C").compareWith(new PokerHand("2D 2C 2H 5H 6C"))); // it("Straight wins over 3 of a kind", function() { assert(Result.loss, "AS 2H 3H 4S 5C", "2D 2C 2H 5H 6C");});
