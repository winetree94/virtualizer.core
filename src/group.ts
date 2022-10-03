import { VNode } from './node';

export type VGroup<V> = {
  nodes: VNode<V>;
};

export type VGroupConstructor<V> = new () => VGroup<V>;
