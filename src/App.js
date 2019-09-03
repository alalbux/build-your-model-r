import React, { Component } from 'react'
import {
  Flexbox,
  Header,
  Page,
  Grid,
  Cell,
  Text
} from './components'
import {
  Home
} from './scenes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      isLoading: false
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch(`https://next.json-generator.com/api/json/get/41ORKNZDU`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    const {
      isLoading,
      data,
      error
    } = this.state

    return (
      <Page>
        <Flexbox vertical>
          <Grid>
            <Cell size={[12, 12, 12]}>
              <Header />
            </Cell>
            <Cell size={[12, 4, 4]}>
              <Home />
            </Cell>
            <Cell size={[12, 4, 4]}>
              <div>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                  <div>
                    <Text>{data.price}</Text>
                    <Text>Text</Text>
                  </div>
                ) : (
                    <h3>Loading...</h3>
                  )}
              </div>
            </Cell>
          </Grid>
        </Flexbox>
      </Page >
    )
  }
}

export default App
