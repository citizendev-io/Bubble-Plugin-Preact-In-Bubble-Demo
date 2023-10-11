let update = function (instance, properties, context) {
    debugger;
  if (!instance.data.element) {
    instance.data.element = document.createElement("custom-counter");
    instance.canvas.append(instance.data.element);
  }
  instance.data.element.properties = properties;
};
