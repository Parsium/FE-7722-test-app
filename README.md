# FE-7722 test app

Test app for testing the new namespacing feature introduced in FE-7722.

## Acceptance criteria

Changes pass if:

- [ ] CSS class names are prefixed with the Carbon package version installed

## Installing PR assets

To install the build assets from the Carbon PR branch, run the following:

```zsh
npm run setup -- <carbon-repo-path>
```

If changes have been made to the PR branch, re-run this command to make sure these changes are installed.

## Running the app

Run:

```zsh
npm start
```
