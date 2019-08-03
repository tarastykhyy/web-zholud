var languagesOnForm = [
    {
      lang: 'ua',
      data: {
           emailText: 'Ваш email',
           nameText: 'Ваше ім\'я',
           messageText: 'Ваше повідомлення',
           buttonText: 'Відправити'
      }
    },
    {
        lang: 'en',
        data: {
            emailText: 'Your email',
            nameText: 'Your name',
            messageText: 'Your message',
            buttonText: 'Send'
        }
    },
    {
        lang: 'pl',
        data: {
            emailText: 'Twój e-mail',
            nameText: 'Twoje imię',
            messageText: 'Twój list',
            buttonText: 'Wyślij'
        }
    },
    {
        lang: 'ru',
        data: {
            emailText: 'Ваш email',
            nameText: 'Ваше имя',
            messageText: 'Ваше сообщение',
            buttonText: 'Отправить'
        }
    },
];

var languagesOnModal = [
    {
        lang: 'ua',
        data: {
            headerText: 'Ну ж бо, тільки вперед...',
            subHeaderText: 'Залиште свої дані,ми зв\'яжемось з вами.'
        }
    },
    {
        lang: 'en',
        data: {
            headerText: 'Come on, let\'s go ...',
            subHeaderText: 'Leave your contacts, we will contact you.'
        }
    },
    {
        lang: 'pl',
        data: {
            headerText: 'No dalej ...',
            subHeaderText: 'Zostaw swoje kontakty, skontaktujemy się z Tobą.'
        }
    },
    {
        lang: 'ru',
        data: {
            headerText: 'Ну-ка, только вперед...',
            subHeaderText: 'Оставьте свои данные, мы свяжемся с вами.'
        }
    },
];

var languagesOnHeader = [
    {
        lang: 'ua',
        data: {
            descriptionHeaderText: 'Створіть дизайн для свого бізнесу під ключ разом з нами',
            descriptionSubHeaderText: 'Брендування,Фото та Ретуш,Веб-розробка та Дизайн',
            priceButtonText: 'Дізнатися вартість',
            orderButtonText: 'Замовити послугу',
            modalMenu: {
                menuMain: 'Головна',
                menuServices: 'Послуги',
                menuProjects: 'Проекти',
                menuContacts:'Контакти',
            }
        }
    },
    {
        lang: 'en',
        data: {
            descriptionHeaderText: 'Create a design for your business on a turn-key basis with us',
            descriptionSubHeaderText: 'Branding, Photo & Retouch, Web-Development & Design',
            priceButtonText: 'Get price',
            orderButtonText: 'Order Services',
            modalMenu: {
                menuMain: 'Home',
                menuServices: 'Services',
                menuProjects: 'Portfolio',
                menuContacts:'Contacts',
            }
        }
    },
    {
        lang: 'pl',
        data: {
            descriptionHeaderText: 'Stwórz z nami projekt dla swojej firmy pod klucz',
            descriptionSubHeaderText: 'Branding,Web Photo i Retouch, Web-Development i Projektowanie',
            priceButtonText: 'Sprawdź cenę',
            orderButtonText: 'Zamów oferte',
            modalMenu: {
                menuMain: 'Start',
                menuServices: 'Oferta',
                menuProjects: 'Portfolio',
                menuContacts:'Kontakt',
            }
        }
    },
    {
        lang: 'ru',
        data: {
            descriptionHeaderText: 'Создайте дизайн для своего бизнеса под ключ вместе с нами',
            descriptionSubHeaderText: 'Брендинг,Фото и Ретушь,Веб-разработка и Дизайн',
            priceButtonText: 'Узнать стоимость',
            orderButtonText: 'Заказать услугу',
            modalMenu: {
                menuMain: 'Главная',
                menuServices: 'Услуги',
                menuProjects: 'Проекты',
                menuContacts:'Контакты',
            }

        }
    },
];

var sendDataToServer = function() {
    var forms = $('.form-identity.formValid');
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
        })
        .fail(function(error) {
            console.log(error);
        });
};
//пошук вибраної мови з обєкта
var getTextByLanguage = function (language, array) {
    return array.filter(function (value) {
        return value.lang === language;
    })[0].data;
};
//вставляє мову на форму
var setFormLanguage = function(language) {
    var data = getTextByLanguage(language, languagesOnForm);
    var form = $('#sendForm');
    var sendForm = $('div.form > form.form-identity');

    if (sendForm.length) {
         sendForm.remove();
    }
//підстановка в скріпти даних з data
    form.tmpl(data).appendTo('.form');
};

var setContentLanguage = function(language) {
    var content =  $('#content');
    $('#content > *').remove();

    if (language === 'ua') {
        content.append(getUkrContent());
    } else if (language === 'en') {
        content.append(getEnContent());
    } else if (language === 'pl') {
        content.append(getPlContent());
    } else if (language === 'ru') {
        content.append(getRuContent());
    }
};

var setModalHeaderLanguage = function(language) {
    var data = getTextByLanguage(language, languagesOnModal);
    var modalHeader = $('#modalHeader');
    var header = $('.Modaldiscript-forms > *');

    if (header.length) {
        header.remove();
    }

    modalHeader.tmpl(data).appendTo('.Modaldiscript-forms');
};

var setHederLanguage = function(language) {
    var data = getTextByLanguage(language, languagesOnHeader);
    var modalmenuText = $('#modalmenuText');
    var header = $('.modalmenu > *');

    if (header.length) {
        header.remove();
    }

    $('.discript > *').remove();
    $('.orderButton > *').remove();

    $('#description').tmpl(data).appendTo('.discript');
    $('#orderButton').tmpl(data).appendTo('.orderButton');

    modalmenuText.tmpl(data.modalMenu).appendTo('.modalmenu');
};

var setDropdownActive = function (language) {
    $('.dropdown > *').remove();
    $('.dropdown').append(`<h5>${ language.toUpperCase() }</h5>`);
};

var setLanguage = function(language) {
    setHederLanguage(language);
    setContentLanguage(language);
    setFormLanguage(language);
    setModalHeaderLanguage(language);
    setDropdownActive(language);
};
