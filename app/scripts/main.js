var da = window.da || {};
da["notes"] = {};
console.log('\'Allo \'Allo!');

// redraw map when map panel is shown
$('#mapTab a[href="#Maps"]').on('shown.bs.tab', function () {
    'use strict';
    google.maps.event.trigger(da.map, 'resize');
});

// make sched show up on click
$('#calTab a[href="#calendar"]').on('shown.bs.tab', function () {
    'use strict';
});

// content for notes tab
$('#notesTab a[href="#Notes"]').on('shown.bs.tab', function () {
    'use strict';
    //console.log("Called me from the notes button.");
    //$('#notesContent').html(da.templates.notes(da.notes.fontAwesome));
});

// fontAwesome on click
$('#fontTab a[href="#fontAwesome"]').on('click', function () {
    'use strict';
    $('#notesContent').html(da.templates.notes(da.notes.fontAwesome));
    console.log(da.notes);
});

// Bootstrap on click
$('#bootTab a[href="#bootstrap"]').on('click', function () {
    'use strict';
    $('#notesContent').html(da.templates.notes(da.notes.bootstrap));
    console.log(da.notes);
});

//Jquery on click
$('#jqueryTab a[href="#jquery"]').on('click', function () {
    'use strict';
    $('#notesContent').html(da.templates.notes(da.notes.jquery));
    console.log(da.notes);
});