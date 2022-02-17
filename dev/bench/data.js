window.BENCHMARK_DATA = {
  lastUpdate: 1645107323507,
  repoUrl: 'https://github.com/napi-rs/napi-rs',
  entries: {
    Benchmark: [
      {
        commit: {
          author: {
            email: 'lynweklm@gmail.com',
            name: 'LongYinan',
            username: 'Brooooooklyn',
          },
          committer: {
            email: 'noreply@github.com',
            name: 'GitHub',
            username: 'web-flow',
          },
          distinct: true,
          id: 'ab3ea5a58aa40927be9c40e4dea6c06641a273bc',
          message:
            'Merge pull request #1075 from martinjlowm/fix/cleanup-registered-hook\n\nfix(napi): cleanup registered hook upon unloading module with tokio_rt',
          timestamp: '2022-02-17T22:07:49+08:00',
          tree_id: '3a012195373bf3bfcad41f459c97bd4ac73b759f',
          url: 'https://github.com/napi-rs/napi-rs/commit/ab3ea5a58aa40927be9c40e4dea6c06641a273bc',
        },
        date: 1645107322423,
        tool: 'benchmarkjs',
        benches: [
          {
            name: 'noop#napi-rs',
            value: 63249090,
            range: '±0.63%',
            unit: 'ops/sec',
            extra: '93 samples',
          },
          {
            name: 'noop#JavaScript',
            value: 810417194,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'Plus number#napi-rs',
            value: 20100497,
            range: '±0.67%',
            unit: 'ops/sec',
            extra: '99 samples',
          },
          {
            name: 'Plus number#JavaScript',
            value: 807436228,
            range: '±0.22%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Create buffer#napi-rs',
            value: 357501,
            range: '±11.19%',
            unit: 'ops/sec',
            extra: '58 samples',
          },
          {
            name: 'Create buffer#JavaScript',
            value: 1684728,
            range: '±5.76%',
            unit: 'ops/sec',
            extra: '77 samples',
          },
          {
            name: 'createArray#createArrayJson',
            value: 40230,
            range: '±0.11%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'createArray#create array for loop',
            value: 8431,
            range: '±0.12%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'createArray#create array with serde trait',
            value: 8380,
            range: '±0.11%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array from json string',
            value: 18981,
            range: '±0.13%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'getArrayFromJs#get array from serde',
            value: 11342,
            range: '±0.06%',
            unit: 'ops/sec',
            extra: '98 samples',
          },
          {
            name: 'getArrayFromJs#get array with for loop',
            value: 13342,
            range: '±0.37%',
            unit: 'ops/sec',
            extra: '97 samples',
          },
          {
            name: 'Get Set property#Get Set from native#u32',
            value: 425032,
            range: '±5.49%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#u32',
            value: 359871,
            range: '±6%',
            unit: 'ops/sec',
            extra: '76 samples',
          },
          {
            name: 'Get Set property#Get Set from native#string',
            value: 365250,
            range: '±5.75%',
            unit: 'ops/sec',
            extra: '72 samples',
          },
          {
            name: 'Get Set property#Get Set from JavaScript#string',
            value: 344039,
            range: '±5.77%',
            unit: 'ops/sec',
            extra: '79 samples',
          },
          {
            name: 'Async task#spawn task',
            value: 39857,
            range: '±1.54%',
            unit: 'ops/sec',
            extra: '81 samples',
          },
          {
            name: 'Async task#ThreadSafeFunction',
            value: 366,
            range: '±4.62%',
            unit: 'ops/sec',
            extra: '50 samples',
          },
          {
            name: 'Async task#Tokio future to Promise',
            value: 29810,
            range: '±1.44%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Query#query * 100',
            value: 2186,
            range: '±2.37%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
          {
            name: 'Query#query * 1',
            value: 31230,
            range: '±0.94%',
            unit: 'ops/sec',
            extra: '86 samples',
          },
        ],
      },
    ],
  },
}
