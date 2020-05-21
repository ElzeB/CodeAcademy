import './assets/styles/app.scss';
import './assets/images/logo.svg';
import './assets/images/home-24px.svg';
import './assets/images/colorize-24px.svg';
import './assets/images/all_inclusive-24px.svg';
import './assets/images/emoji_objects-24px.svg';
import './assets/images/fireplace-24px.svg';
import './assets/images/create-24px.svg';
import './assets/images/format_list_bulleted-24px.svg';
import './assets/images/show_chart-24px.svg';
import './assets/images/map-24px.svg';
import './assets/images/email-24px.svg';
import './assets/images/file_copy-24px.svg';
import './assets/images/pages-24px.svg';
import './assets/images/crop_free-24px.svg';
import './assets/images/portret.jpg';
import './assets/images/green.jpg';
import './assets/images/purple.jpg';
import './assets/images/red.jpg';
import './assets/images/blue.jpg';
import './assets/images/ap1.jpg';
import './index.hbs';

document.querySelector('[data-toggle]').addEventListener('click', function (event) {
    let element = event.target.dataset.toggle;
    document.querySelectorAll('[data-' + element + ']').forEach(function (el) {
        el.classList.toggle(element + '-hide');
    })
});                                               
                                                    