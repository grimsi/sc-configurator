require('fs-extra').copy('./src', './build', function (err) {
    if (err) {
        console.error(err);
    }
});