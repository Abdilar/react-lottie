import React, { useEffect } from "react";
import lottie from 'lottie-web';
import { isBoolean, isEmptyArray, isEmptyObject, isNumber } from "../../utils/functions.util";
import { DEFAULT_PROPS, DIRECTION, PROP_TYPES } from "./Lottie.config";
import { LottieTemplate } from "./Lottie.template";

let lottieObj = null;

const Lottie = props => {
  const el = {};

  useEffect(() => {
    didMount();
    return unmount;
  }, []);

  useEffect(() => {
    if (isEmptyObject(lottieObj) || !props.autoPlay) return;

    props.play ? lottieObj.play() : lottieObj.pause();
  }, [props.play]);

  useEffect(() => {
    if (isEmptyObject(lottieObj)) return;

    props.stop && lottieObj.stop();
  }, [props.stop]);

  useEffect(() => {
    if (isEmptyObject(lottieObj)) return;

    (props.direction === DIRECTION.FORWARD || props.direction === DIRECTION.REVERSE) && lottieObj.setDirection(props.direction);
  }, [props.direction]);

  useEffect(() => {
    if (isEmptyObject(lottieObj)) return;

    (props.speed > 0) && lottieObj.setSpeed(props.speed);
  }, [props.speed]);

  useEffect(() => {
    if (isEmptyObject(lottieObj)) return;

    !isEmptyArray(props.segment) && lottieObj.playSegments(props.segment, true)
  }, [props.segment]);

  const didMount = () => {
    el.current = document.getElementById(props.id);
    console.log('DID: ', el, props);
    if (!el.current) return;

    const loop = isBoolean(props.loop) ?
      props.loop :
      isNumber(props.loop) && props.loop > 0 ? props.loop - 1 : true;

    lottieObj = lottie.loadAnimation({
      animationData: props.data,
      autoplay: true,
      container: el.current,
      loop,
      renderer: props.renderer
    });
  };

  const unmount = () => {
    lottieObj.destroy();
    lottieObj = null;
  };

  return (
    <LottieTemplate
      className={props.className}
      id={props.id}
    />
  );
};

Lottie.defaultProps = DEFAULT_PROPS;
Lottie.propTypes = PROP_TYPES;

export {Lottie};
