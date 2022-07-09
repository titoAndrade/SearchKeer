
const Loader = () => {
  return (
    <div id="loading" class="container" style={{ height: '100vh', maxWidth: '100%' }}>
      <div class="row justify-content-center align-items-center">
        <div class="col-12"
             style={{ marginTop: '45vh', marginLeft: '85vw'}}>
          <lottie-player 
            src="https://assets10.lottiefiles.com/packages/lf20_b7f0c8s4.json"
            background="transparent"
            speed="1" 
            style={{ width: '13vmin', height: '13vmin'}}
            loop
            autoplay>
          </lottie-player>
        </div>
      </div>
    </div>
  )
} 

export default Loader