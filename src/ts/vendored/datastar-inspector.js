// Datastar Inspector v1.1.4 licensed to GitHub user @brik-bot
var k=`<style>
  :host {
    --inspector-bg: #ebede9;
    --inspector-bg-light: #c7cfcc;
    --inspector-bg-hover: #d9dedc;
    --inspector-bg-dark: #a8b5b2;
    --inspector-color: #090a14;
    --inspector-color-blur: #819796;
    --inspector-color-filtered: #d73a49;
    --inspector-color-matched: #28a745;
    --color-purple: #A599FF;
    --color-gold: #FFA116;
    --color-html5: #E34C26;
    --color-html5-dark: #F06529;
    --color-dark-text: #0A0A0A;
    --color-white: #FFFFFF;
    background-color: var(--inspector-bg);
    border: 1px solid var(--inspector-bg-light);
    border-bottom: 0;
    border-radius: 7px 7px 0 0;
    color: var(--inspector-color);
    position: fixed;
    bottom: 0;
    right: 24px;
    max-width: 640px;
    margin: 0 5%;
    font-family: monospace;
    z-index: 9999;

    header, #collapsed {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 8px 10px;
      font-size: 13px;
      font-weight: bold;
      user-select: none;
      cursor: pointer;
      box-sizing: border-box;
      height: 40px;

      button {
        padding: 2px 4px;
      }

      h1 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: inherit;
        margin: 0;
        margin-left: -3px;

        button {
          font-size: 17px;
          padding: 0px 4px;
        }
      }
    }

    header {
      width: 640px;

      nav {
        display: flex;
        gap: 4px;
        
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;

          span {
            font-weight: bold;
          }
          
          svg {
            color: inherit;
          }
          
          &[data-type="currentSignals"][aria-selected="true"] {
            background-color: var(--color-purple);
            color: var(--color-dark-text);
            border-color: var(--color-purple);
          }
          
          &[data-type="signalPatchEvent"][aria-selected="true"] {
            background-color: var(--color-gold);
            color: var(--color-dark-text);
            border-color: var(--color-gold);
          }
          
          &[data-type="sseEvent"][aria-selected="true"] {
            background-color: var(--color-html5);
            color: var(--color-white);
            border-color: var(--color-html5);
          }
          
          &[data-type="persistedData"][aria-selected="true"] {
            background-color: var(--inspector-color-matched);
            color: var(--color-white);
            border-color: var(--inspector-color-matched);
          }
        }
      }
    }

    #collapsed {
      padding: 8px 12px 8px 15px;
    }

    button {
      background-color: var(--inspector-bg);
      border: 1px solid var(--inspector-bg-dark);
      border-radius: 4px;
      color: var(--inspector-color);
      font-family: inherit;
      font-size: 11px;
      flex-shrink: 0;
      cursor: pointer;

      &:hover {
        background-color: var(--inspector-bg-hover);
      }
    }

    pre {
      margin: 0;
    }

    main {
      max-height: 40vh;
      font-size: 12px;
      border-top: 1px solid var(--inspector-bg-dark);
      display: flex;
      flex-direction: column;

      .filters input[type="text"] {
        background-color: var(--inspector-bg);
        border: 1px solid var(--inspector-bg-dark);
        border-radius: 4px;
        color: var(--inspector-color);
        font-family: inherit;
        font-size: 11px;
        padding: 4px 6px;
        flex: 1;
        min-width: 0;
      }
      
      .input-with-icon {
        position: relative;
        display: flex;
        flex: 1;
        min-width: 0;
        
        input {
          padding-left: 32px;
          width: 100%;
        }
        
        .input-icon {
          position: absolute;
          left: 8px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          pointer-events: none;
          opacity: 0.6;
          color: var(--inspector-color);
        }
      }

      .filters label {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        user-select: none;
        cursor: pointer;
        white-space: nowrap;
        margin: 0 4px;
        
        span {
          font-weight: bold;
          font-family: monospace;
        }
      }

      .filters input[type="checkbox"] {
        cursor: pointer;
        margin: 0;
        flex-shrink: 0;
      }
        
      #resetFilters, #resetPersistedDataFilters, #refreshPersistedData {
        padding-bottom: 0;
      }

      #copyFilterObject, #copyPersistedDataFilterObject {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        flex-shrink: 0;
        gap: 4px;
        
        svg {
          width: 14px;
          height: 14px;
        }
      }

      #clearPersistedData {
        display: flex; 
        align-items: center; 
        gap: 2px;
      }

      .regex-display {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        font-size: 11px;
        font-family: monospace;
        
        .regex-content {
          display: flex;
          gap: 4px;
          flex: 1;
          
          &::before {
            content: "{";
            color: var(--inspector-color);
          }
          
          &::after {
            content: "}";
            color: var(--inspector-color);
          }
        }
        
        .regex-include {
          color: var(--inspector-color-matched);
        }
        
        .regex-exclude {
          color: var(--inspector-color-filtered);
        }
        
        .regex-include:empty,
        .regex-exclude:empty {
          display: none;
        }
        
        .regex-include:not(:empty)::before {
          content: "include: ";
          color: var(--inspector-color);
          font-weight: normal;
        }
        
        .regex-exclude:not(:empty)::before {
          content: ", exclude: ";
          color: var(--inspector-color);
          font-weight: normal;
        }
      }

      p {
        margin: 8px 0;
        padding: 4px 10px;
      }

      footer {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-top: 1px solid var(--inspector-bg-dark);
        background-color: var(--inspector-bg-hover);
        font-size: 11px;
        
        &.filters {
          flex-wrap: wrap;
          row-gap: 12px;
          column-gap: 8px;
        }
        
        label {
          font-weight: normal;
        }
      }

      ul {
        margin: 8px 0;
        padding: 0;
        list-style: none;

        li {
          display: flex;
          align-items: flex-start;
          gap: 4px;
          padding: 4px 10px;

          &:hover {
            background-color: var(--inspector-bg-hover);
          }

          span {
            flex-shrink: 0;
            margin-right: 4px;
          }

          div {
            display: flex;
            flex: 1;
            overflow-x: auto;
          }
          
          summary {
            list-style: none;
            position: relative;
            padding-right: 1.2em;
            cursor: pointer;
            width: fit-content;
            
            &::after {
              content: '\u25B8';
              position: absolute;
              top: 0;
              right: 0;
              font-size: 16px;
              line-height: 16px;
              transition: transform 0.2s;
            }
          }

          details[open] {
            summary.blurrable {
              color: var(--inspector-color-blur);
            }
            
            summary::after {
              transform: rotate(90deg);
            }
          }
        }
      }

      .currentSignals ul li {
        border-left: 3px solid var(--color-purple);

        &:hover {
          background-color: initial;
        }
      }

      .signalPatchEvents ul li {
        border-left: 3px solid var(--color-gold);
      }

      .sseEvents ul li {
        border-left: 3px solid var(--color-html5-dark);
      }

      .persistedData ul li {
        border-left: 3px solid var(--inspector-color-matched);
      }

      button {
        padding: 2px 4px;
        flex-shrink: 0;
        
        &.copy-btn, &.log-btn, &.clear-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          position: sticky;
          top: calc(1em + 1px);
          
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
      
      input[type="number"] {
        background-color: var(--inspector-bg);
        border: 1px solid var(--inspector-bg-dark);
        border-radius: 4px;
        color: var(--inspector-color);
        font-family: inherit;
        font-size: 11px;
        padding: 4px 6px;
        flex-shrink: 0;
      }
      
      pre {
        .filtered {
          color: var(--inspector-color-filtered);
        }
        .matched {
          color: var(--inspector-color-matched);
        }
      }
      
      .signals-table {
        width: 100%;
        border-collapse: collapse;
        font-family: monospace;
        
        th {
          background-color: var(--inspector-bg-dark);
          padding: 6px 10px;
          text-align: left;
          border: 1px solid var(--inspector-bg-light);
          font-weight: bold;
        }
        
        td {
          padding: 4px 10px;
          border: 1px solid var(--inspector-bg-light);
        }
        
        tr:nth-child(even) {
          background-color: var(--inspector-bg-hover);
        }
        
        tr.matched td {
          color: var(--inspector-color-matched);
        }
        
        tr.filtered td {
          color: var(--inspector-color-filtered);
        }
      }
      
      /* Datastar signal highlighting styles */
      .datastar-signal-highlight {
        outline: 3px solid var(--color-purple) !important;
        outline-offset: 3px !important;
        background-color: rgba(165, 153, 255, 0.3) !important;
        box-shadow: 0 0 10px rgba(165, 153, 255, 0.5) !important;
        border: 2px solid var(--color-purple) !important;
        position: relative !important;
        z-index: 9998 !important;
      }
      
      .signal-path-hoverable {
        cursor: pointer;
        transition: background-color 0.2s;
      }
      
      .signal-path-hoverable:hover {
        background-color: var(--inspector-bg-hover);
      }

      .toggle-switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        
        input {
          opacity: 0;
          width: 0;
          height: 0;
          
          &:checked + .toggle-slider {
            background-color: var(--inspector-color);
          }
          
          &:checked + .toggle-slider:before {
            transform: translateX(18px);
          }
        }
        
        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--inspector-bg-dark);
          transition: .2s;
          border-radius: 20px;
          
          &:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 2px;
            bottom: 2px;
            background-color: var(--inspector-bg);
            transition: .2s;
            border-radius: 50%;
          }
        }
      }
      
      
      .filter-row {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
      }
      
      section {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
      }
      
      .scroll-content {
        overflow-y: auto;
        flex: 1;
        min-height: 0;
      }
      
      section#persistedDataContent {
        h3 {
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 8px;
          margin: 8px 10px; 
          font-size: 12px; 
          font-weight: bold; 
          color: var(--inspector-color);

        }

        #persistedDataStorageTitle {
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }

        .persisted-key-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--inspector-bg-dark);
          border-radius: 4px;
        }
        
        .persisted-key-caption {
          font-weight: bold;
          padding: 4px 8px;
          background-color: var(--inspector-bg-hover);
          border-radius: 4px 4px 0 0;
          border-bottom: 1px solid var(--inspector-bg-dark);
          display: flex;
          align-items: center;
          justify-content: end;
          width: 100%;
          box-sizing: border-box;
        }
        
        .caption-text {
          font-size: 12px;
          color: var(--inspector-color);
        }
        
        .caption-buttons {
          display: flex;
          align-items: center;
          justify-content: end;
          gap: 4px;
          flex-shrink: 0;
        }
        
        pre {
          padding: 8px;
          margin: 0;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          font-family: monospace;
        }
        
        table th {
          background-color: var(--inspector-bg-dark);
          padding: 6px 10px;
          text-align: left;
          font-weight: bold;
        }
        
        table td {
          padding: 4px 10px;
        }
        
        table tr:nth-child(even) {
          background-color: var(--inspector-bg-hover);
        }
        
        table tr.matched td {
          color: var(--inspector-color-matched);
        }
        
        table tr.filtered td {
          color: var(--inspector-color-filtered);
        }
      }
      
      .filter-row-secondary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 100%;
      }
    }
  }


  @media (prefers-color-scheme: dark) {
    :host {
      --inspector-bg: #202e37;
      --inspector-bg-light: #394a50;
      --inspector-bg-hover: #1a262e;
      --inspector-bg-dark: #577277;
      --inspector-color: #ebede9;
      --inspector-color-blur: #819796;
      --inspector-color-filtered: #f97583;
      --inspector-color-matched: #34d058;
    }

    header nav button {
      &[data-type="currentSignals"][aria-selected="true"] {
        background-color: var(--color-purple);
        color: var(--color-dark-text);
        border-color: var(--color-purple);
      }
      
      &[data-type="signalPatchEvent"][aria-selected="true"] {
        background-color: var(--color-gold);
        color: var(--color-dark-text);
        border-color: var(--color-gold);
      }
      
      &[data-type="sseEvent"][aria-selected="true"] {
        background-color: var(--color-html5);
        color: var(--color-white);
        border-color: var(--color-html5);
      }
      
      &[data-type="persistedData"][aria-selected="true"] {
        background-color: var(--inspector-color-matched);
        color: var(--color-white);
        border-color: var(--inspector-color-matched);
      }
    }
  }
</style>

<template id="copy-button-template">
  <button class="copy-btn" title="Copy to clipboard">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <use href="#copy-icon"/>
    </svg>
    <span style="display: none"></span>
  </button>
</template>

<template id="log-button-template">
  <button class="log-btn" title="Log to the console">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="currentColor" fill-rule="evenodd" d="M9.586 11L7.05 8.464L8.464 7.05l4.95 4.95l-4.95 4.95l-1.414-1.414L9.586 13H3v-2zM11 3h8c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-8v-2h8V5h-8z"/>
    </svg>
    <span style="display: none"></span>
  </button>
</template>

<template id="clear-button-template">
  <button class="clear-btn" title="Clear persisted data">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <use href="#clear-icon"/>
    </svg>
    <span>Clear</span>
  </button>
</template>

<svg style="display: none">
  <defs>
    <g id="datastar-logo">
      <g fill="#752438"><path d="m20 5h1v2h-1z"/><path d="m19 6h1v2h-1z"/><path d="m21 3h1v2h-1z"/><path d="m5 13h1v1h-1z"/><path d="m10 19h1v1h-1z"/><path d="m14 15h1v1h-1z"/><path d="m13 16h1v1h-1z"/><path d="m12 17h1v1h-1z"/><path d="m4 14h1v1h-1z"/><path d="m17 6h1v1h-1z"/></g>
      <g fill="#73bed3"><path d="m11 7h1v1h-1z"/><path d="m12 6h1v1h-1z"/><path d="m13 5h1v1h-1z"/><path d="m9 9h1v1h-1z"/><path d="m10 8h1v1h-1z"/></g>
      <g fill="#172038"><path d="m9 12h1v1h-1z"/><path d="m16 12h1v1h-1z"/><path d="m12 15h1v2h-1z"/><path d="m15 13h1v1h-1z"/><path d="m13 15h1v1h-1z"/><path d="m8 11h1v1h-1z"/><path d="m17 11h1v1h-1z"/><path d="m10 17h2v1h-2z"/><path d="m6 14h1v1h-1z"/><path d="m11 14h1v1h-1z"/><path d="m14 14h1v1h-1z"/><path d="m18 10h1v1h-1z"/></g>
      <g fill="#be772b"><path d="m8 19h1v2h-1z"/><path d="m5 20h2v1h-2z"/><path d="m9 18h1v1h-1z"/><path d="m5 16h1v1h-1z"/></g>
      <g fill="#da863e"><path d="m17 2h3v1h-3z"/><path d="m15 4h1v1h-1z"/><path d="m16 3h1v1h-1z"/></g>
      <g fill="#cf573c"><path d="m6 10h1v1h-1z"/><path d="m4 12h1v1h-1z"/><path d="m10 20h1v1h-1z"/><path d="m3 13h1v1h-1z"/><path d="m9 13h1v1h-1z"/><path d="m20 2h2v1h-2z"/><path d="m11 19h1v1h-1z"/><path d="m6 16h1v1h-1z"/><path d="m14 16h1v1h-1z"/><path d="m7 15h1v1h-1z"/><path d="m13 17h1v1h-1z"/><path d="m18 3h1v1h-1z"/><path d="m5 11h1v1h-1z"/><path d="m2 14h1v1h-1z"/><path d="m8 14h1v1h-1z"/><path d="m17 3h1v2h-1z"/><path d="m12 18h1v1h-1z"/></g>
      <g fill="#3c5e8b"><path d="m11 9h1v3h-1z"/><path d="m7 14h1v1h-1z"/><path d="m15 11h1v1h-1z"/><path d="m11 15h1v1h-1z"/><path d="m14 10h1v3h-1z"/><path d="m12 8h1v5h-1z"/><path d="m8 12h1v2h-1z"/><path d="m13 7h1v1h-1z"/><path d="m16 7h1v4h-1z"/><path d="m6 13h1v1h-1z"/><path d="m15 6h1v2h-1z"/><path d="m13 11h1v3h-1z"/><path d="m14 6h1v3h-1z"/><path d="m13 9h1v1h-1z"/><path d="m15 9h1v1h-1z"/><path d="m17 8h1v2h-1z"/><path d="m10 15h1v2h-1z"/><path d="m8 10h1v1h-1z"/><path d="m10 10h1v1h-1z"/></g>
      <g fill="#253a5e"><path d="m17 10h1v1h-1z"/><path d="m11 13h1v1h-1z"/><path d="m14 13h1v1h-1z"/><path d="m18 9h1v1h-1z"/><path d="m9 16h1v1h-1z"/><path d="m11 16h1v1h-1z"/><path d="m7 12h1v2h-1z"/><path d="m12 14h1v1h-1z"/><path d="m9 11h1v1h-1z"/><path d="m16 11h1v1h-1z"/><path d="m10 12h1v1h-1z"/><path d="m15 12h1v1h-1z"/></g>
      <g fill="#e8c170"><path d="m8 17h1v1h-1z"/><path d="m6 15h1v1h-1z"/><path d="m4 19h1v2h-1z"/><path d="m5 18h1v2h-1z"/><path d="m3 20h1v2h-1z"/><path d="m7 18h1v1h-1z"/></g>
      <g fill="#241527"><path d="m20 7h1v1h-1z"/><path d="m18 8h1v1h-1z"/><path d="m19 8h1v2h-1z"/><path d="m21 5h1v2h-1z"/></g>
      <g fill="#602c2c"><path d="m9 17h1v1h-1z"/><path d="m6 18h1v1h-1z"/></g>
      <g fill="#4f8fba"><path d="m11 8h1v1h-1z"/><path d="m7 11h1v1h-1z"/><path d="m10 11h1v1h-1z"/><path d="m13 6h1v1h-1z"/><path d="m13 14h1v1h-1z"/><path d="m9 10h1v1h-1z"/><path d="m6 12h1v1h-1z"/><path d="m11 12h1v1h-1z"/><path d="m14 5h1v1h-1z"/><path d="m10 9h1v1h-1z"/><path d="m12 13h1v1h-1z"/><path d="m12 7h1v1h-1z"/></g>
      <g fill="#a53030"><path d="m19 3h1v3h-1z"/><path d="m6 11h1v1h-1z"/><path d="m6 17h1v1h-1z"/><path d="m14 17h1v1h-1z"/><path d="m13 18h1v1h-1z"/><path d="m20 3h1v2h-1z"/><path d="m3 14h1v1h-1z"/><path d="m9 14h1v1h-1z"/><path d="m12 19h1v1h-1z"/><path d="m8 15h1v1h-1z"/><path d="m7 16h1v1h-1z"/><path d="m4 13h1v1h-1z"/><path d="m10 13h1v1h-1z"/><path d="m18 4h1v3h-1z"/><path d="m7 10h1v1h-1z"/><path d="m16 4h1v2h-1z"/><path d="m11 20h1v1h-1z"/><path d="m17 5h1v1h-1z"/><path d="m5 12h1v1h-1z"/><path d="m10 21h1v1h-1z"/><path d="m14 4h1v1h-1z"/></g>
      <g fill="#411d31"><path d="m15 5h1v1h-1z"/><path d="m8 16h1v1h-1z"/><path d="m9 15h1v1h-1z"/><path d="m17 7h2v1h-2z"/><path d="m16 6h1v1h-1z"/><path d="m5 14h1v1h-1z"/><path d="m10 14h1v1h-1z"/><path d="m10 18h2v1h-2z"/><path d="m7 17h1v1h-1z"/></g>
      <g fill="#a4dddb"><path d="m13 10h1v1h-1z"/><path d="m15 10h1v1h-1z"/><path d="m13 8h1v1h-1z"/><path d="m15 8h1v1h-1z"/><path d="m14 9h1v1h-1z"/></g>
      <g fill="#de9e41"><path d="m4 18h1v1h-1z"/><path d="m8 18h1v1h-1z"/><path d="m5 17h1v1h-1z"/><path d="m3 19h1v1h-1z"/><path d="m6 19h2v1h-2z"/></g>
    </g>
    
    <!-- Common icons -->
    <g id="copy-icon">
      <path fill="currentColor" d="M4 2h11v2H6v13H4zm4 4h12v16H8zm2 2v12h8V8z"/>
    </g>
    
    <g id="reset-icon">
      <path fill="currentColor" d="M11.77 3c-2.65.07-5 1.28-6.6 3.16L3.85 4.85a.5.5 0 0 0-.85.36V9.5c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85L6.59 7.59C7.88 6.02 9.82 5 12 5c4.32 0 7.74 3.94 6.86 8.41c-.54 2.77-2.81 4.98-5.58 5.47c-3.8.68-7.18-1.74-8.05-5.16c-.12-.42-.52-.72-.96-.72c-.65 0-1.14.61-.98 1.23C4.28 18.12 7.8 21 12 21c5.06 0 9.14-4.17 9-9.26c-.14-4.88-4.35-8.86-9.23-8.74M14 12c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2" />
    </g>
    
    <g id="refresh-icon">
      <path fill="currentColor" d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"/>
    </g>
    
    <g id="clear-icon">
      <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
    </g>
    
    <g id="tree-icon">
      <path fill="currentColor" d="M240 128c-64 0 0 88-64 88H80c-64 0 0-88-64-88c64 0 0-88 64-88h96c64 0 0 88 64 88" opacity=".2"/>
      <path fill="currentColor" d="M43.18 128a29.8 29.8 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74c0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26c-4.8-9.9-4.8-22-4.8-33.74c0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36c0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36c0 11.72 0 23.84-4.8 33.74A29.8 29.8 0 0 1 43.18 128M240 120c-23 0-24-11.69-24-36c0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36c0 11.72 0 23.84 4.8 33.74a29.8 29.8 0 0 0 8 10.26a29.8 29.8 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74c0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26c4.8-9.9 4.8-22 4.8-33.74c0-24.31 1-36 24-36a8 8 0 0 0 0-16"/>
    </g>
    
    <g id="table-icon">
      <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm6-6H5v4h6zm2 0v4h6v-4zm-2-2V9H5v4zm2 0h6V9h-6zM5 7h14V5H5z"/>
    </g>
    
    <g id="local-storage-icon">
      <path fill="currentColor" d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V9A2,2 0 0,0 5,11V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V5C19,3.89 18.1,3 17,3Z"/>
    </g>
    
    <g id="session-storage-icon">
      <path fill="currentColor" d="M6 2v6h.01L6 8.01L10 12l-4 4-.01.01V22h12v-5.99l-.01-.01L14 12l4-3.99V8h-.01L18 2H6zm2 2h8v2.5L12 10 8 6.5V4zm8 16v-2.5L12 14l-4 3.5V20h8z"/>
    </g>
  </defs>
</svg>

<div id="collapsed">
  <h1>
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <use href="#datastar-logo"/>
    </svg>
  </h1>
</div>
<header style="display: none">
  <h1>
    <button aria-label="Collapse">\xBB</button>
    Datastar Inspector
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
      <use href="#datastar-logo"/>
    </svg>
  </h1>
  <nav>
    <button data-type="currentSignals" aria-selected="true" aria-label="Switch to current signals tab" title="Current signals with the ability to filter">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M12.442 13.033c-.278.307-.319.777-.05 1.092c.27.314.747.353 1.033.053a7.5 7.5 0 1 0-10.85 0c.286.3.763.261 1.032-.053c.27-.315.23-.785-.05-1.092a6 6 0 1 1 8.884 0m-.987-1.15c-.265.318-.745.279-1.015-.036c-.27-.314-.223-.784.015-1.123a3 3 0 1 0-4.91 0c.238.339.284.809.015 1.123c-.27.315-.75.354-1.015.036a4.5 4.5 0 1 1 6.91 0M8 10.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/></svg>
      <span id="currentSignalsCount">0</span>
    </button>
    <button data-type="signalPatchEvent" aria-selected="false" aria-label="Switch to signal patch events tab" title="Signal patch events">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h2v2H5v5a2 2 0 0 1-2 2a2 2 0 0 1 2 2v5h2v2H5c-1.07-.27-2-.9-2-2v-4a2 2 0 0 0-2-2H0v-2h1a2 2 0 0 0 2-2V5a2 2 0 0 1 2-2m14 0a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1v2h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2v-2h2v-5a2 2 0 0 1 2-2a2 2 0 0 1-2-2V5h-2V3zm-7 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"/></svg>
      <span id="signalPatchEventCount">0</span>
    </button>
    <button data-type="sseEvent" aria-selected="false" aria-label="Switch to SSE tab" title="SSE events">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.56l4.07-1.13l.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58l-2.22.6l-2.22-.6l-.14-1.66h-2l.29 3.19zM4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8z"/></svg>
      <span id="sseEventCount">0</span>
    </button>
    <button data-type="persistedData" aria-selected="false" aria-label="Switch to persisted data tab" title="Persisted data from localStorage and sessionStorage">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h14v2H4v16h2v-6h12v6h2V6h2v16H2V2zm4 18h8v-4H8zM20 6h-2V4h2zM6 6h9v4H6z"/></svg>
      <span id="persistedDataCount">0</span>
    </button>
  </nav>
</header>
<main style="display: none">
  <section id="currentSignalsContent" class="currentSignals">
    <div class="scroll-content">
      <ul>
        <li>
          <pre></pre>
        </li>
      </ul>
    </div>
    <footer class="filters">
      <div class="filter-row">
        <div class="input-with-icon">
          <input type="text" id="currentSignalsIncludeFilter" placeholder="Include filter (default: .*)" title="Only show signals matching this pattern. Use regex or exact match (with wildcard support). Default '.*' matches all signals." />
        </div>
        <div class="input-with-icon">
          <input type="text" id="currentSignalsExcludeFilter" placeholder="Exclude filter (default: (^|\\.)_)" title="Hide signals matching this pattern. Use regex or exact match (with wildcard support). Default '(^|\\.)_' hides signals starting with underscore or containing '._'." />
        </div>
        <button id="resetFilters" title="Reset filters">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <use href="#reset-icon"/>
            </svg>
          </button>
        <label title="Enable wildcard matching (\`*\` matches any character)">
          <input type="checkbox" id="currentSignalsExactMatchCheckbox" />
          <span>Wildcard</span>
        </label>
      </div>
      <div class="filter-row-secondary">
        <div class="regex-display" id="currentSignalsRegexDisplay" style="display: none">
          <button id="copyFilterObject" title="Copy filter as regex object">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <use href="#copy-icon"/>
            </svg>
            <span style="display: none"></span>
          </button>
          <span class="regex-content">
            <span class="regex-include"></span>
            <span class="regex-exclude"></span>
          </span>
        </div>
        <label title="Toggle between object and path view">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
            <use href="#tree-icon"/>
          </svg>
          <div class="toggle-switch">
            <input type="checkbox" id="currentSignalsTableViewCheckbox" />
            <span class="toggle-slider"></span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <use href="#table-icon"/>
          </svg>
        </label>
      </div>
    </footer>
  </section>
  <section id="signalPatchEventContent" class="signalPatchEvents" style="display: none">
    <div class="scroll-content">
      <p>No events yet.</p>
      <ul></ul>
    </div>
    <footer>
      <label for="signalPatchMaxEvents">Max events:</label>
      <input type="number" id="signalPatchMaxEvents" placeholder="Max events" min="1" style="width: 80px;" />
      <button data-type="signalPatchEvent" style="display: none">Clear</button>
    </footer>
  </section>
  <section id="sseEventContent" class="sseEvents" style="display: none">
    <div class="scroll-content">
      <p>No events yet.</p>
      <ul></ul>
    </div>
    <footer>
      <label for="sseMaxEvents">Max events:</label>
      <input type="number" id="sseMaxEvents" placeholder="Max events" min="1" style="width: 80px;" />
      <button data-type="sseEvent" style="display: none">Clear</button>
    </footer>
  </section>
  <section id="persistedDataContent" class="persistedData" style="display: none">
    <div class="scroll-content">
      <h3>
      <span id="persistedDataStorageTitle">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="vertical-align: middle;"><use href="#local-storage-icon"/></svg>
        Local Storage
      </span>
      <button id="refreshPersistedData" title="Refresh persisted data">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <use href="#refresh-icon"/>
        </svg>
        <span style="display: none"></span>
      </button>
    </h3>
    <p>No persisted data found.</p>
    <ul>
      <li>
        <pre></pre>
      </li>
    </ul>
    </div>
    <footer class="filters">
      <div class="filter-row">
        <div class="input-with-icon">
          <input type="text" id="persistedDataIncludeFilter" placeholder="Include filter (default: .*)" title="Only show persisted data matching this pattern. Use regex or exact match (with wildcard support). Default '.*' matches all data." />
        </div>
        <div class="input-with-icon">
          <input type="text" id="persistedDataExcludeFilter" placeholder="Exclude filter (default: (^|\\.)_)" title="Hide persisted data matching this pattern. Use regex or exact match (with wildcard support). Default '(^|\\.)_' hides keys starting with underscore or containing '._'." />
        </div>
        <button id="resetPersistedDataFilters" title="Reset filters">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <use href="#reset-icon"/>
          </svg>
        </button>
        <label title="Enable wildcard matching (\`*\` matches any character)">
          <input type="checkbox" id="persistedDataExactMatchCheckbox" />
          <span>Wildcard</span>
        </label>
      </div>
      <div class="filter-row-secondary">
        <div class="regex-display" id="persistedDataRegexDisplay">
          <button id="copyPersistedDataFilterObject" title="Copy filter as regex object">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
              <use href="#copy-icon"/>
            </svg>
            <span style="display: none"></span>
          </button>
          <span class="regex-content">
            <span class="regex-include"></span>
            <span class="regex-exclude"></span>
          </span>
        </div>
        <label title="Toggle between localStorage and sessionStorage">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <use href="#local-storage-icon"/>
          </svg>
          <div class="toggle-switch">
            <input type="checkbox" id="persistedDataStorageToggle" />
            <span class="toggle-slider"></span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <use href="#session-storage-icon"/>
          </svg>
        </label>
        <label title="Toggle between object and path view">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
            <use href="#tree-icon"/>
          </svg>
          <div class="toggle-switch">
            <input type="checkbox" id="persistedDataTableViewCheckbox" />
            <span class="toggle-slider"></span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <use href="#table-icon"/>
          </svg>
        </label>
      </div>
    </footer>
  </section>
</main>`;var z=class extends HTMLElement{constructor(){super();this.expanded=!1;this.open=!1;this.tab="currentSignals";this.maxEventsVisible=20;this.signalPatchEventCount=0;this.sseEventCount=0;this.signalPatchEvents=void 0;this.sseEvents=void 0;this.currentSignalsIncludeFilter="";this.currentSignalsExcludeFilter="";this.currentSignalsUseExactMatch=!1;this.currentSignalsTableView=!1;this.currentSignals={};this.persistedDataIncludeFilter="";this.persistedDataExcludeFilter="";this.persistedDataUseExactMatch=!1;this.persistedDataTableView=!1;this.persistedDataUseSessionStorage=!1;this.persistedData={};this.persistedDataCount=0;this.highlightedElements=[];this.highlightStyleElement=null;this.attachShadow({mode:"open"});let t=sessionStorage.getItem("datastar-inspector-state");if(t){let s=JSON.parse(t);this.expanded=s.expanded??this.expanded,this.open=s.open??this.open,this.tab=s.tab??this.tab,this.currentSignalsIncludeFilter=s.currentSignalsIncludeFilter??this.currentSignalsIncludeFilter,this.currentSignalsExcludeFilter=s.currentSignalsExcludeFilter??this.currentSignalsExcludeFilter,this.currentSignalsUseExactMatch=s.currentSignalsUseExactMatch??this.currentSignalsUseExactMatch,this.currentSignalsTableView=s.currentSignalsTableView??this.currentSignalsTableView,this.persistedDataIncludeFilter=s.persistedDataIncludeFilter??this.persistedDataIncludeFilter,this.persistedDataExcludeFilter=s.persistedDataExcludeFilter??this.persistedDataExcludeFilter,this.persistedDataUseExactMatch=s.persistedDataUseExactMatch??this.persistedDataUseExactMatch,this.persistedDataTableView=s.persistedDataTableView??this.persistedDataTableView,this.persistedDataUseSessionStorage=s.persistedDataUseSessionStorage??this.persistedDataUseSessionStorage}}static get observedAttributes(){return["max-events-visible"]}connectedCallback(){this.render(),this.injectHighlightStyles(),document.addEventListener("datastar-fetch",this.handleSseEvent.bind(this)),document.addEventListener("datastar-signal-patch",this.handleSignalPatchEvent.bind(this)),window.addEventListener("storage",this.handleStorageChange.bind(this));let t=this.getAttribute("max-events-visible");if(t){let s=Number.parseInt(t,10);!Number.isNaN(s)&&s>0&&(this.maxEventsVisible=s)}this.updatePersistedDataCount()}disconnectedCallback(){this.removeEventListener("datastar-fetch",this.handleSseEvent),this.removeEventListener("datastar-signal-patch",this.handleSignalPatchEvent),window.removeEventListener("storage",this.handleStorageChange),this.removeHighlightStyles()}applyTheme(){let t=window.matchMedia("(prefers-color-scheme: dark)").matches;this.shadowRoot&&(this.shadowRoot.host.classList.toggle("dark-theme",t),this.shadowRoot.host.setAttribute("data-theme",t?"dark":"light")),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s=>{this.shadowRoot&&(this.shadowRoot.host.classList.toggle("dark-theme",s.matches),this.shadowRoot.host.setAttribute("data-theme",s.matches?"dark":"light"))})}attributeChangedCallback(t,s,e){t==="max-events-visible"&&s!==e&&e!==null&&(this.maxEventsVisible=Number.parseInt(e,10),this.garbageCollectEvents(this.shadowRoot?.querySelector("#sseEventContent ul")),this.garbageCollectEvents(this.shadowRoot?.querySelector("#signalPatchEventContent ul")))}render(){if(!this.shadowRoot)return;this.shadowRoot.innerHTML=k,this.applyTheme(),this.renderExpand(),this.renderOpen(),this.renderTab();for(let e of this.shadowRoot.querySelectorAll("#collapsed, h1 button"))e.addEventListener("click",()=>this.toggleExpand());for(let e of this.shadowRoot.querySelectorAll("#collapsed, header"))e.addEventListener("click",()=>this.toggleOpen());for(let e of this.shadowRoot.querySelectorAll("header h1 button, header nav"))e.addEventListener("click",a=>a.stopPropagation());for(let e of this.shadowRoot.querySelectorAll("header nav button"))e.addEventListener("click",()=>this.selectTab(e.dataset.type||""));for(let e of this.shadowRoot.querySelectorAll("footer button[data-type]"))e.addEventListener("click",()=>this.clearEvents(e.dataset.type||""));let t=this.shadowRoot.querySelector("#signalPatchMaxEvents"),s=this.shadowRoot.querySelector("#sseMaxEvents");t&&(t.value=this.maxEventsVisible.toString(),t.addEventListener("input",()=>{let e=Number.parseInt(t.value,10);!Number.isNaN(e)&&e>0&&(this.maxEventsVisible=e,s&&(s.value=e.toString()),this.garbageCollectEvents(this.shadowRoot?.querySelector("#signalPatchEventContent ul")),this.garbageCollectEvents(this.shadowRoot?.querySelector("#sseEventContent ul")))})),s&&(s.value=this.maxEventsVisible.toString(),s.addEventListener("input",()=>{let e=Number.parseInt(s.value,10);!Number.isNaN(e)&&e>0&&(this.maxEventsVisible=e,t&&(t.value=e.toString()),this.garbageCollectEvents(this.shadowRoot?.querySelector("#signalPatchEventContent ul")),this.garbageCollectEvents(this.shadowRoot?.querySelector("#sseEventContent ul")))})),this.setupFilterHandlers(),this.setupPersistedDataHandlers(),this.tab==="persistedData"&&this.updatePersistedDataDisplay()}setupFilterHandlers(){if(!this.shadowRoot)return;let t=this.shadowRoot.querySelector("#currentSignalsIncludeFilter"),s=this.shadowRoot.querySelector("#currentSignalsExcludeFilter"),e=this.shadowRoot.querySelector("#currentSignalsExactMatchCheckbox"),a=this.shadowRoot.querySelector("#resetFilters"),i=this.shadowRoot.querySelector("#copyFilterObject"),n=this.shadowRoot.querySelector("#currentSignalsTableViewCheckbox");t&&(t.value=this.currentSignalsIncludeFilter||(this.currentSignalsUseExactMatch?"":".*"),t.addEventListener("input",()=>{this.currentSignalsIncludeFilter=t.value,this.saveState(),this.updateCurrentSignalsDisplay(),this.updateRegexDisplay()})),s&&(s.value=this.currentSignalsExcludeFilter||(this.currentSignalsUseExactMatch?"":"(^|\\.)_"),s.addEventListener("input",()=>{this.currentSignalsExcludeFilter=s.value,this.saveState(),this.updateCurrentSignalsDisplay(),this.updateRegexDisplay()})),e&&(e.checked=this.currentSignalsUseExactMatch,e.addEventListener("change",()=>{this.currentSignalsUseExactMatch=e.checked,this.saveState(),this.updateCurrentSignalsDisplay(),this.updateRegexDisplay()})),a&&a.addEventListener("click",()=>{this.currentSignalsIncludeFilter=".*",this.currentSignalsExcludeFilter="(^|\\.)_",this.currentSignalsUseExactMatch=!1,t.value=this.currentSignalsIncludeFilter,s.value=this.currentSignalsExcludeFilter,e.checked=this.currentSignalsUseExactMatch,this.saveState(),this.updateCurrentSignalsDisplay(),this.updateRegexDisplay()}),i&&i.addEventListener("click",()=>{this.copyFilterObject(i)}),n&&(n.checked=this.currentSignalsTableView,n.addEventListener("change",()=>{this.currentSignalsTableView=n.checked,this.saveState(),this.updateCurrentSignalsDisplay()})),this.updateRegexDisplay()}exactMatchAsRegex(t){return RegExp(`^${t.replace(/\./g,"\\.").replace(/\*/g,".*")}$`)}flattenObject(t,s="",e=0){let i=[];for(let[n,r]of Object.entries(t)){let o=s?`${s}.${n}`:n;if(!(/^_rocket\.[^.]+\.id\d+$/.test(o)&&r==="")){if((n==="computed"||o.endsWith(".computed"))&&r&&typeof r=="object"){let l=Object.entries(r);if(l.length>0)for(let[c,u]of l){let h=`${o}.${c}`,d=u;if(typeof u=="function")try{d=u()}catch{d="__error__"}d!==null&&typeof d=="object"?(i.push([h,"__object__"]),e<6?i.push(...this.flattenObject(d,h,e+1)):i.push([`${h}.__truncated__`,!0])):i.push([h,d])}continue}r!==null&&typeof r=="object"?(i.push([o,"__object__"]),e<6?Array.isArray(r)?r.forEach((l,c)=>{l!==null&&typeof l=="object"?i.push(...this.flattenObject(l,`${o}.${c}`,e+1)):i.push([`${o}.${c}`,l])}):i.push(...this.flattenObject(r,o,e+1)):i.push([`${o}.__truncated__`,!0])):i.push([o,r])}}return i}updateRegexDisplay(){if(!this.shadowRoot)return;let t=this.shadowRoot.querySelector("#currentSignalsRegexDisplay"),s=t?.querySelector(".regex-include"),e=t?.querySelector(".regex-exclude");if(!t||!s||!e)return;t.style.display="";let a=this.currentSignalsIncludeFilter||".*",i=this.currentSignalsExcludeFilter||"(^|\\.)_";s.textContent=this.currentSignalsUseExactMatch&&this.currentSignalsIncludeFilter?this.exactMatchAsRegex(a).toString():`/${a}/`,e.textContent=this.currentSignalsUseExactMatch&&this.currentSignalsExcludeFilter?this.exactMatchAsRegex(i).toString():`/${i}/`}copyFilterObject(t){let s=this.currentSignalsIncludeFilter||".*",e=this.currentSignalsExcludeFilter||"(^|\\.)_",a={include:this.currentSignalsUseExactMatch?this.exactMatchAsRegex(s).toString():`/${s}/`,exclude:this.currentSignalsUseExactMatch?this.exactMatchAsRegex(e).toString():`/${e}/`},i=`{ include: ${a.include}, exclude: ${a.exclude} }`,n=t.querySelector("span");navigator.clipboard.writeText(i).then(()=>{n.textContent="Copied",n.style.display=""}).catch(()=>{n.textContent="Copy failed",n.style.display=""}).finally(()=>{setTimeout(()=>{n.style.display="none"},2e3)})}updateCurrentSignalsDisplay(){this.currentSignalsTableView?this.updateCurrentSignalsTableDisplay():this.updateCurrentSignalsTreeDisplay()}updateCurrentSignalsTableDisplay(){let t=this.currentSignalsIncludeFilter||this.currentSignalsExcludeFilter,s=this.flattenObject(this.currentSignals),e=0,n=`
      <table class="signals-table">
        <thead>
          <tr>
            <th>Path</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          ${s.map(([o,l])=>{let c=this.matchesFilter(o,this.currentSignalsIncludeFilter,this.currentSignalsExcludeFilter,this.currentSignalsUseExactMatch);return c&&e++,{path:o,value:l,matches:c}}).map(({path:o,value:l,matches:c})=>{let u=JSON.stringify(l),h=t?c?"matched":"filtered":"";return`<tr${h?` class="${h}"`:""}><td>${this.escapeHtml(o)}</td><td>${this.escapeHtml(u)}</td></tr>`}).join(`
`)}
        </tbody>
      </table>
    `;this.setTextContent("#currentSignalsCount",t?`${e}/${s.length}`:s.length);let r=this.shadowRoot?.querySelector("#currentSignalsContent ul li");r&&(r.innerHTML=`<div style="flex: 1; overflow-x: auto;">${n}</div>`,this.addCurrentSignalsButtons(r),this.addHoverHandlersToSignalPaths(r))}escapeHtml(t){let s=document.createElement("div");return s.textContent=t,s.innerHTML}updateCurrentSignalsTreeDisplay(){let t=this.currentSignalsIncludeFilter||this.currentSignalsExcludeFilter,s=new Set,e=0;if(t){let c=this.flattenObject(this.currentSignals);for(let[u]of c)if(this.matchesFilter(u,this.currentSignalsIncludeFilter,this.currentSignalsExcludeFilter,this.currentSignalsUseExactMatch)){e++;let h=u.split(".");for(let d=1;d<=h.length;d++)s.add(h.slice(0,d).join("."))}}let a=c=>{let u={};if(c&&typeof c=="object")for(let[h,d]of Object.entries(c))if(typeof d=="function")try{u[h]=d()}catch{u[h]="__error__"}else u[h]=d;return u},i=(c,u="",h="  ")=>{let d=[],x=Object.entries(c);return x.forEach(([m,g],v)=>{if((m==="computed"||u&&`${u}.${m}`.endsWith(".computed"))&&g&&typeof g=="object"){let S=a(g);if(Object.keys(S).length===0)return;g=S}let p=u?`${u}.${m}`:m,f=v===x.length-1,b=s.has(p),y;if(t?y=b?'class="matched"':'class="filtered"':y=`data-path="${p}"`,g!==null&&typeof g=="object"&&!Array.isArray(g)){d.push(`${h}<span ${y}>"${m}": {`);let S=i(g,p,`${h}  `);d.push(...S),d.push(`${h}}${f?"</span>":",</span>"}`)}else{let C=JSON.stringify(g,null,2).split(`
`);d.push(`${h}<span ${y}>"${m}": ${this.escapeHtml(C[0])}`);for(let w=1;w<C.length;w++)d.push(`${h}${this.escapeHtml(C[w])}`);d[d.length-1]+=f?"</span>":",</span>"}}),d},n=[],r=t&&e>0;n.push(r?'<span class="matched">{</span>':"{"),n.push(...i(this.currentSignals)),n.push(r?'<span class="matched">}</span>':"}");let o=this.flattenObject(this.currentSignals).length;this.setTextContent("#currentSignalsCount",t?`${e}/${o}`:o);let l=this.shadowRoot?.querySelector("#currentSignalsContent ul li");l&&(l.innerHTML=`<div style="flex: 1; overflow-x: auto;"><pre>${n.join(`
`)}</pre></div>`,this.addCurrentSignalsButtons(l),this.addHoverHandlersToSignalPaths(l))}handleSignalPatchEvent(t){let s=t.detail,e=s;try{e=JSON.parse(JSON.stringify(s))}catch{}let a=this.safeSerialize(s);this.applyPatch(e),this.signalPatchEventCount++,this.setTextContent("#signalPatchEventCount",this.signalPatchEventCount),this.appendEvent(this.signalPatchEventCount,"#signalPatchEventContent",a,this.safeSerialize(s,!0),s,!0)}safeSerialize(t,s=!1){let e=new WeakSet,a=4,i=200,n=(r,o)=>{if(r===null||typeof r!="object")return r;if(typeof r=="function")return"__fn__";if(typeof Element<"u"&&r instanceof Element)return"__element__";if(e.has(r))return"__cycle__";if(o>=a)return"__truncated__";if(e.add(r),Array.isArray(r))return r.slice(0,i).map(u=>n(u,o+1));let l={},c=0;for(let[u,h]of Object.entries(r))if(l[u]=n(h,o+1),c+=1,c>=i){l.__truncated__=!0;break}return l};try{return JSON.stringify(n(t,0),null,s?2:void 0)}catch{return"{}"}}applyPatch(t){let s=(a,i="",n=[])=>{for(let[r,o]of Object.entries(a)){let l=i?`${i}.${r}`:r;o&&typeof o=="object"&&!Array.isArray(o)&&Object.keys(o).length>0?s(o,l,n):n.push([l,o])}return n},e=(a,i)=>{let n=a.split("."),r=this.currentSignals;for(let l=0;l<n.length-1;l+=1){let c=n[l];(r[c]===void 0||r[c]===null||typeof r[c]!="object")&&(r[c]={}),r=r[c]}let o=n[n.length-1];i===null?delete r[o]:r[o]=i};for(let[a,i]of s(t)){if(i===""&&/^_rocket\.[^.]+\.id\d+$/.test(a)){e(a,null);continue}e(a,i)}this.updateCurrentSignalsDisplay()}handleSseEvent(t){let s=t.detail;if(!s.type.startsWith("datastar-"))return;this.sseEventCount++,this.setTextContent("#sseEventCount",this.sseEventCount);let e="",a=s.argsRaw;for(let[i,n]of Object.entries(a))e+=`data: ${i} ${n}
`;e=e.trimEnd(),this.appendEvent(this.sseEventCount,"#sseEventContent",`event: ${s.type}`,e,s,!1)}toggleExpand(){this.expanded=!this.expanded,this.renderExpand(),this.saveState()}renderExpand(){this.setVisibility("#collapsed",!this.expanded),this.setVisibility("header",this.expanded),this.expanded||(this.open=!0,this.toggleOpen())}toggleOpen(){this.open=!this.open,this.renderOpen(),this.saveState()}renderOpen(){this.setVisibility("main",this.open)}selectTab(t){this.open=!0,this.tab=t,this.renderTab(),this.saveState(),t==="persistedData"&&this.updatePersistedDataDisplay()}renderTab(){this.setAttributeValue("header button","aria-selected","false"),this.setAttributeValue(`header button[data-type=${this.tab}]`,"aria-selected","true"),this.setVisibility("main",this.open),this.setVisibility("main section",!1),this.setVisibility(`#${this.tab}Content`,!0),this.saveState()}saveState(){let t={expanded:this.expanded,open:this.open,tab:this.tab,currentSignalsIncludeFilter:this.currentSignalsIncludeFilter,currentSignalsExcludeFilter:this.currentSignalsExcludeFilter,currentSignalsUseExactMatch:this.currentSignalsUseExactMatch,currentSignalsTableView:this.currentSignalsTableView,persistedDataIncludeFilter:this.persistedDataIncludeFilter,persistedDataExcludeFilter:this.persistedDataExcludeFilter,persistedDataUseExactMatch:this.persistedDataUseExactMatch,persistedDataTableView:this.persistedDataTableView,persistedDataUseSessionStorage:this.persistedDataUseSessionStorage};sessionStorage.setItem("datastar-inspector-state",JSON.stringify(t))}clearEvents(t){t==="sse"?this.sseEventCount=0:this.signalPatchEventCount=0,this.setTextContent(`#${t}Count`,0),this.setInnerHtml(`#${t}Content ul`,""),this.setVisibility(`#${t}Content footer button[data-type]`,!1),this.setVisibility(`#${t}Content p`,!0)}setTextContent(t,s){let e=this.shadowRoot?.querySelector(t);e&&(e.textContent=`${s}`)}setInnerHtml(t,s){let e=this.shadowRoot?.querySelector(t);e&&(e.innerHTML=s)}setAttributeValue(t,s,e){for(let a of this.shadowRoot?.querySelectorAll(t)||[])a.setAttribute(s,e)}setVisibility(t,s){this.setAttributeValue(t,"style",s?"":"display: none;")}appendEvent(t,s,e,a,i,n){let r=this.shadowRoot?.querySelector(`${s} ul`);if(!r)return;let o=document.createElement("div"),l=document.createElement("span");l.textContent=`${t}.`;let c=document.createElement("details"),u=document.createElement("summary");n&&(u.className="blurrable"),u.textContent=e;let h=document.createElement("pre");h.textContent=a,c.appendChild(u),c.appendChild(h),o.appendChild(l),o.appendChild(c);let m=(this.shadowRoot?.querySelector("#copy-button-template")).content.cloneNode(!0).querySelector("button"),g=m.querySelector("span");m.onclick=()=>{let S=e.startsWith("event:")?`${e}
${a}`:a;navigator.clipboard.writeText(S).then(()=>{g.textContent="Copied",g.style.display=""}).catch(()=>{g.textContent="Copy Failed",g.style.display=""}).finally(()=>{setTimeout(()=>{g.style.display="none"},2e3)})};let f=(this.shadowRoot?.querySelector("#log-button-template")).content.cloneNode(!0).querySelector("button"),b=f.querySelector("span");f.onclick=()=>{console.log(i),b.textContent="Logged",b.style.display="",setTimeout(()=>{b.style.display="none"},2e3)};let y=document.createElement("li");y.appendChild(o),y.appendChild(m),y.appendChild(f),r.prepend(y),this.garbageCollectEvents(r),this.setVisibility(`${s} footer button[data-type]`,!0),this.setVisibility(`${s} p`,!1)}createButton(t,s){let e=document.createElement("button");return e.textContent=t,e.onclick=s,e}garbageCollectEvents(t){if(t)for(;t.children.length>this.maxEventsVisible;)t.removeChild(t.lastChild)}addCurrentSignalsButtons(t){let a=(this.shadowRoot?.querySelector("#copy-button-template")).content.cloneNode(!0).querySelector("button"),i=a.querySelector("span");a.onclick=()=>{let c=JSON.stringify(this.currentSignals,null,2);navigator.clipboard.writeText(c).then(()=>{i.textContent="Copied",i.style.display=""}).catch(()=>{i.textContent="Copy Failed",i.style.display=""}).finally(()=>{setTimeout(()=>{i.style.display="none"},2e3)})};let o=(this.shadowRoot?.querySelector("#log-button-template")).content.cloneNode(!0).querySelector("button"),l=o.querySelector("span");o.onclick=()=>{console.log(this.currentSignals),l.textContent="Logged",l.style.display="",setTimeout(()=>{l.style.display="none"},2e3)},t.appendChild(a),t.appendChild(o),this.addHoverHandlersToSignalPaths(t)}matchesFilter(t,s,e,a){let i=s||".*",n=e||"(^|\\.)_";if(a){let r=this.exactMatchAsRegex(i),o=this.exactMatchAsRegex(n);return r.test(t)&&!o.test(t)}try{let r=new RegExp(i),o=new RegExp(n);return r.test(t)&&!o.test(t)}catch{return t.includes(i)&&!t.includes(n)}}injectHighlightStyles(){this.highlightStyleElement||(this.highlightStyleElement=document.createElement("style"),this.highlightStyleElement.textContent=`
      @keyframes datastar-highlight-pulse {
        0% {
          box-shadow: 
            0 0 0 2px rgba(165, 153, 255, 0.8),
            0 0 0 6px rgba(165, 153, 255, 0.4),
            0 0 16px 4px rgba(165, 153, 255, 0.6);
          background-color: rgba(165, 153, 255, 0.2);
        }
        50% {
          box-shadow: 
            0 0 0 4px rgba(165, 153, 255, 1),
            0 0 0 12px rgba(165, 153, 255, 0.6),
            0 0 32px 8px rgba(165, 153, 255, 0.8);
          background-color: rgba(165, 153, 255, 0.4);
        }
        100% {
          box-shadow: 
            0 0 0 2px rgba(165, 153, 255, 0.8),
            0 0 0 6px rgba(165, 153, 255, 0.4),
            0 0 16px 4px rgba(165, 153, 255, 0.6);
          background-color: rgba(165, 153, 255, 0.2);
        }
      }
      
      .datastar-signal-highlight {
        animation: datastar-highlight-pulse 0.8s ease-in-out infinite !important;
        position: relative !important;
        z-index: 9998 !important;
      }
    `,document.head.appendChild(this.highlightStyleElement))}removeHighlightStyles(){this.highlightStyleElement&&(document.head.removeChild(this.highlightStyleElement),this.highlightStyleElement=null)}findElementsUsingSignal(t){let s=[],e=this.generateSignalPatterns(t),a=document.querySelectorAll("*");for(let i of a){let n=i.attributes;for(let r of n)if(r.name.startsWith("data-")&&this.attributeUsesSignal(r.value,e)){s.push(i);break}}return s}generateSignalPatterns(t){let s=[],e=t.split(".");for(let a=e.length;a>0;a--){let i=e.slice(0,a).join(".");s.push(`$${i}`)}return s}attributeUsesSignal(t,s){for(let e of s)if(new RegExp(`\\${e.replace(".","\\.")}(?![a-zA-Z0-9_])`,"g").test(t))return!0;return!1}highlightElements(t){this.clearHighlights();for(let s of t)s.classList.add("datastar-signal-highlight"),this.highlightedElements.push(s)}clearHighlights(){for(let t of this.highlightedElements)t.classList.remove("datastar-signal-highlight");this.highlightedElements=[]}addHoverHandlersToSignalPaths(t,s="current"){let e=this.extractSignalPaths(t,s);for(let a of e)a.element.classList.add("signal-path-hoverable"),a.element.addEventListener("mouseenter",()=>{let i=this.findElementsUsingSignal(a.path);this.highlightElements(i)}),a.element.addEventListener("mouseleave",()=>{this.clearHighlights()})}extractSignalPaths(t,s){let e=[],a=s==="current"?this.currentSignalsTableView:this.persistedDataTableView,i=s==="current"?this.currentSignals:this.persistedData;if(a){let n=t.querySelectorAll("td:first-child");for(let r of n){let o=r.textContent?.trim();o&&e.push({element:r,path:o})}}else{let n=s==="persisted"?Array.from(t.querySelectorAll("pre")):[t.querySelector("pre")].filter(r=>r!==null);for(let r of n){let o=r.querySelectorAll("span"),l=new Set;for(let h of o){let d=h.getAttribute("data-path");if(d&&!l.has(d)){l.add(d),e.push({element:h,path:d});continue}let m=(h.textContent||"").match(/"([^"]+)":\s*/);if(m){let g=m[1];if(s==="current"){let v=this.flattenObject(i);for(let[p]of v)if(p.endsWith(g)||p===g){l.has(p)||(l.add(p),e.push({element:h,path:p}));break}}else for(let[,v]of Object.entries(i)){let p=this.flattenObject(v);for(let[f]of p)if(f.endsWith(g)||f===g){l.has(f)||(l.add(f),e.push({element:h,path:f}));break}}}}let c=document.createTreeWalker(r,NodeFilter.SHOW_TEXT,{acceptNode:h=>h.parentElement?.tagName==="SPAN"?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}),u;for(;u=c.nextNode();){let d=(u.textContent||"").match(/"([^"]+)":\s*/);if(d){let x=d[1],m=u.parentElement;if(m){let g=new Set;if(s==="current"){let v=this.flattenObject(i);for(let[p]of v)if(p.endsWith(x)||p===x){g.has(p)||(g.add(p),e.push({element:m,path:p}));break}}else for(let[,v]of Object.entries(i)){let p=this.flattenObject(v);for(let[f]of p)if(f.endsWith(x)||f===x){g.has(f)||(g.add(f),e.push({element:m,path:f}));break}}}}}}}return e}handleStorageChange(){this.updatePersistedDataCount(),this.tab==="persistedData"&&this.updatePersistedDataDisplay()}updatePersistedDataCount(){let t=this.persistedDataUseSessionStorage?sessionStorage:localStorage,e=this.getDatastarPersistKeys().filter(a=>t.getItem(a)!==null).length;this.setTextContent("#persistedDataCount",e)}getDatastarPersistKeys(){let t=new Set,s=document.querySelectorAll("*");for(let e of s)for(let a of e.attributes)if(a.name.startsWith("data-persist")){let i=a.name;if(i==="data-persist")t.add("datastar");else if(i.startsWith("data-persist-")){let n=i.substring(13),[r]=n.split("__");r&&t.add(r)}}return Array.from(t)}updatePersistedDataDisplay(){let t=this.persistedDataUseSessionStorage?sessionStorage:localStorage,s=this.getDatastarPersistKeys(),e={},a=[];for(let n of s){let r=t.getItem(n);if(r!==null){a.push(n);try{e[n]=JSON.parse(r)}catch{e[n]=r}}}this.persistedData=e,this.persistedDataCount=a.length,this.setTextContent("#persistedDataCount",this.persistedDataCount);let i=this.shadowRoot?.querySelector("#persistedDataContent p");if(i&&(i.style.display=a.length===0?"":"none"),a.length===0){let n=this.shadowRoot?.querySelector("#persistedDataContent ul");n&&(n.innerHTML="");return}this.persistedDataTableView?this.updatePersistedDataTableDisplay():this.updatePersistedDataTreeDisplay()}updatePersistedDataTableDisplay(){let t=this.persistedDataUseSessionStorage?sessionStorage:localStorage,s=this.getDatastarPersistKeys(),e={};for(let l of s){let c=t.getItem(l);if(c!==null)try{e[l]=JSON.parse(c)}catch{e[l]=c}}let a=this.persistedDataIncludeFilter||this.persistedDataExcludeFilter,i=0,n=0,r=Object.entries(e).map(([l,c])=>{let u=this.flattenObject(c);n+=u.length;let d=u.map(([x,m])=>{let g=this.matchesFilter(x,this.persistedDataIncludeFilter,this.persistedDataExcludeFilter,this.persistedDataUseExactMatch);return g&&i++,{path:x,value:m,matches:g}}).map(({path:x,value:m,matches:g})=>{let v=JSON.stringify(m),p=a?g?"matched":"filtered":"";return`<tr${p?` class="${p}"`:""}><td>${this.escapeHtml(x)}</td><td>${this.escapeHtml(v)}</td></tr>`}).join(`
`);return`
          <div class="persisted-key-section">
            <div class="persisted-key-caption">
              <div class="caption-text">${this.escapeHtml(l)}</div>
              <div class="caption-buttons" data-key="${this.escapeHtml(l)}"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th class="thin">Path</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                ${d}
              </tbody>
            </table>
          </div>
        `}).join(`
`);this.setTextContent("#persistedDataCount",a?`${i}/${n}`:n);let o=this.shadowRoot?.querySelector("#persistedDataContent ul");if(o){o.innerHTML=`<li><div style="flex: 1; overflow-x: auto;">${r}</div></li>`;let l=o.querySelector("li");l&&this.addPersistedDataButtons(l)}}updatePersistedDataTreeDisplay(){let t=this.persistedDataUseSessionStorage?sessionStorage:localStorage,s=this.getDatastarPersistKeys(),e={};for(let l of s){let c=t.getItem(l);if(c!==null)try{e[l]=JSON.parse(c)}catch{e[l]=c}}let a=this.persistedDataIncludeFilter||this.persistedDataExcludeFilter,i=0,n=0,r=Object.entries(e).map(([l,c])=>{let u=this.flattenObject(c);n+=u.length;let h=new Set;if(a){for(let[m]of u)if(this.matchesFilter(m,this.persistedDataIncludeFilter,this.persistedDataExcludeFilter,this.persistedDataUseExactMatch)){i++;let g=m.split(".");for(let v=1;v<=g.length;v++)h.add(g.slice(0,v).join("."))}}let d=(m,g="",v="  ")=>{let p=[],f=Object.entries(m);return f.forEach(([b,y],S)=>{let C=g?`${g}.${b}`:b,w=S===f.length-1,T=h.has(C);if(y!==null&&typeof y=="object"&&!Array.isArray(y)){a?T?p.push(`${v}<span class="matched">"${b}": {`):p.push(`${v}<span class="filtered">"${b}": {`):p.push(`${v}"${b}": {`);let M=d(y,C,`${v}  `);p.push(...M),a?p.push(`${v}}${w?"</span>":",</span>"}`):p.push(`${v}}${w?"":","}`)}else{let E=JSON.stringify(y,null,2).split(`
`);if(a){T?p.push(`${v}<span class="matched">"${b}": ${this.escapeHtml(E[0])}`):p.push(`${v}<span class="filtered">"${b}": ${this.escapeHtml(E[0])}`);for(let D=1;D<E.length;D++)p.push(`${v}${E[D]}`);p[p.length-1]+=w?"</span>":",</span>"}else{p.push(`${v}"${b}": ${this.escapeHtml(E[0])}`);for(let D=1;D<E.length;D++)p.push(`${v}${this.escapeHtml(E[D])}`);w||(p[p.length-1]+=",")}}}),p},x=[];return x.push("{"),x.push(...d(c)),x.push("}"),`
          <div class="persisted-key-section">
            <div class="persisted-key-caption">
              <div class="caption-text">${this.escapeHtml(l)}</div>
              <div class="caption-buttons" data-key="${this.escapeHtml(l)}"></div>
            </div>
            <pre>${x.join(`
`)}</pre>
          </div>
        `}).join(`
`);this.setTextContent("#persistedDataCount",a?`${i}/${n}`:n);let o=this.shadowRoot?.querySelector("#persistedDataContent ul");if(o){o.innerHTML=`<li><div style="flex: 1; overflow-x: auto;">${r}</div></li>`;let l=o.querySelector("li");l&&this.addPersistedDataButtons(l)}}setupPersistedDataHandlers(){if(!this.shadowRoot)return;let t=this.shadowRoot.querySelector("#persistedDataIncludeFilter");t&&(this.persistedDataIncludeFilter||(this.persistedDataIncludeFilter=".*"),t.value=this.persistedDataIncludeFilter,t.addEventListener("input",()=>{this.persistedDataIncludeFilter=t.value,this.saveState(),this.updatePersistedDataDisplay(),this.updatePersistedDataRegexDisplay()}));let s=this.shadowRoot.querySelector("#persistedDataExcludeFilter");s&&(this.persistedDataExcludeFilter||(this.persistedDataExcludeFilter="(^|\\.)_"),s.value=this.persistedDataExcludeFilter,s.addEventListener("input",()=>{this.persistedDataExcludeFilter=s.value,this.saveState(),this.updatePersistedDataDisplay(),this.updatePersistedDataRegexDisplay()}));let e=this.shadowRoot.querySelector("#persistedDataExactMatchCheckbox");e&&(e.checked=this.persistedDataUseExactMatch,e.addEventListener("change",()=>{this.persistedDataUseExactMatch=e.checked,this.saveState(),this.updatePersistedDataDisplay(),this.updatePersistedDataRegexDisplay()}));let a=this.shadowRoot.querySelector("#persistedDataTableViewCheckbox");a&&(a.checked=this.persistedDataTableView,a.addEventListener("change",()=>{this.persistedDataTableView=a.checked,this.saveState(),this.updatePersistedDataDisplay()}));let i=this.shadowRoot.querySelector("#persistedDataStorageToggle");i&&(i.checked=this.persistedDataUseSessionStorage,i.addEventListener("change",()=>{this.persistedDataUseSessionStorage=i.checked,this.updateStorageTitle(),this.saveState(),this.updatePersistedDataCount(),this.updatePersistedDataDisplay()}));let n=this.shadowRoot.querySelector("#refreshPersistedData");n&&n.addEventListener("click",()=>{this.updatePersistedDataCount(),this.updatePersistedDataDisplay()});let r=this.shadowRoot.querySelector("#resetPersistedDataFilters");r&&r.addEventListener("click",()=>{this.persistedDataIncludeFilter=".*",this.persistedDataExcludeFilter="(^|\\.)_",this.persistedDataUseExactMatch=!1,t.value=this.persistedDataIncludeFilter,s.value=this.persistedDataExcludeFilter,e.checked=this.persistedDataUseExactMatch,this.saveState(),this.updatePersistedDataDisplay(),this.updatePersistedDataRegexDisplay()});let o=this.shadowRoot.querySelector("#copyPersistedDataFilterObject");o&&o.addEventListener("click",()=>{this.copyPersistedDataFilterObject(o)}),this.updatePersistedDataRegexDisplay(),this.updateStorageTitle()}updateStorageTitle(){if(!this.shadowRoot)return;let t=this.shadowRoot.querySelector("#persistedDataStorageTitle");t&&(this.persistedDataUseSessionStorage?t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 4px;"><use href="#session-storage-icon"/></svg>Session Storage':t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 4px;"><use href="#local-storage-icon"/></svg>Local Storage')}updatePersistedDataRegexDisplay(){if(!this.shadowRoot)return;let t=this.shadowRoot.querySelector("#persistedDataRegexDisplay"),s=t?.querySelector(".regex-include"),e=t?.querySelector(".regex-exclude");if(!t||!s||!e)return;let a=this.persistedDataIncludeFilter||".*",i=this.persistedDataExcludeFilter||"(^|\\.)_";s.textContent=this.persistedDataUseExactMatch&&this.persistedDataIncludeFilter?this.exactMatchAsRegex(a).toString():`/${a}/`,e.textContent=this.persistedDataUseExactMatch&&this.persistedDataExcludeFilter?this.exactMatchAsRegex(i).toString():`/${i}/`}copyPersistedDataFilterObject(t){let s=this.persistedDataIncludeFilter||".*",e=this.persistedDataExcludeFilter||"(^|\\.)_",a={include:this.persistedDataUseExactMatch?this.exactMatchAsRegex(s).toString():`/${s}/`,exclude:this.persistedDataUseExactMatch?this.exactMatchAsRegex(e).toString():`/${e}/`},i=`{ include: ${a.include}, exclude: ${a.exclude} }`,n=t.querySelector("span");navigator.clipboard.writeText(i).then(()=>{n.textContent="Copied",n.style.display=""}).catch(()=>{n.textContent="Copy failed",n.style.display=""}).finally(()=>{setTimeout(()=>{n.style.display="none"},2e3)})}addPersistedDataButtons(t){t.querySelectorAll(".caption-buttons").forEach(e=>{let a=e.getAttribute("data-key");if(!a||!this.persistedData[a])return;let i=this.persistedData[a],o=(this.shadowRoot?.querySelector("#copy-button-template")).content.cloneNode(!0).querySelector("button"),l=o.querySelector("span");o.onclick=()=>{let v=JSON.stringify(i,null,2);navigator.clipboard.writeText(v).then(()=>{l.textContent="Copied",l.style.display=""}).catch(()=>{l.textContent="Copy Failed",l.style.display=""}).finally(()=>{setTimeout(()=>{l.style.display="none"},2e3)})};let u=(this.shadowRoot?.querySelector("#log-button-template")).content.cloneNode(!0),h=u.querySelector("button"),d=h.querySelector("span");h.onclick=()=>{console.log(i),d.textContent="Logged",d.style.display="",setTimeout(()=>{d.style.display="none"},2e3)};let g=(this.shadowRoot?.querySelector("#clear-button-template")).content.cloneNode(!0).querySelector("button");g.onclick=()=>{confirm("Clear persisted data? This cannot be undone.")&&((this.persistedDataUseSessionStorage?sessionStorage:localStorage).removeItem(a),this.updatePersistedDataCount(),this.updatePersistedDataDisplay())},e.appendChild(o),e.appendChild(u),e.appendChild(g)}),this.addHoverHandlersToSignalPaths(t,"persisted")}};customElements.define("datastar-inspector",z);
