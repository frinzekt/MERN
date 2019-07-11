import React from 'react'
import ReactDom from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily:'Arial'
}

const title = React.createElement(
    'h1',
    {id:'title', className: 'header', style: style},
    'Hello World'
)

ReactDom.render(
    title,
    document.getElementById('root')
)