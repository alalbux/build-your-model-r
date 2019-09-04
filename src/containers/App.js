import React, { Component } from 'react'
// import { addItem } from '../actions'
import {
  Flexbox,
  Header,
  Page,
  Grid,
  Cell
} from '../components'
import {
  Home,
  Engine,
  Color,
  Wheels,
  ResultBuild
} from '../scenes'
import { connect } from 'react-redux'
import { fetchCarIfNeeded } from '../actions'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      isLoading: false
    }

    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCarIfNeeded())
  }


  render() {
    // const {
    //   isLoading,
    //   data,
    //   error
    // } = this.state

    return (
      <Page>
        <Flexbox vertical>
          <Grid>
            <Cell size={[12, 12, 12]}>
              <Header />
            </Cell>
            <Cell size={[12, 12, 12]}>
              <Home />
            </Cell>
            <Cell size={[12, 12, 12]}>
              <Engine />
            </Cell>
            <Cell size={[12, 12, 12]}>
              <Color />
            </Cell>
            <Cell size={[12, 12, 12]}>
              <Wheels />
            </Cell>
            <Cell size={[12, 12, 12]}>
              <ResultBuild />
            </Cell>
          </Grid>
        </Flexbox>
      </Page >
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
}

export default connect(mapStateToProps)(App)
