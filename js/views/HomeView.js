import _ from 'underscore'
import $ from 'jquery'
import Backbone from 'backbone'
import html from '../fn/html'

export default Backbone.View.extend({

    template: (html`<div>
        <h3>{{message}}</h3>
        <a href='/about' data-link>About</a>
    </div>`),

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
