import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 50,
  duration: '1m',

  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  //const BASE_URL = __ENV.BASE_URL;

  //const res = http.get(`${BASE_URL}/app/products`);
  const res = http.get('https://dummyjson.com/products');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}