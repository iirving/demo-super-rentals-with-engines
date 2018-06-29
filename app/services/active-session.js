import Service from '@ember/service';

export default Service.extend({
  user: null,

  init() {
    this._super();
    this.user = 'Ian';
  }
});
