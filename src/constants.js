export const schemas = [{
  name: 'Demo Import Schema',
  category: 'demo',
  matches: {
    firstname: 'voornaam',
    lastname: 'achternaam',
    organisation: 'bedrijf',
    occupation: 'bedrijf',
    age: 'leeftijd',
  },
},
{
  name: 'Demo Import Schema 2',
  category: 'demo',
  matches: {
    firstname: 'bedrijf',
    lastname: 'voornaam',
    organisation: 'achternaam',
  },
},
];

export const keys = {
  fileAborted: 'Oops!',
  importName: 'Import CSV',
  importDescription: 'Upload a (example) csv',
  fileSelect: 'select file',
  next: 'next',
};

export const mandatoryFields = ['firstname', 'lastname', 'organisation'];

export const fields = mandatoryFields.concat(['occupation', 'age', 'quote', 'telephone', 'telephone2']);
