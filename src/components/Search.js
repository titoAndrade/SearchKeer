import { useState, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import './search.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const Search = () => {
  
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
  console.log({ photos })

  return (
    <div class="container" style={{ width: '100%', margin: 0 }}>

      <div class="row" style={{ width: '100%', margin: 0, border: 'none' }}>
        <header style={{ width: '100%', margin: 0, border: 'none' }}>
          <Formik
            initialValues={{ search: '' }}
            onSubmit={async values => {
              const response = await fetch( `https://api.unsplash.com/search/photos?per_page=30&query=${values.search}`,
               { headers: {'Authorization': 'Client-ID XSXNKN-AkXuZ2mcGUJ1ubayOxCI4g-O2qHRPACcu5mk'} } )
              const data = await response.json()
              setPhotos(data.results) }}
          >
            <Form>
              <div class="row justify-content-center">
              
                <div class="col">
                  <Field name="search"
                    placeholder="what are you looking for?"
                    style={{
                      width: '65vmin',
                      borderRadius:'20px',
                      textAlign: 'left',
                      paddingLeft: '4vmin',
                      color: '#171717',
                      fontSize: '1em',
                      fontWeight: '400',
                    }}/>
                </div>

                <div class="col" id='searchGlass' style={{ marginLeft: '-2em', paddingTop: '0.10em' }}>
                  
                  <button style={{ border: 'none', background: 'none' }} type="submit" onClick={handleClick}>
                    <lord-icon
                      src="https://cdn.lordicon.com/pvbutfdk.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ width: '2.25em', height:'2.25em' }}>
                    </lord-icon>
                  </button>
            
                </div>

              </div>
            </Form>
          </Formik>
        </header>
      </div>


      <div class="row justify-content-center" id="result" ref={ref} >
        <div class="col-10" id='center'>
          {photos.map(photo =>
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img data-aos="fade-up" data-aos-duration="1500" src={photo.urls.regular} alt=""/>
            </article>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Search