import server from './src/server';
import db from './src/Utils/database';
const port = process.env.PORT

server.listen(port, () => {
  console.log('Server is Running');
});