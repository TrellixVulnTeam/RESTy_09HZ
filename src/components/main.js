import React from 'react';
import Form from './form.js';
import Result from './results.js';
import Loader from './loader.js';
import History from './history.js';
import Help from './help.js';
import superagent from 'superagent';
import { Switch, Route } from 'react-router-dom';
import { If, Then, When, Unless } from 'react-if';
// import './form.scss';
import './_reset.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      sessionCounter: 0,
      results: [],
      history: [],
      url: '',
      route: '',
      body: ''
    }
  }

  handleForm = (count, results, url, route) => {
    this.setState({ count, results, url, route });
  }
  handleHistory = (url, route) => {
    this.setState({ url, route });
  }
  handleUrl = (url) => {
    this.setState({ url });
  }
  handleRoute = (route) => {
    this.setState({ route });
    console.log(`inside handleRoute ${this.state.route}`);
  }
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }
  handleBody = (body) => {
    this.setState({ body });
    console.log(`inside handleForm ${this.state.body}`);
  }

  handleClick = async (e) => {
    e.preventDefault();
    console.log('here');
    this.toggleLoading();
    sessionStorage.setItem(this.state.sessionCounter, (`${this.state.route}, ${this.state.url}`));
    let storageCount = this.state.sessionCounter + 1;
    this.setState({ sessionCounter: storageCount });
    try {
      let raw = null;
      console.log(this.state.route);
      if( this.state.route === "get" || this.state.route === "delete" ) {
        raw = await superagent[this.state.route](this.state.url);
      }
      else {
        raw = await superagent[this.state.route](this.state.url).send(this.state.body);
      }
      let results = raw.body;
      console.log(results);
      let count = results.count;
      setTimeout(() => {
        this.setState({ count, results })
        this.toggleLoading();
      }, 1000);
    } catch (e) {
      setTimeout(() => {
        console.log(e);
        this.toggleLoading();
        this.setState({ results: e })
      }, 1000);
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/">
          <If condition={this.state.loading}>
            <Then>
              <Loader />
            </Then>
          </If>
          <Form prompt="SEND"
            toggleLoading={this.toggleLoading}
            handleClick={this.handleClick}
            handleRoute={this.handleRoute}
            handleUrl={this.handleUrl}
            route={this.state.route}
            handleBody={this.handleBody} />
          {this.state.count !== 0 ?
            <>
              <Result results={this.state.results} />
              <History history={this.state.history}
                handleHistory={this.handleHistory}></History>
            </>
            : ''}
        </Route>
        <Route exact path="/history">
          <History/>

        </Route>
        <Route exact path="/help">
          <Help/>
        </Route>


      </Switch>
    )
  }
}

export default Main;
