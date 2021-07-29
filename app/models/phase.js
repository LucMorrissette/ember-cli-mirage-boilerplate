import Model, { attr, belongsTo} from '@ember-data/model';

export default class PhaseModel extends Model {
  @attr('string') phaseNumber;
  @attr('string') phaseName;
}