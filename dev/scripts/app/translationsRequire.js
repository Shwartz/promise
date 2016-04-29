define(['require', 'modules/local'], function (localRequire, local) {
    return function (resolve) {
        var websiteLocal = document.getElementById('websiteLocal').value;
        var websitePath = document.getElementById('websitePath').value;

        //Getting values from DOM perfectly
        console.log('locale: ', local[websiteLocal]);
        console.log('websitePath: ', websitePath);

        /*
        * Adding path directly for the sake of a test
        * */
        
        localRequire({
            paths: {
                /*local: '/' + websitePath + '/translationSimple'*/
                local: 'json/translationSimple.js'
            }
        }, ['json/translationSimple.js'], function (translations) {
            console.log('localRequire translations: ', translations['lv-lv']);
            resolve(translations['lv-lv']);
            //resolve(translations[locale]);
        })
    }

});