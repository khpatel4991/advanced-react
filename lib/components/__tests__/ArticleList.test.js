import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ArticleList from 'components/ArticleList';

configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a', title: 't1', body: 'b1', date: 'd1' },
      b: { id: 'b', title: 't2', body: 'b2', date: 'd2' }
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(<ArticleList {...testProps} />);
    expect(wrapper.find('ArticleContainer').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
