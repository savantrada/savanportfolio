module.exports = {
    stripPrefix: 'build/',
    staticFileGlobs: [
      'build/*.html',
      'build/manifest.json',
      'build/static/**/!(*map*)',
      'build/**/!(*map*)',
      'build/libs/css/bulma-timeline.min.css'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/service-worker.js'
  };