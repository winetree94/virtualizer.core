import { generateUUID } from '../src/misc/uuid';
import { Virtualizer, VNode } from '../src/public-api';

interface TestData {
  id: string;
  children?: TestData[];
}

export const Primary = () => {
  const div = document.createElement('div');

  const testData = Array.from(new Array(10)).map<TestData>(() => ({
    id: generateUUID(),
    children: Array.from(new Array(100)).map<{ id: string }>(() => ({
      id: generateUUID(),
      children: Array.from(new Array(100)).map<{ id: string }>(() => ({
        id: generateUUID(),
      })),
    })),
  }));

  const nodes = testData.map<VNode<TestData>>((data) => ({
    trackBy: data.id,
    rect: {
      size: 10,
    },
    getLayout: () => {
      return document.createElement('div');
    },
  }));

  const virtualizer = new Virtualizer({
    element: div,
    renderers: nodes,
  });

  return div;
};
