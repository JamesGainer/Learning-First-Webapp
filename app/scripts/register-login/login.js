$('a[href="#login"]').on("click", function(){
    console.log("Testing modal");
    var headerText = "Enter Email and Password";
    var bodyText = '<input> Email</input><br><input> Password</input>';
    var footerText = '<button href="log">Login</button><button href="cancel">Cancel</button>';
    $('#myModal').empty().append(da.templates.modal({"headerText": headerText, "bodyText": bodyText, "footerText": footerText}));
    $('#myModal').modal('show');
    $('#myModal').find('button[href="log"]').on("click", function(){
        $('#myModal').modal('hide');
    });
    $('#myModal').find('button[href="cancel"]').on("click", function(){
        $('#myModal').modal('hide');
    });
});