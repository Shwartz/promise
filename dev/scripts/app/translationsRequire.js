define(
    [
        'modules/local'
    ],
    function (
              local) {
        return function (resolve) {
            var websiteLocal = document.getElementById('websiteLocal').value;
            var websitePath = document.getElementById('websitePath').value;

            //Getting values from DOM perfectly
            console.log('1 locale: ', local[websiteLocal]);
            console.log('2 websitePath: ', websitePath);

            /*
             * Adding path directly for the sake of a test
             * */

            require.config({
                paths: {
                    translate: '/' + websitePath + '/translationSimple'
                    /*local: '/json/translationSimple'*/
                }
            });

            require(['translate'], function (translations) {
                console.log('!!!!localRequire translations: ', translations[local[websiteLocal]]);
                return resolve(translations['lv-lv'])
            })
        }

    });