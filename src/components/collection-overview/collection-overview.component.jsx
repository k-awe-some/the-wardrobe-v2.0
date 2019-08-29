import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
  <div>
    {collections.map(collection => (
      <div key={collection.id}>
        <CollectionPreview
          title={collection.title.toUpperCase()}
          items={collection.items}
          routeName={collection.routeName}
        />
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
