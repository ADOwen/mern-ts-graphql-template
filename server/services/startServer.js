// import express, { Request, RequestHandler, Response } from "express";
// import { ApolloServer } from "@apollo/server";
// import { expressMiddleware } from "@apollo/server/express4";
// import path from "path";
// import { fileURLToPath } from "url";

// const startApolloServer = async (server: ApolloServer) => {
//   // start graph ql server
//   await server.start();

//   //TO DO: start db

//   // Instantiate express server
//   const PORT = 3001;
//   const app = express();

//   // MIDDLEWARE
//   app.use(express.static("public"));
//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());

//   // resolve __dirname for ES modules
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);

//   // serve home page
//   app.get("/", (_req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, "..", "public", "index.html"));
//   });

//   // connect graphQL server asserted types to resolve expressMiddleware function causing a type overload
//   app.use("/graphql", expressMiddleware(server) as unknown as RequestHandler);

//   app.listen(PORT, () => {
//     console.log(`Now listening on port ${PORT}...`);
//   });
// };

// export default startApolloServer;