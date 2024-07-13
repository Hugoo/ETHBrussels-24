# ETHBruxelles 2024

Repo for [ETHBruxelles 2024 hackathon](https://ethglobal.com/events/brussels) project.

## Team

- [Ola](https://github.com/omaliszewska)
- [Hugo](https://github.com/Hugoo)

## API

Base URL: `/api/`

The backend provides a few APIs merging blockscout responses for each networks into one.

Supported API calls:

- `/addresses/{address}`
- `/transactions`

## Improvements

- Improve cache and loading by using Tanstack Query

## Built with

- [Blockscout API](https://docs.blockscout.com/for-users/api)
- [Ethers.js](https://docs.ethers.org/v6/)
- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
