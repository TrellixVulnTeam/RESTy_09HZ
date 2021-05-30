import React from 'react';
import './help.scss';

const Help = () => {
  return (
    <>
      <h3>Help</h3>
      <section>
        <h5>Here are some tips to help you use RESTy McRestface</h5>
        <ul>
          <li>*Enter a valid API that accepts Get, Post, Put and Delete requests. Many API's do not allow anything other than Get requests.</li>
          <li>*For a Put or Post request, make sure you valiudate the format of your data with the API. They have very specific requirements for accepting data and are usually unique to each API</li>
          <li>*Your history will be cleared whenever you leave the page or refresh it.</li>
        </ul>
      </section>
    </>
  )
}

export default Help;
