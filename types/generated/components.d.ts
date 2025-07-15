import type { Attribute, Schema } from '@strapi/strapi';

export interface NextjsAddress extends Schema.Component {
  collectionName: 'components_nextjs_addresses';
  info: {
    description: '';
    displayName: 'Address';
  };
  attributes: {
    Address1: Attribute.String;
    Address2: Attribute.String;
    City: Attribute.String;
    LocationLink: Attribute.String;
    LocationName: Attribute.String;
    State: Attribute.String;
    ZipCode: Attribute.String;
  };
}

export interface NextjsDateTimePlace extends Schema.Component {
  collectionName: 'components_nextjs_date_time_places';
  info: {
    description: '';
    displayName: 'Date Time Place';
  };
  attributes: {
    componentId: Attribute.String;
    date: Attribute.Component<'shared.date-component', true>;
    place: Attribute.Component<'shared.place'>;
    soldOut: Attribute.Boolean & Attribute.DefaultTo<false>;
    time: Attribute.Component<'shared.name-time-component', true>;
  };
}

export interface NextjsDivisions extends Schema.Component {
  collectionName: 'components_nextjs_divisions';
  info: {
    displayName: 'Divisions';
  };
  attributes: {
    country: Attribute.String;
    flag: Attribute.String;
    name: Attribute.String;
    record: Attribute.String;
    title: Attribute.String;
    year: Attribute.Integer;
  };
}

export interface NextjsFaq extends Schema.Component {
  collectionName: 'components_nextjs_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Attribute.RichText;
    question: Attribute.String;
  };
}

export interface NextjsFaqComponent extends Schema.Component {
  collectionName: 'components_nextjs_faq_components';
  info: {
    displayName: 'FAQ Component';
  };
  attributes: {
    heading: Attribute.String;
    questions: Attribute.Component<'nextjs.faq', true>;
  };
}

export interface NextjsMetadata extends Schema.Component {
  collectionName: 'components_nextjs_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface NextjsNextImage extends Schema.Component {
  collectionName: 'components_nextjs_next_images';
  info: {
    description: '';
    displayName: 'nextImage';
  };
  attributes: {
    description: Attribute.String;
    height: Attribute.Integer;
    modalHeight: Attribute.Integer;
    modalWidth: Attribute.Integer;
    showModal: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface NextjsOneColumnNarrow extends Schema.Component {
  collectionName: 'components_shared_one_column_narrows';
  info: {
    description: '';
    displayName: 'OneColumnNarrow';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface NextjsPastWinner extends Schema.Component {
  collectionName: 'components_nextjs_past_winners';
  info: {
    displayName: 'Past Winner';
  };
  attributes: {
    division: Attribute.Component<'nextjs.divisions', true>;
    race: Attribute.String;
  };
}

export interface NextjsSimpleModalComponent extends Schema.Component {
  collectionName: 'components_nextjs_simple_modal_components';
  info: {
    displayName: 'Simple Modal Component';
  };
  attributes: {
    button: Attribute.String;
    content: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface NextjsStaffDirectory extends Schema.Component {
  collectionName: 'components_shared_staff_directories';
  info: {
    description: '';
    displayName: 'Staff directory';
  };
  attributes: {
    directory: Attribute.JSON;
  };
}

export interface NextjsTimeline extends Schema.Component {
  collectionName: 'components_nextjs_timelines';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    description: Attribute.RichText;
    year: Attribute.Integer;
  };
}

export interface NextjsTwoColumnLayout extends Schema.Component {
  collectionName: 'components_nextjs_two_column_layouts';
  info: {
    description: '';
    displayName: 'Two Column Layout';
  };
  attributes: {
    background: Attribute.String;
    componentId: Attribute.String;
    content: Attribute.RichText;
    html: Attribute.RichText;
    image: Attribute.Component<'nextjs.next-image', true>;
    logoImage: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverse: Attribute.Boolean & Attribute.DefaultTo<false>;
    shaded: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface NextjsTwoColumnPageHeader extends Schema.Component {
  collectionName: 'components_nextjs_two_column_page_headers';
  info: {
    description: '';
    displayName: 'Two Column Page Header';
  };
  attributes: {
    componentId: Attribute.String;
    content: Attribute.RichText;
    image: Attribute.Component<'nextjs.next-image'>;
    logoImage: Attribute.Boolean & Attribute.DefaultTo<false>;
    shaded: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedDateComponent extends Schema.Component {
  collectionName: 'components_shared_date_components';
  info: {
    displayName: 'Date Component';
  };
  attributes: {
    date: Attribute.Date;
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

export interface SharedNameTimeComponent extends Schema.Component {
  collectionName: 'components_shared_name_time_components';
  info: {
    displayName: 'Name Time Component';
  };
  attributes: {
    description: Attribute.String;
    endTime: Attribute.Time;
    startTime: Attribute.Time;
  };
}

export interface SharedPlace extends Schema.Component {
  collectionName: 'components_shared_places';
  info: {
    displayName: 'Place';
  };
  attributes: {
    map: Attribute.String;
    name: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'nextjs.address': NextjsAddress;
      'nextjs.date-time-place': NextjsDateTimePlace;
      'nextjs.divisions': NextjsDivisions;
      'nextjs.faq': NextjsFaq;
      'nextjs.faq-component': NextjsFaqComponent;
      'nextjs.metadata': NextjsMetadata;
      'nextjs.next-image': NextjsNextImage;
      'nextjs.one-column-narrow': NextjsOneColumnNarrow;
      'nextjs.past-winner': NextjsPastWinner;
      'nextjs.simple-modal-component': NextjsSimpleModalComponent;
      'nextjs.staff-directory': NextjsStaffDirectory;
      'nextjs.timeline': NextjsTimeline;
      'nextjs.two-column-layout': NextjsTwoColumnLayout;
      'nextjs.two-column-page-header': NextjsTwoColumnPageHeader;
      'shared.date-component': SharedDateComponent;
      'shared.media': SharedMedia;
      'shared.name-time-component': SharedNameTimeComponent;
      'shared.place': SharedPlace;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
