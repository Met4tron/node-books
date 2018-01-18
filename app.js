import server from './src/server';
import database from './src/Utils/database';
const port = process.env.PORT || 3000;
const listen = (server, port) => {
  server.listen(port, () => {
    console.log(`Server Listenning on Port ${port}`);
  });
};

database.connect(listen(server, port));
