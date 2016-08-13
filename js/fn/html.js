import hbs from 'handlebars'

// simple utility function so the 'html' template string tag can
// act as an alias for the templating engine

export default function (templateStrings) {
    return hbs.compile(templateStrings[0])
}
