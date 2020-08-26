// @ ts-nocheck
import { RippleHandlers, RippleAPI } from '@material/mwc-ripple/ripple-handlers';

const ripples = Array.from(
  document.querySelectorAll(
    '.component-section .ripple mwc-ripple:not(.customControls)'
  )
);
const customControlsRipple = document.querySelector(
  '.component-section .ripple .customControls'
);
const noRippleBox = document.querySelector(
  '.component-section .ripple .noRipple'
);

// note: you can also use the functions directly on the ripple, but ripple
// handlers is a useful structure for declaratively controlling ripple in lit.
// See implementation for mwc-button-base.ts
ripples.forEach(ripple => {
  // argument must return thenable promiselike (see @queryAsync in LitElement)
  // Best practice for first load would be to not render the mwc-ripple until it
  // is needed which is typically on user interaction.
  const rh = new RippleHandlers(async () => ripple as unknown as RippleAPI);
  const parent = ripple.parentNode;
  parent?.addEventListener('mouseenter', rh.startHover);
  parent?.addEventListener('mouseleave', rh.endHover);
  parent?.addEventListener('mousedown', e => {
    const onMouseUp = () => {
      window.removeEventListener('mouseup', onMouseUp);
      rh.endPress();
    };

    window.addEventListener('mouseup', onMouseUp);
    rh.startPress(e);
  });
  parent?.addEventListener('touchstart', e => {
    const onTouchEnd = () => {
      window.removeEventListener('touchend', onTouchEnd);
      rh.endPress();
    };

    window.addEventListener('touchend', onTouchEnd);
    rh.startPress(e);
  });
  parent?.addEventListener('focus', rh.startFocus);
  parent?.addEventListener('blur', rh.endFocus);
});

const rh = new RippleHandlers(async () => customControlsRipple as unknown as RippleAPI);
const parent = customControlsRipple?.parentNode;

let isParentHover = false;
let isInputHover = false;

noRippleBox?.addEventListener('mouseenter', () => {
  isInputHover = true;
  rh.endHover();
});
noRippleBox?.addEventListener('mouseleave', () => {
  isInputHover = false;
  if (isParentHover) {
    rh.startHover();
  }
});
parent?.addEventListener('mouseenter', () => {
  isParentHover = true;

  if (isParentHover && !isInputHover) {
    rh.startHover();
  }
});
parent?.addEventListener('mouseleave', () => {
  isParentHover = false;

  rh.endHover();
});
parent?.addEventListener('mousedown', e => {
  const onMouseUp = () => {
    window.removeEventListener('mouseup', onMouseUp);
    rh.endPress();
  };

  window.addEventListener('mouseup', onMouseUp);
  if (e.target !== noRippleBox) {
    rh.startPress(e);
  }
});
parent?.addEventListener('touchstart', e => {
  const onTouchEnd = () => {
    window.removeEventListener('touchend', onTouchEnd);
    rh.endPress();
  };

  window.addEventListener('touchend', onTouchEnd);
  if (e.target !== noRippleBox) {
    rh.startPress(e);
  }
});
parent?.addEventListener('focus', rh.startFocus);
parent?.addEventListener('blur', rh.endFocus);
