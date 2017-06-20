require('babel-core/register')({
  presets: ['latest', 'react'],
  plugins: [
    'transform-decorators-legacy',
    'transform-object-rest-spread',
    [
      'transform-runtime',
      {
        regenerator: true
      }
    ]
  ]
})
