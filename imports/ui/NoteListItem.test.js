import React from 'react';
import expect from 'expect';
import { Meteor } from 'meteor/meteor';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if(Meteor.isClient) {
  describe('NoteListItem', function () {

    it('should render title and timestamp', function () {
      const title = 'my title';
      const updatedAt = 1498134067234; // 6/22/17
      const wrapper = mount( <NoteListItem note={{title, updatedAt}}/> );

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('6/22/17');
    }); // it

    it('should set default title if no title set', function () {
      const title = '';
      const updatedAt = 1498134067234; // 6/22/17
      const wrapper = mount( <NoteListItem note={{title, updatedAt}}/> );

      expect(wrapper.find('h5').text()).toBe('Untitled note');
    }); //it
  }); //describe
}
