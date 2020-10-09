import React from 'react'
import PlacesAutoComplete from 'react-places-autocomplete'
import scriptLoader from 'react-async-script-loader'

class GooglePlaces extends React.Component {
  state = {
    address: ''
  }

    handleChange = (address) => {
      this.setState({
        address: address
      })
    }

    handleSelect = (address) => {
      this.setState({
        address: address
      })
    }

    render () {
      let jsx
      if (this.props.isScriptLoadSucceed === true && this.props.isScriptLoaded === true) {
        jsx =
        <PlacesAutoComplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="form-control">
              <input className="autocomplete-input" {...getInputProps({
                placeholder: 'Enter Your Address Here'
              })} />
              <div>
                {loading && <div></div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: '#f2f2f2', cursor: 'pointer', borderBottom: '1px solid #f2f2f2', borderRadius: '5px', height: '3rem', textAlign: 'center' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer', borderBottom: '1px solid #f2f2f2', borderRadius: '5px', height: '2rem', textAlign: 'center' }

                  return (
                    <div className="mt-1" key={suggestion.description} {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </PlacesAutoComplete>
      } else {
        jsx = <p>...Loading...</p>
      }
      return (
        <React.Fragment>
          {jsx}
        </React.Fragment>
      )
    }
}

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`])(GooglePlaces)
