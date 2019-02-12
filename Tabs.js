import Component from './Component.js';

export default class Tabs extends Component {
  constructor({ element, tabs }) {
    super({ element });
    this.tabs = tabs;

    [this.currentTab] = this.tabs;

    this._render();

    this.on('click', 'tabs_title', (event) => {
      this.tabs.forEach((tab) => {
        if (tab.title === event.target.dataset.title) {
          this.currentTab = tab;
          this.emit('tab-selected', this.currentTab);
          this._render();
        }
      });
    });
  }

  _render() {
    this._element.innerHTML = `
            <div class="tabs-header">
            ${this.tabs.map(tab => `
                <div class="tab-title  ${tab === this.currentTab ? 'tab-active' : ''}"
                     data-element="tabs_title"
                     data-title="${tab.title}"
                >
                    ${tab.title}
                </div>`).join('')}
            </div>
            <div class="tabs-content">
                ${this.currentTab.content}
            </div>
        `;
  }
}
