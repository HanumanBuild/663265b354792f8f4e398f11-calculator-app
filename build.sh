#!/bin/bash
set -o errexit
export REACT_APP_CALCULATOR_APP_URL=$CALCULATOR_APP_URL
npm install && npm run build