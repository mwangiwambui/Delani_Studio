$(document).ready(function(){
    $("#work").mouseover(function(){
        $("#overlay").show();
      }).mouseout(function(){
        $("#overlay").hide();
      });

    $("#wid-image").click(function(){
        $("#wid-image").slideDown('1500').hide('1000');
        $("#wid").show('1500');
      });
      $("#wid").click(function(){
        $("#wid").slideUp('1500');
        $("#wid-image").slideDown('1500');
      });

      $("form#form-contact").submit(function(event){
        // event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#comment").val();
        if ($("input#name").val() && $("input#email").val()){
          alert (name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
          alert("Please enter your name and email!");
        }
        
      });
    
});

