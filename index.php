<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style/css/bootstrap.min.css" rel="stylesheet">
    <link href="style/css/style.css" rel="stylesheet">
    <title>Document</title>
</head>
<body class="bg-light">
<!-- Хедер -->
<header class="bd-header shadow pt-5 mb-5">
    <div class="row p-3 pt-0">
        <div class="col pt-0 text-white text-start">
            <h1 class="">Оценка угроз безопасности информации методом экспертной оценки</h1>
            <p>Согласно методике "ФСТЭК"</p>
        </div>
    </div>
</header>
<!-- Форма авторизации -->
<div class="container text-center">
    <div class="row justify-content-center">
        <div class="col-5">
            <h2 class="">Аутентификация</h2>
            <div class="row justify-content-center">
                <div class="col-auto col-6">
                    <p class="msg p-2 border border-danger rounded-2 d-none" id="wmsg"></p>
                </div>
            </div>
            <form class="form-horizontal text-black" id="loginForm">
                <div class="form-group text-start">
                    <label for="login">Электронная почта</label>
                    <input type="email" class="auth-input form-control" id="username" placeholder="Введите электронную почту"
                           required="required" name="login">
                </div>
                <div class="form-group text-start">
                    <label for="password">Пароль</label>
                    <input type="password" class="auth-input form-control" id="password" placeholder="Введите пароль"
                           required="required" name="password">
                </div>
                <button type="submit" class="btn btn-outline-primary mt-2" id="login-btn">Войти</button>
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <a class="nav-link text-decoration-underline mt-4" aria-disabled="false" href="/register.php">Зарегистрироваться</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- Футер -->
<footer class="footer text-white p-3 pb-0" id="footer">
    <div class="row m-3 mb-0">
        <div class="col">
            <div class="footer-text" style="white-space: pre-line">
                <div class="row">Основным назначением сайта является оценка угроз безопасности информации методом экспертной оценки следующих показателей:</div>
                <div class="row m-0"><ul class="list mb-0">
                        <li class="list-item">возможных негативных последствий;</li>
                        <li class="list-item">возможных целей реализации угроз безопасности информации нарушителями;</li>
                        <li class="list-item">актуальности угроз безопасности информации.</li></ul>
                </div>
                <div class="row">Процедура получения и расчета данных показателей соответствует методике, приведенной в приложении 2 к методическому документу «Методика оценки угроз безопасности информации», утвержденного ФСТЭК России 5 февраля 2021 г.<a href="https://fstec.ru/files/495/---5--2021-/891/---5--2021-.pdf" style="color: yellow">https://fstec.ru/files/495/---5--2021-/891/---5--2021-.pdf</a>
                </div>
            </div>
        </div>
        <div class="col-3 text-center m-auto">
            <h5>Поддержка</h5>
            <div class="row">
                <h6>Возникли проблемы с сайтом?</h6>
                <t>Обратитесь к администратору ресурса:</t>
                <b>admin@gmail.com</b>
            </div>
        </div>
    </div>
</footer>
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/auth.js"></script>
</body>
</html>