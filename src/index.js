import './style.scss';
import myImage from './static/wordreplace.png';

var app =
  app ||
  (function() {
    return {
      params: {
        p1: 1500,
        p2: 500,
        p3: 'Q1',
        output: '#output',
      },

      init: function(Args) {
        this.params = { ...this.params, ...Args };
        console.log(this.params);
        return this;
      },

      start: function() {
        const params = this.params;
        document.querySelector(params.output).value = JSON.stringify(params);
        return self;
      },
    };
  })();

app.init({ P3: 'yay' }).start();
