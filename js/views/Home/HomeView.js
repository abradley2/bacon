import _ from 'underscore'
import $ from 'jquery'
import Backbone from 'backbone'
import hbs from 'handlebars'
import template from './HomeTemplate.html'

export default Backbone.View.extend({

    template: hbs.compile(template),

    initialize: function () {

    },

    render: function () {
        this.$el.html(
            this.template({message: 'Better Backbone Boilerplate'})
        )
    },

    update: function () {

    },

    remove: function () {
        this.$el.empty()
    }

})
