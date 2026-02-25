import * as React from 'react';
import { LazyWrapper, LazyItem } from '../src/index';
import renderer, { act } from 'react-test-renderer';

describe('LazyWrapper', () => {
  it('should render correctly', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyWrapper placeholder="">
          <img data-src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" name="lazy" />
          <img data-src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" name="lazy" />
          <img data-src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" name="lazy" />
        </LazyWrapper>
      );
    });
    expect(component!).toMatchSnapshot();
  });

  it('should not leak component props onto the DOM div', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyWrapper
          placeholder="loading.svg"
          errorImage="error.svg"
          options={{ rootMargin: '50px' }}
          className="wrapper"
          style={{ width: 100 }}
        >
          <img data-src="test.jpg" name="lazy" />
        </LazyWrapper>
      );
    });
    const tree = component!.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.props).not.toHaveProperty('placeholder');
    expect(tree.props).not.toHaveProperty('errorImage');
    expect(tree.props).not.toHaveProperty('options');
    expect(tree.props.className).toBe('wrapper');
    expect(tree.props.style).toEqual({ width: 100 });
  });

  it('should render children within a div container', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyWrapper placeholder="">
          <img data-src="a.jpg" name="lazy" />
          <img data-src="b.jpg" name="lazy" />
        </LazyWrapper>
      );
    });
    const tree = component!.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.type).toBe('div');
    expect(tree.children).toHaveLength(2);
  });

  it('should pass custom className and style', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyWrapper
          placeholder=""
          className="custom-class"
          style={{ margin: 10 }}
        >
          <img data-src="test.jpg" name="lazy" />
        </LazyWrapper>
      );
    });
    const tree = component!.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.props.className).toBe('custom-class');
    expect(tree.props.style).toEqual({ margin: 10 });
  });

  it('should render without crashing when no children have name=lazy', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyWrapper placeholder="">
          <img src="regular.jpg" />
        </LazyWrapper>
      );
    });
    const tree = component!.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.type).toBe('div');
  });
});

describe('LazyItem', () => {
  it('should render correctly', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyItem url="test.jpg" placeholder="loading.svg" />
      );
    });
    expect(component!).toMatchSnapshot();
  });

  it('should not leak component props onto the DOM img', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyItem
          url="test.jpg"
          placeholder="loading.svg"
          errorImage="error.svg"
          onLoad={() => undefined}
          options={{ rootMargin: '50px' }}
          className="item"
          style={{ width: 200 }}
        />
      );
    });
    const tree = component!.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.props).not.toHaveProperty('url');
    expect(tree.props).not.toHaveProperty('placeholder');
    expect(tree.props).not.toHaveProperty('errorImage');
    expect(tree.props).not.toHaveProperty('onLoad');
    expect(tree.props).not.toHaveProperty('options');
    expect(tree.props.className).toBe('item');
    expect(tree.props.style).toEqual({ width: 200 });
  });

  it('should render an img element', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyItem url="test.jpg" />
      );
    });
    const tree = component!.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.type).toBe('img');
  });

  it('should render with alt attribute', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyItem url="test.jpg" alt="Test image" />
      );
    });
    const tree = component!.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.props.alt).toBe('Test image');
  });

  it('should default alt to empty string', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyItem url="test.jpg" />
      );
    });
    const tree = component!.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.props.alt).toBe('');
  });

  it('should accept style and className', () => {
    let component: renderer.ReactTestRenderer;
    act(() => {
      component = renderer.create(
        <LazyItem
          url="test.jpg"
          className="lazy-img"
          style={{ display: 'block', width: 300 }}
        />
      );
    });
    const tree = component!.toJSON() as renderer.ReactTestRendererJSON;
    expect(tree.props.className).toBe('lazy-img');
    expect(tree.props.style).toEqual({ display: 'block', width: 300 });
  });
});
