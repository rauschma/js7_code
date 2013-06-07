var casper = require('casper').create();

casper.start('reveal.html');

casper.then(function() {
    this.test.assertNotVisible('.reveal .revealContent');
    this.click('.reveal .revealExpandLink a');
});

casper.then(function() {
    this.test.assertVisible('.reveal .revealContent');
});

casper.run(function() {
    this.echo('Done');
    this.exit();
});