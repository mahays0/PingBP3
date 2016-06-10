#BP3 Angular 2 Spring Boot Starter Application
This is meant to be a starter app with the basic patterns we use for
 enterprise ready web based applications.

## Setting up the DEV environment

1. Download the repo as a zip file since you don't need to contribute to this project but start your own.

## Running the build

1. You need to run most build commands from the root directory (for now until we fix a checkstyle bug)
2. To run a full build - `gradle clean build`
3. To run the server - `gradle clean bootRun`

## Developing with the client

The client is written in angular 2. The code is in the frontend. To run the frontend compiler in
a live watch mode while using the mock server to serve up the pages do the following:

In one terminal window run:

`gradle bootRun`

wait for the server to startup. You will see "com.bp3.seed.Application - Started Application" in the logs.

Then in another terminal window run:

`gradle watch`

Browse to http://localhost:8080/

## App Structure

### common

This contains objects that are common to the frontend and the backend. If you add a json schema file to src/main/resources/json that file will be turned into a java object shared with the java backend and a typescript object shared with the typescript front end.  If you are creating a service that is exposed to the client, this is where you create your request and response objects that are consumed by both the client and the server

### backend

This is the spring boot based server.

### frontend

This is the angular 2 based client code.  It's built using angular-cli. See [client readme] (https://github.com/angular/angular-cli) for instructions on using the front end outside of gradle.  
See `gradle tasks` for the other front end tasks
