## Getting Started

##### Prerequisites

- Node.js 22.x
- pnpm 10.x

##### Install Vercel CLI on your machine

```bash
npm i -g vercel
```

##### Login to Vercel

```bash
vercel login
```

Choose `Continue with Github` then use the MindCycle Admin passkey to login

##### Link your repo to Vercel

```bash
vercel link
```

##### Pull env vars from Vercel

```bash
vercel env pull
```

##### Install dependencies

```bash
pnpm install
```

##### Run the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Tech Stack

- **Framework**: [Next.js 15.2.3](https://nextjs.org/docs)
- **Language**: [TypeScript](https://www.typescriptlang.org/docs/)
- **Database**: [Neon](https://neon.tech/docs) (PostgreSQL) with [Drizzle ORM](https://orm.drizzle.team/docs)
- **Auth**: [Clerk](https://clerk.com/docs/references/nextjs/overview)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Mantine UI](https://ui.mantine.dev/)
- **Infrastructure**: [Vercel](https://vercel.com/docs)
- **AI**: [AI SDK](https://sdk.vercel.ai/docs)
- **Package Manager**: [pnpm](https://pnpm.io/pnpm-cli)

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: Reusable UI components
- `src/db`: Database config, schema, query functions and migrations
- `src/ai`: Prompts and Agent Tools
- `src/utils`: Helpful utility functions (including 3rd party library aliases)
- `src/hooks`: Custom React hooks
- `src/types`: TypeScript type definitions
