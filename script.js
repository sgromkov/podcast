function screenshot(name) {
    var node = document.querySelector(".b_" + name);
    var width = node.offsetWidth;
    domtoimage.toJpeg(node, { quality: 0.95, width: width })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = name + '.jpeg';
            link.href = dataUrl;
            link.click();
        });
}