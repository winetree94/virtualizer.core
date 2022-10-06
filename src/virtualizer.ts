import { generateUUID } from './misc/uuid';
import { VNode } from './node';

export interface VirtualizerOptions {
  element: HTMLElement;
  renderers: VNode<unknown>[];
}

export class Virtualizer {
  // public readonly $scrollbar = this.options.element;
  public readonly uuid = generateUUID();

  public constructor(private readonly options: VirtualizerOptions) {
    options.element.classList.add('v-scrollbar');
  }
}
