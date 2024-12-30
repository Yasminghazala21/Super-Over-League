const element = (
  //   Write your code here.
  <div className='backgroundContainer'>
    <h1 className='heading'> Super Over League </h1>
    <div className='image-container'>
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
      />
      <img
        className='image'
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
