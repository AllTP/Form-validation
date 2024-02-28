$(document).ready(function ()
{
    $('#register-btn').click(function (event)
    {
        $('#wmsgreg').addClass('d-none').text('');

        const inputs = $(`input`);

        if (validateForm(inputs) == true)
        {
            let email = $('input[name="email"]').val(),
                fullName = buildFullName([$('input[name="surname"]').val(),
                    $('input[name="name"]').val(), $('input[name="lastname"]').val()]);

            $.post("../vendor/auth.php", {signup: 1, fullName: fullName, email: email}).done(function (data)
            {
                let dataObject = JSON.parse(data);
                if (dataObject.status)
                {
                    $('#wmsgreg').removeClass('d-none border border-danger').addClass('border border-success')
                        .text(dataObject.message);
                }
                else
                {
                    dataObject.forEach(function (field)
                    {
                        validateForm($(`input[name="${field}"]`))
                    });
                }
            })
        }
        else
        {
            $('#wmsgreg').removeClass('d-none').text('Некорректное заполнение')
        }
    });
});

function validateForm(inputs)
{
    $(`input`).removeClass('error');

    let result = true;

    function addError(input, message)
    {
        result = false;

        $(input).addClass('error');
        $(input).attr('placeholder', message)
    }

    for (const input of inputs)
    {
        if ($(input).val() == '')
        {
            addError(input, "Заполните поле");
        }

        if ($(input).attr('type') == "text" && validateName($(input).val()) == false)
        {
            addError(input, "Некорректный формат Ф.И.О.");
        }

        if ($(input).attr('type') == "email" && validateEmail($(input).val()) == false)
        {
            addError(input, "Неправильное заполнение");
        }

        if ($(input).attr('type') == "password" && validatePassword($(input).val()) == false)
        {
            addError(input, "Неправильное заполнение");
        }
    }

    return result;
}

function validateName(name)
{
    const pattern = new RegExp("^[а-яА-Я ]+$");
    let isMatch = pattern.test(name)

    return isMatch;
}

function validatePassword(password)
{
    const pattern = new RegExp("^[a-zA-Z0-9]+$");
    let isMatch = pattern.test(name)

    return isMatch;
}

function validateEmail(email)
{
    const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$");
    let isMatch = pattern.test(email)

    return isMatch;
}

function buildFullName(inputs)
{
    let pattern = new RegExp(/\s/g)

    let stringArray = [];
    let fullName = '';

    for (const input of inputs)
    {
        let inputStringReplaced = input.replace(pattern, '');
        let inputElement = '';
        inputElement = inputElement + inputStringReplaced[0];

        inputElement = inputElement.toUpperCase();
        console.log(inputElement)
        inputStringReplaced = inputElement + inputStringReplaced.slice(1);
        stringArray.push(inputStringReplaced);
    }

    fullName = fullName + stringArray[0] + ' ' + stringArray[1][0] + '. ' + stringArray[2][0] + '.';

    return fullName;
}