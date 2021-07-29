export default function() {

  this.resource('user')

  this.get('/scan-phases/:testId', (schema, request) => {
    return schema.scanPhases.findBy ({'testId': request.params.testId});
  })
}
