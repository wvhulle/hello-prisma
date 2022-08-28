Repository to demonstrate a bug related to node and prisma.
The database authentication URL is private, so the file `.env` is not included in the repository.

Enable segfault reporting with <https://httptoolkit.tech/blog/how-to-debug-node-segfaults/>.
Enable debugging mode for prisma with <https://www.prisma.io/docs/concepts/components/prisma-client/debugging>.
Then run `npx prisma db seed` to reproduce the bug.

```
> npx prisma db seed                                                                                                                 914ms  zo 28 aug 2022 17:30:59 CEST
Environment variables loaded from .env
Running seed command `node --loader ts-node/esm prisma/seed.ts` ...
(node:3912532) ExperimentalWarning: Custom ESM Loaders is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
  prisma:tryLoadEnv  Environment variables loaded from /home/willem/hello-prisma/.env +0ms
  prisma:tryLoadEnv  Environment variables loaded from /home/willem/hello-prisma/.env +6ms
  prisma:client  dirname /home/willem/hello-prisma/node_modules/.prisma/client +0ms
  prisma:client  relativePath ../../../prisma +0ms
  prisma:client  cwd /home/willem/hello-prisma/prisma +0ms
  prisma:client  clientVersion 4.2.1 +0ms
  prisma:client  clientEngineType library +0ms
  prisma:client:libraryEngine  internalSetup +0ms
Started main()...
Started seedProducts()...
reading file products
┌─────────┬────────┐
│ (index) │  name  │
├─────────┼────────┤
│    0    │ 'SL01' │
│    1    │ 'SL02' │
└─────────┴────────┘
Seeding product SL01
  prisma:client:libraryEngine:loader  Searching for Query Engine Library in /home/willem/hello-prisma/node_modules/.prisma/client +0ms
  prisma:client:libraryEngine:loader  loadEngine using /home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node +0ms
  prisma:client  Prisma Client call: +122ms
  prisma:client  prisma.product.upsert({
  where: {
    name: 'SL01'
  },
  create: {
    name: 'SL01'
  },
  update: {
    name: 'SL01'
  }
}) +2ms
  prisma:client  Generated request: +0ms
  prisma:client  mutation {
  upsertOneProduct(
    where: {
      name: "SL01"
    }
    create: {
      name: "SL01"
    }
    update: {
      name: "SL01"
    }
  ) {
    name
    description
  }
}
 +0ms
  prisma:client:libraryEngine  sending request, this.libraryStarted: false +124ms
  prisma:client:libraryEngine  library starting +0ms
prisma:info Starting a postgresql pool with 9 connections.
PID 3912532 received SIGSEGV for address: 0x1000001b7
/home/willem/hello-prisma/node_modules/segfault-handler/build/Release/segfault-handler.node[+0x37a5](0x7f6472e8e7a5)
/lib/x86_64-linux-gnu/libpthread.so.0[+0x14420](0x7f6472b16420)
/lib/x86_64-linux-gnu/libssl.so.1.1[SSL_get_peer_certificate+0x17](0x7f64698d26f7)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x116a327](0x7f645b46b327)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0xd4003d](0x7f645b04103d)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0xec4a35](0x7f645b1c5a35)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0xe4b666](0x7f645b14c666)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0xd634c7](0x7f645b0644c7)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0xdd9de1](0x7f645b0dade1)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0xeb40cf](0x7f645b1b50cf)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0xdec5ef](0x7f645b0ed5ef)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0xda2700](0x7f645b0a3700)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x8296ee](0x7f645ab2a6ee)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x817509](0x7f645ab18509)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x791ce5](0x7f645aa92ce5)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x7975b3](0x7f645aa985b3)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x83734f](0x7f645ab3834f)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x813073](0x7f645ab14073)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x81c1a0](0x7f645ab1d1a0)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x1f56ac](0x7f645a4f66ac)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x24d615](0x7f645a54e615)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x200045](0x7f645a501045)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x21caad](0x7f645a51daad)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x217a96](0x7f645a518a96)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x17b3bd](0x7f645a47c3bd)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x17f4de](0x7f645a4804de)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x114ba65](0x7f645b44ca65)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x113c0d3](0x7f645b43d0d3)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x113b5de](0x7f645b43c5de)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x114d527](0x7f645b44e527)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x113affb](0x7f645b43bffb)
/home/willem/hello-prisma/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node[+0x1152761](0x7f645b453761)

An error occured while running the seed command:
Error: Command was killed with SIGSEGV (Segmentation fault): node --loader ts-node/esm prisma/seed.ts
```