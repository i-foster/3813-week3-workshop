$(document).ready(function(){
    console.log("page ready")
    //preventDefault();
    ajaxPost();
});


function ajaxPost(){
    var formData = {
        email: $("email").val(),
        password: $("password").val()
    }

    $.ajax({
        type: "POST",
        contentType : "application/json",
        url : window.location + "logged",
        data : JSON.stringify(formData),
        dataType : "json",
        success :  function(user){
            if (user.valid  == true ){
                console.log("customer details worked");
                $("errorMessage").removeClass("showmessage");
                $("errorMessage").addClass("hideMessage");
            }else{
                console.log("customer details did not match");
                $("errorMessage").addClass("showmessage");
                $("errorMessage").removeClass("hideMessage");
            }
        },
        error: function(e){
            alert("Error")
            console.log("Error", e)
        }
    });
    resetdata();
}

function resetdata(){
    $("email").val("");
    $("password").val("");
}