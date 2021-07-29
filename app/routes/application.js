import Route from '@ember/routing/route';

export default Route.extend({

  async model() {
    this.user  = this.store.findRecord('user', 1);

    let test_id = '101afc26-e66f-11eb-ba80-0242ac130004';
    this.scan_phase = await this.store.findRecord('scan-phase', test_id);
    return this;
  }

});
