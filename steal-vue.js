const compiler = require('vue-template-compiler');

exports.translate = function (load) {
  let output = compiler.parseComponent(load.source);
  let script = output.script && output.script.content;
  let template = output.template && output.template.content;

  // Inject the template into the script string.
  let templateString = `template: \`${template}\`, `;
  let match = script.match(/(name(.*):|data(.*){|methods(.*):|computed(.*):)/im);
  script = script.substr(0, match.index) + templateString + script.substr(match.index);

  load.source = script;
};
