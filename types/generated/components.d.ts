import type { Schema, Struct } from '@strapi/strapi';

export interface NextjsAddress extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_addresses';
  info: {
    description: '';
    displayName: 'Address';
  };
  attributes: {
    Address1: Schema.Attribute.String;
    Address2: Schema.Attribute.String;
    City: Schema.Attribute.String;
    LocationLink: Schema.Attribute.String;
    LocationName: Schema.Attribute.String;
    State: Schema.Attribute.String;
    ZipCode: Schema.Attribute.String;
  };
}

export interface NextjsDateTimePlace extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_date_time_places';
  info: {
    description: '';
    displayName: 'Date Time Place';
  };
  attributes: {
    componentId: Schema.Attribute.String;
    date: Schema.Attribute.Component<'shared.date-component', true>;
    place: Schema.Attribute.Component<'shared.place', false>;
    soldOut: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    time: Schema.Attribute.Component<'shared.name-time-component', true>;
  };
}

export interface NextjsDivisions extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_divisions';
  info: {
    displayName: 'Divisions';
  };
  attributes: {
    country: Schema.Attribute.String;
    flag: Schema.Attribute.String;
    name: Schema.Attribute.String;
    record: Schema.Attribute.String;
    title: Schema.Attribute.String;
    year: Schema.Attribute.Integer;
  };
}

export interface NextjsFaq extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface NextjsFaqComponent extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_faq_components';
  info: {
    displayName: 'FAQ Component';
  };
  attributes: {
    heading: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'nextjs.faq', true>;
  };
}

export interface NextjsMetadata extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_metadata';
  info: {
    displayName: 'Metadata';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NextjsNextImage extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_next_images';
  info: {
    description: '';
    displayName: 'nextImage';
  };
  attributes: {
    description: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    modalHeight: Schema.Attribute.Integer;
    modalWidth: Schema.Attribute.Integer;
    showModal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface NextjsOneColumnNarrow extends Struct.ComponentSchema {
  collectionName: 'components_shared_one_column_narrows';
  info: {
    description: '';
    displayName: 'OneColumnNarrow';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface NextjsPastWinner extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_past_winners';
  info: {
    displayName: 'Past Winner';
  };
  attributes: {
    division: Schema.Attribute.Component<'nextjs.divisions', true>;
    race: Schema.Attribute.String;
  };
}

export interface NextjsSimpleModalComponent extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_simple_modal_components';
  info: {
    displayName: 'Simple Modal Component';
  };
  attributes: {
    button: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface NextjsStaffDirectory extends Struct.ComponentSchema {
  collectionName: 'components_shared_staff_directories';
  info: {
    description: '';
    displayName: 'Staff directory';
  };
  attributes: {
    directory: Schema.Attribute.JSON;
  };
}

export interface NextjsTimeline extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_timelines';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    year: Schema.Attribute.Integer;
  };
}

export interface NextjsTwoColumnLayout extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_two_column_layouts';
  info: {
    description: '';
    displayName: 'Two Column Layout';
  };
  attributes: {
    background: Schema.Attribute.String;
    componentId: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    html: Schema.Attribute.RichText;
    image: Schema.Attribute.Component<'nextjs.next-image', true>;
    logoImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    shaded: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface NextjsTwoColumnPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_nextjs_two_column_page_headers';
  info: {
    description: '';
    displayName: 'Two Column Page Header';
  };
  attributes: {
    componentId: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Component<'nextjs.next-image', false>;
    logoImage: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    shaded: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedDateComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_date_components';
  info: {
    displayName: 'Date Component';
  };
  attributes: {
    date: Schema.Attribute.Date;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNameTimeComponent extends Struct.ComponentSchema {
  collectionName: 'components_shared_name_time_components';
  info: {
    displayName: 'Name Time Component';
  };
  attributes: {
    description: Schema.Attribute.String;
    endTime: Schema.Attribute.Time;
    startTime: Schema.Attribute.Time;
  };
}

export interface SharedPlace extends Struct.ComponentSchema {
  collectionName: 'components_shared_places';
  info: {
    displayName: 'Place';
  };
  attributes: {
    map: Schema.Attribute.String;
    name: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
