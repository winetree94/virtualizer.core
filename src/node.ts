import { VRect } from './rect';

export type VNode<V> = {
  /**
   * @description
   * unique id per data item
   */
  trackBy: string | number;

  /**
   * @description
   * rect of dom
   */
  rect: VRect;

  /**
   *
   */
  children?: VNode<unknown>[];

  /**
   *
   */
  getLayout: () => HTMLElement;

  /**
   *
   */
  onInit?: () => void;

  /**
   *
   */
  onMounted?: () => void;

  /**
   *
   */
  onUnmounted?: () => void;

  /**
   *
   */
  onDestory?: () => void;
};

export type VNodeConstructor<V> = new (data: V) => VNode<V>;
