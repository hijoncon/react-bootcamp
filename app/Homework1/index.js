import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import color from 'color'
import postData from './postData.js'
import _ from 'lodash';

/*
   Homework 1: Rendering Data

   Requirements:
   1. Render the list of post data (hint: use map)
   2. Style the posts using at least 2 css selectors and at least 10 styles
   3. Make sure there are no warnings/errors in the console
   4. Choose one (or more) of the following additional tasks:
     i.   Make the page responsive (rows when on desktop, column when on mobile)
     ii.  Sort the posts by title, alphabetically
     iii. Add a header above the posts with a creative title (style it nicely)
*/
const styles = {
  title: {
    color: '#fff',
    backgroundColor: '#4EB7E4',
    padding: '10px',
    margin: '0px',
    font: '18px Arial',
    textTransform: 'capitalize'
  },
  content: {
    backgroundColor: '#E9E9E9',
    display: 'block',
    margin: '0px',
    padding: '10px'
  },
  paragraph: {
    margin: '0 0 10px'
  }
}

const newArr = _.sortBy(postData, 'title', function(n) {
  return Math.sin(n);
});

const content = newArr.map((postData) =>
  <article key={postData.id}>
    <header>
      <h3 style={styles.title}>
        #{postData.id} - {postData.title}
      </h3>
    </header>
    <content style={styles.content}>
      <p style={styles.paragraph}>
        {postData.body}
      </p>
    </content>
  </article>
);

const Homework1 = () => {
  return (
    <div>
      {content}
    </div>
  )
}

Homework1.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  children: PropTypes.string
}

export default Radium(Homework1)
