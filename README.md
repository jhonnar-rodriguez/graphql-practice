# GraphQL, Typescript, Type-Graph and Apollo Server Practice

Is a project to practice the mentioned technologies in conjunction with eslint, husky and lint staged.

## Installation

You can see the version of NodeJs [here](https://github.com/jhonnar-rodriguez/graphql-practice/blob/master/.nvmrc)

```bash
npm install
npm run prepare
```

## Running Locally

- Rename the .env.example file to .env and setup your variables (all are required)

- Start the server in development mode with the following command, it also comes with nodemon so future changes will refresh the server.

```bash
npm run dev
```

- Once the server is in development mode, you can check the server status and go to the graphql studio to start playing around.
  - Check server status: <http://localhost:{APP_PORT>}
  - GraphQL Studio: <http://localhost:{APP_PORT}/{APP_GRAPHQL_PATH>}

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate if exists.

## License

[MIT](https://choosealicense.com/licenses/mit/)
