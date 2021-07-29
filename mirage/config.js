export default function() {

  this.resource('user')

  this.get('/scan-phases/:test_id', (schema, request) => {
    return schema.scanPhases.findBy ({'test_id': request.params.test_id});
  })
}
