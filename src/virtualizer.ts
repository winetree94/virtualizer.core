import { generateUUID } from './misc/uuid';
import { VNode } from './node/node';

export interface VirtualizerOptions<V> {
  nodes?: VNode<V>[];
  cacheKey?: string;
  cacheLifecycleStrategy?: string;
  infinityMaxBuffer?: number | null;
  infinityLoadingBuffer?: number;
  infinitySensitivity?: number;
  onInfinityMoved?: () => void;
  onInfinityFinished?: () => void;
}

export class Virtualizer<V> {
  public readonly uuid = generateUUID();

  public constructor(private readonly options: VirtualizerOptions<V>) {}

  public getName(): void {
    console.log(1);
  }

  public splice(): void {
    return;
  }
}
