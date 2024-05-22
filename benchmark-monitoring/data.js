window.BENCHMARK_DATA = {
  "lastUpdate": 1716358290415,
  "repoUrl": "https://github.com/qdriven/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "MuZhou233@outlook.com",
            "name": "沐",
            "username": "MuZhou233"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65cce21db65c97a0adc81cccffcde3952a990c1d",
          "message": "feat: add error to some of the APIs (#1389)\n\n* fix: add nil checks\r\n\r\n* fix: lint\r\n\r\n* fix: return error at anywhere assertion not found\r\n\r\n* fix: lint\r\n\r\n* fix: test\r\n\r\n* fix: format",
          "timestamp": "2024-05-07T09:11:32+08:00",
          "tree_id": "f6c709c30aeab7589a5ac2d1706511ae8783b10b",
          "url": "https://github.com/qdriven/casbin/commit/65cce21db65c97a0adc81cccffcde3952a990c1d"
        },
        "date": 1716358289903,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 17.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67507422 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 17.61,
            "unit": "ns/op",
            "extra": "67507422 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "67507422 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "67507422 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 168.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "7066267 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 168.3,
            "unit": "ns/op",
            "extra": "7066267 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7066267 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7066267 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 168.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "7154344 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 168.2,
            "unit": "ns/op",
            "extra": "7154344 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "7154344 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "7154344 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 172.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6850266 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 172.2,
            "unit": "ns/op",
            "extra": "6850266 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6850266 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6850266 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 181.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6579739 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 181.2,
            "unit": "ns/op",
            "extra": "6579739 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6579739 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6579739 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 152.6,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "7655373 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 152.6,
            "unit": "ns/op",
            "extra": "7655373 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "7655373 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "7655373 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 171.4,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6925376 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 171.4,
            "unit": "ns/op",
            "extra": "6925376 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6925376 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6925376 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 190.6,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "6347047 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 190.6,
            "unit": "ns/op",
            "extra": "6347047 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "6347047 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6347047 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 2831,
            "unit": "ns/op\t    1541 B/op\t      18 allocs/op",
            "extra": "417152 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2831,
            "unit": "ns/op",
            "extra": "417152 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1541,
            "unit": "B/op",
            "extra": "417152 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 18,
            "unit": "allocs/op",
            "extra": "417152 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 197.3,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "6256875 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 197.3,
            "unit": "ns/op",
            "extra": "6256875 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "6256875 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6256875 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 172.8,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6886437 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 172.8,
            "unit": "ns/op",
            "extra": "6886437 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6886437 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6886437 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 171.8,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "6961473 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 171.8,
            "unit": "ns/op",
            "extra": "6961473 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "6961473 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6961473 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 305.2,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "3951715 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 305.2,
            "unit": "ns/op",
            "extra": "3951715 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "3951715 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "3951715 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 175.2,
            "unit": "ns/op\t     106 B/op\t       4 allocs/op",
            "extra": "6204628 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 175.2,
            "unit": "ns/op",
            "extra": "6204628 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 106,
            "unit": "B/op",
            "extra": "6204628 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "6204628 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 543.7,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "2184412 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 543.7,
            "unit": "ns/op",
            "extra": "2184412 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "2184412 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2184412 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 544.7,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "2201826 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 544.7,
            "unit": "ns/op",
            "extra": "2201826 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "2201826 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2201826 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 569.2,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "2104114 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 569.2,
            "unit": "ns/op",
            "extra": "2104114 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "2104114 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2104114 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 532.6,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "2414128 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 532.6,
            "unit": "ns/op",
            "extra": "2414128 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "2414128 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "2414128 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 591.4,
            "unit": "ns/op\t     177 B/op\t       7 allocs/op",
            "extra": "1866302 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 591.4,
            "unit": "ns/op",
            "extra": "1866302 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 177,
            "unit": "B/op",
            "extra": "1866302 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "1866302 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1197,
            "unit": "ns/op\t     470 B/op\t       9 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1197,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 470,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 526.3,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "2127446 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 526.3,
            "unit": "ns/op",
            "extra": "2127446 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "2127446 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2127446 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 553.9,
            "unit": "ns/op\t     176 B/op\t       7 allocs/op",
            "extra": "2045504 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 553.9,
            "unit": "ns/op",
            "extra": "2045504 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 176,
            "unit": "B/op",
            "extra": "2045504 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "2045504 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1274,
            "unit": "ns/op\t     296 B/op\t      13 allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1274,
            "unit": "ns/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 296,
            "unit": "B/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 13,
            "unit": "allocs/op",
            "extra": "1000000 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 17.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68908212 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 17.47,
            "unit": "ns/op",
            "extra": "68908212 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "68908212 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "68908212 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 3673,
            "unit": "ns/op\t    1506 B/op\t      17 allocs/op",
            "extra": "328957 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3673,
            "unit": "ns/op",
            "extra": "328957 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1506,
            "unit": "B/op",
            "extra": "328957 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "328957 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 5349,
            "unit": "ns/op\t    2060 B/op\t      35 allocs/op",
            "extra": "220688 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5349,
            "unit": "ns/op",
            "extra": "220688 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2060,
            "unit": "B/op",
            "extra": "220688 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "220688 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 48755,
            "unit": "ns/op\t   20253 B/op\t     480 allocs/op",
            "extra": "24810 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 48755,
            "unit": "ns/op",
            "extra": "24810 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20253,
            "unit": "B/op",
            "extra": "24810 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 480,
            "unit": "allocs/op",
            "extra": "24810 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 501095,
            "unit": "ns/op\t  191734 B/op\t    4827 allocs/op",
            "extra": "2409 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 501095,
            "unit": "ns/op",
            "extra": "2409 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191734,
            "unit": "B/op",
            "extra": "2409 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "2409 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 5328671,
            "unit": "ns/op\t 1901584 B/op\t   48223 allocs/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5328671,
            "unit": "ns/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1901584,
            "unit": "B/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48223,
            "unit": "allocs/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 60215,
            "unit": "ns/op\t   20381 B/op\t     615 allocs/op",
            "extra": "20011 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 60215,
            "unit": "ns/op",
            "extra": "20011 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20381,
            "unit": "B/op",
            "extra": "20011 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 615,
            "unit": "allocs/op",
            "extra": "20011 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 564697,
            "unit": "ns/op\t  194634 B/op\t    6020 allocs/op",
            "extra": "1938 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 564697,
            "unit": "ns/op",
            "extra": "1938 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194634,
            "unit": "B/op",
            "extra": "1938 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6020,
            "unit": "allocs/op",
            "extra": "1938 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 6034910,
            "unit": "ns/op\t 1939536 B/op\t   60580 allocs/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6034910,
            "unit": "ns/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1939536,
            "unit": "B/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60580,
            "unit": "allocs/op",
            "extra": "195 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 5316,
            "unit": "ns/op\t    2737 B/op\t      28 allocs/op",
            "extra": "212700 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 5316,
            "unit": "ns/op",
            "extra": "212700 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 2737,
            "unit": "B/op",
            "extra": "212700 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "212700 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 5068,
            "unit": "ns/op\t    1830 B/op\t      25 allocs/op",
            "extra": "231118 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5068,
            "unit": "ns/op",
            "extra": "231118 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1830,
            "unit": "B/op",
            "extra": "231118 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 25,
            "unit": "allocs/op",
            "extra": "231118 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 2785,
            "unit": "ns/op\t    1535 B/op\t      17 allocs/op",
            "extra": "418190 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2785,
            "unit": "ns/op",
            "extra": "418190 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1535,
            "unit": "B/op",
            "extra": "418190 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "418190 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 3889103,
            "unit": "ns/op\t 1328211 B/op\t   40092 allocs/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 3889103,
            "unit": "ns/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1328211,
            "unit": "B/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40092,
            "unit": "allocs/op",
            "extra": "306 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 6045,
            "unit": "ns/op\t    3068 B/op\t      37 allocs/op",
            "extra": "195202 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6045,
            "unit": "ns/op",
            "extra": "195202 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3068,
            "unit": "B/op",
            "extra": "195202 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 37,
            "unit": "allocs/op",
            "extra": "195202 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 6965,
            "unit": "ns/op\t    2483 B/op\t      49 allocs/op",
            "extra": "172605 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6965,
            "unit": "ns/op",
            "extra": "172605 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2483,
            "unit": "B/op",
            "extra": "172605 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 49,
            "unit": "allocs/op",
            "extra": "172605 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 4218,
            "unit": "ns/op\t    1762 B/op\t      22 allocs/op",
            "extra": "283563 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4218,
            "unit": "ns/op",
            "extra": "283563 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1762,
            "unit": "B/op",
            "extra": "283563 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 22,
            "unit": "allocs/op",
            "extra": "283563 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 22568,
            "unit": "ns/op\t   16719 B/op\t     164 allocs/op",
            "extra": "53716 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 22568,
            "unit": "ns/op",
            "extra": "53716 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 16719,
            "unit": "B/op",
            "extra": "53716 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "53716 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 68077,
            "unit": "ns/op\t   11955 B/op\t     797 allocs/op",
            "extra": "17431 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 68077,
            "unit": "ns/op",
            "extra": "17431 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 11955,
            "unit": "B/op",
            "extra": "17431 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 797,
            "unit": "allocs/op",
            "extra": "17431 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 711181,
            "unit": "ns/op\t  125915 B/op\t    8741 allocs/op",
            "extra": "1581 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 711181,
            "unit": "ns/op",
            "extra": "1581 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 125915,
            "unit": "B/op",
            "extra": "1581 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 8741,
            "unit": "allocs/op",
            "extra": "1581 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 7740944,
            "unit": "ns/op\t 1349926 B/op\t   89741 allocs/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 7740944,
            "unit": "ns/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 1349926,
            "unit": "B/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 89741,
            "unit": "allocs/op",
            "extra": "150 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 6043910972,
            "unit": "ns/op\t5341940064 B/op\t60948290 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 6043910972,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 5341940064,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 60948290,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 164383080,
            "unit": "ns/op\t141431496 B/op\t 1676461 allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 164383080,
            "unit": "ns/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 141431496,
            "unit": "B/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 1676461,
            "unit": "allocs/op",
            "extra": "7 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 6207382118,
            "unit": "ns/op\t5481307768 B/op\t62559083 allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 6207382118,
            "unit": "ns/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 5481307768,
            "unit": "B/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 62559083,
            "unit": "allocs/op",
            "extra": "1 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 10222,
            "unit": "ns/op\t    7598 B/op\t     111 allocs/op",
            "extra": "118758 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 10222,
            "unit": "ns/op",
            "extra": "118758 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 7598,
            "unit": "B/op",
            "extra": "118758 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "118758 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 472,
            "unit": "ns/op\t      80 B/op\t       5 allocs/op",
            "extra": "2502562 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 472,
            "unit": "ns/op",
            "extra": "2502562 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 80,
            "unit": "B/op",
            "extra": "2502562 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "2502562 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 10121,
            "unit": "ns/op\t    7601 B/op\t     111 allocs/op",
            "extra": "116408 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 10121,
            "unit": "ns/op",
            "extra": "116408 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 7601,
            "unit": "B/op",
            "extra": "116408 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "116408 times\n4 procs"
          }
        ]
      }
    ]
  }
}