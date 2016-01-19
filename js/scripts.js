var leapYear = function(year) {
  return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) && (year * 0 === 0) && (year > -1);
};



$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    debugger;
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    if ((year < 0) || (year * 0 !== 0)) {
      $("#notNumber").show();
    } else {
      $(".year").text(year);

      if (!result) {                 // same as writing if (result === false)
        $(".not").text("not");
      }
      else {
        $(".not").text("");
      }
      $("#result").show();
      $("#notNumber").hide();
    }

    event.preventDefault();
  });
});
