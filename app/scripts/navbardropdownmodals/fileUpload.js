$('a[href="#fileUpload"]').on("click", function(){
    console.log("Testing upload");
    var headerText = "Upload A New File";
    var bodyText = '<input> Enter File Location</input><br><button href="browse">browse files..</button>';
    var footerText = '<button href="upload">Upload File</button><button href="cancel">Cancel</button>';
    $('#myModal').empty().append(da.templates.modal({"headerText": headerText, "bodyText": bodyText, "footerText": footerText}));
    $('#myModal').modal('show');
    $('#myModal').find('button[href="upload"]').on("click", function(){
        $('#myModal').modal('hide');
    });
     $('#myModal').find('button[href="browse"]').on("click", function(){
        $('#myModal').modal('hide');
    });
    $('#myModal').find('button[href="cancel"]').on("click", function(){
        $('#myModal').modal('hide');
    });
});