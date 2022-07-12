
const RocketButton = () => {
  return (
    <div class="container">
      <div class="row" style={{ position: 'fixed' }}>
        <div class="col" style={{ padding: 0 }}>
          <button
            style={{
              margin: '1em',
              padding: 0,
              background: 'none',
              border: 'none',
              zIndex: 10
            }}>
            <a href="#home">
              <lord-icon
                src="https://cdn.lordicon.com/gmzxduhd.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width:'3.5em', height:'3.5em'}}>
              </lord-icon>
            </a>
          </button>
        </div>
      </div>    
    </div>
  )
}

export default RocketButton