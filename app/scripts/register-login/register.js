$('a[href="#register"]').on("click", function(){
    console.log("Testing register");
    var headerText = "Register New Account";
    var bodyText = '<input>Enter Valid Email</input><br><input>Enter 8 Character Password</input><br><input>Confirm Password</input>';
    var footerText = '<button href="save">Save</button><button href="cancel">Cancel</button>';
    $('#myModal').empty().append(da.templates.modal({"headerText": headerText, "bodyText": bodyText, "footerText": footerText}));
    $('#myModal').modal('show');
    $('#myModal').find('button[href="save"]').on("click", function(){
        $('#myModal').modal('hide');
    });
    $('#myModal').find('button[href="cancel"]').on("click", function(){
        $('#myModal').modal('hide');
    });
});