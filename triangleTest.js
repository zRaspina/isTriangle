import ShallowRenderer from 'react-test-renderer/shallow';
import Triangle from '../../src/components/triangle.js';
import TriangleTab from '../../src/components/triangleTab.js';

// Shallow Renderer

const renderer = new ShallowRenderer();
renderer.render(<TriangleTab />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
  <Triangle/>
]);
