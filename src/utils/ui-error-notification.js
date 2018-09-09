define([
], function(
) {
    return {
        show: show
    };

    function show(messageText) {
        var element = document.createElement('DIV');

        element.style.position = 'absolute';
        element.style.zIndex = '100';
        element.style.top = '0';
        element.style.left = 'calc(50% - 160px)';

        element.style.backgroundColor = 'pink';
        element.style.height = '4em';
        element.style.width = '320px';
        element.style.padding = '10px';
        element.style.borderRadius = '2px';

        element.innerText = 'ERROR: ' + messageText;

        mount();

        function mount() {
            document.body.appendChild(element);
        }

        function unmount() {
            element.remove();
        }
    }
});
