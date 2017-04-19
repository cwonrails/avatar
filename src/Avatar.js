
const { createElement: h } = require('react')
const path = require('./path')

module.exports = ({
  size = 768,
  color = '#000'
}) => h('svg', {
  viewBox: '0 0 128 128',
  width: size,
  height: size,
  style: {
    display: 'block',
    margin: 0
  }
},
  h('path', {
    d: path
  })
)

