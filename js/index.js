
// HAMBURGER ICON
$(document).ready(function () {
    $('#nav-icon3').click(function () {
        if ($(this).hasClass('open')) {
            document.getElementById("menu").style.height = "0%";
            $(this).toggleClass('open');
        }
        else {
            $(this).toggleClass('open');
            document.getElementById("menu").style.height = "100%";
        }
    });

    $('#nav-icon3-ex').click(function () {
        if ($(this).hasClass('open')) {
            document.getElementById("menu").style.height = "0%";
            $(this).toggleClass('open');
        }
        else {
            $(this).toggleClass('open');
            document.getElementById("menu").style.height = "100%";
        }
    });



        function copyStringToClipboard(str) {
            // Create new element
            var el = document.createElement('textarea');
            // Set value (string to be copied)
            el.value = str;
            // Set non-editable to avoid focus and move outside of view
            el.setAttribute('readonly', '');
            el.style = { position: 'absolute', left: '-9999px' };
            document.body.appendChild(el);
            // Select text inside element
            el.select();
            // Copy text to clipboard
            document.execCommand('copy', false, null);
            // Remove temporary element
            document.body.removeChild(el);

        }
        // NAV MENU CONNECT
        $('.connect-fx').click(function () {
            var mail = "royzhang7603@gmail.com"
            copyStringToClipboard(mail);
            $('#copy-alert').addClass("animated fadeInDown");
            var alert = document.getElementById("copy-alert");
            alert.addEventListener('animationend', alertDown);
            // alert.addEventListener('animationend', function(){
            //     alert.classList.remove("fadeInDown");
            //     alert.classList.add("delay-4");
            //     alert.classList.add("fadeOutUp");
            // })

            $('.connect-fx').click(function (event) {
                event.preventDefault();
            })

        })
        $('.connect-fx').click(function (event) {
            event.preventDefault();
        })

        // HOME CONNECT

        function alertUp() {
            this.classList.remove("animated");
            this.classList.remove("delay-4");
            this.classList.remove("fadeOutUp");
            this.removeEventListener('animationend', alertUp);
        }
        function alertDown() {
            this.classList.remove("fadeInDown");
            this.classList.add("delay-4");
            this.classList.add("fadeOutUp");
            this.addEventListener('animationend', alertUp);
        }

        $('.connect-fx-home').click(function () {
            var mail = "royzhang7603@gmail.com"
            copyStringToClipboard(mail);
            $('#copy-alert-home').addClass("animated fadeInDown");
            var alert = document.getElementById("copy-alert-home");
            alert.addEventListener('animationend', alertDown);
            // alert.addEventListener('animationend', function(){
            //     alert.classList.remove("fadeInDown");
            //     alert.classList.add("delay-4");
            //     alert.classList.add("fadeOutUp");
            //     console.log("second", alert);
            //     alert.addEventListener('animationend', function(){
            //         alert.classList.remove("animated");
            //         alert.classList.remove("delay-4");
            //         alert.classList.remove("fadeOutUp");
            //     })
            // })

            $('.connect-fx-home').click(function (event) {
                event.preventDefault();
            })

        })

        $('.connect-fx-abt').click(function () {
            var mail = "royzhang7603@gmail.com"
            copyStringToClipboard(mail);
            $('#copy-alert-abt').addClass("animated fadeInDown");
            var alert = document.getElementById("copy-alert-abt");
            alert.addEventListener('animationend', alertDown);
            // alert.addEventListener('animationend', function(){
            //     alert.classList.remove("fadeInDown");
            //     alert.classList.add("delay-4");
            //     alert.classList.add("fadeOutUp");
            //     console.log("second", alert);
            //     alert.addEventListener('animationend', function(){
            //         alert.classList.remove("animated");
            //         alert.classList.remove("delay-4");
            //         alert.classList.remove("fadeOutUp");
            //     })
            // })

            $('.connect-fx-abt').click(function (event) {
                event.preventDefault();
            })

        })

        $('.connect-fx-foot').click(function () {
            var mail = "royzhang7603@gmail.com"
            copyStringToClipboard(mail);
            $('#copy-alert-foot').addClass("animated fadeInDown");
            var alert = document.getElementById("copy-alert-foot");
            alert.addEventListener('animationend', alertDown);
            // alert.addEventListener('animationend', function(){
            //     alert.classList.remove("fadeInDown");
            //     alert.classList.add("delay-4");
            //     alert.classList.add("fadeOutUp");
            //     console.log("second", alert);
            //     alert.addEventListener('animationend', function(){
            //         alert.classList.remove("animated");
            //         alert.classList.remove("delay-4");
            //         alert.classList.remove("fadeOutUp");
            //     })
            // })

            $('.connect-fx-foot').click(function (event) {
                event.preventDefault();
            })

        })
        // $('.connect-fx-home').click(function(event){
        //     event.preventDefault();
        // })

        // HAMBURGER

        $('#nav-icon3').click(function () {
            if ($('.menu-header').hasClass('animated')) {
                $('.menu-header').removeClass("animated fadeInUp delay-1");
            }
            else {
                $('.menu-header').addClass("animated fadeInUp delay-1");
            }

            if ($('.item-1').hasClass('animated')) {
                $('.item-1').removeClass("animated fadeInUp delay-2");
            }
            else {
                $('.item-1').addClass("animated fadeInUp delay-2");
            }

            if ($('.item-2').hasClass('animated')) {
                $('.item-2').removeClass("animated fadeInUp delay-3");
            }
            else {
                $('.item-2').addClass("animated fadeInUp delay-3");
            }

            if ($('.item-3').hasClass('animated')) {
                $('.item-3').removeClass("animated fadeInUp delay-4");
            }
            else {
                $('.item-3').addClass("animated fadeInUp delay-4");
            }

            if ($('.item-4').hasClass('animated')) {
                $('.item-4').removeClass("animated fadeInUp delay-5");
            }
            else {
                $('.item-4').addClass("animated fadeInUp delay-5");
            }

        })


        $('#nav-icon3-ex').click(function () {
            if ($('.menu-header').hasClass('animated')) {
                $('.menu-header').removeClass("animated fadeInUp delay-1");
            }
            else {
                $('.menu-header').addClass("animated fadeInUp delay-1");
            }

            if ($('.item-1').hasClass('animated')) {
                $('.item-1').removeClass("animated fadeInUp delay-2");
            }
            else {
                $('.item-1').addClass("animated fadeInUp delay-2");
            }

            if ($('.item-2').hasClass('animated')) {
                $('.item-2').removeClass("animated fadeInUp delay-3");
            }
            else {
                $('.item-2').addClass("animated fadeInUp delay-3");
            }

            if ($('.item-3').hasClass('animated')) {
                $('.item-3').removeClass("animated fadeInUp delay-4");
            }
            else {
                $('.item-3').addClass("animated fadeInUp delay-4");
            }

            if ($('.item-4').hasClass('animated')) {
                $('.item-4').removeClass("animated fadeInUp delay-5");
            }
            else {
                $('.item-4').addClass("animated fadeInUp delay-5");
            }

        })

    });