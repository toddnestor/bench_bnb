export const REQUEST_BENCHES = 'REQUEST_BENCHES';
export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const CREATE_BENCH = 'CREATE_BENCH';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const requestBenches = () => ({
  type: REQUEST_BENCHES
});

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const createBench = bench => ({
  type: CREATE_BENCH,
  bench
});

export const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});
