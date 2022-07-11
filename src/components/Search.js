import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import './search.css';

const Search = () => {
  
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
              
              <div class="col" id='searchGlass' style={{ marginLeft: '-3em', paddingTop: '0.3em' }}>
                <lord-icon
                  src="https://cdn.lordicon.com/pvbutfdk.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  style={{ width: '2.25em', height:'2.25em',  }}>
                </lord-icon>
                </div>

                <div class="col">
                  <Field name="search"
                    placeholder="what are you looking for?"
                    style={{
                      width: '65vmin',
                      borderRadius:'20px',
                      marginLeft:'-0.5em',
                      paddingInline: '2em',
                      color: '#171717',
                      fontSize: '16px',
                      fontWeight: '400',
                    }}/>
                </div>         

              </div>
            </Form>
          </Formik>
        </header>
      </div>


      <div class="row justify-content-center" style={{ marginTop: '4vmax' }}>
        <div class="col-10">
          {photos.map(photo => 
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} alt=""/>
            </article>
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Search