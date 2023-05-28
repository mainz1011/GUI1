import renderer from 'react-test-renderer';
import Navbar from './src/components/navbar/Navbar.jsx';

it('dragdown menu appears when clicked', () => {
    const component = renderer.create(
      <Navbar />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  
    // manually trigger the callback
    renderer.act(() => {
      tree.props.Navbar();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });