import PropType from 'prop-types';

export const DIRECTION = Object.freeze({
  FORWARD: 1,
  REVERSE: -1
});

export const RENDERER = Object.freeze({
  SVG: 'svg',
  CANVAS: 'canvas',
  HTML: 'html'
});

export const DEFAULT_PROPS = Object.freeze({
  autoPlay: true,
  className: '',
  data: {},
  direction: DIRECTION.FORWARD,
  id: 'sakit-sa-lottie',
  loop: true,
  play: true,
  renderer: RENDERER.SVG,
  segment: [],
  speed: 1,
  stop: false
});

export const PROP_TYPES = Object.freeze({
  autoPlay: PropType.bool,
  className: PropType.string,
  data: PropType.object,
  direction: PropType.number,
  id: PropType.string,
  loop: PropType.any,
  play: PropType.bool,
  renderer: PropType.string,
  segment: PropType.array,
  speed: PropType.number,
  stop: PropType.bool
});
