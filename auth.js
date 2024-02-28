/*
Авторизация
*/
$(document).ready(function ()
{
    // Кнопка авторизации
    $('#login-btn').click(function (event)
    {
        event.preventDefault();

        const inputs = $(`input`);

        if (validateForm(inputs) == true)
        {
            let login = $('input[name="login"]').val(),
                password = $('input[name="password"]').val();

            $.post("../vendor/auth.php", {signin: 1, fullName: login, password: password}).done(function (data)
            {
                let dataObject = JSON.parse(data);

                if (dataObject.status == true)
                {
                    localStorage.setItem('full_name', dataObject.fullName);
                    localStorage.setItem('role', dataObject.role);
                    localStorage.setItem('email', dataObject.email);

                    console.log(dataObject.role)
                    console.log(dataObject.status)
                    if (dataObject.role == 'Администратор')
                    {
                        document.location.href = "../admin/admin.php"
                    }
                    if (dataObject.role == 'Эксперт')
                    {
                        console.log(1)
                        document.location.href = "../about.php";
                    }
                }
                else
                {
                    $('#wmsg').removeClass('d-none').text(dataObject.message)
                }
            })
        }
        else
        {
            $('#wmsg').removeClass('d-none').text('Некорректное заполнение')
        }
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

    function validatePassword(password)
    {
        const pattern = new RegExp("^[a-zA-Z0-9]+$");
        let isMatch = pattern.test(password)

        return isMatch;
    }

    function validateEmail(email)
    {
        const pattern = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$");
        let isMatch = pattern.test(email)

        return isMatch;
    }
});