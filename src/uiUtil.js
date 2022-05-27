export function defaultArg(a,b) {
  return "undefined" == typeof a ? b : a;
}
export function isString(v) {
  return (typeof v == "string") || (v instanceof String);
}
export function stripClass(node, className) {
  node.className = node.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)'), '');
}
export function addClass(node, className) {
  if (node.className.indexOf(className) == -1)
    node.className += " " + className;
}
export function createElement(type, args) {
  var element = document.createElement(type);
  for (var i = 0; i < args.length; ++i) {
    if (isString(args[i]))
      addClass(element, args[i]);
    else
      element.appendChild(args[i]);
  }
  return element;
}
export function    p(...args) { return createElement(   "p", args); }
export function   h1(...args) { return createElement(  "h1", args); }
export function   hr(...args) { return createElement(  "hr", args); }
export function  div(...args) { return createElement( "div", args); }
export function span(...args) { return createElement("span", args); }
export function text(label)   { return document.createTextNode(label); }

export class Slider {
  constructor(targetId, minValue, maxValue, initialValue, hasLabel, callback, callbackArgs) {
    var target = isString(targetId) ? document.getElementById(targetId) : targetId;
    if (!target)
      return;

    this.sliderBackground = document.createElement("div");
    this.sliderBackground.className = "slider";

    this.minValue = minValue;
    this.maxValue = maxValue;
    this.callback = callback;
    this.callbackArgs = callbackArgs || [];
    this.callbackArgs.push(initialValue);

    this.sliderBar = document.createElement("div");
    this.sliderBar.className = "slider-bar";
    this.sliderBackground.appendChild(this.sliderBar);

    this.sliderHandle = document.createElement("a");
    this.sliderHandle.className = "slider-handle";
    this.sliderBackground.appendChild(this.sliderHandle);

    var mouseMoveListener = this.mouseMove.bind(this);
    function mouseUpListener(event) {
      document.removeEventListener("mousemove", mouseMoveListener);
      document.removeEventListener("mouseup", mouseUpListener);
    }

    this.sliderHandle.addEventListener("mousedown", function (event) {
      event.preventDefault();
      document.addEventListener("mousemove", mouseMoveListener);
      document.addEventListener("mouseup", mouseUpListener);
    });

    var parent = target.parentNode;
    parent.replaceChild(this.sliderBackground, target);

    if (hasLabel) {
      this.label = document.createElement("p");
      this.label.className = "slider-label";
      parent.insertBefore(this.label, this.sliderBackground.nextSibling);
    }

    this.setPosition((initialValue - minValue) / (maxValue - minValue));
  }

  mouseMove(event) {
    var rect = this.sliderBackground.getBoundingClientRect();
    this.setPosition((event.clientX - rect.left) / (rect.right - rect.left));
  }

  setLabel(text) {
    if (this.label)
      this.label.textContent = text;
  }

  setValue(value) {
    value = Math.min(this.maxValue, Math.max(this.minValue, value));
    if (value != this.value) {
      this.value = value;
      var percentage = Math.max(Math.min(Math.floor(100.0 * (value - this.minValue) / (this.maxValue - this.minValue)), 100.0), 0.0);
      this.sliderHandle.style.left = this.sliderBar.style.width = percentage.toString() + "%";

      if (this.callback) {
        this.callbackArgs[this.callbackArgs.length - 1] = value;
        this.callback.apply(this, this.callbackArgs);
      }
    }
  }

  setPosition(position) {
    this.setValue(Math.floor(this.minValue + position * (this.maxValue - this.minValue)));
  }

  show(show) {
    var display = show ? "block" : "none";
    this.sliderBackground.style.display = display;
    if (this.label)
      this.label.style.display = display;
  }
}

export class ButtonGroup {
  constructor(targetId, labels, selectionCallback) {
    this.selectionCallback = selectionCallback;
    this.selectedButton = 0;

    var target = isString(targetId) ? document.getElementById(targetId) : targetId;
    if (!target)
      return;

    this.group = document.createElement("div");
    this.group.className = "button-group-horz";
    this.buttons = [];

    for (var i = 0; i < labels.length; ++i) {
      var button = document.createElement("div");
      button.className = "button-horz";
      button.appendChild(document.createTextNode(labels[i]));

      this.buttons.push(button);
      this.group.appendChild(button);

      button.addEventListener("click", function (idx, event) {
        this.select(idx);
      }.bind(this, i));
    }
    this.select(0);

    target.parentNode.replaceChild(this.group, target);
  }

  getActiveButton() {
    return this.selectedButton;
  }

  select(idx) {
    if (idx < 0 || idx >= this.buttons.length)
      return;

    stripClass(this.buttons[this.selectedButton], "active");
    addClass(this.buttons[idx], "active");

    if (this.selectedButton != idx && this.selectionCallback)
      this.selectionCallback(idx);
    this.selectedButton = idx;
  }
}
