var initPage = function () {
    initInputs();
};

var form = document.querySelector('.formValid');
var btn_send = form.querySelector('.btn-send');
var emailForm = form.querySelector('.emailForm');
var nameForm = form.querySelector('.nameForm');
var calass = form.querySelector('.calass');
var filde = form.querySelectorAll('.filde');

var initInputs = function () {
    var inputs = $(':input');

    inputs.each(function() {
        $(this).change(function() {
            if ($(this).val()) {
                //email validation
                if(this.name === 'email') {
                    if(!validateEmail(this.value)) {
                        $(this).addClass('has_error');

                        //disable sent button if email not valid
                        disableSendButtons();
                    }
                    else {
                        $(this).removeClass('has_error');

                        //enable sent button if email is valid
                        enableSendButtons();
                    }
                }

                $(this).addClass('has_value');
            }
            else {
                $(this).removeClass('has_value');
                $(this).removeClass('has_error');
                enableSendButtons();
            }
        });
    });
};

var show = function (state) {
    document.getElementById('modalForm').style.display = state;
};

var disableSendButtons = function () {
    $('.btn-send').each(function() {
        $(this).addClass('disabled');
    });
};

var enableSendButtons = function () {
    $('.btn-send').each(function() {
        $(this).removeClass('disabled');
    });
};

var validateEmail = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

var form = document.querySelector('.formValid');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeValidation();
    checkFildePresents();
});
initPage();

