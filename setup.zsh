#!/bin/zsh

CURRENT_DIR=$(pwd)
CARBON_BRANCH=support-sc-namespacing
CARBON_DIR=$1

if [ -z "$CARBON_DIR" ] || [ -z "$CARBON_BRANCH" ]; then
  echo "❌ Please provide the Carbon directory and branch as arguments."
  echo "Usage: ./setup.zsh <carbon_directory> <carbon_branch>"
  exit 1
fi
if [ ! -d "$CARBON_DIR" ]; then
  echo "❌ The provided Carbon directory does not exist or is not a directory: $CARBON_DIR"
  exit 1
fi

echo "🧹 Removing previous Carbon PR assets"
rm carbon-react-*.tgz > /dev/null 2>&1

echo "📦 Pulling in latest changes from Carbon PR (may take a while)"
cd $CARBON_DIR
if ! git show-ref --verify --quiet refs/heads/$CARBON_BRANCH; then
  echo "❌ The provided Carbon branch does not exist: $CARBON_BRANCH"
  cd $CURRENT_DIR
  exit 1
fi
git checkout $CARBON_BRANCH
git pull
npm ci

echo "📦 Building Carbon (may take a while)"
npm run build
npm pack --pack-destination $CURRENT_DIR

echo "📦 Installing Carbon PR assets into test app"
cd $CURRENT_DIR
npm i --save carbon-react@$(ls carbon-react-*.tgz)

echo "✅ Carbon PR assets installed into test app"