import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Result from './results.js';
import Loader from './loader.js';
import History from './history.js';
import superagent from 'superagent';
import { If, Then, When, Unless } from 'react-if';
import './style.scss';

class App extends React.Component {
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
    this.setState({ count, results, url, route});
  }
  handleHistory = (url, route) => {
    this.setState({ url, route});
  }
  handleUrl = (url) => {
    this.setState({ url});
  }
  handleRoute = (route) => {
    this.setState({ route });
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
    this.toggleLoading();
    console.log(this.state.routeType);
    // let route = this.state.routeType;
    // let url = this.state.url;
    sessionStorage.setItem(this.state.sessionCounter, (`${this.state.route}, ${this.state.url}`));
    let storageCount = this.state.sessionCounter + 1;
    this.setState({ sessionCounter: storageCount });
    // console.log(url, route);
    try{
      
      let raw = await superagent(this.state.route, this.state.url);
      console.log(raw);
      let results = raw.body.results;
      // let results = await response.json();
      // let entries = data.results;
      // let results = Object.entries(entries);
      let count = results.count;
      setTimeout(() => {
        this.setState({ count, results})
        this.toggleLoading();
      }, 1000);
      } catch (e) {
        setTimeout(() => {
        this.toggleLoading();
        // this.props.handler(e);
      }, 1000);
    }
  }

  render() {
    return(
      <div>
        <Header />
        <If condition={this.state.loading}>
          <Then>
            <Loader/>
          </Then>
        </If>
        <Form prompt="SEND" 
        toggleLoading={this.toggleLoading} 
        handleClick={this.handleClick}
        handleRoute={this.handleRoute}
        handleUrl={this.handleUrl}
        route={this.state.route}
        handleBody={this.handleBody}/>
         {this.state.count !== 0 ?
         <>
         <Result results={this.state.results}/>
         <History history={this.state.history} 
         handleHistory={this.handleHistory}></History>
          </>
          : '' }
        <Footer />

      </div>
    )
  }
}

export default App;
