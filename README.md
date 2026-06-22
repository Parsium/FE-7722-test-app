# FE-7694 test app

Test app for verifying the bug from FE-7694 has resolved.

## Running the app (without PR assets):

To start the dev server:

```zsh
npm start
```

## Running the app (with PR assets):

1. Within the carbon repo, pull in the latest changes from carbon branch:

```zsh
cd <path-to-carbon-repo>
git switch FE-7694-menu-styling-fix
git pull
```

2. Within this test app repo, run the setup script to build Carbon from the PR branch and install it:

```zsh
./setup.zsh <path-to-carbon-repo> FE-7694-menu-styling-fix
```

3. Then run the dev server:

```zsh
npm start
```

If you need to uninstall the PR assets afterwards, run:

```zsh
git restore .
npm ci
```
