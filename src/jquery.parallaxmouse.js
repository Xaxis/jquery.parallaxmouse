/**
 * jQuery.parallaxmouse
 *
 * (a) Wil Neeley
 * (c) Code may be freely distributed under the MIT license.
 */
;(function ( $, window, document, undefined ) {

  "use strict";

  var
    plugin_name   = 'parallaxmouse',
    defaults      = {
      range: 100,
      elms: [],
      invert: false
    };

  // Plugin constructor
  function Plugin( element, options ) {
    this._name = plugin_name;
    this._defaults = defaults;
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this.init();
  }

  // Extend plugin prototype
  $.extend(Plugin.prototype, {

    /**
     * Initialization method - plugin bootstrap.
     */
    init: function() {
      this.element = $(this.element);
      this.setInitialPositions(this.options.elms);
      this.parallaxElms(this.options.elms);
    },

    /**
     * Sets the initial position properties on the element objects.
     */
    setInitialPositions: function() {
      $(this.options.elms).each(function(idx, eobj) {
        var
          pos         = eobj.el.position();
        if (eobj.el.hasClass('left')) {
          eobj.x = pos.left;
          eobj.left = true;
        } else {
          eobj.x = parseInt(eobj.el.css('right').replace('px'));
          eobj.left = false;
        }
        if (eobj.el.hasClass('top')) {
          eobj.y = pos.top;
          eobj.top = true;
        } else {
          eobj.y = parseInt(eobj.el.css('bottom').replace('px'));
          eobj.top = false;
        }
      });
    },

    /**
     * Attaches the event listener that "parallaxily" positions elements.
     */
    parallaxElms: function() {
      var
        self          = this;
      this.element.on('mousemove', function(e) {
        var
          elm_w           = self.element.outerWidth(),
          elm_h           = self.element.outerHeight(),
          pos_x           = e.clientX,
          pos_y           = e.clientY,
          per_x           = pos_x / elm_w,
          per_y           = pos_y / elm_h;
        $(self.options.elms).each(function(idx, eobj) {
          var
            invert        = self.options.invert,
            post_x        = (self.options.range * per_x),
            post_y        = (self.options.range * per_y),
            past_x        = invert ? eobj.x + post_x : eobj.x - post_x,
            past_y        = invert ? eobj.y + post_y : eobj.y - post_y,
            dist_x        = past_x * eobj.rate,
            dist_y        = past_y * eobj.rate;
          if (eobj.left) {
            eobj.el.css('left', eobj.x + (dist_x * -1));
          } else {
            eobj.el.css('right', eobj.x + dist_x);
          }
          if (eobj.top) {
            eobj.el.css('top', eobj.y + (dist_y * -1));
          } else {
            eobj.el.css('bottom', eobj.y + dist_y);
          }
        });
      });
    }
  });

  // Plugin wrapper
  $.fn[plugin_name] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + plugin_name)) {
        $.data(this, 'plugin_' + plugin_name, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );
