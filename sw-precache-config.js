module.exports = {
    stripPrefix: 'build/',
    staticFileGlobs: [
      'build/*.html',
      'build/manifest.json',
      'build/static/**/!(*map*)',
      'build/documents/Savankumar_Trada_Resume.pdf',
      'build/images/!(*map*)',
      'build/libs/css/bulma-timeline.min.css'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/service-worker.js'
  };