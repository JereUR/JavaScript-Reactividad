const Component = (function () {
  //Create component constructor
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  //Methods

  //Render UI
  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);

    console.log(this.data);
  };

  //Reactive state update
  Constructor.prototype.setState = function (obj) {
    for (let key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }

    this.render();
  };

  //Get inmutable state copy
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
