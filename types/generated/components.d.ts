import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductSectionsImageGallery extends Schema.Component {
  collectionName: 'components_product_sections_image_galleries';
  info: {
    displayName: 'Image Gallery';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Images: Attribute.Media;
  };
}

export interface ProductSectionsLeftMediaRightText extends Schema.Component {
  collectionName: 'components_product_sections_left_media_right_texts';
  info: {
    displayName: 'Left Media | Right Text';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
    Text: Attribute.Blocks & Attribute.Required;
  };
}

export interface ProductSectionsLeftTextRightImage extends Schema.Component {
  collectionName: 'components_product_sections_left_text_right_images';
  info: {
    displayName: 'Left Text | Right Image';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    Text: Attribute.Blocks & Attribute.Required;
    Media: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product-sections.image-gallery': ProductSectionsImageGallery;
      'product-sections.left-media-right-text': ProductSectionsLeftMediaRightText;
      'product-sections.left-text-right-image': ProductSectionsLeftTextRightImage;
    }
  }
}
