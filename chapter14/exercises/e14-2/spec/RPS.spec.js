let whoWon = require('../RPS.js');

describe (whoWon, function(){
    it("Should return 'TIE!' when the players tie, equivalent strings", function(){
        let output = whoWon('paper','paper');
        expect(output).toEqual('TIE!');
    });

    it("Should return 'Player 1 wins!' when player 1 === 'rock' && player 2 === 'scissors", function(){
        let output = whoWon('rock','scissors');
        expect(output).toEqual('Player 1 wins!');
    });

    it("Should return 'Player 1 wins!' when player 1 === 'paper' && player 2 === 'rock'", function(){
        let output = whoWon('paper','rock');
        expect(output).toEqual('Player 1 wins!');
    });

    it("Should return 'Player 1 wins!' when player 1 === 'scissors' && player 2 === 'paper'", function(){
        let output = whoWon('scissors','paper');
        expect(output).toEqual('Player 1 wins!');
    });

    it("Should return 'Player 2 wins!' when player 1 === 'rock' && player 2 === 'paper'", function(){
        let output = whoWon('rock','paper');
        expect(output).toEqual('Player 2 wins!');
    });

    it("Should return 'Player 2 wins!' when player 1 === 'scissors' && player 2 === 'rock'", function(){
        let output = whoWon('scissors','rock');
        expect(output).toEqual('Player 2 wins!');
    });

    it("Should return 'Player 2 wins!' when player 1 === 'paper' && player 2 === 'scissors'", function(){
        let output = whoWon('paper','scissors');
        expect(output).toEqual('Player 2 wins!');
    });

    it("Should return 'Invalid Input' when player 1 or 2 strings do not match ['paper','rock','scissors'", function(){
        let output = whoWon('test','test');
        expect(output).toEqual('Invalid Input');
    });
});