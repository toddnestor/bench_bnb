export const fetchBenches = (filters, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/benches',
    success,
    data: filters,
    error: xhr => console.log(xhr.responseJSON)
  });
}
