export function headMixin(...heads) {
  return {
    head() {
      const out = {};
      Object.assign(out, ...heads.map((f) => f.call(this)));
      return out;
    },
  };
}
