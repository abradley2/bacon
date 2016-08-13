import _ from 'underscore'
import $ from 'jquery'
import Backbone from 'backbone'
import html from '../fn/html'

export default Backbone.View.extend({

    template: (html`<div>
        <h3>About Page</h3>
        <a href='/' data-link>Home</a>
    </div>`),

    initialize: function () {

    },

    render: function () {
        this.$el.html(
            this.template()
        )
    },

    update: function () {

    },

    remove: function () {
        this.$el.empty()
    }

})
