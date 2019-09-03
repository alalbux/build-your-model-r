import React, { Component } from 'react'
import {
  Flexbox,
  Header,
  Page,
  Grid,
  Cell
} from './components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      settings: []
    }
  }

  componentDidMount() {
    // this.fetchData()
  }

  render() {

    return (
      <Page>
        <Flexbox vertical>
          <Grid>
            <Cell size={[12, 12, 12]}>
              <Header />
            </Cell>
            <Cell size={[12, 4, 4]}>
              <div>Test</div>
            </Cell>
          </Grid>
        </Flexbox>
      </Page >
    )
  }
}

export default App
