//Grab configurable variables from front page
var address = $('#address').val();

// Connect client connection to elasticsearch
var client = new $.es.Client({
    hosts: address
});

function post() {
    // grab user configurable fields
    var index = $('#index').val();
    var type = $('#type').val();
    var data = $('#data').val();
    // use elasticsearch api to query
    client.index({
        index: index,
        type: type,
        body: data
    }).then(function (resp) {
        console.log(resp)
    }, function (err) {
        console.trace(err.message);
    });
}

function get() {
    // grab user configurable fields 
    var index = $('#index').val();
    var type = $('#type').val();
    var query = $('#query').val();
    // use elasticsearch api to query
    client.search({
        index: index,
        type: type,
        body: query
    }).then(function (resp) {
        var hits = resp.hits.hits;
        console.log(hits)
    }, function (err) {
        console.trace(err.message);
    });
}
