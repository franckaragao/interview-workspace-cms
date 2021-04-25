module.exports = {
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: true,
    apolloServer: {
      tracing: true,
    },
  },
};
