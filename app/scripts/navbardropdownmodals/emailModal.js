$('a[href="#email"]').on("click", function(){
    console.log("Testing email modal");
    var headerText = "Enter Email of Recipient";
    var bodyText = '<input> Email</input><br><textarea rows="4" cols="50"> Enter Message</textarea>';
    var footerText = '<button href="send">Send</button><button href="cancel">Cancel</button>';
    $('#myModal').empty().append(da.templates.modal({"headerText": headerText, "bodyText": bodyText, "footerText": footerText}));
    $('#myModal').modal('show');
    $('#myModal').find('button[href="send"]').on("click", function(){
        $('#myModal').modal('hide');
    });
    $('#myModal').find('button[href="cancel"]').on("click", function(){
        $('#myModal').modal('hide');
    });
});