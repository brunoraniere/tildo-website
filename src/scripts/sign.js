$(document).ready(function() {
    $('.sign input').on('input', function() {
        var inputValue = $(this).val();
        var sanitizedValue = inputValue.replace(/\s/g, '');
        $(this).val(sanitizedValue);
    });

    $('.sign__slide').slick({
        prevArrow: false,
        nextArrow: false,
        swipe: false
    });

    $('.sign__slide--swipe').on('click', function() {
        $('.sign__slide').slick('slickNext');
    });

    $('.button--sign').on('click', function() {
        const father = $(this).parent().parent();
        const fatherH1Value = father.find('h1').text().trim().replace(/\s+/g, '');

        const username = $(this).parent().find('.input--username').val();
        const password = $(this).parent().find('.input--password').val();

        let jsonUserData = {
            'username': username,
            'password': password
        }

        switch (fatherH1Value) {
            case 'Sign-in':
                // enviar json ao servidor com axios
                break;

            case 'Sign-up':
                const confirmPassword = $(this).parent().find('.input--confirm-password').val();

                jsonUserData['confirmPassword'] = confirmPassword;
                break;
        }

        console.log(jsonUserData);
    });
});