const compiler = require('vue-template-compiler/build');

exports.translate = function (load) {
  let loader = this.localLoader || this;
  let output = compiler.parseComponent(load.source);
  let script = output.script && output.script.content;
  let styles = output.styles && output.styles[0] && `"${output.styles[0].content}"`;
  let stylesLang = (output.styles && output.styles[0] && output.styles[0].attrs.lang) || 'css';
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

  if (styles) {
    // Clean up extra quotes in styles.
    while (styles[0] === '"') {
      styles = styles.slice(1);
    }
    while (styles[styles.length - 1] === '"') {
      styles = styles.slice(0, styles.length - 2);
    }

    // Load styles
    let styleName = makeName(baseName, 'style', stylesLang + '!');
    let styleAddress = makeAddress(load.address, 'style', stylesLang + '!' + stylesLang);
    var styleLoad = {};
    var stylePromise = loader.normalize(styleName, load.name)
      .then(function (name) {
        styleName = name;
        styleLoad = { name: name, metadata: {} };
        return loader.locate(styleLoad);
      })
      .then(function () {
        return loader.define(styleName, styles, {
          address: styleAddress,
          metadata: styleLoad.metadata
        });
      });
  }

  if (template) {
    // Inject the template into the script string.
    let templateString = `template: \`${template}\`, `;
    let match = script.match(/(name(.*):|data(.*){|methods(.*):|computed(.*):)/im);
    script = script.substr(0, match.index) + templateString + script.substr(match.index);
  }

  load.source = script;
  return stylePromise;
};

