# AGENTS.md

## Cursor Cloud specific instructions

This is a React component library (`react-image-to-lazyload`) providing `LazyWrapper` and `LazyItem` components for lazy-loading images via IntersectionObserver.

### Node version

Requires **Node.js 16** (via nvm). Node 22+ causes SSL/compatibility issues with Storybook 5.x and older deps. The environment has `nvm alias default 16` configured.

### Key commands

All standard dev commands are in `package.json` scripts:

| Command          | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `yarn lint`      | ESLint on `src/`                                             |
| `yarn test`      | Jest snapshot tests with coverage                            |
| `yarn build`     | Lint + Rollup bundle (ESM/CJS/UMD) + TypeScript declarations |
| `yarn dev`       | Rollup watch mode                                            |
| `yarn storybook` | Storybook dev server on port **6006**                        |

### Gotchas

- `yarn install` triggers `prepare` → `yarn test` automatically. If tests fail, install fails.
- Yarn strict-ssl is set to `false` in the environment to work around certificate expiration in cloud VMs.
- Storybook demo images load from external URLs (wallhaven, crystalbeach) — they may show as dark placeholders if network is restricted, but the lazy-loading behavior (spinners → loaded) still works.
- The `yarn build` script uses `&&` chaining (`cross-env NODE_ENV=production && yarn lint && run-s build:*`), so `NODE_ENV` is not actually propagated to the lint/build sub-commands on Linux; this is an existing quirk but builds succeed regardless.
