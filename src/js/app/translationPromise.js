define(
    [
        'utils/ajax',
        'modules/local'
    ], function (ajax,
                 local) {
        /*
        * Get translations with standard Promise
        * */

        var jsonString;

        function translation() {
            var websiteLocal = document.getElementById('websiteLocal').value;
            var websitePath = document.getElementById('websitePath').value;
            var path = '../' + websitePath + '/translations.json';

            jsonString = jsonString || ajax.get(path);

            return jsonString.then(function (data) {
                return JSON.parse(data)[0][local[websiteLocal]];
            });
        }

        return translation();
    });