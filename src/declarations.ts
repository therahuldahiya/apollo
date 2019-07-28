import Aion from '@adoratorio/aion';

export enum PROPERTY_SUFFIX {
  NO_SUFFIX = '',
  PIXEL = 'px',
  PERCENTAGE = '%',
  DEG = 'deg',
  SECONDS = 's',
}

export enum PROPERTY_TYPE {
  TYPELESS = 'typeless',
  STYLE = 'style',
  TRANSFORM = 'transform',
  ATTRIBUTE = 'attribute',
}

export interface PropertyDescriptior {
  key : string,
  type : PROPERTY_TYPE,
  target? : Element | null,
  suffix : PROPERTY_SUFFIX,
  easing : Easing,
  initial : number,
  renderByPixel? : boolean,
}

export enum TYPE {
  HTML = 'html',
  CANVAS = 'canvas',
  SVG = 'svg',
}

export interface Easing {
  mode : Function,
  duration : number,
}

export interface Vec2 {
  x : number,
  y : number,
}

export interface ApolloOptions {
  cursor : HTMLElement | null,
  props : Array<PropertyDescriptior>,
  easing : Easing,
  // targets : Array<Target>,
  hiddenUntilFirstInteraction : boolean,
  initialPosition : Vec2,
  detectTouch : boolean,
  emitGlobal : boolean,
  onEnter : Function,
  onLeave : Function,
  aion : Aion | null,
  renderByPixel : boolean,
}

export interface Timeline {
  start : number,
  duration : number,
  initial: number,
  current: number,
  final: number,
}