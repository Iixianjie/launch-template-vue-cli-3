export function setState(state, { type, ...payload }) {
  let keys = Object.keys(payload);
  keys.forEach(key => (state[key] = payload[key]));
}
