import App from './app';
import AudioNode from './audio-node';

document.addEventListener('deviceready', () => {
    const node = new AudioNode('aaaa');
    node.alert();
}, false);
