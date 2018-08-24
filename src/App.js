import React, { Component } from 'react';
import { Schema } from '@dhl-parcel/dhl-parcel-upload-form';
import { Grid, Cell, DialogContainer, Snackbar, List, ListItem } from 'react-md';

import { mandatoryFields, fields, schemas as defaultSchemas } from './constants';
import { customTranslate, getRegexForFieldName } from './services';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    state = { toasts: [], autohide: true, schemas: defaultSchemas, result: [] };
    addToast = (text, action, autohide = true) => {
      this.setState((state) => {
        const toasts = state.toasts.slice();
        toasts.push({ text, action });
        return { toasts, autohide };
      });
    };
    dismissToast = () => {
      const [, ...toasts] = this.state.toasts;
      this.setState({ toasts });
    };

    hide = () => {
      this.setState({ result: [] });
    };

    handleKeyDown = (e) => {
      const key = e.which || e.keyCode;
      if (key === 13 || key === 32) {
        // also close on enter or space keys
        this.hide();
      }
    };
    render() {
      const { toasts, autohide, schemas, result } = this.state;
      return (
        <div>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Upload Demo</h2>
            </div>
            <p className="App-intro">
              This Demo demonstrates a simple CSV upload and mapping component.
            </p>
            <Grid>
              <Cell size={3} />
              <Cell size={5}>
                <Schema
                  mandatoryFields={mandatoryFields}
                  fields={fields}
                  getSchemas={() => Promise.resolve(schemas)} // the component expects a promise
                  setMapping={(arr) => this.setState({ result: arr })}
                  normalize={(str, char, val) => val.trim()}
                  tr={customTranslate}
                  demo={schemas}
                  depends={{ telephone2: 'telephone' }}
                  getRegexForField={getRegexForFieldName}
                  showToastMessage={str => this.addToast(str)}
                />
              </Cell>
            </Grid>
          </div>
          <Snackbar
            id="snackbar"
            toasts={toasts}
            autohide={autohide}
            onDismiss={this.dismissToast}
          />
          <DialogContainer
            id="list-dialog"
            visible={result.length > 0}
            width={600}
            title="This is the parsed result"
            onHide={this.hide}
          >
            <List onClick={this.hide} onKeyDown={this.handleKeyDown}>
              {result.map(item =>
                (<ListItem
                  key={Object.values(item).reduce((a, c) => a + c)}
                  primaryText={
                    (<Grid>
                      {Object.entries(item).map(pairs =>
                        <Cell key={pairs[0].concat(pairs[1])}>{`${pairs[0]}: ${pairs[1]}`}</Cell>)
                      }
                    </Grid>)}
                />
                ))
              }
            </List>
          </DialogContainer>
        </div>
      );
    }
}
