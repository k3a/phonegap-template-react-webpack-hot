'use strict';
// address of this development machine
const DEV_ADDR = 'lizard.l'; 

const fs = require('fs');
const path = require('path');
const et = require('elementtree');

const ENV = require('./env');
const src = {
  android: (ENV.type === 'development' ? 'http://'+DEV_ADDR+':8080/' : '') + 'index.html',
  ios: (ENV.type === 'development' ? 'http://'+DEV_ADDR+':8080/' : '') + 'index.html',
};
const config = path.resolve('./config.xml');

try {
  var configXML = new et.ElementTree(
    et.XML(
      fs.readFileSync(config, 'utf-8')
    )
  );
  configXML.getroot()._children.forEach(function(el) {
    if (el.tag === 'platform') {
      if (el.attrib.name === 'android' || el.attrib.name === 'ios') {
        el._children.forEach(function(child) {
          if (child.tag === 'content') {
            console.log('Setting ' + el.attrib.name + ' src to ' + src[el.attrib.name])
            child.attrib.src = src[el.attrib.name];
          }
        });
      }
    }
  });
  fs.writeFileSync(config, configXML.write({indent: 4}), 'utf-8');

} catch (err) {
  console.error('ERROR: Could not replace content src in: ' + config, err);
  process.exit(1);
}
