var edit = (id, cin, nom, tel) => {
    //alert(block);  
    console.log(cin + nom + tel);
    $('.cin').val(cin);
    $('.nom').val(nom);
    $('.tel').val(tel);
    $('#block_form form').attr('action', '/put/' + id);
    //console.log(block.cin);
}
var del = (id) => {
    if (confirm('delete row having id=' + id + ' ?')) {
        $.ajax({
            url: '/del/' + id,
            type: 'POST',
            success: function(rep) {
                $(location).attr('href', '/table');
            },
            error: function(er) {
                console.log('error' + er);
            }
        });
    }
}