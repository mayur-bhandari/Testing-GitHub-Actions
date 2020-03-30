#!/usr/bin/env bash

echo "Installing hooks..."
# this command creates symlink to our pre-commit script
ln -s ../../scripts/run-tests.bash .git/hooks/pre-commit
echo "Done!"