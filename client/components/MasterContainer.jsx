import React, { Component } from 'react';
import XContainer from './XContainer.jsx';

class MasterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      structure: [
        {
          name: 'frontend',
          children: [
            {
              name: 'internet',
              children: [
                {
                  name: 'how does the internet work',
                  children: null,
                },
                {
                  name: 'what is http',
                  children: null,
                },
                {
                  name: 'browsers and how they work',
                  children: null,
                },
                {
                  name: 'DNS and how it works',
                  children: null,
                },
                {
                  name: 'what is domain name',
                  children: null,
                },
                {
                  name: 'what is hosting',
                  children: null,
                },
              ],
            },
            {
              name: 'html',
              children: [
                {
                  name: 'learn the basics',
                  children: null,
                },
                {
                  name: 'writing semantic html',
                  children: null,
                },
                {
                  name: 'forms and validations',
                  children: null,
                },
                {
                  name: 'conventions and best practices',
                  children: null,
                },
                {
                  name: 'accessibility',
                  children: null,
                },
                {
                  name: 'SEO basics',
                  children: null,
                },
              ],
            },
            {
              name: 'CSS',
              children: [
                {
                  name: 'learn the basics',
                  children: null,
                },
                {
                  name: 'making layouts',
                  children: null,
                },
                {
                  name: 'responsive design and media queries',
                  children: null,
                },
              ],
            },
            {
              name: 'javascript',
              children: [
                {
                  name: 'syntax and basic constructs',
                  children: null,
                },
                {
                  name: 'learn DOM manipulation',
                  children: null,
                },
                {
                  name: 'learn fetch API / AJAX (XHR)',
                  children: null,
                },
                {
                  name: 'ES6+ and modular javascript',
                  children: null,
                },
                {
                  name: 'understand the concepts hoisting, event bubbling, scope, prototype, shadow DOM, strict,',
                  children: null,
                },
              ],
            },
          ],
        },
        {
          name: 'backend',
          children: [
            {
              name: 'internet',
              children: [
                {
                  name: 'how does the internet work',
                  children: null,
                },
                {
                  name: 'what is http',
                  children: null,
                },
                {
                  name: 'browsers and how they work',
                  children: null,
                },
                {
                  name: 'DNS and how it works',
                  children: null,
                },
                {
                  name: 'what is domain name',
                  children: null,
                },
                {
                  name: 'what is hosting',
                  children: null,
                },
              ],
            },
            {
              name: 'basic frontend knowledge',
              children: [
                {
                  name: 'html',
                  children: null,
                },
                {
                  name: 'css',
                  children: null,
                },
                {
                  name: 'javascript',
                  children: null,
                },
              ],
            },
          ],
        },
        {
          name: 'dev-ops',
          children: [
            {
              name: 'learn a programming language',
              children: [
                {
                  name: 'ruby',
                  children: null,
                },
                {
                  name: 'python',
                  children: null,
                },
                {
                  name: 'node.js',
                  children: null,
                },
                {
                  name: 'go',
                  children: null,
                },
                {
                  name: 'rust',
                  children: null,
                },
                {
                  name: 'c',
                  children: null,
                },
                {
                  name: 'c++',
                  children: null,
                },
              ],
            },
            {
              name: 'understand different OS concepts',
              children: [
                {
                  name: 'process management',
                  children: null,
                },
                {
                  name: 'threads and concurrency',
                  children: null,
                },
                {
                  name: 'sockets',
                  children: null,
                },
                {
                  name: 'POSIX basics',
                  children: null,
                },
                {
                  name: 'networking concepts',
                  children: null,
                },
                {
                  name: 'I/O Management',
                  children: null,
                },
                {
                  name: 'virtualization',
                  children: null,
                },
                {
                  name: 'memory/storage',
                  children: null,
                },
                {
                  name: 'file systems',
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <XContainer structure={this.state.structure} />
      </>
    );
  }
}

export default MasterContainer;
