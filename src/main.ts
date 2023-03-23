import * as Blockly from 'blockly';
import { luaGenerator } from 'blockly/lua';
import blockContents from './blockContents';
const demoWorkSpace = Blockly.inject(
  document.querySelector('#blocklydiv') as HTMLDivElement,
  blockContents
);
function runtest() {
  console.log(luaGenerator.workspaceToCode(demoWorkSpace));
}
const ns = document.createElement('button');
ns.addEventListener('click', runtest);
ns.textContent = 'Run';
document.documentElement.appendChild(ns);
