var contentful = require('contentful')
// import contentful from "contentful"
// const { space } = require('postcss/lib/list')

const client = contentful.createClient({
    accessToken: "uWgfryO5msAH1lg6Jzk-85nZ12B15b8Mqmydn_fqMdE",
    space: "d7wwlfu66ht3"
})

export default client;