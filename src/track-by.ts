export type VTrackByFn<V> = (
  value: V,
  index: number,
  self: V[]
) => string | number;
