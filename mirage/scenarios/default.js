export default function(server) {
  server.loadFixtures();
  server.create('user', { name: 'Yehuda' });
  //debugger; //-> go run 'server.db.dump();' in the javascript console.
}
