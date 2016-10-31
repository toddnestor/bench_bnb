import React from 'react';
import BenchIndex from './bench/bench_index';
import BenchMap from './bench/bench_map';

const Search = ({benches, requestBenches, updateBounds}) => (
  <div>
    <BenchMap benches={benches} updateBounds={updateBounds} />
    <BenchIndex benches={benches} requestBenches={requestBenches} />
  </div>
);

export default Search;
