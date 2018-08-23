export function customTranslate(string) {
  switch (string) {
    case 'address_import_schema_select':
      return 'Map your fields';
    case 'address_import_schema_help':
      return 'Select what headers and values of the CSV match.';
    case 'address_import_schema_name':
      return 'Preset name';
    case 'address_home_newpasswordrequested_title':
      return 'success';
    default:
      return string;
  }
}

export const returnInput = str => str;
