function connectSortable(){
    $( "#nucleotides" ).sortable({
              connectWith: ".connectedSortable", handle: ".nucleotide", revert: 250
            }).disableSelection();
}

$(document).ready(function() {
    connectSortable();
});