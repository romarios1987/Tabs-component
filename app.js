import Tabs from './Tabs.js';

const tabs = [
  { title: 'Tab 1', content: 'Some text 1' },
  { title: 'Tab 2', content: 'Some text 2' },
  { title: 'Tab 3', content: 'Some text 3' },
  { title: 'Tab 4', content: 'Some text 4' },
  { title: 'Tab 5', content: 'Some text 5' },
];


const tabsComponent = new Tabs({
  element: document.querySelector('[data-component="tabs"]'),
  tabs,
});

tabsComponent.subscribe('tab-selected', ({ title, content }) => {
  console.log(`Tab ${ title } was selected \n ${content}`);
});
