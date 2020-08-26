import { LitElement, css, html, customElement } from 'lit-element';

import './header';
import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-checkbox';
import '@material/mwc-circular-progress';
import '@material/mwc-circular-progress-four-color';
import '@material/mwc-dialog';
import '@material/mwc-fab';
import '@material/mwc-formfield';
import '@material/mwc-switch';
import '@material/mwc-radio';
import '@material/mwc-icon-button';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-linear-progress';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import '@material/mwc-select';
import '@material/mwc-slider';
import '@material/mwc-snackbar';
import '@material/mwc-tab-bar';
import '@material/mwc-tab';
import '@material/mwc-textarea';
import '@material/mwc-textfield';
import '../ripple-logic.js';

@customElement('material-demo')
export class MaterialDemo extends LitElement {
  static get styles() {
    return css`
      .formfield mwc-formfield {
        display: block;
      }

      .component-section,
      .card {
        border-width: 1px;
        border-style: solid;
        border-color: hsl(0, 0%, 87.8%);
        border-radius: 4px;
        padding: 8px 16px 16px 16px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.6);
      }

      .sections-wrapper {
        /* two columns width + padading + gap */
        max-width: calc((450px + 16px * 2) * 2 + 24px);
        margin: 24px auto;
        columns: 2 400px;
        column-gap: 24px;
      }

      /* sections-wrapper max width + 48px margins + 15px scrollbar */
      @media (max-width: 1051px) {
        .sections-wrapper {
          /*     max-width: calc((450px + 16px * 2) * 2); */
          margin: 24px;
        }
      }

      #banner {
        background-color: rgb(245, 245, 245);
        color: rgb(0, 0, 0, 0.87);
        padding: 10px;
        text-align: center;
        font-size: 12px;
      }

      .section-header a {
        display: inline-flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.54);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        line-height: 36px;
        --mdc-icon-size: 16px;
        text-decoration: none;
      }

      .section-header a:hover,
      .section-header a:focus {
        color: rgba(0, 0, 0, 0.87);
      }

      .section-header {
        margin-bottom: 16px;
        letter-spacing: 1.2px;
      }

      .component-section {
        min-width: 240px;
        margin-bottom: 24px;
        box-sizing: border-box;
        break-inside: avoid;
      }

      .component-wrapper:not(.linear-progress) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .component-wrapper {
        margin-bottom: 16px;
      }

      .component-wrapper.button,
      .component-wrapper.fab,
      .component-wrapper.select,
      .component-wrapper.switch,
      .component-wrapper.textarea,
      .component-wrapper.textfield {
        justify-content: space-evenly;
      }

      .section-header mwc-icon {
        padding: 8px;
      }

      .material-divider {
        margin: 0px;
        border-color: rgba(0, 0, 0, 0.12);
        border-width: 0 0 1px 0;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <hr class="material-divider" />
      
      <div id="banner">
        Edit the code of this demo by
        <a href="https://glitch.com/edit/#!/remix/mwc-demos">remixing</a> this
        project, or view our API demos
        <a
          href="https://material-components.github.io/material-components-web-components/demos/"
          >here</a
        >!
        <!-- unbundled -->
      </div>

      <div class="sections-wrapper">
        <!-- Button -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/button"
                target="_blank"
              >
                Button
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .button {
                /* --mdc-theme-primary: red; */
              }
            </style>

            <div class="button component-wrapper">
              <mwc-button raised label="button"></mwc-button>
              <mwc-button label="button"></mwc-button>
              <mwc-button outlined label="button"></mwc-button>
            </div>
          </div>
        </section>

        <!-- Checkbox -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/checkbox"
                target="_blank"
              >
                Checkbox
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .checkbox {
                /* --mdc-theme-secondary: red; */
              }
            </style>

            <div class="checkbox component-wrapper">
              <mwc-checkbox></mwc-checkbox>
              <mwc-checkbox indeterminate></mwc-checkbox>
              <mwc-checkbox checked></mwc-checkbox>
            </div>
          </div>
        </section>

        <!-- Circular Progress -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/circular-progress"
                target="_blank"
              >
                Circular Progress
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .circular-progress {
                --mdc-circular-progress-bar-color-1: #2196f3;
                --mdc-circular-progress-bar-color-2: #e91e63;
                --mdc-circular-progress-bar-color-3: #ffc107;
                --mdc-circular-progress-bar-color-4: #03dac5;
              }
            </style>

            <div class="circular-progress component-wrapper">
              <mwc-circular-progress progress=".7"></mwc-circular-progress>
              <mwc-circular-progress indeterminate></mwc-circular-progress>
              <mwc-circular-progress-four-color
                indeterminate
              ></mwc-circular-progress-four-color>
            </div>
          </div>
        </section>

        <!-- Dialog -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/dialog"
                target="_blank"
              >
                Dialog
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .dialog {
                /* --mdc-theme-surface: gold; */
              }
            </style>

            <div class="dialog component-wrapper">
              <mwc-button
                outlined
                class="open"
                label="toggle dialog"
              ></mwc-button>
              <mwc-dialog heading="Title">
                <div>Here is some content!</div>
                <mwc-button
                  slot="primaryAction"
                  dialogaction="close"
                  label="primary action"
                >
                </mwc-button>
                <mwc-button
                  slot="secondaryAction"
                  dialogaction="close"
                  label="secondary action"
                >
                </mwc-button>
              </mwc-dialog>
            </div>
            <script type="module">
              const openButton = document.querySelector('.dialog .open');
              const dialog = document.querySelector('.dialog mwc-dialog');

              openButton.addEventListener('click', () => {
                dialog.open = !dialog.open;
              });
            </script>
          </div>
        </section>

        <!-- FAB -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/fab"
                target="_blank"
              >
                FAB
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .fab {
                /* --mdc-theme-secondary: red; */
              }

              .fab.component-wrapper mwc-fab {
                margin: 0 8px;
                align-self: center;
              }
            </style>

            <div class="fab component-wrapper">
              <mwc-fab icon="edit"></mwc-fab>
              <mwc-fab mini icon="edit"></mwc-fab>
              <mwc-fab extended icon="edit" label="edit"></mwc-fab>
            </div>
          </div>
        </section>

        <!-- Formfield -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/formfield"
                target="_blank"
              >
                Formfield
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .formfield {
                /* --mdc-theme-text-primary-on-background: red; */
              }
            </style>

            <div class="formfield component-wrapper">
              <span>
                <mwc-formfield label="switch"
                  ><mwc-switch></mwc-switch
                ></mwc-formfield>
                <mwc-formfield label="checkbox"
                  ><mwc-checkbox></mwc-checkbox
                ></mwc-formfield>
                <mwc-formfield label="radio 1"
                  ><mwc-radio group="a"></mwc-radio
                ></mwc-formfield>
                <mwc-formfield label="radio 2"
                  ><mwc-radio group="a"></mwc-radio
                ></mwc-formfield>
              </span>
            </div>
          </div>
        </section>

        <!-- Icon -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/icon"
                target="_blank"
              >
                Icon
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .icon {
                /* color: red; */
                /* --mdc-icon-size: 64px; */
              }
            </style>

            <div class="icon component-wrapper">
              <mwc-icon>shopping_cart</mwc-icon>
            </div>
          </div>
        </section>

        <!-- Icon Button -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/icon-button"
                target="_blank"
              >
                Icon Button
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .icon-button {
                /* color: red; */
                /* --mdc-icon-size: 64px; */
              }
            </style>

            <div class="icon-button component-wrapper">
              <mwc-icon-button icon="polymer"></mwc-icon-button>
            </div>
          </div>
        </section>

        <!-- Icon Button Toggle -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/icon-button-toggle"
                target="_blank"
              >
                Icon Button Toggle
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .icon-button-toggle {
                /* color: red; */
                /* --mdc-icon-size: 64px; */
              }
            </style>

            <div class="icon-button-toggle component-wrapper">
              <mwc-icon-button-toggle
                onicon="sentiment_very_satisfied"
                officon="sentiment_very_dissatisfied"
              >
              </mwc-icon-button-toggle>
              <mwc-icon-button-toggle>
                <svg
                  slot="onIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
                <svg
                  slot="offIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                  <path
                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                  />
                </svg>
              </mwc-icon-button-toggle>
              <mwc-icon-button-toggle>
                <img slot="onIcon" src="https://picsum.photos/id/28/24/24" />
                <img
                  slot="offIcon"
                  src="https://picsum.photos/id/141/24/24?grayscale"
                />
              </mwc-icon-button-toggle>
            </div>
          </div>
        </section>

        <!-- Linear Progress -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/linear-progress"
                target="_blank"
              >
                Linear Progress
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .linear-progress {
                /* --mdc-theme-primary: red; */
              }
            </style>

            <div class="linear-progress component-wrapper">
              <mwc-linear-progress
                determinate
                progress="0.3"
                buffer="0.7"
                class="demo-progress-bar"
              ></mwc-linear-progress>
            </div>
          </div>
        </section>

        <!-- List -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/list"
                target="_blank"
              >
                List
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .list {
                /* --mdc-ripple-color: red; */
              }

              .component-section .list mwc-list {
                border: 1px solid lightgray;
                max-width: 300px;
                margin-bottom: 8px;
              }

              .component-section .list .inverted {
                color: white;
                background-color: gray;
              }
            </style>

            <div class="list component-wrapper">
              <mwc-list>
                <mwc-list-item twoline graphic="avatar" noninteractive>
                  <span>User Name</span>
                  <span slot="secondary">user@domain.tld</span>
                  <mwc-icon slot="graphic" class="inverted">tag_faces</mwc-icon>
                </mwc-list-item>
                <li divider role="separator"></li>
                <mwc-list-item graphic="icon">
                  <span>FAQ</span>
                  <mwc-icon slot="graphic">help_outline</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <span>Switch account</span>
                  <mwc-icon slot="graphic">people_alt_outline</mwc-icon>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <span>Settings</span>
                  <mwc-icon slot="graphic">settings_outline</mwc-icon>
                </mwc-list-item>
                <li divider padded role="separator"></li>
                <mwc-list-item graphic="icon">
                  <span>Sign out</span>
                  <mwc-icon slot="graphic">exit_to_app</mwc-icon>
                </mwc-list-item>
              </mwc-list>
            </div>
          </div>
        </section>

        <!-- Menu -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/menu"
                target="_blank"
              >
                Menu
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .menu {
                /* --mdc-ripple-color: red; */
              }

              .component-section .menu mwc-list-item:not([selected]) mwc-icon {
                display: none;
              }
            </style>

            <div class="menu component-wrapper">
              <mwc-button outlined label="toggle menu"></mwc-button>

              <mwc-menu absolute multi>
                <mwc-list-item selected group="a" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>a-one</span>
                </mwc-list-item>
                <mwc-list-item group="a" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>a-two</span>
                </mwc-list-item>
                <mwc-list-item group="a" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>a-three</span>
                </mwc-list-item>
                <li divider></li>
                <mwc-list-item selected group="b" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>b-one</span>
                </mwc-list-item>
                <mwc-list-item group="b" graphic="icon">
                  <mwc-icon slot="graphic">check</mwc-icon>
                  <span>b-two</span>
                </mwc-list-item>
              </mwc-menu>
            </div>

            <script type="module">
              const openButton = document.querySelector(
                '.component-section .menu mwc-button'
              );
              const menu = document.querySelector(
                '.component-section .menu mwc-menu'
              );

              menu.anchor = openButton;

              openButton.addEventListener('click', () => {
                menu.open = !menu.open;
              });
            </script>
          </div>
        </section>

        <!-- Radio -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/radio"
                target="_blank"
              >
                Radio
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .radio {
                /* --mdc-theme-secondary: red; */
              }
            </style>

            <div class="radio component-wrapper">
              <mwc-radio group="group1"></mwc-radio>
              <mwc-radio group="group1" checked></mwc-radio>
              <mwc-radio group="group1" disabled></mwc-radio>
            </div>
          </div>
        </section>

        <!-- Ripple -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/ripple"
                target="_blank"
              >
                Ripple
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .ripple {
                /* --mdc-ripple-color: red; */
              }

              .component-section .ripple .demo-box {
                min-width: 128px;
                min-height: 128px;
                display: inline-flex;
                position: relative;
                justify-content: center;
                text-align: center;
                flex-direction: column;
                margin: 4px;
              }

              .component-section .ripple.component-wrapper {
                align-items: center;
                user-select: none;
              }

              .component-section .ripple .unbounded {
                min-height: 64px;
              }
            </style>

            <div class="ripple component-wrapper">
              <div class="demo-box card" tabindex="0">
                Primary<mwc-ripple primary></mwc-ripple>
              </div>
              <div class="demo-box card" tabindex="0">
                Accent<mwc-ripple accent></mwc-ripple>
              </div>
              <div class="demo-box card" tabindex="0">
                <div
                  class="noRipple"
                  tabindex="0"
                  style="border: 1px solid black"
                >
                  box not ripple
                </div>
                <mwc-ripple class="customControls"></mwc-ripple>
              </div>
              <div class="demo-box card unbounded" tabindex="0">
                Unbounded<mwc-ripple unbounded></mwc-ripple>
              </div>
            </div>

            <script type="module" src="./ripple-logic.js"></script>
          </div>
        </section>

        <!-- Select -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/select"
                target="_blank"
              >
                Select
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .select {
                /* --mdc-theme-primary: red; */
              }
            </style>

            <div class="select component-wrapper">
              <mwc-select label="filled">
                <mwc-list-item></mwc-list-item>
                <mwc-list-item value="1">Option 1</mwc-list-item>
                <mwc-list-item value="2">Option 2</mwc-list-item>
                <mwc-list-item value="3">Option 3</mwc-list-item>
              </mwc-select>

              <mwc-select outlined label="outlined">
                <mwc-list-item></mwc-list-item>
                <mwc-list-item value="1">Option 1</mwc-list-item>
                <mwc-list-item value="2">Option 2</mwc-list-item>
                <mwc-list-item value="3">Option 3</mwc-list-item>
              </mwc-select>
            </div>
          </div>
        </section>

        <!-- Slider -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/slider"
                target="_blank"
              >
                Slider
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .slider {
                /* --mdc-theme-secondary: red; */
              }

              .component-section .slider mwc-slider {
                width: 100%;
              }
            </style>

            <div class="slider component-wrapper">
              <mwc-slider pin max="50" value="10" step="5"></mwc-slider>
            </div>
          </div>
        </section>

        <!-- Snackbar -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/snackbar"
                target="_blank"
              >
                Snackbar
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .snackbar {
                /* --mdc-snackbar-action-color: red; */
              }
            </style>

            <div class="snackbar component-wrapper">
              <!-- <mwc-button outlined ripple label="open snackbar"></mwc-button> -->

              <mwc-snackbar labeltext="Can't send photo. Retry in 5 seconds.">
                <mwc-button slot="action">RETRY</mwc-button>
                <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
              </mwc-snackbar>
            </div>
            <script type="module">
              const openButton = document.querySelector(
                '.component-section .snackbar mwc-button[outlined]'
              );
              const snackbar = document.querySelector(
                '.component-section .snackbar mwc-snackbar'
              );
              openButton.onclick = function () {
                snackbar.stacked = false;
                snackbar.leading = false;
                snackbar.open = true;
              };
            </script>
          </div>
        </section>

        <!-- Switch -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/switch"
                target="_blank"
              >
                Switch
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .switch {
                /* --mdc-theme-secondary: red; */
              }

              .component-section .switch mwc-switch {
                margin: 0 4px;
              }
            </style>

            <div class="switch component-wrapper">
              <mwc-switch></mwc-switch>
              <mwc-switch checked></mwc-switch>
              <mwc-switch disabled></mwc-switch>
              <mwc-switch disabled checked></mwc-switch>
            </div>
          </div>
        </section>

        <!-- Tabs -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/tab-bar"
                target="_blank"
              >
                Tabs
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .tabs {
                /* --mdc-theme-primary: red; */
              }

              .component-wrapper.tabs mwc-tab-bar {
                width: 100%;
              }
            </style>

            <div class="tabs component-wrapper">
              <mwc-tab-bar>
                <mwc-tab label="one"></mwc-tab>
                <mwc-tab label="two"></mwc-tab>
                <mwc-tab label="three"></mwc-tab>
              </mwc-tab-bar>
            </div>
          </div>
        </section>

        <!-- Textarea -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/textarea"
                target="_blank"
              >
                Textarea
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .textarea {
                /* --mdc-theme-secondary: red; */
              }

              .component-wrapper.textarea mwc-textarea {
                width: 200px;
              }
            </style>

            <div class="textarea component-wrapper">
              <mwc-textarea
                label="Standard"
                helper="helper text"
                required
                charcounter
                maxlength="200"
                validationmessage="this is required"
              >
              </mwc-textarea>
              <mwc-textarea
                outlined
                label="Outlined"
                helper="helper text"
                required
                charcounter
                maxlength="200"
                validationmessage="this is required"
              >
              </mwc-textarea>
            </div>
          </div>
        </section>

        <!-- Textfield -->
        <section class="component-section">
          <div>
            <div class="section-header">
              <a
                href="https://github.com/material-components/material-components-web-components/tree/master/packages/textfield"
                target="_blank"
              >
                Textfield
                <mwc-icon>open_in_new</mwc-icon>
              </a>
            </div>

            <style>
              .component-section .textfield {
                /* --mdc-theme-secondary: red; */
              }

              .component-wrapper.textfield mwc-textfield {
                display: inline-block;
                width: 200px;
              }
            </style>

            <div class="textfield component-wrapper">
              <mwc-textfield
                label="Standard"
                helper="helper text"
                required
                charcounter
                maxlength="200"
                validationmessage="this is required"
              >
              </mwc-textfield>
              <mwc-textfield
                outlined
                label="Outlined"
                helper="helper text"
                required
                charcounter
                maxlength="200"
                validationmessage="this is required"
              >
              </mwc-textfield>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
