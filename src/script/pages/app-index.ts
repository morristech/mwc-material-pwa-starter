import { LitElement, css, html, customElement } from 'lit-element';

import { Router } from '@vaadin/router';
import '@pwabuilder/pwainstall';

import '../components/header';
import '../components/material-demo.js';

@customElement('app-index')
export class AppIndex extends LitElement {
  static get styles() {
    return css`
      #header {
        --mdc-theme-primary: white;
        --mdc-theme-on-primary: #424242;
      }

      #header [slot='title'] span {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      mwc-top-app-bar-fixed [slot='title'] {
        display: flex;
        align-items: center;
      }

      mwc-top-app-bar-fixed img {
        margin-right: 8px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }

      #welcomeBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #welcomeBlock h2 {
        margin-bottom: 0;
      }

      #welcomeBlock p {
        max-width: 22em;
      }

      #welcomeBlock img {
        width: 6em;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      button {
        cursor: pointer;
      }

      @media (spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit-element
    // for more info check out the lit-element docs https://lit-element.polymer-project.org/guide/lifecycle

    // For more info on using the @vaadin/router check here https://vaadin.com/router
    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setRoutes([
      // temporarily cast to any because of a Type bug with the router
      {
        path: '',
        animate: true,
        children: [
          { path: '/', component: 'material-demo' },
          {
            path: '/about',
            component: 'app-about',
            action: async () => {
              await import('./app-about.js');
            },
          },
        ],
      } as any,
    ]);
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <div>
        <mwc-top-app-bar-fixed id="header">
          <div slot="title">
            <img src="./assets/material-icon.svg" />
            <span>Material Web Components Playground</span>
          </div>
          ${'share' in navigator
            ? html` <mwc-icon-button
                icon="share"
                slot="actionItems"
                @click="${this.share}"
              ></mwc-icon-button>`
            : null}
        </mwc-top-app-bar-fixed>

        <main>
          <div id="routerOutlet"></div>
        </main>
        <!-- @ts-ignore -->
        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
  }
}
