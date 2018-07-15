import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a', date: 'haha', title: 't1', body: 'b1' },
      b: { id: 'b', date: 'haha', title: 't2', body: 'b2' }
    },
    store: {
      lookupAuthor: jest.fn(() => ({
        website: 'http://google.com',
        firstName: 'Test',
        lastName: 'Mock'
      }))
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
