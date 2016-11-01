import React from 'react';
import BenchIndex from './bench/bench_index';
import BenchMap from './bench/bench_map';

const Search = ({benches, requestBenches, updateFilter}) => (
  <div>
    <BenchMap benches={benches} updateFilter={updateFilter} />
    <BenchIndex benches={benches} requestBenches={requestBenches} />
  </div>
);

export default Search;
