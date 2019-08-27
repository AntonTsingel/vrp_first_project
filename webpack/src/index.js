import './components/header';
import './components/slider';
import './components/breadcrumbs';
import './components/sidebar';
import './components/main';
import './components/info';
import './components/footer';
import './common/css/main.css';
import './components/feedback';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));


