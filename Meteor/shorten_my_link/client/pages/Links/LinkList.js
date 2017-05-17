import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { LinkCollection } from '../../../imports/collections/links';

class LinkList extends Component {
  renderListItem(link) {
    const { url, token, clicks } = link;
    const shortLink = `http://localhost:3000/${token}`;
    return (
      <tr key={token}>
        <td>{url}</td>
        <td>
          <a href={shortLink}>{shortLink}</a>
        </td>
        <td>{clicks}</td>
      </tr>
    );
  }

  render() {
    const { links } = this.props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>URL</th>
            <th>Address</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {links.map(this.renderListItem)}
        </tbody>
      </table>
    );
  }
}

LinkList = createContainer(() => {
  Meteor.subscribe('links');
  const links = LinkCollection.find({}).fetch();
  return { links };
}, LinkList);

export default LinkList;
