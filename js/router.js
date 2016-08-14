import Backbone from 'backbone'
import BackboneViewMediator from 'backbone-view-mediator'
import HomeView from './views/Home/HomeView'
import AboutView from './views/About/AboutView'

const viewMediator = new BackboneViewMediator({
    el: 'body',
    layout: `<div>
        <div id='navigation-region'></div>
        <div id='main-region'></div>
    </div>`,
    views: {
        'HomeView': HomeView,
        'AboutView': AboutView
    }
})

const Router = Backbone.Router.extend({
    routes: {
        '': 'HomeRoute',
        'about': 'AboutRoute'
    },
    'HomeRoute': () => {
        viewMediator.render({
            'HomeView': '#main-region'
        })
    },
    'AboutRoute': () => {
        viewMediator.render({
            'AboutView': '#main-region'
        })
    }
})

export default new Router()
