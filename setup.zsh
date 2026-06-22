#!/bin/zsh

CARBON_DIR=$1
CARBON_BRANCH=$2

if [ -z "$CARBON_DIR" ]; then
    echo "Error: Path to carbon-react directory is not set. Please provide the path to the carbon-react directory."
    echo "Usage: ./setup.zsh /path/to/carbon-react"
    exit 1
fi

if [ ! -d "$CARBON_DIR" ]; then
    echo "Error: CARBON_DIR is not a valid directory. Please provide a valid path to the carbon-react directory."
    echo "Usage: ./setup.zsh /path/to/carbon-react"
    exit 1
fi

if [ -z "$CARBON_BRANCH" ]; then
    echo "Error: Branch name is not set. Please provide the branch name to switch to."
    echo "Usage: ./setup.zsh /path/to/carbon-react branch-name"
    exit 1
fi

PROJECT_DIR=$(pwd)

echo "📦 Building carbon-react from PR changes"

cd "$CARBON_DIR"

if git switch $CARBON_BRANCH; then
    echo "Switched to branch $CARBON_BRANCH"
else
    echo "Error: Failed to switch to branch $CARBON_BRANCH"
    exit 1
fi

npm ci
npm run build
npm pack

TGZ_FILE=$(ls *.tgz)

if [ -f "$TGZ_FILE" ]; then
    mv "$TGZ_FILE" "FE-7694-fix.tgz"
else
    echo "Error: No .tgz file generated. Please check the build process."
    exit 1
fi

mv "FE-7694-fix.tgz" "$PROJECT_DIR"
git switch master

echo "📦 Installing carbon-react from built assets"

cd "$PROJECT_DIR"
npm install carbon-react@file:FE-7694-fix.tgz

echo "✅ Setup completed successfully."
