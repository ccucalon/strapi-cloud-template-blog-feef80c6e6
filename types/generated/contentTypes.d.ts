import type { Attribute, Schema } from '@strapi/strapi';

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    expiresAt: Attribute.DateTime;
    lastUsedAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Attribute.String;
    registrationToken: Attribute.String & Attribute.Private;
    resetPasswordToken: Attribute.String & Attribute.Private;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    username: Attribute.String;
  };
}

export interface ApiAllEventsPageAllEventsPage extends Schema.SingleType {
  collectionName: 'all_events_pages';
  info: {
    description: '';
    displayName: 'All Events Page';
    pluralName: 'all-events-pages';
    singularName: 'all-events-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::all-events-page.all-events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    friday: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::all-events-page.all-events-page',
      'oneToMany',
      'api::all-events-page.all-events-page'
    >;
    oncor: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    relays: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    saturday: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sunday: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::all-events-page.all-events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    weekend: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiAuthorAuthor extends Schema.CollectionType {
  collectionName: 'authors';
  info: {
    description: 'Create authors for your content';
    displayName: 'Author';
    pluralName: 'authors';
    singularName: 'author';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    avatar: Attribute.Media<'images' | 'files' | 'videos'>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.String;
    name: Attribute.String;
    phone: Attribute.String;
    press_releases: Attribute.Relation<
      'api::author.author',
      'oneToMany',
      'api::press-release.press-release'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::author.author',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCertifiedResultsRequestsPageCertifiedResultsRequestsPage
  extends Schema.SingleType {
  collectionName: 'certified_results_requests_pages';
  info: {
    displayName: 'Certified Results Requests Page';
    pluralName: 'certified-results-requests-pages';
    singularName: 'certified-results-requests-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::certified-results-requests-page.certified-results-requests-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    dates: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::certified-results-requests-page.certified-results-requests-page',
      'oneToMany',
      'api::certified-results-requests-page.certified-results-requests-page'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::certified-results-requests-page.certified-results-requests-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiContactPageContactPage extends Schema.SingleType {
  collectionName: 'contact_pages';
  info: {
    displayName: 'Contact Page';
    pluralName: 'contact-pages';
    singularName: 'contact-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToMany',
      'api::contact-page.contact-page'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::contact-page.contact-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventPartnersPageEventPartnersPage
  extends Schema.SingleType {
  collectionName: 'event_partners_pages';
  info: {
    description: '';
    displayName: 'Event Partners Page';
    pluralName: 'event-partners-pages';
    singularName: 'event-partners-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event-partners-page.event-partners-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::event-partners-page.event-partners-page',
      'oneToMany',
      'api::event-partners-page.event-partners-page'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::event-partners-page.event-partners-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFallFunRunsPageFallFunRunsPage extends Schema.SingleType {
  collectionName: 'fall_fun_runs_pages';
  info: {
    description: '';
    displayName: 'Fall Fun Runs Page';
    pluralName: 'fall-fun-runs-pages';
    singularName: 'fall-fun-runs-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    benefits: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fall-fun-runs-page.fall-fun-runs-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    dateTimePlace: Attribute.Component<'nextjs.date-time-place', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::fall-fun-runs-page.fall-fun-runs-page',
      'oneToMany',
      'api::fall-fun-runs-page.fall-fun-runs-page'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::fall-fun-runs-page.fall-fun-runs-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFinisherSClubPageFinisherSClubPage
  extends Schema.SingleType {
  collectionName: 'finisher_s_club_pages';
  info: {
    displayName: "Finisher's Club Page";
    pluralName: 'finisher-s-club-pages';
    singularName: 'finisher-s-club-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    bottom: Attribute.Component<'nextjs.one-column-narrow'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::finisher-s-club-page.finisher-s-club-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::finisher-s-club-page.finisher-s-club-page',
      'oneToMany',
      'api::finisher-s-club-page.finisher-s-club-page'
    >;
    middle: Attribute.Component<'nextjs.one-column-narrow'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    top: Attribute.Component<'nextjs.one-column-narrow'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::finisher-s-club-page.finisher-s-club-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFrequentlyAskedQuestionsPageFrequentlyAskedQuestionsPage
  extends Schema.SingleType {
  collectionName: 'frequently_asked_questions_pages';
  info: {
    description: '';
    displayName: 'Frequently Asked Questions Page';
    pluralName: 'frequently-asked-questions-pages';
    singularName: 'frequently-asked-questions-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    corral: Attribute.Component<'nextjs.faq-component'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::frequently-asked-questions-page.frequently-asked-questions-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    general: Attribute.Component<'nextjs.faq-component'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::frequently-asked-questions-page.frequently-asked-questions-page',
      'oneToMany',
      'api::frequently-asked-questions-page.frequently-asked-questions-page'
    >;
    packet: Attribute.Component<'nextjs.faq-component'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    relays: Attribute.Component<'nextjs.faq-component'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::frequently-asked-questions-page.frequently-asked-questions-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFridayNightLightsMilePageFridayNightLightsMilePage
  extends Schema.SingleType {
  collectionName: 'friday_night_lights_mile_pages';
  info: {
    description: '';
    displayName: 'Friday Night Lights Mile Page';
    pluralName: 'friday-night-lights-mile-pages';
    singularName: 'friday-night-lights-mile-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::friday-night-lights-mile-page.friday-night-lights-mile-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Component<'nextjs.date-time-place', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    divisions: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    divisionsTable: Attribute.JSON &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::friday-night-lights-mile-page.friday-night-lights-mile-page',
      'oneToMany',
      'api::friday-night-lights-mile-page.friday-night-lights-mile-page'
    >;
    participants: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    race: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::friday-night-lights-mile-page.friday-night-lights-mile-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals';
  info: {
    description: 'Define global settings';
    displayName: 'Global';
    pluralName: 'globals';
    singularName: 'global';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    defaultSeo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    favicon: Attribute.Media<'images' | 'files' | 'videos'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::global.global',
      'oneToMany',
      'api::global.global'
    >;
    siteDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    siteName: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::global.global',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHealthAndFitnessExpoHealthAndFitnessExpo
  extends Schema.SingleType {
  collectionName: 'health_and_fitness_expos';
  info: {
    displayName: 'Health and Fitness Expo';
    pluralName: 'health-and-fitness-expos';
    singularName: 'health-and-fitness-expo';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::health-and-fitness-expo.health-and-fitness-expo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Component<'nextjs.date-time-place', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::health-and-fitness-expo.health-and-fitness-expo',
      'oneToMany',
      'api::health-and-fitness-expo.health-and-fitness-expo'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::health-and-fitness-expo.health-and-fitness-expo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHistoryPageHistoryPage extends Schema.SingleType {
  collectionName: 'history_pages';
  info: {
    description: '';
    displayName: 'History Page';
    pluralName: 'history-pages';
    singularName: 'history-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::history-page.history-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    events: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::history-page.history-page',
      'oneToMany',
      'api::history-page.history-page'
    >;
    participants: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    past: Attribute.JSON &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    timeline: Attribute.Component<'nextjs.timeline', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::history-page.history-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    winners: Attribute.Component<'nextjs.past-winner', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages';
  info: {
    description: '';
    displayName: 'Homepage';
    pluralName: 'homepages';
    singularName: 'homepage';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::homepage.homepage',
      'oneToMany',
      'api::homepage.homepage'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHotelAndTravelPageHotelAndTravelPage
  extends Schema.SingleType {
  collectionName: 'hotel_and_travel_pages';
  info: {
    description: '';
    displayName: 'Hotel and Travel Page';
    pluralName: 'hotel-and-travel-pages';
    singularName: 'hotel-and-travel-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hotel-and-travel-page.hotel-and-travel-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    headquarter: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    host: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::hotel-and-travel-page.hotel-and-travel-page',
      'oneToMany',
      'api::hotel-and-travel-page.hotel-and-travel-page'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    stays: Attribute.Component<'nextjs.two-column-layout', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    travel: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::hotel-and-travel-page.hotel-and-travel-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiModalModal extends Schema.CollectionType {
  collectionName: 'modals';
  info: {
    displayName: 'Modal';
    pluralName: 'modals';
    singularName: 'modal';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::modal.modal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::modal.modal',
      'oneToMany',
      'api::modal.modal'
    >;
    modal: Attribute.Component<'nextjs.simple-modal-component'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::modal.modal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOncorKidSRacePageOncorKidSRacePage
  extends Schema.SingleType {
  collectionName: 'oncor_kid_s_race_pages';
  info: {
    description: '';
    displayName: "Oncor Kid's Race Page";
    pluralName: 'oncor-kid-s-race-pages';
    singularName: 'oncor-kid-s-race-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::oncor-kid-s-race-page.oncor-kid-s-race-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Component<'nextjs.date-time-place', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::oncor-kid-s-race-page.oncor-kid-s-race-page',
      'oneToMany',
      'api::oncor-kid-s-race-page.oncor-kid-s-race-page'
    >;
    participants: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::oncor-kid-s-race-page.oncor-kid-s-race-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiOrganizationPageOrganizationPage extends Schema.SingleType {
  collectionName: 'organization_pages';
  info: {
    description: '';
    displayName: 'Organization Page';
    pluralName: 'organization-pages';
    singularName: 'organization-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    content: Attribute.Component<'nextjs.one-column-narrow'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::organization-page.organization-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::organization-page.organization-page',
      'oneToMany',
      'api::organization-page.organization-page'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    staff: Attribute.Component<'nextjs.staff-directory'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::organization-page.organization-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPressReleasePressRelease extends Schema.CollectionType {
  collectionName: 'press_releases';
  info: {
    description: '';
    displayName: 'Press Release';
    pluralName: 'press-releases';
    singularName: 'press-release';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    author: Attribute.Relation<
      'api::press-release.press-release',
      'manyToOne',
      'api::author.author'
    >;
    blurb: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::press-release.press-release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.DateTime &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::press-release.press-release',
      'oneToMany',
      'api::press-release.press-release'
    >;
    publishedAt: Attribute.DateTime;
    release: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slug: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::press-release.press-release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPricingTablesJsonPricingTablesJson
  extends Schema.SingleType {
  collectionName: 'pricing_tables_jsons';
  info: {
    displayName: 'Pricing Tables (JSON)';
    pluralName: 'pricing-tables-jsons';
    singularName: 'pricing-tables-json';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pricing-tables-json.pricing-tables-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    pricing: Attribute.JSON;
    publishedAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::pricing-tables-json.pricing-tables-json',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRaceBeneficiaryPageRaceBeneficiaryPage
  extends Schema.SingleType {
  collectionName: 'race_beneficiary_pages';
  info: {
    description: '';
    displayName: 'Race Beneficiary Page';
    pluralName: 'race-beneficiary-pages';
    singularName: 'race-beneficiary-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    ambassador: Attribute.Component<'nextjs.two-column-layout', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    banner: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::race-beneficiary-page.race-beneficiary-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    interested: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::race-beneficiary-page.race-beneficiary-page',
      'oneToMany',
      'api::race-beneficiary-page.race-beneficiary-page'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::race-beneficiary-page.race-beneficiary-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRaceWeekendAddOnsPageRaceWeekendAddOnsPage
  extends Schema.SingleType {
  collectionName: 'race_weekend_add_ons_pages';
  info: {
    displayName: 'Race Weekend Add-Ons Page';
    pluralName: 'race-weekend-add-ons-pages';
    singularName: 'race-weekend-add-ons-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    banner: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    choctaw: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::race-weekend-add-ons-page.race-weekend-add-ons-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    itab: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::race-weekend-add-ons-page.race-weekend-add-ons-page',
      'oneToMany',
      'api::race-weekend-add-ons-page.race-weekend-add-ons-page'
    >;
    photo: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    poster: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shirts: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::race-weekend-add-ons-page.race-weekend-add-ons-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRaceWeekendInformationPageRaceWeekendInformationPage
  extends Schema.SingleType {
  collectionName: 'race_weekend_information_pages';
  info: {
    description: '';
    displayName: 'Race Weekend Information Page';
    pluralName: 'race-weekend-information-pages';
    singularName: 'race-weekend-information-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    aid: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::race-weekend-information-page.race-weekend-information-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    faq: Attribute.Component<'nextjs.faq-component'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    gear: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    information: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::race-weekend-information-page.race-weekend-information-page',
      'oneToMany',
      'api::race-weekend-information-page.race-weekend-information-page'
    >;
    pace: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    packet: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    parking: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ucan: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::race-weekend-information-page.race-weekend-information-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRunningAndWalkingClubsPageRunningAndWalkingClubsPage
  extends Schema.SingleType {
  collectionName: 'running_and_walking_clubs_pages';
  info: {
    description: '';
    displayName: 'Running and Walking Clubs Page';
    pluralName: 'running-and-walking-clubs-pages';
    singularName: 'running-and-walking-clubs-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    banner: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    clubs: Attribute.Component<'nextjs.two-column-layout', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::running-and-walking-clubs-page.running-and-walking-clubs-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::running-and-walking-clubs-page.running-and-walking-clubs-page',
      'oneToMany',
      'api::running-and-walking-clubs-page.running-and-walking-clubs-page'
    >;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::running-and-walking-clubs-page.running-and-walking-clubs-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRunningClubEventRunningClubEvent
  extends Schema.CollectionType {
  collectionName: 'running_club_events';
  info: {
    description: '';
    displayName: 'Running Club Event';
    pluralName: 'running-club-events';
    singularName: 'running-club-event';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    Address: Attribute.Component<'nextjs.address'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::running-club-event.running-club-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Date: Attribute.DateTime &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Link: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::running-club-event.running-club-event',
      'oneToMany',
      'api::running-club-event.running-club-event'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    running_club: Attribute.Relation<
      'api::running-club-event.running-club-event',
      'manyToOne',
      'api::running-club.running-club'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::running-club-event.running-club-event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRunningClubRunningClub extends Schema.CollectionType {
  collectionName: 'running_clubs';
  info: {
    description: '';
    displayName: 'Running Club';
    pluralName: 'running-clubs';
    singularName: 'running-club';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    clubId: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::running-club.running-club',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Description: Attribute.RichText &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Image: Attribute.Component<'nextjs.next-image', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::running-club.running-club',
      'oneToMany',
      'api::running-club.running-club'
    >;
    Name: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    running_club_events: Attribute.Relation<
      'api::running-club.running-club',
      'oneToMany',
      'api::running-club-event.running-club-event'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::running-club.running-club',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    Website: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiSaturdayEventsPageSaturdayEventsPage
  extends Schema.SingleType {
  collectionName: 'saturday_events_pages';
  info: {
    displayName: 'Saturday Events Page';
    pluralName: 'saturday-events-pages';
    singularName: 'saturday-events-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    awards: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    choctaw: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::saturday-events-page.saturday-events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Component<'nextjs.date-time-place', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    events: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    itab: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::saturday-events-page.saturday-events-page',
      'oneToMany',
      'api::saturday-events-page.saturday-events-page'
    >;
    participants: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    rules: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::saturday-events-page.saturday-events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSundayEventsPageSundayEventsPage extends Schema.SingleType {
  collectionName: 'sunday_events_pages';
  info: {
    description: '';
    displayName: 'Sunday Events Page';
    pluralName: 'sunday-events-pages';
    singularName: 'sunday-events-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    awards: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    choctaw: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sunday-events-page.sunday-events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Component<'nextjs.date-time-place', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    elite: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    itab: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    legacy: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::sunday-events-page.sunday-events-page',
      'oneToMany',
      'api::sunday-events-page.sunday-events-page'
    >;
    participant: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    rcca: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rules: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::sunday-events-page.sunday-events-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSundayRelaysPageSundayRelaysPage extends Schema.SingleType {
  collectionName: 'sunday_relays_pages';
  info: {
    displayName: 'Sunday Relays Page';
    pluralName: 'sunday-relays-pages';
    singularName: 'sunday-relays-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sunday-relays-page.sunday-relays-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Component<'nextjs.date-time-place', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::sunday-relays-page.sunday-relays-page',
      'oneToMany',
      'api::sunday-relays-page.sunday-relays-page'
    >;
    participants: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    relay: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rules: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::sunday-relays-page.sunday-relays-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTrainingTipsPageTrainingTipsPage extends Schema.SingleType {
  collectionName: 'training_tips_pages';
  info: {
    displayName: 'Training Tips Page';
    pluralName: 'training-tips-pages';
    singularName: 'training-tips-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::training-tips-page.training-tips-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::training-tips-page.training-tips-page',
      'oneToMany',
      'api::training-tips-page.training-tips-page'
    >;
    pain: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    shoe: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    started: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    training: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::training-tips-page.training-tips-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWeekendSeriesPageWeekendSeriesPage
  extends Schema.SingleType {
  collectionName: 'weekend_series_pages';
  info: {
    description: '';
    displayName: 'Weekend Series Page';
    pluralName: 'weekend-series-pages';
    singularName: 'weekend-series-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    choctaw: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::weekend-series-page.weekend-series-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    date: Attribute.Component<'nextjs.date-time-place', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    hero: Attribute.Component<'nextjs.two-column-page-header'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Attribute.String;
    localizations: Attribute.Relation<
      'api::weekend-series-page.weekend-series-page',
      'oneToMany',
      'api::weekend-series-page.weekend-series-page'
    >;
    participants: Attribute.Component<'nextjs.two-column-layout'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Attribute.DateTime;
    seo: Attribute.Component<'nextjs.metadata'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'api::weekend-series-page.weekend-series-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    timezone: Attribute.String;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    isEntryValid: Attribute.Boolean;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Attribute.String;
    caption: Attribute.String;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    ext: Attribute.String;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    height: Attribute.Integer;
    mime: Attribute.String & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    size: Attribute.Decimal & Attribute.Required;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    url: Attribute.String & Attribute.Required;
    width: Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    description: Attribute.String;
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    type: Attribute.String & Attribute.Unique;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    resetPasswordToken: Attribute.String & Attribute.Private;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Attribute.DateTime;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::all-events-page.all-events-page': ApiAllEventsPageAllEventsPage;
      'api::author.author': ApiAuthorAuthor;
      'api::certified-results-requests-page.certified-results-requests-page': ApiCertifiedResultsRequestsPageCertifiedResultsRequestsPage;
      'api::contact-page.contact-page': ApiContactPageContactPage;
      'api::event-partners-page.event-partners-page': ApiEventPartnersPageEventPartnersPage;
      'api::fall-fun-runs-page.fall-fun-runs-page': ApiFallFunRunsPageFallFunRunsPage;
      'api::finisher-s-club-page.finisher-s-club-page': ApiFinisherSClubPageFinisherSClubPage;
      'api::frequently-asked-questions-page.frequently-asked-questions-page': ApiFrequentlyAskedQuestionsPageFrequentlyAskedQuestionsPage;
      'api::friday-night-lights-mile-page.friday-night-lights-mile-page': ApiFridayNightLightsMilePageFridayNightLightsMilePage;
      'api::global.global': ApiGlobalGlobal;
      'api::health-and-fitness-expo.health-and-fitness-expo': ApiHealthAndFitnessExpoHealthAndFitnessExpo;
      'api::history-page.history-page': ApiHistoryPageHistoryPage;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::hotel-and-travel-page.hotel-and-travel-page': ApiHotelAndTravelPageHotelAndTravelPage;
      'api::modal.modal': ApiModalModal;
      'api::oncor-kid-s-race-page.oncor-kid-s-race-page': ApiOncorKidSRacePageOncorKidSRacePage;
      'api::organization-page.organization-page': ApiOrganizationPageOrganizationPage;
      'api::press-release.press-release': ApiPressReleasePressRelease;
      'api::pricing-tables-json.pricing-tables-json': ApiPricingTablesJsonPricingTablesJson;
      'api::race-beneficiary-page.race-beneficiary-page': ApiRaceBeneficiaryPageRaceBeneficiaryPage;
      'api::race-weekend-add-ons-page.race-weekend-add-ons-page': ApiRaceWeekendAddOnsPageRaceWeekendAddOnsPage;
      'api::race-weekend-information-page.race-weekend-information-page': ApiRaceWeekendInformationPageRaceWeekendInformationPage;
      'api::running-and-walking-clubs-page.running-and-walking-clubs-page': ApiRunningAndWalkingClubsPageRunningAndWalkingClubsPage;
      'api::running-club-event.running-club-event': ApiRunningClubEventRunningClubEvent;
      'api::running-club.running-club': ApiRunningClubRunningClub;
      'api::saturday-events-page.saturday-events-page': ApiSaturdayEventsPageSaturdayEventsPage;
      'api::sunday-events-page.sunday-events-page': ApiSundayEventsPageSundayEventsPage;
      'api::sunday-relays-page.sunday-relays-page': ApiSundayRelaysPageSundayRelaysPage;
      'api::training-tips-page.training-tips-page': ApiTrainingTipsPageTrainingTipsPage;
      'api::weekend-series-page.weekend-series-page': ApiWeekendSeriesPageWeekendSeriesPage;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
