import Model, { attr, hasMany } from '@ember-data/model';

export default class ScanPhaseModel extends Model {
  @hasMany('phase') phases;
  @attr('string') currentPhaseIndex;
  @attr('string') currentPhaseSubstate;
}