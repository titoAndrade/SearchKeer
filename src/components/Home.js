import Animation from './Animation'

const Home = () => {
  return (
    <div class="container align-content-center" id='home'>

      <div class="row justify-content-center align-items-center" style={{ marginTop:'10vh'}}>

        {/* T E X T  C O N T A I N E R */}
        <div class="col-xl-6 col-lg-6 col-md-9 col-sm-8" style={{marginTop: '6em'}}>

          {/* T I T L E */}
          <div class="row justify-content-center">
            <div class="col-7" style={{ padding: 0, marginBottom: '-1em' }}>
              <h1
                style={{
                  fontFamily: 'Arima',
                  fontWeight: '700',
                  fontSize: '9vmax',
                  textAlign: 'end',
                  textShadow: '3px 3px 15px rgba(0,0,0,0.2)'
                }}>Search
              </h1>
            </div>
            <div class="col-5" style={{ padding: 0}}>
              <h1
                style={{
                  fontFamily: 'Prata',
                  fontSize: '8.5vmax',
                  textAlign: 'start',
                  textShadow: '3px 3px 15px rgba(0,0,0,0.2)'
                }}>Keer
              </h1>
            </div>
          </div>

          {/* C O N T E N T */}
          <div class="row" style={{ marginTop: '-1vmin' }}>
            <div class="col-12">
              <h4>This is a Web App that allows you to find quality photos from the <a href="https://unsplash.com/">unsplash API</a> for <b style={{fontWeight: 600, fontSize: '1.15em', textShadow: '1px 1px 5px rgba(0,0,0,0.4)'}}>Free.</b></h4>
            </div>
          </div>
          
          {/* H O W  I T  W O R K S */}
          <div class="row">
            <div class="col-8">
              <h4 style={{ marginTop: '1.2em', textShadow: '1px 1px 5px rgba(0,0,0,0.4)' }}><b>How it works ?</b></h4>
              <h6 style={{ display:'inline', fontSize: '1.1em', fontWeight: '600'}}> Type what you are looking for, press Enter or click on lens icon & scroll down </h6>
              <lord-icon
                src="https://cdn.lordicon.com/xhdhjyqy.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{ width:'2em' , height:'2em', display: 'inline-block', paddingLeft: '0.3em', marginTop: '-0.5em' }}>
              </lord-icon>
            </div>
          </div>

          {/* <div class="row">
            <h2>Steps</h2>
          </div>

          <div class="row">
            <div class="col-2" style={{ margin: 0, padding: 0, marginTop: '-0.5em' }}>
            <lord-icon
              src="https://cdn.lordicon.com/mtdulhdc.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width:'4em', height:'4em'}}>
            </lord-icon>
            </div>
          </div>

          <div class="row">
            <div class="col-2" style={{ margin: 0, padding: 0, marginTop: '-1em' }}>
            <lord-icon
              src="https://cdn.lordicon.com/vcoyflbj.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width:'4em', height:'4em'}}>
            </lord-icon>
            </div>
          </div>

          <div class="row">
            <div class="col-2" style={{ margin: 0, padding: 0, marginTop: '-1em' }}>
            <lord-icon
              src="https://cdn.lordicon.com/igpsgesd.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width:'4em', height:'4em'}}>
            </lord-icon>
            </div>
          </div> */}

        </div>

        {/* A N I M A T I O N */}
        <div class="col-4" id="animation">
          <Animation/>
        </div>

      </div>
    </div>
  )
}

export default Home