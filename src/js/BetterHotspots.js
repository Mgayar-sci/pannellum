function createBetterHotSpot(hs) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');

    if (hs.text || hs.video || hs.image) {
        wrapper.classList.add('info-hotspot');

        // Create hotspot/tooltip header.
        var header = document.createElement('div');
        header.classList.add('info-hotspot-header');

        // Create image element.
        var iconWrapper = document.createElement('div');
        iconWrapper.classList.add('info-hotspot-icon-wrapper');
        var icon = document.createElement('img');
        icon.src = 'img/info.png';
        icon.classList.add('info-hotspot-icon');
        iconWrapper.appendChild(icon);

        // Create title element.
        var titleWrapper = document.createElement('div');
        titleWrapper.classList.add('info-hotspot-title-wrapper');
        var title = document.createElement('div');
        title.classList.add('info-hotspot-title');
        title.innerHTML = hs.title;
        titleWrapper.appendChild(title);

        // Create close element.
        var closeWrapper = document.createElement('div');
        closeWrapper.classList.add('info-hotspot-close-wrapper');
        var closeIcon = document.createElement('img');
        closeIcon.src = 'img/close.png';
        closeIcon.classList.add('info-hotspot-close-icon');
        closeWrapper.appendChild(closeIcon);

        // Construct header element.
        header.appendChild(iconWrapper);
        header.appendChild(titleWrapper);
        header.appendChild(closeWrapper);

        // Create text element.
        var text = document.createElement('div');
        text.classList.add('info-hotspot-text');
        text.innerHTML = hs.text;

        // Place header and text into wrapper element.
        wrapper.appendChild(header);
        wrapper.appendChild(text);

        // Create a modal for the hotspot content to appear on mobile mode.
        var modal = document.createElement('div');
        modal.innerHTML = wrapper.innerHTML;
        modal.classList.add('info-hotspot-modal');
        document.body.appendChild(modal);

        var toggle = function() {
            wrapper.classList.toggle('visible');
            modal.classList.toggle('visible');
        };

        // Show content when hotspot is clicked.
        wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

        // Hide content when close icon is clicked.
        modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);
    }
    return wrapper;

}

/**
 * Creates hot spot element for the current scene.
 * @private
 * @param {Object} hs - The configuration for the hotspot
 */
function createTextHotSpot(hs) {
    // Make sure hot spot pitch and yaw are numbers
    hs.pitch = Number(hs.pitch) || 0;
    hs.yaw = Number(hs.yaw) || 0;

    var div = document.createElement('div');
    div.className = 'pnlm-hotspot-base'
    if (hs.cssClass)
        div.className += ' ' + hs.cssClass;
    else
        div.className += ' pnlm-hotspot pnlm-sprite pnlm-' + escapeHTML(hs.type);

    var span = document.createElement('span');
    span.innerHTML = escapeHTML(hs.text);

    div.classList.add('pnlm-tooltip');
    div.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';

    return div;
};


/**
 * Creates hot spot element for the current scene.
 * @private
 * @param {Object} hs - The configuration for the hotspot
 */
function createImageHotSpot(hs) {
    // Make sure hot spot pitch and yaw are numbers
    hs.pitch = Number(hs.pitch) || 0;
    hs.yaw = Number(hs.yaw) || 0;

    var div = document.createElement('div');
    div.className = 'pnlm-hotspot-base'
    if (hs.cssClass)
        div.className += ' ' + hs.cssClass;
    else
        div.className += ' pnlm-hotspot pnlm-sprite pnlm-' + escapeHTML(hs.type);

    var span = document.createElement('span');
    if (hs.text)
        span.innerHTML = escapeHTML(hs.text);

    var a;

    var p = hs.image;
    if (config.basePath && !absoluteURL(p))
        p = config.basePath + p;
    a = document.createElement('a');
    a.href = encodeURI(hs.URL ? hs.URL : p);
    a.target = '_blank';
    span.appendChild(a);
    var image = document.createElement('img');
    image.src = encodeURI(p);
    image.style.width = hs.width + 'px';
    image.style.paddingTop = '5px';
    renderContainer.appendChild(div);
    a.appendChild(image);
    span.style.maxWidth = 'initial';

    div.classList.add('pnlm-tooltip');
    div.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';

    return div;
};


/**
 * Creates hot spot element for the current scene.
 * @private
 * @param {Object} hs - The configuration for the hotspot
 */
function createURLHotSpot(hs) {
    // Make sure hot spot pitch and yaw are numbers
    hs.pitch = Number(hs.pitch) || 0;
    hs.yaw = Number(hs.yaw) || 0;

    var div = document.createElement('div');
    div.className = 'pnlm-hotspot-base'
    if (hs.cssClass)
        div.className += ' ' + hs.cssClass;
    else
        div.className += ' pnlm-hotspot pnlm-sprite pnlm-' + escapeHTML(hs.type);

    var span = document.createElement('span');
    if (hs.text)
        span.innerHTML = escapeHTML(hs.text);

    var a;
    a = document.createElement('a');
    a.href = encodeURI(hs.URL);
    a.target = '_blank';
    renderContainer.appendChild(a);
    div.style.cursor = 'pointer';
    span.style.cursor = 'pointer';
    a.appendChild(div);

    div.classList.add('pnlm-tooltip');
    div.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';

    return div;
};


/**
 * Creates hot spot element for the current scene.
 * @private
 * @param {Object} hs - The configuration for the hotspot
 */
function createVideoHotSpot(hs) {
    // Make sure hot spot pitch and yaw are numbers
    hs.pitch = Number(hs.pitch) || 0;
    hs.yaw = Number(hs.yaw) || 0;

    var div = document.createElement('div');
    div.className = 'pnlm-hotspot-base'
    if (hs.cssClass)
        div.className += ' ' + hs.cssClass;
    else
        div.className += ' pnlm-hotspot pnlm-sprite pnlm-' + escapeHTML(hs.type);

    var span = document.createElement('span');
    if (hs.text)
        span.innerHTML = escapeHTML(hs.text);

    var a;

    var video = document.createElement('video'),
        p = hs.video;
    if (config.basePath && !absoluteURL(p))
        p = config.basePath + p;
    video.src = encodeURI(p);
    video.controls = true;
    video.style.width = hs.width + 'px';
    renderContainer.appendChild(div);
    span.appendChild(video);

    div.classList.add('pnlm-tooltip');
    div.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';

    return div;
};


/**
 * Creates hot spot element for the current scene.
 * @private
 * @param {Object} hs - The configuration for the hotspot
 */
function createSceneHotSpot(hs) {
    // Make sure hot spot pitch and yaw are numbers
    hs.pitch = Number(hs.pitch) || 0;
    hs.yaw = Number(hs.yaw) || 0;

    var div = document.createElement('div');
    div.className = 'pnlm-hotspot-base'
    if (hs.cssClass)
        div.className += ' ' + hs.cssClass;
    else
        div.className += ' pnlm-hotspot pnlm-sprite pnlm-' + escapeHTML(hs.type);

    var span = document.createElement('span');
    if (hs.text)
        span.innerHTML = escapeHTML(hs.text);

    div.onclick = function() {
        loadScene(hs.sceneId, hs.targetPitch, hs.targetYaw, hs.targetHfov);
        return false;
    };
    div.ontouchend = function() {
        loadScene(hs.sceneId, hs.targetPitch, hs.targetYaw, hs.targetHfov);
        return false;
    };
    div.style.cursor = 'pointer';
    span.style.cursor = 'pointer';

    renderContainer.appendChild(div);

    div.classList.add('pnlm-tooltip');
    div.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';

    return div;
};