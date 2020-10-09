# UneeQ Example Applications
This repository includes various example apps to help UneeQ integrators build and setup the required services for the
delivery of a UneeQ Digital Human. 

## Web Front End
- [HTML / Javascript](https://gitlab.com/uneeq-oss/examples/tree/master/web/node)

## Token
The purpose of this application is to return a single use token as generated by the UneeQ API server, using a private 
token which is secret to this application. By generating tokens in this way, customer secrets can be kept securely
within this application and not exposed via an HTML front end application.

- [Node JS](https://gitlab.com/uneeq-oss/examples/tree/master/token/node)

## Conversation Platform API
This application implements conversation platform integration with a UneeQ digital human. The application can be configured to connect a UneeQ digital human to Dialogflow, Dialogflow CX, Watson, Lex, Wolfram Alpha, and Directline concurrently.
- [Node JS](https://gitlab.com/uneeq-oss/examples/tree/master/conversation/node)
