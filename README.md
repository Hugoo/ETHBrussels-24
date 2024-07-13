# PolyScout 🔗 - ETHBrussels 2024

Repo for [ETHBruxelles 2024 hackathon](https://ethglobal.com/events/brussels) project.

Live URL: <https://polyscout.vercel.app>

## Team

- [Ola](https://github.com/omaliszewska)
- [Hugo](https://github.com/Hugoo)

## API

Base URL: `https://polyscout.vercel.app/api/`

The backend provides a few APIs merging blockscout responses for each networks into one.

Supported API calls:

- `GET /addresses/{address}`
- `GET /addresses/{address}/transactions`
- `GET /transactions`

## Improvements

- Improve cache and loading by using Tanstack Query
- Allow users to select specific networks when querying APIs

## Built with

- [Blockscout API](https://docs.blockscout.com/for-users/api)
- [Ethers.js](https://docs.ethers.org/v6/)
- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)

## Feedback

### ENS

1. The copy button in the ENS docs on docs pages (like [this one](https://docs.ens.domains/web/quickstart)) doesn't work, the copied text is "undefined".
2. The code snippet on [this page](https://docs.ens.domains/web/quickstart) relies on a "ens-core" import that I couldn't find/install.
3. On that same previous page, if you reuse the code snippet, you will get the following error:

```
Type 'GetEnsNameReturnType | undefined' is not assignable to type 'string | undefined'.
  Type 'null' is not assignable to type 'string | undefined'
```
