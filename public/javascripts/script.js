

jQuery(document).ready(function() {
    // Attach event handler 
    $('video').on('click', function(event) {
      event.preventDefault();
      $('video')[0].play();
    });
  
    // Trigger click event
    $('video').trigger('click');
  
  });
var initPage = function (language) {
    setLanguage(language);
    initInputs();
    initShowMenu();
    initGallery();
    initScroll();
};

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

var initShowMenu = function () {
    $(".dropdown").click(function () {
        $(".menu").toggleClass("showMenu");

        $(".dropdown").onclick(function () {
            $(".menu").toggleClass("showMenu");
        });
    });
};

var initGallery = function () {
    $('.gallery-label').on('click', '#gallery', function () {
        $(this).addClass('active').siblings().removeClass('active');

    });
};

var initScroll = function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.header').addClass('black');

        } else {
            $('.header').removeClass('black');
        }
    });
};

var show = function (state) {
    document.getElementById('modalForm').style.display = state;
    document.getElementById('filter').style.display = state;
};

var menu = function (state) {
    document.getElementById('modalMenu').style.display = state;
    document.getElementById('filterMenu').style.display = state;
};

var noMenu = function (state) {
    document.getElementById('modalMenu').style.display = state;
    document.getElementById('filterMenu').style.display = state;
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
var btn_send = form.querySelector('.btn-send');
var emailForm = form.querySelector('.emailForm');
var nameForm = form.querySelector('.nameForm');
var calass = form.querySelector('.calass');
var filde = form.querySelectorAll('.filde');

//генерує дів з назвою  2"помилка"
/*var generateError = function (text) {
    var error = document.createElement('div');
    error.className = 'error';
    //  error.style.color='red';
    error.innerHTML = text;
    return error;
};*/
//видаляє клас еррор з завпорвненого поля 
/*var removeValidation = function () {
    var errors = form.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
};*/
//перевірка чи всі поля заповнені
/*var checkFildePresents = function () {
    for (var i = 0; i < filde.length; i++) {
        if (!filde[i].value) {
            console.log('filde si bv', filde[i]);
            var error = generateError('не ведені дані');

            form[i].parentElement.insertBefore(error, filde[i]);

        }
    }
};*/

form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeValidation();
    checkFildePresents();
});
  function animate(){
        document.getElementById('#lazulite').style.webkitTransitionDuration='1s';
        document.getElementById('#lazulite').style.backgroundSize="200% 200%";
    };


