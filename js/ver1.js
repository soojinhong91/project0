// clear the gameBoard
const clearBoard = function () {
  $('.box').text('');
  playGame()
}

// player1 won message
let score1 = 0;
const player1won = function () {

  $('.player1won').addClass('show');
  $('.box').addClass('active');
  score1 += 1
  $('#player1Score').text(score1);
  $('.box').unbind();

  $('.player1won').on('click', function () {
    $('.player1won').removeClass('show');
    $('.box').removeClass('active');
    clearBoard();
    });
    return true;
}

// player2 won message
let score2 = 0;
const player2won = function () {

  $('.player2won').addClass('show');
  $('.box').addClass('active');
  score2 += 1
  $('#player2Score').text(score2);

  $('.player2won').on('click', function () {
    $('.player2won').removeClass('show');
    $('.box').removeClass('active');
    clearBoard();
  });
}

// draw message
const drawMessage = function () {
  $('.drawMessage').addClass('show');
  $('.box').addClass('active');

  $('.drawMessage').on('click', function () {
    $('.drawMessage').removeClass('show');
    $('.box').removeClass('active');
    clearBoard();
  });
}

// block user after winning message
const blockClick = function () {
    if ( $('.box').hasClass('active') ) {
      $('.box').on('click', function () {
        $(this).text('');
      })
    }
  }

const playGame = function () {
  // show X & O in turns when clicked
  let count = 0;
  $('.box').unbind();
  $('.box').on('click', function () {
    let taken = $(this).text();

      if ( taken !== '' ) {
          alert('Please choose another squre');
          console.log(taken);
      } else {
          if (count % 2 === 0) {
              $(this).text('X')
          } else {
              $(this).text('O')
          }
          count += 1;
          console.log( count )
        }

      // condition to win
      const numBox = $('.box').length;
      for (let i = 0; i < numBox; i++) {
        if (
          $('#1').text()===$('#2').text() &&
          $('#2').text()===$('#3').text() &&
          $('#1').text()==='X' ) {
            player1won();
            return true;
          }
        if (
          $('#4').text()===$('#5').text() &&
          $('#5').text()===$('#6').text() &&
          $('#4').text()==='X' ) {
            player1won();
            return true;
          }
        if (
          $('#7').text()===$('#8').text() &&
          $('#8').text()===$('#9').text() &&
          $('#7').text()==='X' ) {
            player1won();
            return true;
          }
        if (
          $('#1').text()===$('#4').text() &&
          $('#4').text()===$('#7').text() &&
          $('#1').text()==='X' ) {
            player1won();
            return true;
          }
        if (
          $('#2').text()===$('#5').text() &&
          $('#5').text()===$('#8').text() &&
          $('#2').text()==='X' ) {
            player1won();
            return true;
          }
        if (
          $('#3').text()===$('#6').text() &&
          $('#6').text()===$('#9').text() &&
          $('#3').text()==='X' ) {
            player1won();
            return true;
          }
        if (
          $('#1').text()===$('#5').text() &&
          $('#5').text()===$('#9').text() &&
          $('#1').text()==='X' ) {
            player1won();
            return true;
          }
        if (
          $('#3').text()===$('#5').text() &&
          $('#5').text()===$('#7').text() &&
          $('#3').text()==='X' ) {
            player1won();
            return true;
          }
        if (
          $('#1').text()===$('#2').text() &&
          $('#2').text()===$('#3').text() &&
          $('#1').text()==='O' ) {
            player2won();
            return true;
          }
        if (
          $('#4').text()===$('#5').text() &&
          $('#5').text()===$('#6').text() &&
          $('#4').text()==='O' ) {
            player2won();
            return true;
          }
        if (
          $('#7').text()===$('#8').text() &&
          $('#8').text()===$('#9').text() &&
          $('#7').text()==='O' ) {
            player2won();
            return true;
          }
        if (
          $('#1').text()===$('#4').text() &&
          $('#4').text()===$('#7').text() &&
          $('#1').text()==='O' ) {
            player2won();
            return true;
          }
        if (
          $('#2').text()===$('#5').text() &&
          $('#5').text()===$('#8').text() &&
          $('#2').text()==='O' ) {
            player2won();
            return true;
          }
        if (
          $('#3').text()===$('#6').text() &&
          $('#6').text()===$('#9').text() &&
          $('#3').text()==='O' ) {
            player2won();
            return true;
          }
        if (
          $('#1').text()===$('#5').text() &&
          $('#5').text()===$('#9').text() &&
          $('#1').text()==='O' ) {
            player2won();
            return true;
          }
        if (
          $('#3').text()===$('#5').text() &&
          $('#5').text()===$('#7').text() &&
          $('#3').text()==='O' ) {
            player2won();
            return true;
          }
        // draw condition
        if ( $('#1').text().length
          + $('#2').text().length
          + $('#3').text().length
          + $('#4').text().length
          + $('#5').text().length
          + $('#6').text().length
          + $('#7').text().length
          + $('#8').text().length
          + $('#9').text().length === 9
            &&  $('span').hasClass('show') === false ) {
          drawMessage();
        }
        }
          return
        }
      )
}
playGame();

// reset gameboard
const playAgain = function () {
  $('#playAgain').on('click', function () {
    clearBoard();
    $('span').removeClass('show');
    $('.box').removeClass('active');
  })
}
playAgain();
