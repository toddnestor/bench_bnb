export const REQUEST_BENCHES = 'REQUEST_BENCHES';
export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const requestBenches = () => ({
  type: REQUEST_BENCHES
});

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});
