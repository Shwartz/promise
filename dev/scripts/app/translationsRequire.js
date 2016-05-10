define(
    [
        'modules/local'
    ],
    function (
              local) {
        return function (resolve) {
            /*
            * Let's pretend we don't know in advance localization
            * and path to some folder,
            * therefore getting values from DOM
            * */
            var websiteLocal = document.getElementById('websiteLocal').value;
            var websitePath = document.getElementById('websitePath').value;

            /*
            * Now we can get necessary file and using any dynamic path
            * */
            require.config({
                paths: {
                    translate: '/' + websitePath + '/translationSimple'
                }
            });


            require(['translate'], function (translations) {
                return resolve(translations[local[websiteLocal]])
            })
        }

    });