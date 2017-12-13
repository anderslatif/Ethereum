#!/usr/bin/env bash

for f in $(find ./contracts -name '*.sol');
    do
    name=$(basename "$f" ".sol")
    echo "Creating md doc file for $name at: $f"
    solidity-doc generate $f > ../src/docs/$name.md

    done
