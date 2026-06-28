import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1000,
  duration: '5m',

  thresholds: {
    http_req_duration: ['p(95)<1000'],
    http_req_failed: ['rate<0.02'],
  },
};

export default function () {
  const BASE_URL = __ENV.BASE_URL;

  const res = http.get(`${BASE_URL}/products`);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}