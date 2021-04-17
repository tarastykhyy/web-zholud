

var sendDataToServer = function() {
    var forms = $('.form.form-identity.formValid');
    var data = {};

    $('.required').each(function (i, el) {

        if($(el).val() !== '') {
            var name = $(el).attr('name');
            var value = $(el).val();

            //перевірка всіх інпутів на введені дані
            if(name === 'email') {
                data.email = value;
            } else if (name === 'name') {
                data.name = value;
            } else if (name === 'text') {
                data.text = value;
            }
        }
    });
    //перевірка на коректність 
    if (!data.email || !data.text || !data.name) {
        return;
    }

    $.post( "/sendEmail", data)
        .done(function() {
            forms.trigger('reset');
            $(':input').removeClass('has_value');
            $('.message-sending-success').css('display', 'flex');
        })
        .fail(function(error) {
            $('.fail-email').css('display', 'flex');
            console.log(error);
        });
};




