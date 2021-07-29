import Route from '@ember/routing/route';

export default Route.extend({

  async model() {
    let user = await this.store.findRecord('user', 1);
    let testId = '101afc26-e66f-11eb-ba80-0242ac130004';
    let scanPhase = await this.store.findRecord('scan-phase', testId, { include: 'phases' });

    return { user, scanPhase };
  }
});