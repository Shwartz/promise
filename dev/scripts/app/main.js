define(
    [
        /*'app/translationPromise',*/
        'app/translationsRequire'

    ], function (/*TranslationPromise,*/
                 translationsRequire) {


        console.log('main.js: translationsRequire: ', translationsRequire);

        //el buttons for Promise
        /*var btnRedA = document.getElementById('btn1');
         var btnGreenA = document.getElementById('btn2');*/

        //el buttons for RequireJS
        var btnRedB = document.getElementById('btn3');
        var btnGreenB = document.getElementById('btn4');

        /* Translations with Promises*/
        /*var data = {};
         TranslationPromise.then(function(data) {
         btnRedA.textContent = data.phrase1;
         btnGreenA.textContent = data.phrase2;
         });

         btnRedA.textContent = data.phrase1 || 'RED';
         btnGreenA.textContent = data.phrase2 || 'GREEN';*/

        /* Translations with RequireJS kind of promise async */
        translationsRequire(function (translation) {
            console.log('!!! main translations: ', translation);
            btnRedB.textContent = translation.phrase1 || 'RED';
            btnGreenB.textContent = translation.phrase2 || 'GREEN';
        });

    });