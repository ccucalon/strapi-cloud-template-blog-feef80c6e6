import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface NextjsTwoColumnPageHeader extends Schema.Component {
  collectionName: 'components_nextjs_two_column_page_headers';
  info: {
    displayName: 'Two Column Page Header';
  };
  attributes: {
    componentId: Attribute.String;
    logoImage: Attribute.Boolean & Attribute.DefaultTo<false>;
    image: Attribute.Component<'nextjs.next-image', true>;
    shaded: Attribute.Boolean & Attribute.DefaultTo<false>;
    content: Attribute.RichText;
  };
}

export interface NextjsTwoColumnLayout extends Schema.Component {
  collectionName: 'components_nextjs_two_column_layouts';
  info: {
    displayName: 'Two Column Layout';
    description: '';
  };
  attributes: {
    componentId: Attribute.String;
    logoImage: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverse: Attribute.Boolean & Attribute.DefaultTo<false>;
    shaded: Attribute.Boolean & Attribute.DefaultTo<false>;
    background: Attribute.String;
    image: Attribute.Component<'nextjs.next-image', true>;
    html: Attribute.RichText;
    content: Attribute.RichText;
  };
}

export interface NextjsStaffDirectory extends Schema.Component {
  collectionName: 'components_shared_staff_directories';
  info: {
    displayName: 'Staff directory';
    description: '';
  };
  attributes: {
    directory: Attribute.JSON;
  };
}

export interface NextjsOneColumnNarrow extends Schema.Component {
  collectionName: 'components_shared_one_column_narrows';
  info: {
    displayName: 'OneColumnNarrow';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface NextjsNextImage extends Schema.Component {
  collectionName: 'components_nextjs_next_images';
  info: {
    displayName: 'nextImage';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    description: Attribute.String;
    height: Attribute.Integer;
    width: Attribute.Integer;
    showModal: Attribute.Boolean & Attribute.DefaultTo<false>;
    modalWidth: Attribute.Integer;
    modalHeight: Attribute.Integer;
  };
}

export interface NextjsMetadata extends Schema.Component {
  collectionName: 'components_nextjs_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'nextjs.two-column-page-header': NextjsTwoColumnPageHeader;
      'nextjs.two-column-layout': NextjsTwoColumnLayout;
      'nextjs.staff-directory': NextjsStaffDirectory;
      'nextjs.one-column-narrow': NextjsOneColumnNarrow;
      'nextjs.next-image': NextjsNextImage;
      'nextjs.metadata': NextjsMetadata;
    }
  }
}
