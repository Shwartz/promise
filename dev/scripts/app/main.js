define(
    [
        'app/translationPromise',
        'app/translationsRequire'

    ], function (TranslationPromise,
                 translationsRequire) {

        //el buttons for Promise
        var btnRedA = document.getElementById('btn1');
        var btnGreenA = document.getElementById('btn2');

        //el buttons for RequireJS
        var btnRedB = document.getElementById('btn3');
        var btnGreenB = document.getElementById('btn4');

        /* Translations with Promises, path is known and using as normally would do
        * */
        var data = {};
        TranslationPromise.then(function (data) {
            btnRedA.textContent = data.phrase1;
            btnGreenA.textContent = data.phrase2;
        });

        btnRedA.textContent = data.phrase1 || 'RED';
        btnGreenA.textContent = data.phrase2 || 'GREEN';

        /*
        * Translation using RequireJS only
        * Passing function to translationsRequire Method,
        * Which will be used only after we find out 'dynamic' path for needed methods
        **/
        translationsRequire(function (translation) {
            btnRedB.textContent = translation.phrase1 || 'RED';
            btnGreenB.textContent = translation.phrase2 || 'GREEN';
        });

    });