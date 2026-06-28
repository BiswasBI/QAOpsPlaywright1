Latest report on 27-06-26: ci test with 50 vus:
k6 run k6/load/ciTest.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 


     execution: local
        script: k6/load/ciTest.js
        output: -

     scenarios: (100.00%) 1 scenario, 50 max VUs, 1m30s max duration (incl. graceful stop):
              * default: 50 looping VUs for 1m0s (gracefulStop: 30s)



  █ THRESHOLDS 

    http_req_duration
    ✓ 'p(95)<500' p(95)=205.8ms

    http_req_failed
    ✓ 'rate<0.01' rate=0.00%


  █ TOTAL RESULTS 

    checks_total.......: 24704  411.206329/s
    checks_succeeded...: 99.99% 24703 out of 24704
    checks_failed......: 0.00%  1 out of 24704

    ✗ status is 200
      ↳  99% — ✓ 24703 / ✗ 1

    HTTP
    http_req_duration..............: avg=121.11ms min=31.31ms med=106.83ms max=1.08s p(90)=174.03ms p(95)=205.8ms 
      { expected_response:true }...: avg=121.11ms min=31.31ms med=106.83ms max=1.08s p(90)=174.03ms p(95)=205.8ms 
    http_req_failed................: 0.00%  1 out of 24704
    http_reqs......................: 24704  411.206329/s

    EXECUTION
    iteration_duration.............: avg=121.51ms min=34.58ms med=106.96ms max=1.08s p(90)=175.13ms p(95)=207.08ms
    iterations.....................: 24704  411.206329/s
    vus............................: 50     min=50         max=50
    vus_max........................: 50     min=50         max=50

    NETWORK
    data_received..................: 1.1 GB 18 MB/s
    data_sent......................: 4.6 MB 77 kB/s




running (1m00.1s), 00/50 VUs, 24704 complete and 0 interrupted iterations
default ✓ [======================================] 50 VUs  1m0s

==============================================================================
Latest report on 27-06-26: stress test with 50 vus:
 █ THRESHOLDS 

    http_req_duration
    ✓ 'p(95)<500' p(95)=270.53ms

    http_req_failed
    ✓ 'rate<0.01' rate=0.00%


  █ TOTAL RESULTS 

    checks_total.......: 14984   249.013483/s
    checks_succeeded...: 100.00% 14984 out of 14984
    checks_failed......: 0.00%   0 out of 14984

    ✓ status is 200

    HTTP
    http_req_duration..............: avg=199.73ms min=74.24ms med=194.95ms max=532.63ms p(90)=249.24ms p(95)=270.53ms
      { expected_response:true }...: avg=199.73ms min=74.24ms med=194.95ms max=532.63ms p(90)=249.24ms p(95)=270.53ms
    http_req_failed................: 0.00%  0 out of 14984
    http_reqs......................: 14984  249.013483/s

    EXECUTION
    iteration_duration.............: avg=200.5ms  min=74.46ms med=195.39ms max=613.67ms p(90)=250.28ms p(95)=271.88ms
    iterations.....................: 14984  249.013483/s
    vus............................: 50     min=50         max=50
    vus_max........................: 50     min=50         max=50

    NETWORK
    data_received..................: 668 MB 11 MB/s
    data_sent......................: 2.9 MB 48 kB/s




running (1m00.2s), 00/50 VUs, 14984 complete and 0 interrupted iterations
default ✓ [ 100% ] 50 VUs  1m0s