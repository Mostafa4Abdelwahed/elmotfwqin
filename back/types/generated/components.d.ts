import type { Schema, Attribute } from '@strapi/strapi';

export interface QQuestion extends Schema.Component {
  collectionName: 'components_q_questions';
  info: {
    displayName: 'question';
    description: '';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    option1: Attribute.String & Attribute.Required;
    option2: Attribute.String & Attribute.Required;
    option3: Attribute.String & Attribute.Required;
    option4: Attribute.String & Attribute.Required;
    correctAnswer: Attribute.Integer & Attribute.Required;
    image: Attribute.Media<'images'>;
    point: Attribute.Integer & Attribute.Required;
    explain: Attribute.Text & Attribute.Required;
  };
}

export interface LevelLevel extends Schema.Component {
  collectionName: 'components_level_levels';
  info: {
    displayName: 'level';
    icon: 'filter';
    description: '';
  };
  attributes: {
    secondary: Attribute.String;
  };
}

export interface AnwerAnswer extends Schema.Component {
  collectionName: 'components_anwer_answers';
  info: {
    displayName: 'answer';
  };
  attributes: {
    answer: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'q.question': QQuestion;
      'level.level': LevelLevel;
      'anwer.answer': AnwerAnswer;
    }
  }
}
