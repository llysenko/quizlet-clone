import { InputType } from '@/components/input';

export const TITLE_DATA = {
  type: 'text' as InputType,
  name: 'title',
  label: '',
  placeholder: 'Enter a title, like “Biology - Chapter 22: Evolution'
};

export const DESCRIPTION_DATA = {
  name: 'description',
  placeholder: 'Add a description...'
};

export const FILTERS = {
  ALL: 'all',
  STARRED: 'starred'
};

export const ORDER = {
  ORIGINAL: 'original',
  ALPHABETICAL: 'alphabetical'
};
