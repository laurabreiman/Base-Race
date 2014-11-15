function connectSortable(){
    $("#strand").css("height", $("#nucleotides").css("height"));

    $( "#nucleotides" ).sortable({
              connectWith: "#strand", handle: ".nucleotide", revert: 250
            }).disableSelection();
    $( "#strand" ).sortable({
         handle: ".nucleotide", revert: 250
        }).disableSelection();
    
}

$(document).ready(function() {
    connectSortable();
});