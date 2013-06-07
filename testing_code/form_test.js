var casper = require('casper').create();

casper.start('form.html');

casper.then(function() {
    this.fill('#nameForm', {
        firstName: 'Jane',
        lastName: 'Doe'
    }, false);
});

casper.thenEvaluate(function() {
    // Unfortunately, HTMLFormElement.prototype.submit() does not trigger a submit event...
    // Therefore:
    document.querySelector('input[type=submit]').click();
    // Alternative: document.getElementById('nameForm').dispatchEvent(new Event('submit'))
});

casper.then(function() {
    this.test.assertEvalEquals(
        function () {
            return document.getElementById('result').innerText;
        },
        'Jane Doe'
    );
});

casper.run(function() {
    this.echo('Done');
    this.exit();
});