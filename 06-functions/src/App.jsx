import React from 'react'

const App = () => { 

  const pageScrolling = (val) => {
    console.log('page Scrolling...at speed',val);
  }

  return (
    <div onWheel={(elem) => {
      pageScrolling(elem.deltaY)
    }}>

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
