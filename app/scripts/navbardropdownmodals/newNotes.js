$('a[href="#newNotes"]').on("click", function(){
    console.log("Testing notes page");
    var headerText = "Create a New Notes Page";
    var bodyText = '<input> Enter New Page Name</input>';
    var footerText = '<button href="newPage">Create New Page</button><button href="cancel">Cancel</button>';
    $('#myModal').empty().append(da.templates.modal({"headerText": headerText, "bodyText": bodyText, "footerText": footerText}));
    $('#myModal').modal('show');
    $('#myModal').find('button[href="newPage"]').on("click", function(){
        $('#myModal').modal('hide');
    });
    $('#myModal').find('button[href="cancel"]').on("click", function(){
        $('#myModal').modal('hide');
    });
});