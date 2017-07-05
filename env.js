'use strict';

const args = process.env.npm_lifecycle_event.split(':');
const TARGET = args[0];
const PLATFORM = args[1]

let platform = 'browser';
if (PLATFORM != null) {
  platform = PLATFORM;
}

let type = 'build';
switch (TARGET) {
  case 'start':
  case 'run':
    type = 'development';
}

module.exports = {
  type,
  platform,
};
