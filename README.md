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

### jsonPipeOptions

Since an EndpointPuller inherits from JsonPipe, all the option supported by [JsonPipe](https://atmospherejs.com/hubaaa/json-pipes).

Passed up to the JsonPipe base class.

# Coming Soon

- Support either providing an already existing jsonPipe or an options doc to create a json pipe.
