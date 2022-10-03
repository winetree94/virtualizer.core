import { generateUUID } from './misc/uuid';

export interface VirtualizerOptions<V> {
  renderers: V;
}

export class Virtualizer<V> {
  public readonly uuid = generateUUID();

  public constructor(private readonly options: VirtualizerOptions<V>) {}
}
