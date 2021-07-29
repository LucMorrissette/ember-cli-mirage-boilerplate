import Model, { attr, belongsTo} from '@ember-data/model';

export default class PhaseModel extends Model {
    @belongsTo('scan-phase') scanPhase;
    @attr('string') phase_number;
    @attr('string') phase_name;
}