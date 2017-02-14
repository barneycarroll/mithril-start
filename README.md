# mithril-start
The Mithril 1.0 starter project for high quality web applications

## Dependencies

## Code Splitting
The files generated from this project are created by webpack. Two primary bundles are created called main and vendor. Main is all of the user written code required to rendered any page and vendor is any third party code.

In addition to those two bundles the patterns used in this project lead to webpack to generate another bundle for each 'route'. Each of these bundles is route specific code and will gets downloaded to the client during the `onmatch` stage of route resolution in mithril.

## Server side rendering
This project includes `mithril-node-render` which is used to render mithril components in the express server. The code that uses `mithril-node-render` can be found in the build/render.js file. Because this application renders on both the server and the client the routes have been abstracted into a route file so that the Express app and Mithril app can both use them.

## Folder Structure

## Route Resolvers

## Useful Components

## Data Retrieval / API Requests Layer

## Data Access / Local State Management

## Linting

## Testing with ospec and coverage integration
