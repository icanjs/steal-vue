const compiler = require('vue-template-compiler');

exports.translate = function (load) {
  let loader = this.localLoader || this;
  let output = compiler.parseComponent(load.source);
  let script = output.script && output.script.content;
  let styles = output.styles && output.styles[0] && `"${output.styles[0].content}"`;
  let template = output.template && output.template.content;

  let baseName = load.name.substr(0, load.name.indexOf('!'));

  function makeName (baseName, part, plugin) {
    return baseName + '-' + part + (plugin ? ('.' + plugin) : '');
  }
  function makeAddress (address, part, plugin) {
    let base = address + '.' + part;
    return base + (plugin ? ('.' + plugin) : '');
  }

  // load.metadata.virtualDeps = [];

  debugger;
  // Load styles
  let styleName = makeName(baseName, 'style', 'css!');
  let styleAddress = makeAddress(load.address, 'style', 'css!');
  loader.define(styleName, `"${styles}"`, {
    address: styleAddress
  });

  // Inject the template into the script string.
  let templateString = `template: \`${template}\`, `;
  let match = script.match(/(name(.*):|data(.*){|methods(.*):|computed(.*):)/im);
  script = script.substr(0, match.index) + templateString + script.substr(match.index);

  load.source = script;
};

