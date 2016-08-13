function handleForm(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/api',
        contentType: 'application/json',
        data: JSON.stringify({
            type: 'CONTACT',
            data: { name: name, email: email, session: sniffer.getCurrentSession().get() }
        }),
        dataType: 'json',
        success: function (data) {
            swal("Obrigado! Entraremos em contato!");
        },
        error: function (err) {
            // ¯\_(ツ)_/¯
            swal("Obrigado! Entraremos em contato!");
        }
    });

    return false;
}
