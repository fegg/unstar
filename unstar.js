;(function () {
    let whiteUser = [
        '75team',
        'chenmnkken',
        'Microsoft',
        'google',
        'facebook',
        'angular',
        'AlloyTeam',
        'ReactiveX',
        'Lucifier129',
        'teambition',
        'reactjs',
        'rollup',
        'd3',
        'koajs',
        'AllenWooooo',
        'greengerong',
        'Reactive-Extensions'
    ]
    let whiteRepos = [
        'css-modules',
        'is.js',
        'loadjs',
        'bem-core',
        'angular2-education',
        'react-web',
        'You-Dont-Need-jQuery',
        'gulp',
        'phaser',
        'shelljs',
        'whistle',
        'typecho',
        'reselect',
        'react-fiber-architecture',
        'react-highcharts',
        'react-native-material-kit',
        'prerender-node',
        'cyclejs',
        'esprima',
        'angular2-webpack-starter',
        'CodeIgniter',
        'You-Dont-Know-JS',
        'clipboard.js',
        'mobx',
        'koahubjs',
        'uWebSockets',
        'DefinitelyTyped',
        'swift',
        'cdnjs',
        'yarn',
        'ractive',
        'ionic',
        'postcss',
        'preact',
        'material-ui',
        'hapi-decorators',
        'karma',
        'jquery',
        'avalon',
        'async',
        'javascript',
        'react-hot-loader',
        'redux-observable',
        'material-design-lite',
        'svelte'
    ]

    let stars = document.querySelectorAll('.js-toggler-target')
    let reg = /\b[a-z-]+/ig

    ;[].map.call(stars, s => {
        let label = s.getAttribute('aria-label')
        
        return /Unstar/.test(label) && s
    }).forEach(r => {
        if(r) {
            let title = r.getAttribute('title')
            let notWhiteUser = whiteUser.indexOf(title.match(reg)[1]) === -1
            let notWhiteRepos = whiteRepos.indexOf(title.match(reg)[2]) === -1

            if(notWhiteUser && notWhiteRepos) {
                r.click()
            }
        }
    })

    stars = null
    whiteUser = null
    whiteRepos = null
}());
