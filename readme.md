## Picnic planner application - CLI

example usage:

Make API_KEY environment variable accessible to the application

```sh
export API_KYE=<API_KEY>
```

Run the CLI application by adding a location variable to the command line ``node picnic-planner.js <location>``

```sh
$ node picnic-planner.js london
You should have your picnic on Sunday
```

### Running the tests
We are using Mocha for testing. to run the tests, first install dependencies. Then run the tests.


```sh
$ npm install
$ npm test
```

### Supported suggestions cases:

- If the next Saturday and Sunday are expected to be rainy or cold (<10 deg C), then the
response should be “The weather isn’t looking very good this weekend, maybe stay indoors."
- If either Saturday or Sunday is dry and not too cold, then the response should be “You
should have your picnic on <day>.”
- If both Saturday and Sunday are due to be dry and not too cold, then the response should be
“This weekend looks nice for a picnic, <day> is best because it’s <reason>.”; you have free rein to decide upon sensible reasons to favour one day over another.