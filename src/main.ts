import * as Blockly from 'blockly';
import { luaGenerator } from 'blockly/lua';
import blockContents from './blockContents';
const demoWorkSpace = Blockly.inject(
  document.querySelector('#blocklydiv') as HTMLDivElement,
  {
    media: 'https://blockly-demo.appspot.com/static/media/',
    toolbox: {
      kind: 'categoryToolbox',
      contents: blockContents,
    },
    collapse: true,
    comments: true,
    disable: true,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: false,
    toolboxPosition: 'start',
    css: true,
    rtl: false,
    scrollbars: true,
    sounds: true,
    oneBasedIndex: true,
    grid: {
      spacing: 20,
      length: 1,
      colour: '#888',
      snap: true,
    },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2,
    },
  }
);
function runtest() {
  console.log(luaGenerator.workspaceToCode(demoWorkSpace));
}
const ns = document.createElement('button');
ns.addEventListener('click', runtest);
ns.textContent = 'Run';
document.documentElement.appendChild(ns);
