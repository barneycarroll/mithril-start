# mithril-start
[IN DEVELOPMENT]
The Mithril 1.0 starter project for high quality web applications

## Dependencies

## Code Splitting
The files generated from this project are created by webpack. Two primary bundles are created called main and vendor. Main is all of the user written code required to rendered any page and vendor is any third party code.

In addition to those two bundles the patterns used in this project lead to webpack to generate another bundle for each 'route'. Each of these bundles is route specific code and will gets downloaded to the client during the `onmatch` stage of route resolution in mithril.

The code splitting in this application is only necessary for the front end and because of this there are two babel configs. There is one in the `.babelrc` file which is used when running the server through nodemon. The other is in the webpack config, this config file also has a boolean flag to ignore the `.babelrc` file. Having these two configs is necessary because we want the imports (and dynamic imports) to be dealt with my webpack so that it can correctly manage code splitting so the babel config in the webpack config files is setup to ignore imports with the config `{"modules": false}`

## Server side rendering
This project includes `mithril-node-render` which is used to render mithril components in the express server. The code that uses `mithril-node-render` can be found in the build/render.js file. Because this application renders on both the server and the client the routes have been abstracted into a route file so that the Express app and Mithril app can both use them.

## Folder Structure
This project uses a folder structure as found in this [medium post](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1#.23nfvo1cm). It primarily groups by feature as opposed to type, and nests components into folders based on where they are used. The blog post has all the details you need and this structure can, of course, be adapted

## Route Resolvers

## Useful Components
The aim of including components within this starter-project is to hopefully give those new to creating such applications something to work from and to provide structure and ideas for creating components in the future. The ones included are the generic ui components that are often found front end projects.

## Data Retrieval / API Requests Layer

## Data Access / Local State Management

## Linting

## Testing with ospec and coverage integration
