import * as $ from 'jquery'
import * as _ from 'underscore'
import * as Backbone from 'backbone'
import * as hbs from 'handelbars'

var Home = Backbone.View.extend({

    template: hbs.compile(`
        <h3>{{message}}</h3>
    `),

    render: function () {
        this.$el.html(
            template({message: 'Hello World!'})
        )
    },

    remove: function () {

    }

})
