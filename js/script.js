$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

$("#button").click(function(){
   var inputtext = $(".input").val();
   console.log(inputtext.charAt(0));
    var vowels =["a","e","i","o","u"]


    let firstCharIndex = vowels.indexOf(inputtext.charAt(0))
    // First character is a consonant
    if (firstCharIndex === -1){
      var consonent = inputtext.slice(1)
      $(".output").text(consonent+inputtext.charAt(0)+"ay")
    }
    // First character is a vowel
    else {
        $(".output").text(inputtext+"ay")
  }

});

});
