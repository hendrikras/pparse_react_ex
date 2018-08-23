import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import App from './App';
import { getRegexForFieldName, returnInput, customTranslate } from './services';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('mocks input', () => {
  expect(returnInput('test')).to.equal('test');
});

it('gets regex for field', () => {
  expect(getRegexForFieldName('telephone2').test('0987654321')).to.equal(true);
});

it('mocks translate', () => {
  expect(customTranslate('address_import_schema_select')).to.equal('Map your fields');
  expect(customTranslate('')).to.equal('');
});
