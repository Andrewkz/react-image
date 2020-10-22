import * as React from 'react';
import { LazyWrapper } from '../src/index';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

const props = {
  placeholder: ''
}

describe('first', () => {
  it('should render correctly', () => {
    const component = renderer.create(
      <LazyWrapper { ...props }>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
        <img data-src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=' name='lazy'></img>
      </LazyWrapper>
    );
    // console.log(component.debug());
    expect(component).toMatchSnapshot();
  });
})
