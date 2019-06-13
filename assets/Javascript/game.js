
  var win = 0;
  var lose = 0; 
  var userScore = 0;
  var randomResult;


var resetAndStart = function () {
    $(".crystals").empty();
   
    var images = [
        'https://stemgemsbook.com/wp-content/uploads/2016/03/pink-gem.png',
        'https://pbs.twimg.com/profile_images/531994916181012480/EBap51cO.png',
        'https://image.shutterstock.com/image-vector/gem-stone-citrine-260nw-91422095.jpg',
        'https://stemgemsbook.com/wp-content/uploads/2016/03/green-gem.png'
    ];
    randomResult = Math.floor(Math.random() * 101) + 19;


    $("#random").html(' ' + randomResult);

    for (var i = 0; i < 4; i++) {

        var randomValue = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
         crystal.attr({
            "class": 'crystal',
            "data-random": randomValue
          });
          crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
          });

        $(".crystals").append(crystal);
    }

    $("#totalScore").html(' ' + userScore);

}

resetAndStart();

$(document).on('click', ".crystal", function() {

    var num = parseInt($(this).attr('data-random'));

    userScore += num;

    $("#totalScore").html(' ' + userScore);

    if (userScore > randomResult) {
        lose++;

        $("#losses").html("Losses: " + lose);

        userScore = 0;

        resetAndStart();
    }
    else if(userScore === randomResult) {
        win++;

        $("#wins").html("Wins: " + win);

        userScore = 0;

        resetAndStart();
    }
});

