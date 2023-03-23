import * as Blockly from 'blockly';
import { Block } from 'blockly';

Blockly.inject(document.querySelector('#blockly') as HTMLDivElement,{
  media: 'https://blockly-demo.appspot.com/static/media/',
  toolbox: document.getElementById('toolbox'),
  collapse : true, 
  comments : true, 
  disable : true, 
  maxBlocks : Infinity, 
  trashcan : true, 
  horizontalLayout : false, 
  toolboxPosition : 'start', 
  css : true, 
  rtl : false, 
  scrollbars : true, 
  sounds : true, 
  oneBasedIndex : true, 
  grid : {
    spacing : 20, 
    length : 1, 
    colour : '#888', 
    snap : true
  }, 
  zoom : {
    controls : true, 
    wheel : true, 
    startScale : 1, 
    maxScale : 3, 
    minScale : 0.3, 
    scaleSpeed : 1.2
  }
});
