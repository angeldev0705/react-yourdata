#!/bin/bash
if [ $# -eq 1 ]; then
    UUID=$1 npm run deploy > npm.log
fi