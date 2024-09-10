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

export interface SharedPlace extends Schema.Component {
  collectionName: 'components_shared_places';
  info: {
    displayName: 'Place';
  };
  attributes: {
    name: Attribute.RichText;
    map: Attribute.String;
  };
}

export interface SharedNameTimeComponent extends Schema.Component {
  collectionName: 'components_shared_name_time_components';
  info: {
    displayName: 'Name Time Component';
  };
  attributes: {
    description: Attribute.String;
    startTime: Attribute.Time;
    endTime: Attribute.Time;
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

export interface SharedDateComponent extends Schema.Component {
  collectionName: 'components_shared_date_components';
  info: {
    displayName: 'Date Component';
  };
  attributes: {
    date: Attribute.Date;
  };
}

export interface NextjsTwoColumnPageHeader extends Schema.Component {
  collectionName: 'components_nextjs_two_column_page_headers';
  info: {
    displayName: 'Two Column Page Header';
    description: '';
  };
  attributes: {
    componentId: Attribute.String;
    logoImage: Attribute.Boolean & Attribute.DefaultTo<false>;
    image: Attribute.Component<'nextjs.next-image'>;
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

export interface NextjsTimeline extends Schema.Component {
  collectionName: 'components_nextjs_timelines';
  info: {
    displayName: 'timeline';
  };
  attributes: {
    year: Attribute.Integer;
    description: Attribute.RichText;
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

export interface NextjsSimpleModalComponent extends Schema.Component {
  collectionName: 'components_nextjs_simple_modal_components';
  info: {
    displayName: 'Simple Modal Component';
  };
  attributes: {
    title: Attribute.String;
    button: Attribute.String;
    content: Attribute.RichText;
  };
}

export interface NextjsPastWinner extends Schema.Component {
  collectionName: 'components_nextjs_past_winners';
  info: {
    displayName: 'Past Winner';
  };
  attributes: {
    race: Attribute.String;
    division: Attribute.Component<'nextjs.divisions', true>;
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

export interface NextjsFaq extends Schema.Component {
  collectionName: 'components_nextjs_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText;
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

export interface NextjsDivisions extends Schema.Component {
  collectionName: 'components_nextjs_divisions';
  info: {
    displayName: 'Divisions';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.String;
    record: Attribute.String;
    country: Attribute.String;
    year: Attribute.Integer;
    flag: Attribute.String;
  };
}

export interface NextjsDateTimePlace extends Schema.Component {
  collectionName: 'components_nextjs_date_time_places';
  info: {
    displayName: 'Date Time Place';
    description: '';
  };
  attributes: {
    componentId: Attribute.String;
    date: Attribute.Component<'shared.date-component', true>;
    time: Attribute.Component<'shared.name-time-component', true>;
    place: Attribute.Component<'shared.place'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.place': SharedPlace;
      'shared.name-time-component': SharedNameTimeComponent;
      'shared.media': SharedMedia;
      'shared.date-component': SharedDateComponent;
      'nextjs.two-column-page-header': NextjsTwoColumnPageHeader;
      'nextjs.two-column-layout': NextjsTwoColumnLayout;
      'nextjs.timeline': NextjsTimeline;
      'nextjs.staff-directory': NextjsStaffDirectory;
      'nextjs.simple-modal-component': NextjsSimpleModalComponent;
      'nextjs.past-winner': NextjsPastWinner;
      'nextjs.one-column-narrow': NextjsOneColumnNarrow;
      'nextjs.next-image': NextjsNextImage;
      'nextjs.metadata': NextjsMetadata;
      'nextjs.faq': NextjsFaq;
      'nextjs.faq-component': NextjsFaqComponent;
      'nextjs.divisions': NextjsDivisions;
      'nextjs.date-time-place': NextjsDateTimePlace;
    }
  }
}
