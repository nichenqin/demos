import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('enter some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment here');
    });

    it('shows text is entered', () => {
      expect(component.find('textarea')).to.have.value('new comment here');
    });

    it('when submitted, clears the input', () => {
      // component is the <form>HTLMElment
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });



});
