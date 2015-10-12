# hubaaa:endpoint-puller

Pulls API endpoints, checking for new data and passing it through json pipes.

Supports the following HTTP request / response headers to avoid non-necessary pulling and API rate limit penalties:

- Last-Modified

- If-Modified-Since

# API

`puller = new EndpointPuller(options == {})`

## options

###  endpoint

String. The absolute URL to the endpoint.

### httpOptions

Json. Passed as is to meteor's HTTP.get

### pullOptions

Json. Pull specific options, including:

- defaultPullInterval: in milliseconds, default 5 seconds. Can't be less than 1 second.

- lastModifiedCollection: Mongo.Collection. If it exists, then lastModifiedDocId must exist too. Saves the HTTP "Last-Modified" header in the collection, so that "If-Modified-Since" can be sent in the first request. This is to avoid processing events that have already been proceeded in a previous run.

- lastModifiedDocId: See above.

### jsonPipeOptions

Since an EndpointPuller inherits from JsonPipe, all the option supported by [JsonPipe](https://atmospherejs.com/hubaaa/json-pipes).

Passed up to the JsonPipe base class.

# Coming Soon

- Support either providing an already existing jsonPipe or an options doc to create a json pipe.
